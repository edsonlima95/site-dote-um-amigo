import Footer from "../components/Footer"
import Header from "../components/Header"
import MenuLeft from "../components/MenuLeft"

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {


    return (
        <>
            <Header />

            <MenuLeft/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )

}


export default Layout