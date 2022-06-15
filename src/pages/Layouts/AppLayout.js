import React from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="app_layout">
            <Outlet />
        </div>
    )
}