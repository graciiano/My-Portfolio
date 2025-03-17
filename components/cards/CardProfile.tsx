import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import AvatarComponent from "../avatar/avatar";
import Link from "next/link";

export default function CardProfile() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[18.75rem] h-full p-4  border mx-auto rounded-sm space-y-4">
      <AvatarComponent />
      <h2 className="text-2xl font-bold text-textPrimary">Diogo Graciano</h2>
      <p className="text-textSecondary text-center">Desenvolvedor Full-Stack</p>

      <div className="flex gap-4">
        <Link
          href="https://github.com/graciiano"
          target="_blank"
          className="text-textPrimary hover:text-textSecondary transition-colors"
        >
          <Github className="w-6 h-6" />
        </Link>
        <a
          href=""
          className="text-textPrimary hover:text-textSecondary transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href=""
          className="text-textPrimary hover:text-textSecondary transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
