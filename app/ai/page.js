"use client"

import { useChat,useCompletion } from 'ai/react';


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Markdown from 'react-markdown'

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit } = useChat();

    // const {
    //     completion,
    //     input,
    //     stop,
    //     isLoading,
    //     handleInputChange,
    //     handleSubmit,
    //   } = useCompletion();



    return ( 
        <div className="w-full lg:w-1/2 mx-auto my-10 px-4">
              <Card className="p-6">



              <h1 className="text-center my-3">Gemini Tests</h1>

              {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
         <>
         
          <Markdown>
          {m.content}
          </Markdown>
         </>
        </div>
      ))}




                <div className="w-full flex flex-wrap">
                  <p className="px-3 py-2 text-sm border rounded-lg  border-slate-900 text-slate-900 m-2">
                    Funny
                  </p>
                  <p className="px-3 py-2 text-sm border rounded-lg  border-slate-900 text-slate-900 m-2">
                    Neutral
                  </p>
                  <p className="px-3 py-2 text-sm border rounded-lg  border-slate-900 text-slate-900 m-2">
                    Casual
                  </p>
                </div>

              <Input placeholder="Type your message here..." value={input} onChange={handleInputChange} className="mt-4"  />
            
        
                <Button onClick={handleSubmit} >Submit</Button>

              </Card>
        </div>
     );
}
 
export default Chat;
