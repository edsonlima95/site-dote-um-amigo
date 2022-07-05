import { GetServerSideProps } from 'next'
import Card from '../../components/Card'
import { api } from '../../services'
import { useRouter } from 'next/router'

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

function Category({ pets }: PetProps) {

    const router = useRouter()

    const { slug } = router.query

    return (
        <>
            <div className="flex justify-center items-center min-h-[400px]">
                <h1 className='text-[#613387] font-bold text-4xl text-center lg:text-4xl lg:text-start'>Resultados para categoria: {slug}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 p-5 lg:p-10 gap-5 bg-white">

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

        </>
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    try {

        const response = await api.get(`/pets/category/${ctx.params?.slug}`)

        return {
            props: {
                pets: response.data.category.pets
            }
        }

    } catch (err) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

}

export default Category