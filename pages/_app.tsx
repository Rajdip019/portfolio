import Footer from '@/components/Shared/Footer'
import Loader from '@/components/Shared/Loader'
import StructuredData from '@/components/Shared/StructuredData'
import Navbar from '@/components/Shared/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Analytics } from "@vercel/analytics/react"
import { motion, useScroll, useSpring } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <StructuredData />
      <Loader />

      {/* Reading progress across the whole page */}
      <motion.div
        style={{ scaleX: progress, originX: 0 }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-accent/60 via-accent to-accent-soft"
      />

      <div className="relative w-full bg-black bg-dot-blue-300/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className={`${router.pathname.includes("/blogs/") ? "[mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]" : "[mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]"} absolute pointer-events-none inset-0 flex items-center justify-center bg-black`}></div>

        {/* Soft accent glow behind the top of every page */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(96,165,250,0.10),transparent)]" />

        <Navbar />
        <motion.main
          key={router.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative"
        >
          <Component {...pageProps} />
        </motion.main>
        <Analytics />
        <Footer />
      </div>
    </>
  )
}
