import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/chat/icons'
import Image from 'next/image'



export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <div className="flex items-center">
        <Image src={'/gemini.png'} width={50} height={50} />
        <h1 className="text-lg font-semibold font-title ml-2 text-gray-600">
          Welcome to Gemini For Mental Health
        </h1>
        </div>
       
       
      </div>
    </div>
  )
}
