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
        className=" flex-col flex font-ubuntu text-3xl text-gray-700 bg-repeat bg-auto min-h-screen lg:w-1/2 md:w-full sm:w-full mx-auto mb-0 px-5"
        style={{ backgroundImage: "url(/assets/images/bg.jpg" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
