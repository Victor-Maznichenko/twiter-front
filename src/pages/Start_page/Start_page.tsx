import React from 'react';
import Main from "./Main/Main";
import styles from "./Start_page.module.css";

function StartPage() {
    return (
        <div className={styles.wrapper}>
            <Main/>
        </div>
    );
}

export default StartPage;
