import React from 'react';
import Plus from './plus.svg';
import './button.scss';

interface ButtonProps {
    text: string,
    plus?: boolean,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({text, plus = false, onClick}) => {
    return (
        <div className={plus ? 'button plus' : 'button'} onClick={onClick}>
            <div className="button-container">
            {plus ? <img src={Plus} alt="plus" className="button-plus" /> : null}
            {text}
            </div>
        </div>
    );
};

export default Button;