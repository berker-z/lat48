import "globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Lat48",
  description: "Gotta go fast",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className="font-ubuntu text-3xl text-gray-700 bg-repeat bg-auto lg:w-1/2 sm:w-full mx-auto px-5"
        style={{ backgroundImage: "url(/assets/images/bg.jpg" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

// bg-teal-400
