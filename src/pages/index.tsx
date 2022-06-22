import Link from "next/link"


function Home() {
  return (
    <>
      {/* HERO */}
      <div className="grid grid-cols-2 min-h-[500px]">
        <div className="flex flex-col p-10 justify-center items-center">
          <h1 className="text-6xl text-[#613387] font-semibold drop-shadow-md">Adotar um amiguinho nunca foi tão fácil</h1>
          <p className="text-gray-500 text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit obcaecati repudiandae atque voluptatum ut accusantium magnam.</p>
        </div>
        <div className="flex items-end">
          <img src="/images/dog.png" alt="" />
        </div>
      </div>

      {/* ANIMAL */}
      <section className="p-5">
        <div className="flex flex-col justify-center items-center my-20">
          <h2 className="text-[#613387] font-bold text-center text-5xl mb-4 drop-shadow-md">Todos os dias novos <br /> bixinhos vem chegando</h2>
          <p className="text-gray-600 text-xl ">Confira todos os nossos amiguinhos para adoção</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/dog1.jpg" className="rounded-tl rounded-tr" alt="" />
            <div className="flex flex-col p-3 w-full">
              <p className="text-[#613387] text-2xl font-bold py-5">Cater sampaio</p>
              <p className="text-gray-500 text-lg mb-5">Cachorro muito dócil, carinhoso e cheio de amor pra dar</p>
              <Link href="/"><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="grid grid-cols-3 gap-10 p-20">
        <div className="col-span-3 text-center">
          <h2 className="text-[#613387] text-5xl font-bold drop-shadow-md">Todas as raças</h2>
          <p className="text-gray-600 mt-5 text-xl">Escolha a que mais te agrada e adote um amiguinho</p>
        </div>
        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><span>Raça 01</span></div>
          <img src="/images/dog1.jpg" className="rounded-lg" alt="" />
        </div>

        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><span>Raça 01</span></div>
          <img src="/images/dog1.jpg" className="rounded-lg" alt="" />
        </div>

        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><span>Raça 01</span></div>
          <img src="/images/dog1.jpg" className="rounded-lg" alt="" />
        </div>

        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><span>Raça 01</span></div>
          <img src="/images/dog1.jpg" className="rounded-lg" alt="" />
        </div>

        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><span>Raça 01</span></div>
          <img src="/images/dog1.jpg" className="rounded-lg" alt="" />
        </div>

        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><span>Raça 01</span></div>
          <img src="/images/dog1.jpg" className="rounded-lg" alt="" />
        </div>

      </section>

      {/* PORQUE ADOTAR UM ANIMAL */}
      <section className="grid grid-cols-2">
        <div className="p-16">
          <img src="/images/dog02.svg" className="" alt="" />
        </div>
        <div className="p-16 flex flex-col items-center content-center">
          <ul className="mt-5 mb-8">
            <li><p className="text-5xl text-[#613387] font-bold drop-shadow-md">Por que adotar um amiguinho?</p></li>
            <li><p className="text-gray-500 text-xl mb-3 mt-3">Companheiro de todas as horas</p></li>
            <li><p className="text-gray-500 text-xl mb-3">Mais alegria para sua casa</p></li>
            <li><p className="text-gray-500 text-xl mb-3">Alerta de perigos</p></li>
            <li><p className="text-gray-500 text-xl mb-3">Diminue o estresse</p></li>
          </ul>
          <Link href="/"><a className="text-white text-lg bg-[#613387] py-5 px-16 rounded-lg">Quero adotar</a></Link>
        </div>
      </section>

      {/* FRASE */}
      <section className="hero-frase">
        <div className="absolute h-full w-full bg-[#00000085] flex justify-center items-center">
          <p className="w-6/12 text-4xl text-white italic">´´Quem não tem um animal de estimação não sabe o que é ser verdadeiramente amado...``</p>
        </div>
      </section>

      {/* DICAS */}
      <section className="grid grid-cols-3 gap-3 p-10">
        <div className="col-span-3 text-center my-16">
          <p className="text-[#613387] drop-shadow-md font-bold text-4xl">3 dicas de como cuidar <br /> melhor do seu pet</p>
        </div>
        <div className="flex justify-center items-center shadow rounded">
          <img src="/images/caminhada.svg" alt="" className="w-[200px] h-[200px]" />
          <div className="p-5">
            <h2 className="text-[#613387] font-bold text-xl mb-5">Caminhada</h2>
            <p className="text-gray-500">Leve sempre seu animalzinho para passaear.</p>
          </div>
        </div>
        <div className="flex justify-center items-center shadow rounded">
          <img src="/images/vacina.svg" alt="" className="w-[200px] h-[200px]" />
          <div className="p-5">
            <h2 className="text-[#613387] font-bold text-xl mb-5">Vacina</h2>
            <p className="text-gray-500">Leve sempre seu animalzinho para passaear.</p>
          </div>
        </div>
        <div className="flex justify-center items-center shadow rounded">
          <img src="/images/cuidado.svg" alt="" className="w-[200px] h-[200px]" />
          <div className="p-5">
            <h2 className="text-[#613387] font-bold text-xl mb-5">Alementação</h2>
            <p className="text-gray-500">Leve sempre seu animalzinho para passaear.</p>
          </div>
        </div>
      </section>

    
    </>
  )
}

export default Home
