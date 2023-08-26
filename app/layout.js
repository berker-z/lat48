import "globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@components/Footer";
export const metadata = {
  title: "Lat48",
  description: "Gotta go fast",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className=" flex flex-col font-ubuntu text-3xl text-gray-700 bg-repeat min-h-screen lg:w-1/2 md:w-5/6 sm:w-full mx-auto px-5 gap-y-10"
        style={{ backgroundImage: "url(/assets/images/bg.jpg" }}
      >
        <div className="flex-grow">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
