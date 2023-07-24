import { Outlet, NavLink, Link } from "react-router-dom";



import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>BETA testing for KPMG Information Transformer for Employees (KITE)</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                     
                                </NavLink>
                            </li>
                            
                            <li className={styles.headerNavLeftMargin}>
                                
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}></h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
