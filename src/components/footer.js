import { query } from "@/lib/sanity-queries";
import { useEffect, useState } from "react";
import client from "@/lib/sanity-client";
import Image from "next/image";
import linkedinLogo from "../../public/icons/linkedin.svg";
import codePenLogo from "../../public/icons/code-pen.svg";
import githubLogo from "../../public/icons/github.svg";
import phoneIcon from "../../public/icons/phone.svg";
import emailIcon from "../../public/icons/email.svg";
import gpsIcon from "../../public/icons/gps.svg";
export function Footer() {
  const [
    {
      city,
      state,
      zip_code,
      country,
      email,
      phone,
      code_pen,
      github,
      linkedin,
    },
    setData,
  ] = useState({});

  useEffect(() => {
    (async () => {
      const me = await client.fetch(query.aboutMe);
      setData(me);
    })();
  }, []);

  return (
    <footer className="flex justify-end py-32 shadow-md ring-1 ring-neutral-200/60">
      <div className="grid grid-cols-12 gap-2">
        <FooterLink>
          {city}, {state} {zip_code}, {country}
        </FooterLink>
        <Image src={gpsIcon} alt="GPS icon" className="w-6" />
        <FooterLink>{email}</FooterLink>
        <Image src={emailIcon} alt="Email icon" className="w-6" />
        <FooterLink>{phone}</FooterLink>
        <Image src={phoneIcon} alt="Phone icon" className="w-6" />
        <FooterLink src={github}>{github}</FooterLink>
        <Image src={githubLogo} alt="GitHub logo" className="w-6" />
        <FooterLink src={code_pen}>{code_pen}</FooterLink>
        <Image src={codePenLogo} alt="Codepen logo" className="w-6" />
        <FooterLink src={linkedin}>{linkedin}</FooterLink>
        <Image src={linkedinLogo} alt="Linkedin logo" className="w-6" />
      </div>
    </footer>
  );
}

function FooterLink({ src, children }) {
  return src ? (
    <a
      className="col-span-11 justify-self-end font-primary font-light tracking-wide hover:text-sky-800"
      href={src}
    >
      {children}
    </a>
  ) : (
    <p className="col-span-11 justify-self-end font-primary font-light tracking-wide">
      {children}
    </p>
  );
}
