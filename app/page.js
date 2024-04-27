import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
// import { useRouter } from "next/navigation";

export default function Home() {



  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className="w-full lg:w-2/3">

    
    <Card className="py-10">

    <div className="flex items-center border-b pb-3">
        <Image src={'/gemini.png'} width={50} height={50} />

        <p className="font-bold font-title mr-2 text-gray-600" >Welcome To Gemini</p>
        <p className="font-bold font-title  mr-2 text-white bg-slate-900 rounded-lg py-2 px-2 text-xs ml-3" >For Mental Health</p>


        </div>
      <div className="w-full lg:w-1/3  mx-auto my-7 px-4">
      <Link href={'/chat'} >
    <button  className="w-full py-4 font-title rounded-full  bg-slate-900 text-white text-sm">
        Get Started
    </button>
      </Link>

</div>
      </Card>

      </div>


    </main>
  );
}
