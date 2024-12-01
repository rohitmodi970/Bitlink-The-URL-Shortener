import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[60vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener in the Market</p>
          < p className="px-56 text-center">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your need and hence we created we have created this URL shortener</p>
          <div className='flex justify-center items-center gap-4  text-white'>
            <Link href="/shorten"> <button className='bg-purple-500 shadow-lg p-3 rounded-lg'>Try Now</button></Link>
            <Link href="/github"> <button className='bg-purple-500 shadow-lg p-3 rounded-lg'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">

          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.png"} fill={true} />
        </div>
      </section>
    </main>
  );
}
