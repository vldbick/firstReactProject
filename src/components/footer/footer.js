import React from "react";
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container f-c">
                <div className="footer-title">
                    <div className="ft-b">САМЫЕ УМНЫЕ ПРОЕКТЫ</div>
                    <div className="ft-s">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ</div>
                </div>
                <div className="footer-but">
                    <button>
                        <img src="images/mail.png"/>
                        ВАШ ЗАПРОС
                    </button>
                </div>
            </div>
        </footer>
    )
} 