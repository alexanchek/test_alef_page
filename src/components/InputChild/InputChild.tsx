import React from 'react';
import './inputchild.scss';

interface InputChildProps {
    nameInput: string;
}

const InputChild: React.FC<InputChildProps> = ({nameInput}) => {
    return (
            <div className="input__box_child">
                <label className="input__label">{nameInput}</label>
                <input type="text" className="input__field" placeholder="Введите имя"/>
            </div>
    );
};

export default InputChild;