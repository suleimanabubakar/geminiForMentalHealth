import Markdown from 'react-markdown'
import { BotMessage, UserMessage } from './messages';

const MessageThread = ({messages}) => {
    return ( 
        <div className="mx-auto max-w-2xl px-4">
       

        {messages.map(m => (
        <div key={m.id} className='flex flex-col gap-2 rounded-lg border  px-8 py-3 my-3' >
          {m.role === 'user' ? 
          
          <UserMessage>
                <Markdown>
                    {m.content}
                </Markdown>
          </UserMessage>
          
          :
         <>
        <BotMessage>
        <Markdown>
          {m.content}
          </Markdown>
        </BotMessage>
     
         </>


}
        </div>
      ))}



                   
            </div>        
     );
}
 
export default MessageThread;