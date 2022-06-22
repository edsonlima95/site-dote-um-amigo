import { useRouter } from 'next/router'
import { Link, MapPin, User } from 'phosphor-react'

function Animal() {

    const router = useRouter()

    const id = router.query.param

    return (
        <>
            <div className="container mx-auto py-16 flex gap-6">
                <div className="w-7/12">
                    <img src="/images/dog1.jpg" alt="" className="rounded h-[600px]" />
                </div>
                <div className="w-6/12">
                    <h1 className="text-[#613387] text-5xl font-bold drop-shadow-md">Titulo do post aqui</h1>
                    <ul className="my-8">
                        <li className="flex items-center"><MapPin size={32} color="#f8a836" /> <span className="text-gray-500 text-xl ml-2">São Paulo - SP</span></li>
                        <li className="flex items-center mt-3"><User size={32} color="#f8a836" /> <span className="text-gray-500 text-xl ml-2">Publicado por Edson Lima</span></li>
                    </ul>
                    <h2 className="text-[#613387] text-3xl font-bold mt-4 drop-shadow-md">Conheça um pouco sobre nosso amiguinho</h2>
                    <p className="mt-3 text-gray-500 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est unde quam incidunt obcaecati nulla distinctio, error beatae, voluptatem nobis ipsam officia soluta eum doloremque dolorum iusto et neque enim explicabo.</p>
                    <a className="text-white text-2xl bg-[#f8a836] font-bold h-16 rounded-lg flex justify-center items-center mt-8">QUERO ADOTAR</a>
                </div>
            </div>
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

export default Animal