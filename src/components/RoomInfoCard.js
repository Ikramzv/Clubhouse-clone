import React , { useState } from "react";
import style from '../style/roomCardInfo.module.css'
import data from '../data/roomCard.json'
import { BsChatDots , BsChatDotsFill , BsFillPersonFill } from 'react-icons/bs'

export default function RoomInfoCard(props) {
    return (
        <>
            {data.map((item) => {
                return  <div key={item.id.toString()} >
                            <div>
                                <div className={style.roomCardContainer} >
                                    <h6>{item.title}</h6>
                                    <h2>{item.sub_title}</h2>
                                    <div className={style.roomMembers}>
                                        <div>
                                            <img src="/images/user1.jpg" />
                                            <img src="/images/user2.webp" />
                                        </div>
                                        <div>
                                            {item.members.map(member => {
                                                return  <p key={member.first_name.toString()} >
                                                            {member.first_name} {member.last_name} <BsChatDots />
                                                        </p>
                                            })}
                                            <p className="d-flex align-items-center">
                                                <span className="me-2">1.8</span> <BsFillPersonFill />
                                                <span className="mx-2">{" "}</span>
                                                <span className="me-2">5</span> <BsChatDotsFill />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            })}
        </>
    )
}