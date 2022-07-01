import React from 'react';
import { Link } from 'react-router-dom';
import "./headerStyle.css"
import logo from "../pictures/logo0.png"
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {t, i18n} = useTranslation()

    return (
        <div>
            <div className="header">
                <div className="logo" style={{cursor:'pointer'}}>
                    <Link to="/"><img src={logo} alt="شعار موقع اقتباس" title="شعار موقع اقتباس"/></Link>
                </div>
                <div className="nav-bar">
                    <ul className={i18n.language==="en"?"navigation navigation-en":"navigation"}>
                        <li className="list-item"><Link to="/">{t('home')}</Link></li>
                        <li className="list-item"><Link to="/people">{t('speakers')}</Link></li>
                        <li className="list-item"><Link to="/about">{t("about")}</Link></li>
                        {i18n.language==="en"?
                        (<li className="list-item lang" onClick={()=>i18n.changeLanguage("ar")}>
                            <p>
                                <span className="flag-icon flag-icon-egy"></span>AR
                            </p>
                        </li>):
                        (<li className="list-item lang" onClick={()=>i18n.changeLanguage("en")}>
                            <p>
                                <span className="flag-icon flag-icon-gbr"></span>EN
                            </p>
                        </li>)
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;