import {
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Puzzle,
  Rocket,
  Cpu,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="w-full border rounded-sm p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-[80%] group relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
      </div>

      <header className="mb-8 ">
        <h1 className="text-4xl font-bold text-textPrimary flex items-center gap-2 hover:gap-3 transition-all max-w-[18.75rem]">
          <BrainCircuit className="w-8 h-8 text-accent animate-bounce" />
          <span className="bg-gradient-to-r from-accent to-red-600 bg-clip-text text-transparent">
            Sobre Mim
          </span>
        </h1>
        <p className="text-textSecondary mt-2 flex items-start gap-2">
          <Rocket className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
          Desenvolvedor Fullstack impulsionando inovação tecnológica. Quando não
          estou codando, você me jogando ou aprendendo novas tecnologias.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div className="space-y-6">
          <div className="space-y-4 hover:bg-accent/5 transition-colors p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-full hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-textPrimary">
                Jornada Acadêmica
              </h2>
            </div>
            <p className="text-textSecondary text-sm">
              Tecnólogo em Análise e Desenvolvimento de Sistemas. Atualmente
              acelerando a carreira como Estagiário Full-Stack na{" "}
              <span className="text-accent mx-1">DBC Company</span>.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                2024-2025
              </span>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                450h+ de estágio
              </span>
            </div>
          </div>

          <div className="space-y-4 hover:bg-accent/5 transition-colors p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-full hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-textPrimary">
                Stack Principal
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "TypeScript", "React", "NextJs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 hover:bg-accent/5 transition-colors p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-full hover:scale-105 transition-transform">
                <Puzzle className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-textPrimary">
                Metodologia
              </h2>
            </div>
            <p className="text-textSecondary text-sm">
              Arquitetura limpa e escalável com foco em performance.
              Especialista em:
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {[
                "Java",
                "Spring Boot",
                "TypeScript",
                "APIs REST",
                "React",
                "Next.js",
                "Microserviços",
                "Testes Unitários",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-textSecondary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-accent/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors group/extra">
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 className="w-6 h-6 text-accent group-hover/extra:animate-pulse" />
              <h3 className="text-textPrimary font-medium">Beyond Code</h3>
            </div>
            <p className="text-textSecondary text-sm">
              Entusiasta em games e tecnologia. Sempre em busca de novos
              desafios e aprendizados.
            </p>
            <div className="mt-3 flex gap-2 opacity-0 group-hover/extra:opacity-100 transition-opacity">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-xs text-accent">
                Atualmente explorando: PHP + Laravel
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-accent/10">
        <Link
          href="https://www.linkedin.com/in/graciano/"
          className="group/button flex items-center gap-2 w-fit text-sm px-6 py-2 
            border border-accent text-accent rounded-sm hover:bg-accent hover:text-black 
            transition-all duration-300"
        >
          <span>Explorar Trajetória Completa</span>
          <ArrowUpRight className="w-4 h-4 group-hover/button:rotate-45 transition-transform" />
        </Link>
      </div>

      <div className="absolute bottom-2 right-4 text-xs text-textSecondary flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <div className="h-1 w-8 bg-accent/30 animate-pulse" />
        <span>Full-Stack Momentum</span>
      </div>
    </div>
  );
}
