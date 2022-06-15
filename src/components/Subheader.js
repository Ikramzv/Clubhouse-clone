import React from "react";
import style from '../style/explore.module.css'
import { Link } from "react-router-dom";

export default function Subheader(props) {
    return (
        <>
            <div className={style.head} >
                <Link to={'/home'}>
                    <img src="/images/icons8-back-96.png" alt="back arrow"  />
                </Link>
                <h3>
                    {props.pageTitle}
                </h3>
            </div>
        </>
    )
}