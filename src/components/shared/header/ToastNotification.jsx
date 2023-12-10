import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai"

export default function ToastNotification({ active }) {
    return (
        <div className={`toast-notification ${active ? "active" : ""}`}>
            <p><AiFillCheckCircle />Item added to Favorites.</p>
        </div>
    )
}
