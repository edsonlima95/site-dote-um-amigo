import Footer from "../components/Footer"
import Header from "../components/Header"

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {


    return (
        <>
            <Header />

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )

}


export default Layout