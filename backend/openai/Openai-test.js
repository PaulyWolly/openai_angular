import dotenv from "dotenv";
import OpenAIObj from "openai";

dotenv.config(); // Load the environment

const openai = new OpenAIObj({ key: process.env["OPENAI_API_KEY"] });

const main = async () => {
  // New (i.e., OpenAI NodeJS SDK v4)
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { 
            role: "system", 
            content: "Hello, my name is Paul." 
        }
    ],
  });
  console.log(chatCompletion.choices[0].message.content);
}

main();
