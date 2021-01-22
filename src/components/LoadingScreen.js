import React, { useState } from 'react';
import "../css/LoaderScreen.css"
export default function LoadingScreen() {
    return (
        <div style={{
            display: "flex",
            marginTop: '15%',
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div class="loader" />
        </div>
    )
}
