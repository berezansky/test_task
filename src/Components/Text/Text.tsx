import React, { FC } from 'react'

import styles from './Text.module.css';

interface TextProps {
    tag: string;
    text: string;
    type: string;
    className?: string;
}

export const Text: FC<TextProps> = ({ tag, text, type, className }): React.JSX.Element => {
    return React.createElement(tag, { className: `${styles[type]}${className ? ` ${className}` : ''}` }, text)   
}
    
