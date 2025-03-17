import { Github, Instagram, Linkedin } from "lucide-react";
import AvatarComponent from "../avatar/avatar";
import Link from "next/link";

export default function CardProfile({
  name = "Diogo Graciano",
  role = "Desenvolvedor Full-Stack",
  socialLinks = {
    github: "https://github.com/graciiano",
    instagram: "https://instagram.com/graciiano",
    linkedin: "https://www.linkedin.com/in/graciiano/",
  },
  updateDate = new Date().toLocaleDateString("pt-BR"),
  bio = "Graduando em Análise e Desenvolvimento de Sistemas.",
}) {
  return (
    <article className="flex flex-col items-center max-w-[18.75rem] max-h-full p-6 border rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:w-full max-md:max-w-full ">
      <header className="flex flex-col items-center">
        <AvatarComponent />
        <h1 className="text-2xl font-bold text-textPrimary mb-2">{name}</h1>
        <p className="text-sm text-textSecondary mb-4">{role}</p>
      </header>

      <div className="text-center mb-6">
        <p className="text-textPrimary text-sm mb-4">{bio}</p>
        <p className="text-xs text-textPrimary">Atualizado em: {updateDate}</p>
      </div>

      <nav>
        <ul className="flex gap-5">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <li key={platform}>
              <Link
                href={url}
                target="_blank"
                rel="Midias Sociais"
                className="text-textPrimary hover:text-accent transition-colors duration-200"
                aria-label={`Link para ${platform}`}
              >
                {platform === "github" && <Github className="w-6 h-6" />}
                {platform === "instagram" && <Instagram className="w-6 h-6" />}
                {platform === "linkedin" && <Linkedin className="w-6 h-6" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="mt-6 w-full">
        <Link
          href="/contato"
          className="block text-center py-2 px-4 text-sm bg-accent  rounded-sm hover:bg-accent-dark transition-colors"
        >
          Entrar em Contato
        </Link>
      </footer>
    </article>
  );
}
