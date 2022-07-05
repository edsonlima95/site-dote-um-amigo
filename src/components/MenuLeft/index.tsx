import Link from "next/link"
import { X } from "phosphor-react"
import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

function MenuLeft() {

    const { isMenuOpen, menuToggle } = useContext(MenuContext)

    return (
        <>
            
            <div className={`fixed z-20 bg-[#613387] min-h-screen top-0 w-[200px] ${isMenuOpen ? '-left-[250px] duration-1000' : 'left-0 duration-700'}`}>
                <div className="flex justify-end p-4">
                    <X size={38} color="#fff"  onClick={menuToggle}/>
                </div>
                <nav className="relative py-28">
                    <ul className="flex flex-col justify-end items-center gap-5 h-20 mr-10">
                        <li><Link href="/"><a className="text-white text-lg font-medium hover:text-[#f8a836]" onClick={menuToggle}>Home</a></Link></li>
                        <li><Link href="/about"><a className="text-white text-lg font-medium hover:text-[#f8a836]" onClick={menuToggle}>Quem somos</a></Link></li>
                        <li><Link href="/help"><a className="text-white text-lg font-medium hover:text-[#f8a836]" onClick={menuToggle}>Quero ajudar</a></Link></li>
                        <li><Link href="https://admin.pet.edsonlimaweb.com.br/"><a className="text-white text-lg font-medium hover:text-[#f8a836]" onClick={menuToggle}>Login</a></Link></li>
                    </ul>
                </nav>
            </div>
        </>

    )

}
export default MenuLeft