import Link from "next/link";
import Image from "next/image";
import "globals.css";

function Navbar() {
  return (
    <nav className=" w-1/2 mx-auto bg-cyan-300 border-2 border-gray-700 rounded-b-xl justify-between flex space-x-8 content-center mb-5">
      <div className="inline-block justify-start font-ubuntu">
        <Link href="/" className=" inline-block py-3 pl-3 align-middle">
          <Image
            src="/assets/images/latlogo.png"
            alt="something"
            width={100}
            height={30}
            className="mr-2"
          />
        </Link>
        <p className="inline-block text-gray-700 font-bold text-3xl align-middle">
          CANIM KARIM
        </p>
      </div>
      <div className="inline-block justify-end my-auto">
        <Link
          href="/todo"
          className=" bg-slate-200 align-middle rounded-md mx-3 px-2 text-gray-900 border border-gray-900 font-semibold hover:border-2 text-3xl"
        >
          todo
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
