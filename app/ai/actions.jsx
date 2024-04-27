import 'server-only'


import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
 
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
 
export const dynamic = 'force-dynamic';
 
// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages) => ({
    contents: [
      {
        role: 'system',
        parts: [{ text: 'You are a therapist, and your role is to help examine and understand the user.' }]
      },
      ...messages
        .filter(message => message.role === 'user' || message.role === 'assistant')
        .map(message => ({
          role: message.role === 'user' ? 'user' : 'model',
          parts: [{ text: message.content }]
        }))
    ]
  });
async function submitMsg (msg) {
    const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(buildGoogleGenAIPrompt(messages));
 
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);

}