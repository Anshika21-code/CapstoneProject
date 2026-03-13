// backend/src/ai/openaiIntegration.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askOpenAI = async (prompt) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.log("OpenAI Error:", err.message);
    return "I’m here to help you. Could you repeat that?";
  }
};
