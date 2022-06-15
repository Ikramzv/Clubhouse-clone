import React from "react";
import style from '../../style/bottomSheet.module.css'
import upcomingStyle from '../../style/upcoming.module.css'
import { AiOutlineBell , AiOutlineCopy } from 'react-icons/ai'
import { BsUpload  , BsTwitter } from 'react-icons/bs'
import { CopyOutlined } from "@ant-design/icons";

export default function UpcomingSheet(props) {
    return (
        <div className={style.sheetContainer} >
            <div className={style.switch_line} ></div>
            <p>
                <span>Today 3:00 PM</span>
                <AiOutlineBell />
            </p>
            <div className={style.sheetContent} >
                <p>Sacred Cypher Sundays</p>
                <div>
                    <div className={`${upcomingStyle.imgContainer} ${style.imgContainer}`} >
                        <img src="/images/user1.jpg"  alt="user image" />
                        <img src="/images/user2.webp"  alt="user image"/>
                        <img src="/images/user1.jpg" alt="user image" />
                        <img src="/images/user2.webp" alt="user image" />
                    </div>
                    <p>w/Mummu Fresh , Ramil Nashashibi , sadia Nawab & binta Diallo room room for morning reflection , recitation , Chanting 
                    , prayer and sound healing freestylee cypher</p>
                </div>
            </div>
            <div className={style.social} >
                <span>
                    <BsUpload />
                    Share
                </span>
                <span>
                    <BsTwitter />
                    Tweet
                </span>
                <span>
                    <AiOutlineCopy />
                    Copy
                </span>
                <span>
                    Link
                </span>
                <span>
                    <AiOutlineCopy />
                    Add to Call
                </span>
            </div>
            <button className={style.joinBtn} >Join the room in progress</button>
        </div>
    )
}