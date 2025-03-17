"use client";

import { User, Briefcase, Mail, List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full h-[4rem] fixed top-0 left-0 bg-backgroundPage/95 backdrop-blur-sm z-50 border-b border-textSecondary/10">
      <div className="flex container  mx-auto px-4 sm:px-6 lg:px-8 h-full items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-textSecondary hover:text-textSecondary/90 transition-colors">
          <Link href="/">Diogo Graciano</Link>
        </h2>

        <nav className="hidden sm:flex gap-8">
          <Link
            href="/"
            className={`relative text-lg text-textPrimary hover:text-textSecondary transition-colors duration-300 ${
              isActive("/")
                ? "font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.125rem] after:bg-textSecondary after:animate-underline"
                : "hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[.125rem] hover:after:bg-textSecondary/30 hover:after:animate-underline"
            }`}
          >
            Sobre
          </Link>
          <Link
            href="/projetos"
            className={`relative text-lg text-textPrimary hover:text-textSecondary transition-colors duration-300 ${
              isActive("/projetos")
                ? "font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.125rem] after:bg-textSecondary after:animate-underline"
                : "hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[.125rem] hover:after:bg-textSecondary/30 hover:after:animate-underline"
            }`}
          >
            Projetos
          </Link>
          <Link
            href="/contato"
            className={`relative text-lg text-textPrimary hover:text-textSecondary transition-colors duration-300 ${
              isActive("/contato")
                ? "font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.125rem] after:bg-textSecondary after:animate-underline"
                : "hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[.125rem] hover:after:bg-textSecondary/30 hover:after:animate-underline"
            }`}
          >
            Contato
          </Link>
        </nav>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-lg hover:bg-textSecondary/10 focus:ring-2 focus:ring-textSecondary/50"
              >
                <List className="w-7 h-7 text-textSecondary" />
                <span className="sr-only">Abrir/Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[17.5rem] bg-backgroundPage/95 backdrop-blur-sm border-l border-textSecondary/10"
            >
              <nav className="flex flex-col gap-4 mt-10">
                <Link
                  href="/"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive("/")
                      ? "bg-textSecondary/10 text-textSecondary font-semibold"
                      : "text-white hover:bg-textSecondary/5 hover:text-textSecondary"
                  }`}
                >
                  <User className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">Sobre</span>
                </Link>
                <Link
                  href="/projetos"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive("/projetos")
                      ? "bg-textSecondary/10 text-textSecondary font-semibold"
                      : "text-white hover:bg-textSecondary/5 hover:text-textSecondary"
                  }`}
                >
                  <Briefcase className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">Projetos</span>
                </Link>
                <Link
                  href="/contato"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive("/contato")
                      ? "bg-textSecondary/10 text-textSecondary font-semibold"
                      : "text-white hover:bg-textSecondary/5 hover:text-textSecondary"
                  }`}
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">Contato</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
