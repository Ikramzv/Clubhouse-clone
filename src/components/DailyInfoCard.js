import React from "react";
import style from '../style/dailyInfoCard.module.css'
import data from '../data/dailyCard.json'

export default function DailyInfoCard() {
    return (
        <div className={style.dailyCard} >
            {data.map((item) => {
                return <div key={item.title.toString()} >
                            <span className=''>{item.Time} </span>
                            <div>
                                <span className=''>{item.title}</span>
                                <p className=''>{item.description}</p>
                            </div>
                        </div> 
            })}
        </div>
    )
}