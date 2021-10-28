import React from 'react';
import LinkApp from '../Link/Link';
import './header.scss';
import logo from './logo.svg';

const Header = () => {
    return (
        <section className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt={logo}/>
                </div>
                <LinkApp text={'Форма'} link={"/form"} />
                <LinkApp text={'Превью'} link={"/preview"}/>
            </div>

        </section>
    );
};

export default Header;