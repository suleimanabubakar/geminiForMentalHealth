import Image from "next/image";
const Header = () => {
    return ( 
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
        <div className="flex items-center">
        <Image src={'/gemini.png'} width={50} height={50} />

        <p className="font-bold font-title mr-2 text-gray-600" >Gemini</p>
        <p className="font-bold font-title  mr-2 text-white bg-slate-900 rounded-lg py-2 px-2 text-xs ml-3" >For Mental Health</p>


        </div>
        <div className="flex items-center justify-end space-x-2">
       
        </div>
      </header>
     );
}
 
export default Header;