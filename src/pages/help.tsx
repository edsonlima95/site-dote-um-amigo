



function About() {

    return (
        <div className="flex justify-center">
            <div className="bg-white shadow rounded p-5 lg:p-10 m-10 lg:w-7/12">
                <h1 className="text-[#613387] text-4xl font-bold drop-shadow-md">Como ajudar</h1>
                <p className="text-gray-500 text-xl my-5">As doações são feitas direto nas contas do site.</p>
                <ul>
                    <li>
                        <p className="text-[#f8a836] font-semibold">Via pix: 00.000.000/0000-00</p>
                        <p className="text-[#f8a836] font-semibold mt-4">Conta bancaria: Agência: 0000 Conta: 000000-0</p>
                        <p className="text-[#f8a836] font-semibold mt-4">Através do e-mail: email@hotmail.com</p>
                        <p className="text-[#f8a836] font-semibold mt-4">Numero: 9999999999</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default About