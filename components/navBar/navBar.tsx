
type NavBarProps = {
    link1: string;  
    link2: string;  
    link3: string;  

}

export default function NavBar({...props}: NavBarProps) {
    return (
        <div  className="flex space-x-10">
            <a href="#about" className="text-lg text-textPrimary">{props.link1}</a>
            <a href="#projects" className="text-lg text-textPrimary">{props.link2}</a>
            <a href="#contact" className="text-lg text-textPrimary">{props.link3}</a>
        </div >
    )
}