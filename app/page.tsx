import CardProfile from "@/components/cards/CardPerfil";
import CardTecnologias from "@/components/cards/CardTecnologias";
import Footer from "@/components/footer/footer";
import Sobre from "@/components/section/sobre";

export default function Home() {
  return (
    <div className="flex flex-nowrap gap-6 p-6 max-md:flex-col max-md:p-4">
      <div className="flex flex-col gap-6  max-md:w-full">
        <CardProfile />
        <CardTecnologias />
      </div>

      <div className="flex-1">
        <Sobre />
        <div className="flex items-center justify-center w-full h-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
