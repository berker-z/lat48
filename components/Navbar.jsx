import Link from "next/link";
import Image from "next/image";
import "globals.css";

function Navbar() {
  return (
    <div className="sticky w-auto mb-5 z-10 top-0  boxxy">
      <nav className="  justify-between flex space-x-8 content-center">
        <div className="inline-block justify-start font-ubuntu">
          <Link href="/" className=" inline-block py-3 pl-3 align-middle">
            <Image
              src="/assets/images/latlogo.png"
              alt="something"
              width={150}
              height={150}
              className="mr-2"
            />
          </Link>
          <p className="inline-block text-gray-700 font-bold text-3xl align-middle">
            ouh
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
    </div>
  );
}

export default Navbar;
