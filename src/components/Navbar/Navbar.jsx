import React, { useEffect, useState } from "react";
import styles from '../Navbar/Navbar.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';
export const Navbar = () => {
    const { loginWithRedirect , isAuthenticated,user,logout,isLoading } = useAuth0();
    const loginHandler=()=>{
        loginWithRedirect()  
    }
    useEffect(()=>{
       
        if( ! isLoading){
            if(isAuthenticated){
                toast.success(`Welcome ${user.name}`)
            }
            else{
                toast.warning('please login to continue')
            }
        }
    },[isAuthenticated,isLoading])
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
                    <a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noreferrer">
                        <button  className={styles.navItems}>Documentation</button>
                    </a>
                    <a href="https://ajinkyajagdale.netlify.app/#Contact" target="_blank" rel="noreferrer">
                        <button  className={styles.navItems}>Contact</button>
                    </a>
                    {
                     isAuthenticated? 
                     <button  className={styles.contactBtn} onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                     :
                    <button  className={styles.contactBtn} onClick={loginHandler}>Login</button>
                    }
                </div>
            </div>
        </nav>
    );
};
