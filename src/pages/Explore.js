import React from "react";
import style from '../style/explore.module.css'
import { DownOutlined , FireOutlined } from '@ant-design/icons'
import data from '../data/explore.json'
import { Input } from "antd";
import Subheader from "../components/Subheader";
 
export default function Explore() {

    const { people , conservation } = data

    return (
        <div className={style.exploreContainer} >
            <div className={style.Header} >
                <Subheader pageTitle='Explore' />  
                <Input style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '10px',
                    padding: '.3em 1em',
                    border: 'none',
                    boxShadow: 'none'
                }}
                size='large' 
                placeholder="Find People and  Clubs"
                prefix={<img src="/images/icons8-search-32.png" 
                             alt="search"
                             width={'20px'}/>}
                >
                </Input>
            </div>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer} >
                {people.map((item) => {
                    return  <div key={item.title}>
                                <div className="d-flex align-items-center">
                                    <img src="/images/user1.jpg" alt="person" />
                                    <div className="ms-2" >
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <button>Follow</button>
                                
                            </div>
                })}
                <button className={style.showMore} >
                    Show More People <DownOutlined />
                </button>
            </div>
            <h6>FIND CONVERSATIONS ABOUT ..</h6>
                <div className="mx-0 row" >
                    {conservation.map((item) => {
                        return  <div className="col-6 px-2 mb-3" >
                                    <div className={style.conversationCard}>
                                        <h6>
                                            <FireOutlined /> {item.title}
                                        </h6>    
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                    })}
                </div>
        </div>
    )
}