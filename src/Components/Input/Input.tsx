import React, { ChangeEvent, FC } from 'react'

import styles from './Input.module.css';
import { Text } from '..';

interface InputProps {
    label: string;
    required?: boolean;
    error?: boolean;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ label, required, value, error, onChange }): React.JSX.Element => (
    <div className={styles.container}>
        {label && <p className={`${styles.label}${error ? ` ${styles.error}` : ''}`}>{label}{required ? <span> *</span> : null}</p>}
        <input value={value} className={`${styles.input}${error ? ` ${styles.errorInput}` : ''}`} onChange={onChange} />
        {error && <Text tag="p" text="Поле не заполнено" className={styles.errorText} />}
    </div>
)
