import React, { useState } from "react";
import Subheader from "../components/Subheader";
import style from '../style/upcoming.module.css'
import exploreStyle from '../style/explore.module.css'
import { AiOutlineBell } from 'react-icons/ai'
import BottomSheet from "../components/BottomSheet";

export default function Upcoming() {
    
    const [sheetVisible , setSheetVisible] = useState(false)


    return (
        <>
            <div className={style.upcomingContainer} >
                <div className={exploreStyle.Header} >
                    <Subheader pageTitle="UPCOMING FOR YOU" />
                </div>
                <div>TODAY</div>

                {/* { Avoid for repeating same thing few times }  */}

                {[...new Array(8)].map((e , i) => {
                    return (
                        <div key={i} className={style.upcoming} onClick={() => {
                            setSheetVisible(true)
                        }} >
                        <p>
                            <span>3:00 PM</span>
                            <AiOutlineBell />
                        </p>
                        <div>
                            <p>Sacred Cypher Sundays</p>
                            <div className={style.imgContainer} >
                                <img src="/images/user1.jpg" />
                                <img src="/images/user2.webp" />
                                <img src="/images/user1.jpg" />
                                <img src="/images/user2.webp" />
                            </div>
                            <p>w/Mummu Fresh , Ramil Nashashibi , sadia Nawab & binta Diallo room room for morning reflection , recitation , Chanting 
                                , prayer and sound healing freestylee cypher
                            </p>
                        </div>
                    </div>
                    )
                } )}
            </div>
            <BottomSheet 
                sheetVisible = { sheetVisible }
                setSheetVisible = {(item) => {
                    setSheetVisible(item)
                }}
                sheetTitle = 'upcoming'
            />
        
        </>

        
    )
}