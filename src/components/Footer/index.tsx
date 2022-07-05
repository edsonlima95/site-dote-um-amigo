import Link from "next/link"
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"

function Footer() {

  return (
    <>
      <footer className="bg-[#613387] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="p-5 text-center">
            <h3 className="text-white block mb-5 text-xl uppercase">Sobre nós</h3>
            <p className="text-gray-300">Nosso site foi feito no intuito de ajudar, a diminuir o numero de bixinhos abandonados pelas ruas a encontrar um novo lar, para que possa ser cuidado e ter uma vida felix.</p>
          </div>
          <div className="p-5 text-center">
            <h3 className="text-white block mb-5 text-xl uppercase">LINKS</h3>
            <ul className="leading-relaxed">
              <li><Link href="/"><a className="text-gray-200 underline">Sobre</a></Link></li>
              <li><Link href="/about"><a className="text-gray-200 underline">Quem somos</a></Link></li>
              <li><Link href="/help"><a className="text-gray-200 underline">Quero ajudar</a></Link></li>
              <li><Link href="/login"><a className="text-gray-200 underline">Login</a></Link></li>
            </ul>
          </div>
          <div className="p-5 text-center">
            <h3 className="text-white block mb-5 text-xl uppercase">Midias sociais  </h3>
            <ul className="flex justify-center gap-5">
              <li><Link href="/" passHref target="_blank"><a><FacebookLogo size={32} color="#fff" /></a></Link></li>
              <li><Link href="/" passHref target="_blank"><a><InstagramLogo size={32} color="#fff" /></a></Link></li>
              <li><Link href="/" passHref target="_blank"><a><WhatsappLogo size={32} color="#fff" /></a></Link></li>
            </ul>
          </div>
          <div className="p-5 text-center">
            <h3 className="text-white block mb-5 text-xl uppercase">Categorias</h3>
            <ul className="leading-relaxed">
              <li><Link href="/category/cachorro"><a className="text-gray-200 underline">Cachorro</a></Link></li>
              <li><Link href="/category/gato"><a className="text-gray-200 underline">Gato</a></Link></li>
              <li><Link href="/category/outros"><a className="text-gray-200 underline">Outros</a></Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="text-center text-white bg-[#502a70] p-5">
        &copy; Todos os direitos reservados
      </div>
    </>
  )

}

export default Footer