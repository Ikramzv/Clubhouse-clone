import React , {useState} from "react";
import style from '../../style/roomDetail.module.css'
import { AiOutlineFile , AiOutlinePlus } from 'react-icons/ai'
import { BsMicMuteFill , BsMicFill } from 'react-icons/bs'
import { FaHandPeace , FaHandPaper } from 'react-icons/fa'

export default function NewRoom(props) {

    const [micMuteVisible , setMicMuteVisible] = useState(true)
    const [itemsVisible , setItemsVisible] = useState(true)
    const card = props.cardDetail;

    return (
        <>
            <div className={style.roomDetailContainer} >
                <div className={style.head} >
                    <div className="d-flex align-items-center" >
                        <a href="#" onClick={() => props.setSheetVisible(false)} >
                            <img src="/images/icons8-back-96.png" alt="back arrow" className={style.arrowIcon} />
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile />
                        <img src="/images/user1.jpg" alt="user" className={style.profileImg}  />
                    </div>
                </div>
                <div className={style.roomDetailCard} >
                    <div className="d-flex align-items-center justify-content-between flex-wrap" style={{padding: '.5em 1em'}} >
                        {card.members.map((item) => {
                            return  <div className={style.memberContainer} >
                                        {micMuteVisible ? (
                                            <div className={style.audioIcon} >
                                                <BsMicMuteFill />
                                            </div>
                                        ) : ''}
                                        <img  src={item.photo} alt="user-1" />
                                        <p>
                                            <span>*</span>
                                            {item.first_name}
                                        </p>
                                    </div>
                        })}
                    </div>
                </div>
                <div className={style.Footer} >
                        <button onClick={() => {props.setSheetVisible(false)}} >
                            <FaHandPeace />
                            <span>Leave Quietly</span>
                        </button>
                        <div>
                            <button>
                                <AiOutlinePlus />
                            </button>
                            <button>
                                <FaHandPaper />
                            </button>
                            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                                {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}