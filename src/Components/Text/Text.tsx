import React, { FC } from 'react'

interface TextProps {
    tag: string;
    text: string;
    className?: string;
}

export const Text: FC<TextProps> = ({ tag, text, className }): React.JSX.Element => {
    return React.createElement(tag, { className: className ? className : '' }, text)   
}
    
