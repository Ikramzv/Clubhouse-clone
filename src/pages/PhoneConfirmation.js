import React , {useState} from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import style from '../style/phoneConfirm.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function PhoneConfirmation() {
    const [value , setValue] = useState()

    return (
        <div className={style.phoneConfirmContainer}>
            <Link to={'/'} className={style.backBtn} >
                <img src="/images/icons8-back-96.png" alt="back image" />
            </Link>
            <h1 className="text-center" >Enter your phone</h1>
            <PhoneInput international defaultCountry="AZ" value={value} onChange={setValue} />
            <p>
                By entering your number , you're agreeing to our <br></br> <span>Terms , Service and Privacy Plicy. Thanks !</span>
            </p>
            <Link to={'/code_confirm'} className="primaryBtn d-flex align-items-center" >
                Next <img src="/images/icons8-arrow-32.png" alt="" className="ml-1" />
            </Link>
        </div>
    )

}