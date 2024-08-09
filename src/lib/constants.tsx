import { RiArrowDropRightLine, RiInstagramFill } from "react-icons/ri";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

type socials = {
  name: string;
  url: string;
  icon: JSX.Element;
};

const socials: socials[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/blockchainkgp",
    icon: <FaLinkedin className="text-2xl" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/blockchainkgp/",
    icon: <RiInstagramFill className="text-2xl" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/blockchainkgp",
    icon: <FaFacebook className="text-2xl" />,
  },
  {
    name: "Discord",
    url: "https://discord.gg/Pwrv4Vzx",
    icon: <FaDiscord className="text-2xl" />,
  },
  {
    name: "Whatsapp",
    url: "https://chat.whatsapp.com/EBtsUCmzHRICqtOlXHzk2J",
    icon: <IoLogoWhatsapp className="text-2xl" />,
  },
];

type page = {
  name: string;
  url: string;
};

const pages: page[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Events",
    url: "/events",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Team",
    url: "/team",
  },
];

export { socials, pages };
