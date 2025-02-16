import NavBar from "../navBar/navBar";

export default function Header() {

    return (

        <div className="w-full h-[64px]">
            <div className="flex ml-10 justify-between mr-10 mt-5 items-center">
                <h1 className="text-4xl font-bold text-textSecondary">Graciano</h1>
                <NavBar link1="Sobre" link2="Projetos" link3="Contato"/>
            </div>
        </div >
    )
}