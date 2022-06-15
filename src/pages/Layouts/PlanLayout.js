import React from "react";
import { Outlet } from "react-router-dom";

export default function PlanLayout() {
    return (
        <div style={{width: '100%' , maxWidth: '500px' , margin: 'auto'}}>
            <Outlet />
        </div>
    )
}