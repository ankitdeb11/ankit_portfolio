import React from 'react';
import "./footer.css";


const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <h1 className="footer__title">Thanks for visiting. Hasta la vista!</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>


                </ul>

                <div className="footer__social">
                    <a href="https://stackoverflow.com/users/18478837/ankit-deb" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class='bx bxl-stack-overflow' ></i>
                    </a>

                    <a href="https://discord.gg/Uf8KpEnwuH" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class='bx bxl-discord-alt' ></i>
                    </a>

                    <a href="https://twitter.com/codewell11" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class='bx bxl-twitter' ></i>
                    </a>

                </div>


                <span className='footer__copy'> 
                Portfolio is to be updated further. <br />
                &#169; Ankit Deb 2024. All Rights Reserved.
                </span>

            </div>
        </footer>
    )
}

export default Footer