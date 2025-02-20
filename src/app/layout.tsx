import Heade from "./_components/Heade";  
import Footer from "./_components/Footer"; 
import "./globals.css";  

export default function RootLayout({   
  children, 
}: Readonly<{   
  children: React.ReactNode; 
}>) {   
  return (     
    <html lang="en">       
      <body className="flex flex-col min-h-screen">
        <Heade />         
        <main className="flex-grow">
          {children}         
        </main>
        <Footer />       
      </body>     
    </html>   
  ); 
}