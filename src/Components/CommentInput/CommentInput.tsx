import React, { FC } from 'react'

import styles from './CommentInput.module.css';

interface CommentInputProps {
    label: string;
}

export const CommentInput: FC<CommentInputProps> = ({ label }): React.JSX.Element => (
    <div>
        {label && <p className={styles.label}>{label}</p>}
        <input className={styles.input} />
    </div>
)
