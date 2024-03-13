import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    }

    return (
        <div>
            <Sidebar isOpen={isSidebarOpen} handleSidebar={handleSidebar} />
            <Header handleSidebar={handleSidebar} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout