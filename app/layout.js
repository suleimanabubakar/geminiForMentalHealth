import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { TooltipProvider } from "@radix-ui/react-tooltip";


export const metadata = {
  title: "Gemini-Mental Health",
  description: "Gemini-Mental Health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

      {/* <TooltipProvider> */}

   
      <div className="flex flex-col min-h-screen">
          <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          {/* </TooltipProvider> */}
      </body>
    </html>
  );
}
