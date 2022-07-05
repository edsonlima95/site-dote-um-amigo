


function Petcare() {

    return (
        <>
            {/* DICAS */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-5 lg:p-10">
                <div className="col-span-1 lg:col-span-3 text-center my-16">
                    <p className="text-[#613387] drop-shadow-md font-bold text-4xl lg:text-5xl">3 dicas de como cuidar <br /> melhor do seu pet</p>
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


export default Petcare