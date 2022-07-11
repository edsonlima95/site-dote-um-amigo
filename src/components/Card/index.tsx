import Link from "next/link"

type CardProps = {
    name: string,
    slug: string,
    cover: string,
    description: string,
}

function Card(props: CardProps) {

    return (
        <div className="shadow">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/pet/image/${props.cover}`} className="rounded-tl rounded-tr h-[250px] lg:h-[200px] w-full" alt="" />
            <div className="flex flex-col p-3 w-full">
                <p className="text-[#613387] text-2xl font-bold py-5">{props.name}</p>
                <p className="text-gray-500 text-lg mb-5">{`${props.description.substring(0, 50)}...`}</p>
                <Link href={`/pet/${props.slug}`}><a className="text-white text-lg bg-[#613387] h-10 rounded-lg flex justify-center items-center">Quero adotar</a></Link>
            </div>
        </div>
    )

}

export default Card