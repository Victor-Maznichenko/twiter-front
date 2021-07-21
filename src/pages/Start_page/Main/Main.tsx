import React from 'react';
import Info from "./Info/Info";
import Img from "./Img/Img";
import SignUp from "./Popups/SignUp/SignUp";
import SignIn from "./Popups/SignIn/SignIn";
import styles from "./Main.module.css";

function Main() {
    return (
        <main className={styles.main}>
            <Img/>
            <Info/>
            <SignUp/>
            {/*<SignIn/>*/}
        </main>
    );
}

export default Main;
