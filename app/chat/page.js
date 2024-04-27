"use client"


import Textarea from 'react-textarea-autosize'


import { useChat,useCompletion } from 'ai/react';

import Markdown from 'react-markdown'


import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
  } from '@/components/ui/tooltip'
  import { IconArrowElbow } from '@/components/chat/icons'
  import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { EmptyScreen } from "@/components/EmptyScreen";
import MessageThread from '@/components/chat/messageThread';

import Image from 'next/image';
import { useState } from 'react';
import GetStared from '@/components/getStarted';

const ChatPanel = () => {


  const [name,setName] = useState(null)
  const [age,setAge] = useState(null)
  const [gender,setGender] = useState(null)

  const [proceed,setProceed] = useState(false)


  const { messages, input, handleInputChange, handleSubmit } = useChat(
    {
      body: {
        name: name,
        age: age,
        gender: gender,
      }
    }
  );

    return ( 
        
      <>

      {
        !proceed ?

        <GetStared setProceed={setProceed} setName={setName} name={name} setAge={setAge} age={age} gender={gender} setGender={setGender} />

        :

        <div
        className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
        
      >
        <div
          className={cn('pb-[200px] pt-4 md:pt-10')}
        
        >
       



          {
            messages.length > 0 ? 


            < MessageThread messages={messages} />
            
            :
            <EmptyScreen />

          }
            
         

     
             
        <div className="h-px w-full"  />
        </div>




        <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px] ">

    
    

        <div className="mx-auto sm:max-w-2xl sm:px-4">


        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border  md:py-4 ">
      <div className="relative h-24 flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-1 sm:rounded-md sm:border  border-2 pr-3">
      



      <div className="w-full flex mt-3 items-start">



      <Textarea
        //   ref={inputRef}
          tabIndex={0}
        //   onKeyDown={onKeyDown}
          placeholder="Share your thoughts"
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none focus:outline-none  sm:text-sm"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          name="message"
          rows={1}
          value={input}
          onChange={handleInputChange}
        />

      <Button type="submit" size="icon" onClick={handleSubmit} className="mt-3">
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>

      </div>

    
        </div>
        </div>
        </div>

            </div>
            </div>

      }
      
    

     

            </>
      
           

     );
}
 
export default ChatPanel;