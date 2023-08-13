import RootLayout from "./layout"
import Linktr from "@components/Linktr"
import Image from "next/image"

const Home = () => {
  return (
    <section className=" text-xl w-full h-full font-ubuntu">
                <Linktr/>
    <section className=" mt-20 w-1/3 pt-10 boxxy mx-auto flex-center flex-col">
    <Image src="/assets/images/karım.jpg"
            alt="something"
            width={400}
            height={800}
            className='mr-2' />
        <h1 className="text-center font-ubuntu "> 
            lorem ipsum canım gülüm
            <br />
            <span className="text-center text-blue-500 text-lg font-bold">seblayı çok seviyorum</span>
        </h1>

    </section>
    </section>

  )
}

export default Home