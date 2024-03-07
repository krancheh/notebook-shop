import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { useState } from 'react'

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSideBar = () => {
        setIsSidebarOpen(prevState => !prevState);
    }

    return (
        <div>
            <Header handler={handleSideBar} />
            <Outlet />
        </div>
    )
}

export default Layout