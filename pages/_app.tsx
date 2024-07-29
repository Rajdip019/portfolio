import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full dark:bg-black bg-white  dark:bg-dot-blue-300/[0.2] bg-dot-blue-200/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]"></div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
