import React from 'react';
import './input.scss';

interface InputProps {
    nameInput: string;
    setValue?: any;
    width?: number;
}

const Input: React.FC<InputProps> = ({nameInput, setValue, width = '100%'}) => {
    return (
        <div className="input__box">
            <label className="input__label">{nameInput}</label>
            <input type="text" className="input__field" placeholder="Введите имя" onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};

export default Input;