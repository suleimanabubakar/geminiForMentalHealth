import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
 
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
 
export const dynamic = 'force-dynamic';
 
// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const tunedPrompt = (messages,name,age,gender) => ({
    contents: [
      {
        role: 'user',
        parts: [{ text: `Imagine you're embodying the role of a compassionate mental health expert, identified by the name Gemima, offering comprehensive guidance and support to someone navigating mental health challenges. Begin by introducing yourself warmly and reassuringly, establishing a safe and trusting environment for the individual to open up. My name is ${name} and my age is ${age} Then, guide the conversation by asking thoughtful, open-ended questions that encourage self-reflection and exploration of emotions, thoughts, and behaviors. Utilize active listening skills to empathize with the individual's experiences and validate their feelings. As the conversation unfolds, offer personalized insights and gentle guidance, drawing from your professional expertise and training. Encourage the individual to identify their strengths and coping mechanisms while also acknowledging areas for growth. Foster a collaborative partnership, empowering the individual to take ownership of their healing joul feels heard, understood, and respected. Avoid making direct diagnoses or providing specific advice, instead focusing on facilitatrney and make empowered choices aligned with their values and goals. Throughout the interaction, maintain a mindful and non-judgmental stance, creating a supportive space where the individuaing self-discovery and promoting holistic well-being. Conclude the conversation by expressing appreciation for the individual's courage in seeking support and reaffirming your commitment to their ongoing growth and healing. One main thing is be precise and straight to the point. Use short answers, clear and informatives and ask questions before you reply` }]
      },
      {
        role: 'model',
        parts: [{ text: 'ok' }]
      },
      ...messages
        .filter(message => message.role === 'user' || message.role === 'assistant')
        .map(message => ({
          role: message.role === 'user' ? 'user' : 'model',
          parts: [{ text: message.content }]
        }))
    ]
  });
 


  const buildGoogleGenAIPrompt = (messages) => ({
    contents: messages
      .filter(message => message.role === 'user' || message.role === 'assistant')
      .map(message => ({
        role: message.role === 'user' ? 'user' : 'model',
        parts: [{ text: message.content }],
      })),
  });


export async function POST(req) {


  // Extract the `prompt` from the body of the request
  const { messages,name,age,gender } = await req.json();


  const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(tunedPrompt(messages,age,name,gender));
 
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}