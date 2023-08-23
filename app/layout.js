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
        className="font-ubuntu text-gray-700 bg-repeat bg-auto"
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
