import {config} from "dotenv";
config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

//console.log(process.env.GOOGLE_API_KEY);

const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2028, 
    safetySettings: [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        },
    ],
});

const res = await model.invoke([
    [
        "human",
        'If i want to add url of image instead of path what should i do \n const image = fs.readFileSync("./hotdog.jpg").toString("base64");'
    ],
]);

console.log(res);