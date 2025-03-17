export default function CardTecnologias() {
  return (
    <article className="flex flex-col items-center max-w-[18.75rem] max-h-full p-6 border rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:w-full max-md:max-w-full">
      <header className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold text-textPrimary mb-4">
          Tecnologias
        </h1>

        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h2 className="text-sm font-semibold text-textPrimary mb-2">
              Backend
            </h2>
            <ul className="space-y-1">
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                Java
              </li>
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                Spring Boot
              </li>
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                Banco de Dados
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-sm font-semibold text-textPrimary mb-2">
              Frontend
            </h2>
            <ul className="space-y-1">
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                React
              </li>
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                Next.js
              </li>
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                TypeScript
              </li>
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                JavaScript
              </li>
              <li className="text-sm text-textSecondary bg-accent/10 px-2 py-1 rounded">
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="text-center mb-2">
        <p className="text-xs text-textSecondary">
          Experiência prática em desenvolvimento fullstack com foco em soluções
          escaláveis
        </p>
      </div>
    </article>
  );
}
