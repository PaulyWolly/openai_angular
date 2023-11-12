import dotenv from "dotenv";
import OpenAIObj from "openai";

dotenv.config(); // Load the environment

const openai = new OpenAIObj({ key: process.env["OPENAI_API_KEY"] });

const main = async () => {
    const chat_completion = await openai.chat.completions.create({
        messages: [
            {
                "role": "user",
                "content": "Say I look nice, today",
            }
        ],
        model: "gpt-3.5-turbo",
})
    console.log(chat_completion.choices[0].message.content);
}
main();