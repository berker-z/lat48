import {
  PiTelegramLogoDuotone,
  PiTelegramLogoFill,
  PiLinkedinLogo,
  PiLinkedinLogoFill,
  PiDiscordLogoFill,
  PiDiscordLogo,
  PiCalendarCheckDuotone,
  PiCalendarCheckFill,
} from "react-icons/pi";
import { MdOutlineEmail, MdMail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Linktr = () => {
  return (
    <div className="hidden lg:block md:block fixed bottom-10 right-10 bg-rose-300 w-fit mt-2 py-1 px-4 border border-gray-700 mx-auto rounded hover:shadow-lg">
      <p className="flex font-bold text-3xl w-full">Reach us on</p>
      <br />
      <ul className=" text-xl">
        <li className="group relative w-min">
          <a
            href={"https://t.me/berkerz"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <PiTelegramLogoDuotone className="logo_sil" />
            <PiTelegramLogoFill className=" logo_full" />
            <p className="">Telegram</p>
          </a>
        </li>
        <li className="group relative w-min">
          <a
            href={"https://www.linkedin.com/in/cryptofinomic/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <PiLinkedinLogo className="logo_sil" />
            <PiLinkedinLogoFill className=" logo_full" />
            <p className="">LinkedIn</p>
          </a>
        </li>
        <li className="group relative w-min">
          <a href={"berker.zor"} className="flex items-center">
            <MdOutlineEmail className="logo_sil" />
            <MdMail className=" logo_full" />
            <p className="">E-mail</p>
          </a>
        </li>
        <li className="group relative w-min">
          <a href={"https://discord.com"} className="flex items-center">
            <PiDiscordLogo className="logo_sil" />
            <PiDiscordLogoFill className=" logo_full" />
            <p className="">Discord</p>
          </a>
        </li>
        <li className="group relative w-min">
          <a href={"https://calendly.com"} className="flex items-center">
            <PiCalendarCheckDuotone className="logo_sil" />
            <PiCalendarCheckFill className=" logo_full" />
            <p className="">Calendly</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Linktr;
