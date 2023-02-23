import Image from "next/image";
import linkedinLogo from "../../public/icons/linkedin.svg";
import codePenLogo from "../../public/icons/code-pen.svg";
import githubLogo from "../../public/icons/github.svg";
export function Banner({ github, linkedin, code_pen }) {
  return (
    <div className="relative flex h-[650px] w-screen flex-col items-center justify-center gap-12">
      <span className="bg-gradient-to-bl from-sky-500 via-blue-800 to-sky-500 bg-clip-text text-7xl font-black text-transparent drop-shadow">
        Thein Hein
      </span>
      <span className="max-w-prose text-center text-xl font-bold tracking-wider text-neutral-500">
        Welcome to my website!
      </span>
      <p className="max-w-prose text-center font-semibold tracking-wider text-neutral-500">
        I&apos;m a self-taught developer with a passion for building digital
        experiences. Whether it&apos;s crafting innovative solutions or
        exploring the intersection of tech and creativity, I&apos;m dedicated to
        using my skills to bring ideas to life. Explore my portfolio to see some
        of my latest projects, and don&apos;t hesitate to get in touch if you
        have any questions or collaboration opportunities. Let&apos;s create
        something amazing together!
      </p>
      <p className="flex items-center gap-12">
        <a href={github}>
          <Image src={githubLogo} alt="GitHub logo" className="w-7" />
        </a>
        <a href={code_pen}>
          <Image src={codePenLogo} alt="Codepen logo" className="w-7" />
        </a>
        <a href={linkedin}>
          <Image src={linkedinLogo} alt="Linkedin logo" className="w-8" />
        </a>
      </p>
    </div>
  );
}
