import React from 'react';
import Info from "./Info/Info";
import Img from "./Img/Img";
import styles from "./Main.module.css";

function Main() {
    return (
        <main className={styles.main}>
            <Img/>
            <Info/>
        </main>
    );
}

export default Main;
