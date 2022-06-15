import React from "react";
import { Link } from "react-router-dom";
import style from '../style/header.module.css'

export default function Header() {
    return (
        <div className={style.Header} >
            <Link to={'/explore'}>
                <img src="/images/icons8-search-32.png" alt="search"  />
            </Link>
            <div className={style.nav_items}>
                <Link to={'/friends_invite'}> 
                    <img src="/images/icons8-invite-32.png" alt="invite" />
                </Link>

                <Link to={'/upcoming'}> 
                    <img src="/images/icons8-calendar-32.png" alt="" />
                </Link>

                <Link to={'/activity'}> 
                    <img src="/images/icons8-notification-32.png" alt="" />
                </Link>

                <Link to={'/profile'}> 
                    <img src="/images/icons8-user-32.png" alt="" />
                </Link>
            </div>
        </div>
    )
}