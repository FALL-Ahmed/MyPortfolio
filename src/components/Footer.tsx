import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, footerCopyright } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
const LazyServiceStatus = lazy(() => import("../components/ServiceStatus"));

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <p className="text-white text-2xl">
        © {year} FALL Ahmed. {language === "FR" ? footerCopyright.fr : footerCopyright.en}
      </p>
      <div className="socials flex gap-10 ">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            className="block mb-2 "
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {typeof social.icon === "function" ? (
              <social.icon className={`stroke-orange`} />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                style={{ stroke: social.iconcolor || "" }}
              />
            )}
          </Link>
        ))}
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyServiceStatus />
        </Suspense>
      </div>
    </footer>
  );
};

export default Footer;
