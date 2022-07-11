import { GetServerSideProps } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Petcare from "../components/Care"
import { api } from "../services"


type Pet = {
  id: number,
  name: string,
  slug: string,
  cover: string,
  description: string,
}

type PetProps = {
  pets: Pet[]
}

function Home({ pets }: PetProps) {


  return (
    <>
      {/* HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="flex flex-col p-10 justify-center text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl text-[#613387] font-semibold drop-shadow-md">Adotar um amiguinho nunca foi tão fácil</h1>
          <p className="text-gray-500 text-2xl lg:text-xl mt-4">Adotando um amiguinho você contribui para um mundo melhor <br />e ainda ajuda a tirar todos os bixinhos que precisam de um novo lar. </p>
        </div>
        <div className="flex items-end">
          <img src="/images/dog.png" alt="" className="-ml-9 lg:ml-0" />
        </div>
      </div>

      {/* ANIMAL */}
      <section className="p-5">
        <div className="flex flex-col justify-center items-center my-20">
          <h2 className="text-[#613387] font-bold text-center text-4xl lg:text-5xl mb-4 drop-shadow-md">Todos os dias novos <br /> bixinhos vem chegando</h2>
          <p className="text-gray-600 text-2xl lg:text-xl text-center lg:text-left">Confira todos os nossos amiguinhos para adoção</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

          {pets?.map(pet => (
            <Card
              key={pet.id}
              name={pet.name}
              description={pet.description}
              cover={pet.cover}
              slug={pet.slug}
            />
          ))}

        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 lg:p-20">
        <div className="col-span-1 lg:col-span-3 text-center">
          <h2 className="text-[#613387] text-5xl font-bold drop-shadow-md">Todas as raças</h2>
          <p className="text-gray-600 mt-5 text-xl">Escolha a que mais te agrada e adote um amiguinho</p>
        </div>
        <div className="relative w-full h-[250px]">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><Link href="/category/cachorro"><a>Doguinhos</a></Link></div>
          <img src="/images/viralata.jpg" className="rounded-lg h-[250px] w-full" alt="" />
        </div>

        <div className="relative w-full h-[250px]">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full"><Link href="/category/gato"><a>Gatinhos</a></Link></div>
          <img src="/images/gato.jpg" className="rounded-lg h-[250px] w-full" alt="" />
        </div>

        <div className="relative w-full h-[250px]">
          <div className="absolute top-0 bottom-0 bg-[#00000085] rounded-lg text-white text-4xl font-bold flex justify-center items-center w-full p-5"><Link href="/category/outros"><a>Cãozinhos e gatinhos</a></Link></div>
          <img src="/images/caoegato.jpg" className="rounded-lg h-[250px] w-full" alt="" />
        </div>

      </section>

      {/* PORQUE ADOTAR UM ANIMAL */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 lg:p-16">
          <img src="/images/dog02.svg" className="" alt="" />
        </div>
        <div className="p-5 lg:p-16 flex flex-col items-center content-center">
          <ul className="mt-5 mb-8 text-center lg:text-left">
            <li><p className="text-5xl text-[#613387] font-bold drop-shadow-md mb-8">Por que adotar um amiguinho?</p></li>
            <li><p className="text-gray-500 text-2xl lg:text-xl mb-3 mt-3">Companheiro de todas as horas</p></li>
            <li><p className="text-gray-500 text-2xl lg:text-xl mb-3">Mais alegria para sua casa</p></li>
            <li><p className="text-gray-500 text-2xl lg:text-xl mb-3">Alerta de perigos</p></li>
            <li><p className="text-gray-500 text-2xl lg:text-xl mb-3">Diminue o estresse</p></li>
          </ul>
        </div>
      </section>

      {/* FRASE */}
      <section className="hero-frase">
        <div className="p-5 text-center lg:text-start absolute h-full w-full bg-[#00000085] flex flex-col justify-center items-center">
          <p className="w-full lg:w-6/12 text-4xl text-white italic">´´Quem não tem um animal de estimação não sabe o que é ser verdadeiramente amado...``</p>
        </div>
      </section>

      <Petcare />

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  try {

    const response = await api.get(`/pets`)

    return {
      props: {
        pets: response.data.pets
      }
    }

  } catch (error) {

  }

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
