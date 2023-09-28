import React from "react";
import './header.css';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-up">
                    <div>
                        <img src="images/logo.png" />
                    </div>
                    <div>
                        <img src="images/menu-gamburger.png" />
                    </div>
                </div>
                <div className="header-title">
                    <div className="ht-bt">
                        РЕАЛИЗУЕМ КРУПНЕЙШИЕ
                        ПРОЕКТЫ В Украине
                    </div>
                    <div className="ht-st">
                        стадионы, газопроводы, мосты, дамбы
                    </div>
                </div>
            </div>
        </header >
    )
}