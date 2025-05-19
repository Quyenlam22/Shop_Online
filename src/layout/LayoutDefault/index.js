import { NavLink, Outlet } from "react-router-dom";
import './LayoutDefault.scss';
import { IoMdHome } from "react-icons/io";
import CartMini from "../../components/CartMini";

function LayoutDefault () {
    const navLinkActive = (e) => {
        return e.isActive ? "menu__link menu__link--active" : "menu__link";
    }
    // 20p
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        <NavLink to="/" >
                            <img src="/logo_shop.png" alt="Logo" />
                        </NavLink>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/" className={navLinkActive}>
                                    Home <IoMdHome className="menu__icons"/>
                                </NavLink>
                            </li>
                            <li>
                                <CartMini navLinkActive={navLinkActive}/>
                            </li>
                        </ul>    
                    </div>
                </header> 
                <main className="layout-default__main">
                    <Outlet/>
                </main>
                <footer className="layout-default__footer">
                    Copyright @ 2025 by Quyenn22 
                </footer>
            </div>
        </>
    );
}

export default LayoutDefault;