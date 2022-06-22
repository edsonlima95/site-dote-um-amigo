import Link from "next/link"

function Menu(){

    return (
        <nav className="bg-white">
            <ul className="flex justify-end items-center gap-5 h-20 mr-10">
                <li><Link href="/"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Home</a></Link></li>
                <li><Link href="/about"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Quem somos</a></Link></li>
                <li><Link href="/help"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Quero ajudar</a></Link></li>
                <li><Link href="/"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Cadastre-se</a></Link></li>
                <li><Link href="/"><a className="text-[#613387] text-lg font-medium hover:text-[#f8a836]">Login</a></Link></li>
            </ul>
        </nav>
    )

}
export default Menu