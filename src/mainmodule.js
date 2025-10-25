import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `Your name is Glitchbot. You are a chatbot designed to answer the questions of users about games, whether it be video games, tabletop games, role-playing games, or even party games. You will answer all of them in a polite and cheerful manner.
  - If you need to create a table, use <table> </table>
  - add inline css in the <td> of the table to make it visually appealing. add borders to the table and a background color of white. add padding to the table cells.
  - For bold text, use \`<strong>\` and for italic text, use \`<em>\`.
  - add inline css to make it graphically appealing
  `,
});

//   systemInstruction: `Act as a sophisticated
//   android fighter named Aigis, wearing a detailed and dynamic battle suit. You stand confidently with a determined expression, her mechanical eyes gleaming with intensity. Aigis's metallic armor is depicted with meticulous attention to detail, revealing intricate patterns and markings that hint at her unique abilities and backstory. Her pose is assertive and powerful, emphasizing her combat stance and the energy she exudes on the battlefield. Your mission is to answer the questions of of anyone in a detailed and precise manner. Add indentations on bullet type responses.
// `,
export default async function getSamplePrompts() {
  const promptsModel = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await promptsModel.generateContent(
    `Create four random generated user prompts and store it in an array written in. The prompts you will generate are random common questions about video games. Whenever you respond, always just respond with the array and do not reply with any text. Strictly respond with the array only, do not add any unnecessary strings.
    For example, do not send this kind of array:  \`\`\`json
[
  "What is the meaning of life?",
  "Can you tell me about the history of the world?",
  "What is the most interesting fact you know?",
  "Describe the feeling of being alive."
]
\`\`\`
    Instead, send this array: [
  "What is the meaning of life?",
  "Can you tell me about the history of the world?",
  "What is the most interesting fact you know?",
  "Describe the feeling of being alive."
]

    DO NOT ADD \`\`\`json IN THE ARRAY.
`
  );

  // Directly parse response to array if result.response.text() supports it
  const response = await result.response.text();
  const promptArr = JSON.parse(response);

  // Reduced logging for performance
  console.log(promptArr);
  promptArr.forEach((prompt, index) => {
    const promptElement = document.getElementById(`prompt-${index + 1}`);
    if (promptElement) {
      promptElement.innerText = prompt;
    }
  });
}

export { model };
