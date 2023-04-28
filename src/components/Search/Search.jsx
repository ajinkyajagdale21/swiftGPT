import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import SendIcon from "@mui/icons-material/Send";
import { postMessageToAPI } from "../../Services/Api";
import Typewriter from "typewriter-effect";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';

export const Search = ({ result, setResult }) => {
    const { isAuthenticated } = useAuth0();
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);
    const InputSubmitHandler = async (e) => {
        e.preventDefault();
         
        if(isAuthenticated){

            try {
              setLoading(true);
              let res = await postMessageToAPI(inputText);
              setResult(res);
                
            } catch (err) {
                toast.error("Sorry, something went wrong. Please try again later. ")
            }
        }
        else{
            toast.warning('please login to continue')
        }

    };

    useEffect(()=>{
       if(result){
        setLoading(false)
        setInputText("");
       }
    },[result])

    return (
        <div>
            <form
                className={styles.searchContainer}
                onSubmit={InputSubmitHandler}
            >
                <input
                    className={styles.searchInput}
                    placeholder="Send a message"
                    onChange={(e) => {
                        if(isAuthenticated)
                        setInputText(e.target.value);
                    }}
                />
                <button type="submit" className={styles.sendBtn}>
                    <SendIcon />
                </button>
            </form>
            {loading ? (
              <div className="d-flex justify-content-center">
                <>
                    <div className="spinner-grow text-success mx-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success mx-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success mx-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success mx-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success mx-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </>   
                </div>
            ) : (
                <>
                    {result && (
                        <div className={styles.outputContainer}>
                            <div className={styles.outputBox}>
                                <p>
                                    <Typewriter
                                        options={{
                                            strings: [result],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                            cursor: "_",
                                            deleteSpeed: Infinity,
                                        }}
                                    />
                                </p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
        
    );
};
