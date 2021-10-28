import React from 'react';
import { Link } from 'react-router-dom'
import './link.scss';

interface LinkProps {
    text: string;
    link: string;
}

const LinkApp: React.FC<LinkProps> = ({text, link}) => {
    return (
        <div className="link__container">
            <Link to={link} className="link">{text}</Link>
        </div>
    );
};

export default LinkApp;