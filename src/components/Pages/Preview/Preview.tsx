import React from 'react';
import BlockTitle from '../../BlockTitle/BlockTitle';

import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

import './preview.scss';


const Preview = () => {
    const {userInfo} = useSelector((state: RootState) => state.infoPersonal);
    const {childInfo} = useSelector((state: RootState) => state.infoChildren);

    return (
        <section className="content">
        <div className="content__container">
            <div className="personal-info__container">
                <BlockTitle text={'Персональные данные'} />
                <div className="preview-personal">
                    {userInfo?.name && userInfo?.age ? `${userInfo?.name}, ${userInfo?.age} лет` : 'Заполните пожалуйста информацию о себе'}
                </div>
            </div>
            
            <div className="personal-info__container">
                <BlockTitle text={'Дети'} />

                { childInfo.length > 0
                ? childInfo.map((element) => {
                    return (
                        <div className="preview-children__box">
                            <div className="preview-children__container">
                                <div className="preview-children__element">{element.name}, {element.age} лет</div>
                            </div>
                        </div>
                    )
                })
                :  "Заполните пожалуйста информацию о детях"}



            </div>
        </div>
        </section>
    );
};

export default Preview;
