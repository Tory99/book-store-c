import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps){
    return (
        <>
            <Header />
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
