import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col py-8 px-8'>
        <div className="post-detail">
          <Link href="/posts/detail">
            <h1 className="text-xl hover:text-primary hover:underline">Test Detail Postingan</h1>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}