import React from "react";
import { Link } from "react-router-dom";
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";

export default function Profile() {
    return (
        <>
        <div className={style.profileContainer} >
            <div className={exploreStyle.Header} >
                <div className={
                    `${exploreStyle.head} 
                    text-end mb-0`
                    }>
                    <Link to={'/home'}>
                        <img src="/images/icons8-back-96.png" alt="back icon" />
                    </Link>
                    <div className={style.actionBtn} >
                        <BsAt />
                        <BsUpload />
                        <AiOutlineSetting />
                    </div>
                </div>
            </div>
            <img src="/images/user1.jpg" className={style.profileImg} />
            <h4>Andy Borga</h4>
            <p>@andyborga</p>
            <div className={style.follow}>
                <p>
                    <span>10</span>
                    followers
                </p>
                <p>
                    <span>51</span>
                    following
                </p>
            </div>
            <button>Add a bio</button>
            <div className="mb-4">
                <button className="mb-0" >
                    <AiOutlineTwitter /> Add Twitter
                </button>
                <button className="mb-0" >
                    <AiOutlineInstagram /> Add Instagram
                </button>
            </div>
            <div className={style.nominated} >
                <img src="/images/user1.jpg" 
                className={`${style.profileImg}`} 
                alt="user img" />
                <div>
                    <p>Joined 14-July-2021</p>
                    <p>Nominated by <span>Florin Perez</span></p>
                </div>
            </div>
            <p>Member of </p>
            <button className={style.addMemberBtn} >
                <BsPlus />
            </button>
        </div>  
        </>
    )
}