import { IconUser } from "./icons"
import Image from "next/image"
export function UserMessage({ children }) {
    return (
      <div className="group relative flex items-start md:-ml-12">
        <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
          <IconUser />
        </div>
        <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
          {children}
        </div>
      </div>
    )
  }




  export function BotMessage({ children }) {
    return (
      <div className="group relative flex items-start md:-ml-12">
        <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <Image src={'/gemini.png'} width={50} height={50} />
        </div>
        <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
          {children}
        </div>
      </div>
    )
  }

