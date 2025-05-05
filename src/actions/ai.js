import axios from "axios";

const SYSTEM_PROMPT = `
You are a code checker AI.

Your job is to:
- Check if the student's C++ code runs without errors and meets basic functionality.
- Ignore minor issues like message casing unless it affects correctness.
- If the code is correct, respond: "✅ Correct".
- If there is any error or issue, respond with a short explanation of the error.

Keep it brief and direct.
`;

export const getCodeFeedback = async (studentCode) => {
  console.log(studentCode);
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "deepseek/deepseek-r1:free",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `Here is the student's code:\n\n${studentCode}\n\nIs this code correct?`,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        // "HTTP-Referer": "http://localhost:3000",
        // "X-Title": "Code Review Assistant",
      },
    }
  );

  return response.data.choices[0].message.content;
};
