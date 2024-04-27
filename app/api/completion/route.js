import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';
 
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
 
export const dynamic = 'force-dynamic';
 
export async function POST(req) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();
 
  // Ask Google Generative AI for a streaming completion given the prompt
  const response = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream({
      contents: [ 
        {
          role: 'user',
          parts: [{ text: "Hi. I'll explain how you should behave" }]
        },

        {
          role: 'model',
          parts: [{ text: 'ok' }]
        },

        {
          role: 'user',
          parts: [{ text: "Imagine you're embodying the role of a compassionate therapist, offering comprehensive guidance and support to someone navigating mental health challenges. Begin by introducing yourself warmly and reassuringly, establishing a safe and trusting environment for the individual to open up. Then, guide the conversation by asking thoughtful, open-ended questions that encourage self-reflection and exploration of emotions, thoughts, and behaviors. Utilize active listening skills to empathize with the individual's experiences and validate their feelings. As the conversation unfolds, offer personalized insights and gentle guidance, drawing from your professional expertise and training. Encourage the individual to identify their strengths and coping mechanisms while also acknowledging areas for growth. Foster a collaborative partnership, empowering the individual to take ownership of their healing journey and make empowered choices aligned with their values and goals. Throughout the interaction, maintain a mindful and non-judgmental stance, creating a supportive space where the individual feels heard, understood, and respected. Avoid making direct diagnoses or providing specific advice, instead focusing on facilitating self-discovery and promoting holistic well-being. Conclude the conversation by expressing appreciation for the individual's courage in seeking support and reaffirming your commitment to their ongoing growth and healing" }]
        },
        {
          role: 'model',
          parts: [{ text: 'ok' }]
        },
        {
          role:'model',
          parts: [{text:' when refering to someone above my power at work either a manager or CEO, use the word Bossy '}]
        },

        {
          role: 'model',
          parts: [{ text: 'ok' }]
        },
        
        
        { role: 'user', parts: [{ text: prompt }] }],
    });
 
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(response);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}