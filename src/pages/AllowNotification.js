import React from "react";
import style from '../style/phoneConfirm.module.css'
import { Link } from "react-router-dom";

export default function AllowNotification() {
    return (
        <div className={style.phoneConfirmContainer} >
            <Link to={'/code_confirm'} className={style.backBtn} >
                <img src="/images/icons8-back-96.png" alt="" />
            </Link>
            <div className="text-center" >
                <h1 className="mb-4" >Last , important step</h1>
                <h1 className="mb-3" >
                    Enable notifications to know when people are talking
                </h1>
                <div className={style.notificationContainer} >
                    <div className="p-3">
                        <h3>"Clubhouse" Would Like to Send Notifications </h3>
                        <p>Notifications may include alerts , sounds , icons and badges</p>
                    </div>
                    <div className={style.action_btn}>
                        <Link to={'/home'} >
                            Don't Allow
                        </Link>
                        <Link to={'/home'} >
                            Allow
                        </Link>
                        <img src="images/icons8-hand-96.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}