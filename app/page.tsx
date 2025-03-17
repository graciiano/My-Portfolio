import CardProfile from "@/components/cards/CardPerfil";
import CardTecnologias from "@/components/cards/CardTecnologias";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <section className="ml-6 mt mt-6 min-h-full max-md:px-6 max-md:ml-0 ">
        <CardProfile />
      </section>
      <section className="ml-6 mt-6 min-h-full max-md:px-6 max-md:ml-0 ">
        <CardTecnologias />
      </section>
    </div>
  );
}
