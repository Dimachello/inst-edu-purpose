import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <ul className="links-list">
                <li><Link to="" className="link">о нас</Link></li>
                <li><Link to="" className="link">поддержка</Link></li>
                <li><Link to="" className="link">пресса</Link></li>
                <li><Link to="" className="link">API</Link></li>
                <li><Link to="" className="link">вакансии</Link></li>
                <li><Link to="" className="link">конфиденциальность</Link></li>
                <li><Link to="" className="link">условия</Link></li>
                <li><Link to="" className="link">директория</Link></li>
                <li><Link to="" className="link">профили</Link></li>
                <li><Link to="" className="link">хештеги</Link></li>
                <li><Link to="" className="link">язык</Link></li>
                </ul>
                <p className="authority">© Instagram от Facebook, 2019</p>
        </footer>
    )
}

export default Footer;