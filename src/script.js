import getSamplePrompts, { model } from "./mainmodule.js";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const promptElements = document.querySelectorAll(".chat-prompt");
const promptsContainer = document.querySelector(".prompts-container");

document.addEventListener("DOMContentLoaded", async () => {
  await getSamplePrompts();

  // Add an event listener to each paragraph element
  promptElements.forEach((promptElement, index) => {
    promptElement.classList.remove("skeleton");
    promptElement.addEventListener("click", () => {
      // Define the action to be taken when the paragraph is clicked
      // You can add any additional actions here, such as highlighting the prompt or displaying more details
      sendDefinedPrompt(promptElement.innerText);
    });
  });
});

document.addEventListener("keydown", function (event) {
  if (document.activeElement !== chatInput) {
    event.preventDefault();
    chatInput.focus();
  } else {
    if (event.key === "Enter") {
      if (chatInput.value.length !== 0 && !event.shiftKey) {
        event.preventDefault();
        chatInput.value = chatInput.value.replace(/\r?\n|\r/g, ""); // Remove line breaks
        APIHandler(); // Call APIHandler on 'Enter'
      }
    }
  }
});

// Modify getChatResponse to accept a parameter
const getChatResponse = async (userText) => {
  const responseBubble = document.createElement("div");
  responseBubble.classList.add("response-content");
  responseBubble.innerHTML = `      
    <div class="response-inner-body">
      <div class="response-text skeleton">Thinking...</div>
    </div>`;
  const pEle = document.createElement("p");
  chatContainer.appendChild(responseBubble);
  chatContainer.scrollTo({
    top: chatContainer.scrollHeight,
    behavior: "smooth",
  });

  try {
    const result = await model.generateContent(userText); // Use the provided userText
    const response = await result.response.text();
    pEle.textContent = response.trim();
  } catch (error) {
    pEle.classList.add("error");
    pEle.textContent = "Error: " + error; // Changed the error message for clarity
  }
  responseBubble.querySelector(".response-text").classList.remove("skeleton");
  responseBubble.querySelector(".response-text").innerHTML = marked.parse(
    pEle.textContent
  );
};

const APIHandler = async () => {
  promptsContainer.style.display = "none";
  const userText = chatInput.value.trim(); // Get trimmed user input
  if (!userText) return; // Exit if no input

  // Create a chat bubble for the user input
  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat-content");
  chatBubble.innerHTML = `<div class="chat-inner-body">
            <p class="user-text">${userText}</p>
    </div>`;
  chatContainer.appendChild(chatBubble);
  chatContainer.scrollTo({
    top: chatContainer.scrollHeight,
    behavior: "smooth",
  });

  // Call getChatResponse with userText
  getChatResponse(userText);
  chatInput.value = ""; // Clear the chat input
};

function sendDefinedPrompt(thePrompt) {
  const userText = thePrompt; // thePrompt is passed directly from the clicked prompt
  if (!userText) return;

  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat-content");
  chatBubble.innerHTML = `<div class="chat-inner-body">
            <p class="user-text">${userText}</p>
    </div>`;
  chatContainer.appendChild(chatBubble);
  chatContainer.scrollTo({
    top: chatContainer.scrollHeight,
    behavior: "smooth",
  });
  // Call getChatResponse with userText instead of chatInput.value

  // Clear chat input and create chat bubble for defined prompt
  chatInput.value = ""; // Clear the input field if necessary

  promptsContainer.style.display = "none";
  // Call getChatResponse with userText instead of chatInput.value
  getChatResponse(userText);

  // Clear chat input and create chat bubble for defined prompt
  chatInput.value = ""; // Clear the input field if necessary
}

sendButton.addEventListener("click", APIHandler);
