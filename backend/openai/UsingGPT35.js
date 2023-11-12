// Using GPT-3.5-Turbo
const { Configuration, OpenAIApi } = require("openai");
const API_KEY = process.env["OPEN_AI_SECRET"];
const configuration = new Configuration({ apiKey: API_KEY });
const openai = new OpenAIApi(configuration);

//const model = "gpt-3.5-turbo";
const model = "gpt-3.5-turbo-0301";
const temp = 0.5;
const tokens = 1024;

const TurboGPT = async (prompt) => {
    try {
        const completion = await openai.createChatCompletion({
            model: model,
            messages: [
                { role: "system", content: "You are omnipotent and always compassionate" },
                { role: "assistant", content: "How else may I help" },
                { role: "user", content: prompt },
            ],
            temperature: temp,
            max_tokens: tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            n: 1,
            stop: "",
        });
        const response = completion.data.choices[0].message.content;
        // Show the response
        console.log("==++==++==++==++==++====++==++==++==++==++==");
        console.log(response);
        console.log("==++==++==++==++==++====++==++==++==++==++==");

        return response; 
    
    } catch (error) {

        console.log(`An error ocurred: ${error}`);
        return null; // return null if there is an error
        
    }
}