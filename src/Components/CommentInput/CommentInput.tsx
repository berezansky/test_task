import React, { ChangeEvent, FC } from 'react'

import styles from './CommentInput.module.css';

interface CommentInputProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CommentInput: FC<CommentInputProps> = ({ label, value, onChange }): React.JSX.Element => (
    <div>
        {label && <p className={styles.label}>{label}</p>}
        <textarea value={value} onChange={onChange} className={styles.input} />
    </div>
)
