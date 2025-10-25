import{marked as nt}from"https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var w;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(w||(w={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(N||(N={}));var M;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(M||(M={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=["user","model","function","system"];var D;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(D||(D={}));var x;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(x||(x={}));var G;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(G||(G={}));var H;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(H||(H={}));var I;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(I||(I={}));var U;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(U||(U={}));var F;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(F||(F={}));var $;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})($||($={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class O extends u{constructor(e,n){super(e),this.response=n}}class V extends u{constructor(e,n,o,s){super(e),this.status=n,this.statusText=o,this.errorDetails=s}}class C extends u{}class W extends u{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="https://generativelanguage.googleapis.com",st="v1beta",it="0.24.1",rt="genai-js";var _;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(_||(_={}));class at{constructor(e,n,o,s,i){this.model=e,this.task=n,this.apiKey=o,this.stream=s,this.requestOptions=i}toString(){var e,n;const o=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||st;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ot}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function ct(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${rt}/${it}`),e.join(" ")}async function lt(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",ct(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new C(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,i]of o.entries()){if(s==="x-goog-api-key")throw new C(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new C(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function dt(t,e,n,o,s,i){const r=new at(t,e,n,o,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},gt(i)),{method:"POST",headers:await lt(r),body:s})}}async function S(t,e,n,o,s,i={},r=fetch){const{url:a,fetchOptions:l}=await dt(t,e,n,o,s,i);return ut(a,l,r)}async function ut(t,e,n=fetch){let o;try{o=await n(t,e)}catch(s){ft(s,t)}return o.ok||await ht(o,t),o}function ft(t,e){let n=t;throw n.name==="AbortError"?(n=new W(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof V||t instanceof C||(n=new u(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function ht(t,e){let n="",o;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new V(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,o)}function gt(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),b(t.candidates[0]))throw new O(`${p(t)}`,t);return Et(t)}else if(t.promptFeedback)throw new O(`Text not available. ${p(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),b(t.candidates[0]))throw new O(`${p(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),j(t)[0]}else if(t.promptFeedback)throw new O(`Function call not available. ${p(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),b(t.candidates[0]))throw new O(`${p(t)}`,t);return j(t)}else if(t.promptFeedback)throw new O(`Function call not available. ${p(t)}`,t)},t}function Et(t){var e,n,o,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=t.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function j(t){var e,n,o,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=t.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const pt=[I.RECITATION,I.SAFETY,I.LANGUAGE];function b(t){return!!t.finishReason&&pt.includes(t.finishReason)}function p(t){var e,n,o;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((o=t.candidates)===null||o===void 0)&&o[0]){const i=t.candidates[0];b(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function R(t){return this instanceof R?(this.v=t,this):new R(t)}function Ct(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(t,e||[]),s,i=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(d){o[d]&&(s[d]=function(c){return new Promise(function(f,y){i.push([d,c,f,y])>1||a(d,c)})})}function a(d,c){try{l(o[d](c))}catch(f){v(i[0][3],f)}}function l(d){d.value instanceof R?Promise.resolve(d.value.v).then(h,m):v(i[0][2],d)}function h(d){a("next",d)}function m(d){a("throw",d)}function v(d,c){d(c),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function _t(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=yt(e),[o,s]=n.tee();return{stream:vt(o),response:mt(s)}}async function mt(t){const e=[],n=t.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return T(Ot(e));e.push(s)}}function vt(t){return Ct(this,arguments,function*(){const n=t.getReader();for(;;){const{value:o,done:s}=yield R(n.read());if(s)break;yield yield R(T(o))}})}function yt(t){const e=t.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return e.read().then(({value:r,done:a})=>{if(a){if(s.trim()){o.error(new u("Failed to parse stream"));return}o.close();return}s+=r;let l=s.match(k),h;for(;l;){try{h=JSON.parse(l[1])}catch{o.error(new u(`Error parsing JSON response: "${l[1]}"`));return}o.enqueue(h),s=s.substring(l[0].length),l=s.match(k)}return i()}).catch(r=>{let a=r;throw a.stack=r.stack,a.name==="AbortError"?a=new W("Request aborted when reading from the stream"):a=new u("Error reading from the stream"),a})}}})}function Ot(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const o of t){if(o.candidates){let s=0;for(const i of o.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const r={};for(const a of i.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[s].content.parts.push(r)}s++}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n,o){const s=await S(e,_.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o);return _t(s)}async function X(t,e,n,o){const i=await(await S(e,_.GENERATE_CONTENT,t,!1,JSON.stringify(n),o)).json();return{response:T(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function A(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return It(e)}function It(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),o=!0);if(o&&s)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new u("No content is provided for sending chat message.");return o?e:n}function Rt(t,e){var n;let o={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new C("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{const i=A(t);o.contents=[i]}return{generateContentRequest:o}}function Y(t){let e;return t.contents?e=t:e={contents:[A(t)]},t.systemInstruction&&(e.systemInstruction=Q(t.systemInstruction)),e}function At(t){return typeof t=="string"||Array.isArray(t)?{content:A(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],St={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function bt(t){let e=!1;for(const n of t){const{role:o,parts:s}=n;if(!e&&o!=="user")throw new u(`First content should be with role 'user', got ${o}`);if(!L.includes(o))throw new u(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(L)}`);if(!Array.isArray(s))throw new u("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of s)for(const l of K)l in a&&(i[l]+=1);const r=St[o];for(const a of K)if(!r.includes(a)&&i[a]>0)throw new u(`Content with role '${o}' can't contain '${a}' part`);e=!0}}function B(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const o of n.parts)if(o===void 0||Object.keys(o).length===0||o.text!==void 0&&o.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="SILENT_ERROR";class Tt{constructor(e,n,o,s={}){this.model=n,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,o!=null&&o.history&&(bt(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var o,s,i,r,a,l;await this._sendPromise;const h=A(e),m={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},v=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>X(this._apiKey,this.model,m,v)).then(c=>{var f;if(B(c.response)){this._history.push(h);const y=Object.assign({parts:[],role:"model"},(f=c.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(y)}else{const y=p(c.response);y&&console.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}d=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,d}async sendMessageStream(e,n={}){var o,s,i,r,a,l;await this._sendPromise;const h=A(e),m={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},v=Object.assign(Object.assign({},this._requestOptions),n),d=J(this._apiKey,this.model,m,v);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(q)}).then(c=>c.response).then(c=>{if(B(c)){this._history.push(h);const f=Object.assign({},c.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=p(c);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(c=>{c.message!==q&&console.error(c)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t,e,n,o){return(await S(e,_.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e,n,o){return(await S(e,_.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}async function Mt(t,e,n,o){const s=n.requests.map(r=>Object.assign(Object.assign({},r),{model:e}));return(await S(e,_.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,n,o={}){this.apiKey=e,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Q(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var o;const s=Y(e),i=Object.assign(Object.assign({},this._requestOptions),n);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}async generateContentStream(e,n={}){var o;const s=Y(e),i=Object.assign(Object.assign({},this._requestOptions),n);return J(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}startChat(e){var n;return new Tt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const o=Rt(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return wt(this.apiKey,this.model,o,s)}async embedContent(e,n={}){const o=At(e),s=Object.assign(Object.assign({},this._requestOptions),n);return Nt(this.apiKey,this.model,o,s)}async batchEmbedContents(e,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return Mt(this.apiKey,this.model,e,o)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new P(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,o){if(!e.name)throw new C("Cached content must contain a `name` field.");if(!e.model)throw new C("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const r of s)if(n!=null&&n[r]&&e[r]&&(n==null?void 0:n[r])!==e[r]){if(r==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===l)continue}throw new C(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${e[r]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new P(this.apiKey,i,o)}}const Dt="AIzaSyDUb46rtkkHWte6hcg9n_M15fcnRDCpwjg",z=new Lt(Dt),xt=z.getGenerativeModel({model:"gemini-2.5-flash",systemInstruction:`Your name is Glitchbot. You are a chatbot designed to answer the questions of users about games, whether it be video games, tabletop games, role-playing games, or even party games. You will answer all of them in a polite and cheerful manner.
  - If you need to create a table, use <table> </table>
  - add inline css in the <td> of the table to make it visually appealing. add borders to the table and a background color of white. add padding to the table cells.
  - For bold text, use \`<strong>\` and for italic text, use \`<em>\`.
  - add inline css to make it graphically appealing
  `});async function Gt(){const n=await(await z.getGenerativeModel({model:"gemini-2.5-flash"}).generateContent(`Create four random generated user prompts and store it in an array written in. The prompts you will generate are random common questions about video games. Whenever you respond, always just respond with the array and do not reply with any text. Strictly respond with the array only, do not add any unnecessary strings.
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
`)).response.text(),o=JSON.parse(n);console.log(o),o.forEach((s,i)=>{const r=document.getElementById(`prompt-${i+1}`);r&&(r.innerText=s)})}const g=document.querySelector("#chat-input"),Ht=document.querySelector("#send-btn"),E=document.querySelector(".chat-container"),Ut=document.querySelectorAll(".chat-prompt"),Z=document.querySelector(".prompts-container");document.addEventListener("DOMContentLoaded",async()=>{await Gt(),Ut.forEach((t,e)=>{t.classList.remove("skeleton"),t.addEventListener("click",()=>{Ft(t.innerText)})})});document.addEventListener("keydown",function(t){document.activeElement!==g?(t.preventDefault(),g.focus()):t.key==="Enter"&&g.value.length!==0&&!t.shiftKey&&(t.preventDefault(),g.value=g.value.replace(/\r?\n|\r/g,""),et())});const tt=async t=>{const e=document.createElement("div");e.classList.add("response-content"),e.innerHTML=`      
    <div class="response-inner-body">
      <div class="response-text skeleton">Thinking...</div>
    </div>`;const n=document.createElement("p");E.appendChild(e),E.scrollTo({top:E.scrollHeight,behavior:"smooth"});try{const o=await xt.generateContent(t);console.log("Gemini API Response: ");const s=await o.response.text();n.textContent=s.trim()}catch(o){n.classList.add("error"),n.textContent="Error: "+o}e.querySelector(".response-text").classList.remove("skeleton"),e.querySelector(".response-text").innerHTML=nt.parse(n.textContent)},et=async()=>{Z.style.display="none";const t=g.value.trim();if(!t)return;const e=document.createElement("div");e.classList.add("chat-content"),e.innerHTML=`<div class="chat-inner-body">
            <p class="user-text">${t}</p>
    </div>`,E.appendChild(e),E.scrollTo({top:E.scrollHeight,behavior:"smooth"}),tt(t),g.value=""};function Ft(t){const e=t;if(!e)return;const n=document.createElement("div");n.classList.add("chat-content"),n.innerHTML=`<div class="chat-inner-body">
            <p class="user-text">${e}</p>
    </div>`,E.appendChild(n),E.scrollTo({top:E.scrollHeight,behavior:"smooth"}),g.value="",Z.style.display="none",tt(e),g.value=""}Ht.addEventListener("click",et);
