import Link from "next/link"
import { List } from "phosphor-react"
import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

function Menu() {

    const {menuToggle, isMenuOpen} = useContext(MenuContext)

    return (
        <>
            <div className="hidden lg:flex justify-between items-center">
                <div><span className="text-[#613387] text-2xl uppercase font-bold">ADOTE</span><span className="text-[#f8a836] text-2xl ml-2 font-bold">UM AMIGO</span></div>
                <nav className="">
                    <ul className="flex justify-end items-center gap-5 h-20 mr-10">
                        <li><Link href="/"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Home</a></Link></li>
                        <li><Link href="/about"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Quem somos</a></Link></li>
                        <li><Link href="/help"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Quero ajudar</a></Link></li>
                        <li><Link href="https://admin.pet.edsonlimaweb.com.br/"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Login</a></Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`flex lg:hidden justify-end items-center h-20 mr-8 md:mr-0 cursor-pointer ${!isMenuOpen ? 'hidden': ''}`}>
                <List size={38} color="#613387" onClick={menuToggle}>Toggle</List>
            </div>
        </>
    )

}
export default Menu