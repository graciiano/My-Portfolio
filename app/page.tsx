import CardProfile from "@/components/cards/CardProfile";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="mx-auto py-16 mt-6">
        <CardProfile />
      </section>
    </>
  );
}
