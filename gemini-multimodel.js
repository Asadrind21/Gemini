import { config } from "dotenv";
config();

import fs from "fs";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro-vision",
    maxOutputTokens: 2048,
});

const image = fs.readFileSync("./cat.jpg").toString("base64");
const input = [
    new HumanMessage({
        content: [
            {
                type: "text",
                text: "Describe the image."
            },
            {
                type: "image_url",
                image_url: `data:image/png;base64,${image}`,
            },
        ],
    }),
];

const res = await model.invoke(input);
console.log(res);