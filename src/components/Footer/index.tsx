import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"

function Footer(){

    return (
       <>
      <footer className="bg-[#613387] mt-20 py-10">
      <ul className="flex justify-center gap-5">
        <li><FacebookLogo size={32} color="#fff" /></li>
        <li><InstagramLogo size={32} color="#fff" /></li>
        <li><WhatsappLogo size={32} color="#fff" /></li>
      </ul>
    </footer>
       </>
    )

}

export default Footer