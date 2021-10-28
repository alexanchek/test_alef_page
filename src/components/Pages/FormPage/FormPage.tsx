import React, { useState } from 'react';
import BlockTitle from '../../BlockTitle/BlockTitle';
import Input from '../../Input/Input';
import './formpage.scss';

import { useDispatch} from 'react-redux';
import Button from '../../Button/Button';
import { setchild, setinfo } from '../../../store/actions/InfoPersonalActions';

interface formValuesProps {
    name: string,
    age: string
}

const Form = () => {
    const [name, setName] = React.useState('');
    const [age, setAge] = useState('');
    const [formValues, setFormValues] = useState([{name: '', age: ''}]);

    const dispatch = useDispatch();

    const handleClickSave = () => {
        dispatch(setinfo({name, age}));
        dispatch(setchild(formValues));
    }

    const handleClickAdd = () => {
        if (formValues.length < 5) {
            setFormValues([...formValues, {name: '', age: ''} ])
        }
    }

    const handleChange = (index:number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = String(e.target.name);
        console.log(formValues);

        let newArr = [...formValues];
        newArr[index][field as keyof formValuesProps] = e.target.value;

        setFormValues(newArr);
    }

    const removeFormField = (index: number) => (e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (formValues.length === 1) {
            return;
        }

        let newArr = [...formValues];
        newArr.splice(index,1);
        setFormValues(newArr);

        console.log(index);
    }

    return (
        <section className="content">
            <div className="content__container">
                <div className="personal-info__container">
                    <BlockTitle text={'Персональные данные'} />
                    <Input nameInput={'Имя'} setValue={setName}/>
                    <Input nameInput={'Возраст'} setValue={setAge}/>
                </div>

                <div className="children-info__container">
                    <div className="children-info__header">
                        <BlockTitle text={"Дети (Макс. 5)"} />
                        { formValues.length === 5 ? null : <Button text={"Добавить ребенка"} plus={true} onClick={handleClickAdd} />}
                    </div>

                    <div className="children">
                        <form className="form__children" onSubmit={handleClickSave}>
                            {formValues.map((element,index) => {
                                return (
                                    <div className="form-inner__children" key={index}>
                                        <div className="input__box_child">
                                            <label className="input__label">Имя</label>
                                            <input type="text" name="name" value={element.name || ""} onChange={handleChange(index)} className="input__field" placeholder="Введите имя"/>
                                        </div>
                                        <div className="input__box_child">
                                            <label className="input__label">Возраст</label>
                                            <input type="text" name="age" value={element.age || ""} className="input__field" onChange={handleChange(index)} placeholder="Введите возраст"/>
                                        </div>
                                        <span onClick={removeFormField(index)} className="remove">Удалить</span>
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                </div>
                <Button text={"Сохранить"} onClick={handleClickSave} />
            </div>
        </section>
    );
};

export default Form;