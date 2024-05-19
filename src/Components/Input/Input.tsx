import React, { FC } from 'react'

import styles from './Input.module.css';

interface InputProps {
    label: string;
}

export const Input: FC<InputProps> = ({ label }): React.JSX.Element => (
    <div>
        {label && <p className={styles.label}>{label}</p>}
        <input className={styles.input} />
    </div>
)
