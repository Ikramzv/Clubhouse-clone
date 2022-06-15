import React , {useState} from "react";
import DailyInfoCard from "./DailyInfoCard";
import Header from "./Header";
import RoomInfoCard from "./RoomInfoCard";
import style from '../style/home.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3 } from 'react-icons/bs'
import data from '../data/roomCard.json'
import BottomSheet from "./BottomSheet";
import newRoomData from '../data/newRoom.json'

export default function Home() {

    const [itemsVisible , setItemsVisible] = useState(true)
    const [sheetVisible , setSheetVisible] = useState(false)
    const [sheetCreateRoom , setSheetCreateRoom] = useState(false)
    const [loaderVisibility , setLoaderVisibility] = useState(false)
    const [cardId , setCardId] = useState(1)

    return(
        <>
            {loaderVisibility ? (
                <div style={{
                    position: "fixed" , 
                    top: '0' ,
                    left: '0',
                    bottom: '0',
                    right: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center' 
                    }} >
                        <img src="/images/laoder.gif" style={{width: '300px'}} alt="loader gif" />
                    </div>
            ) : ''}
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.action_btn} >
                <button onClick={() => {
                    setSheetVisible(true)
                }} >
                    <AiOutlinePlus className="me-2"  />
                    Start a Room
                </button>
                <button>
                    <BsGrid3X3 />
                </button>
            </div>
            <BottomSheet 
                sheetTitle = 'start room'
                setSheetVisible = {(item) => setSheetVisible(item)}
                sheetVisible = { sheetVisible }
                cardDetail = {data.find((item) => item.id === cardId)}
                setItemsVisible = {(item) => setItemsVisible(item)}
                setSheetCreateRoom = {(item) => {
                    setLoaderVisibility(true)
                    setTimeout(() =>{
                        setSheetCreateRoom(item)
                        setLoaderVisibility(false)
                    } , 1000)
                }}

            />
            <BottomSheet 
                sheetTitle = 'new room'
                setSheetVisible = {(item) => {
                    setSheetCreateRoom(item)
                    console.log(item);
                }}
                sheetVisible = { sheetCreateRoom }
                cardDetail = { newRoomData }
                setItemsVisible = {(item) => setItemsVisible(item)}
            />
        </>
    )
}