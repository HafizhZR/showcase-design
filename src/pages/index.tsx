import Navbar from "@/components/navbar/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='h-screen flex justify-center items-center bg-slate-300'>
        <h1 className='text-3xl'>Hello World</h1>
      </div>
    </>
  )
}
