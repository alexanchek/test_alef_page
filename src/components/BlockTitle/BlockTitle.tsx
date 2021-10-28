import React from 'react';
import './blockTitle.scss';

interface BlockTitleProps {
    text: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ({text}) => {
    return (
        <div className="block-title">
            {text}            
        </div>
    );
};

export default BlockTitle;