import Image from "next/image";
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
const Footer = () => {
  return (
    <div className="boxxy flex sm:flex-col mx-auto px-3 py-3 gap-x-3">
      <div className=" mx-auto flex flex-col lg:basis-5/12 ">
        <Image
          src="/assets/images/latnew.svg"
          width={200}
          height={50}
          className=" object-contain"
        />

        <ul className="  items-center flex text-xl">
          <li className="group relative w-min">
            <a
              href={"https://t.me/berkerz"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <PiTelegramLogoDuotone className="logo_sil" />
              <PiTelegramLogoFill className=" logo_full" />
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
            </a>
          </li>
          <li className="group relative w-min">
            <a href={"berker.zor"} className="flex items-center">
              <MdOutlineEmail className="logo_sil" />
              <MdMail className=" logo_full" />
            </a>
          </li>
          <li className="group relative w-min">
            <a href={"https://discord.com"} className="flex items-center">
              <PiDiscordLogo className="logo_sil" />
              <PiDiscordLogoFill className=" logo_full" />
            </a>
          </li>
          <li className="group relative w-min">
            <a href={"https://calendly.com"} className="flex items-center">
              <PiCalendarCheckDuotone className="logo_sil" />
              <PiCalendarCheckFill className=" logo_full" />
            </a>
          </li>
        </ul>
      </div>
      <div className="basis-7/12 ">
        <p className="  text-xl">
          Lat48 is a geographically distributed team of finance consultants and
          crypto vets skilled at building and scaling teams, transforming legacy
          processes/systems.
        </p>
      </div>
    </div>
  );
};

export default Footer;
