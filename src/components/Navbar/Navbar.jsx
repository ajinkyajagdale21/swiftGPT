import React from "react";
import styles from '../Navbar/Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className={`container-fluid ${styles.navbarContainer}`}>
                <h3 className="m-0">SwiftGPT</h3>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <button  className={styles.navItems}>Documentation</button>
                    <button className={styles.contactBtn}>Contact</button>
                </div>
            </div>
        </nav>
    );
};
