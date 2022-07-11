import { EnvelopeSimple, Link, MapPin, User, WhatsappLogo } from 'phosphor-react'
import { api } from '../../services'
import { GetServerSideProps } from 'next'
import Petcare from '../../components/Care'

type Pet = {
        id: number,
        name: string,
        email: string,
        contact: string,
        description: string,
        cover: string,
        city: string,
        state: string,
        user: {
            name: string,
        }

}

type PetProps = {
    pet: Pet
}

function Animal({ pet }: PetProps) {

    return (
        <>
            <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-7/12 p-3">
                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/pet/image/${pet?.cover}`} alt="" className="rounded w-full h-[300px] lg:h-[600px]" />
                </div>
                <div className="w-full lg:w-6/12 lg:text-start text-center">
                    <h1 className="text-[#613387] text-5xl font-bold drop-shadow-md">{pet?.name}</h1>
                    <ul className="my-8">
                        <li className="flex items-center justify-center lg:justify-start"><MapPin size={32} color="#f8a836" /> <span className="text-gray-500 text-xl ml-2">{pet?.city} - {pet?.state}</span></li>
                        <li className="flex items-center  justify-center lg:justify-start mt-3"><User size={32} color="#f8a836" /> <span className="text-gray-500 text-xl ml-2">Publicado por {pet?.user.name}</span></li>
                    </ul>
                    <h2 className="text-[#613387] text-3xl font-bold mt-4 drop-shadow-md">Conheça um pouco sobre nosso amiguinho</h2>
                    <p className="mt-3 text-gray-500 text-lg">{pet?.description}</p>
                    <h3 className="text-[#f8a836] text-3xl font-bold mt-4 drop-shadow-md">Contatos para adoção</h3>

                    <ul className='mt-5'>
                        <li><span className="text-[#613387] flex  justify-center lg:justify-start text-xl"><EnvelopeSimple size={24} className="mx-2" /> {pet?.email}</span></li>
                        <li><span className="text-[#613387] flex  justify-center lg:justify-start text-xl mt-2"><WhatsappLogo size={24} className="mx-2" /> {pet?.contact}</span></li>
                    </ul>
                </div>
            </div>

            <Petcare/>
        </>
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    try {
            
        const response = await api.get(`/pets/${ctx.params?.slug}`)

        return {
            props: {
                pet: response.data.pet
            }
        }

    } catch (error) {

    }

    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Animal