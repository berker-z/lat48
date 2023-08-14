import "globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Lat48",
  description: "Gotta go fast",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <section
        className="font-ubuntu text-gray-700 bg-repeat bg-auto"
        style={{ backgroundImage: "url(/assets/images/bg.jpg" }}
      >
        <Navbar />
        <body>{children}</body>
      </section>
    </>
  );
};

export default RootLayout;

// bg-teal-400
