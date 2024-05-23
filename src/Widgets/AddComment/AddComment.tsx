import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router';
import { Button, CommentInput, Input } from '@/Components';
import { apiService } from '@/Services';

import styles from './AddComment.module.css';

export const AddComment = (): React.JSX.Element => {
    const [buttonText, setButtonText] = useState('Отправить');
    const [buttonColor, setButtonColor] = useState('var(--color-blue)');
    const [buttonError, setButtonError] = useState(false);
    const [errors, setErrors] = useState({
        fio: false,
        city: false,
    })
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [comment, setComment] = useState('');

    const { id } = useParams();

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const handleChangeCity = (e: ChangeEvent<HTMLInputElement>): void => {
        setCity(e.target.value);
    }

    const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setComment(e.target.value);
    }

    const handleSendComment = (): void => {
        if (!name) {
            setErrors((value) => ({ ...value, fio: true }))
            setButtonText('Произошла ошибка')
            setButtonError(true)
        }

        if (!city) {
            setErrors((value) => ({ ...value, city: true }))
            setButtonText('Произошла ошибка')
            setButtonError(true)
        }

        if (name && city && id) {
            apiService.sendComment(id)
            setButtonText('Успешно')
            setButtonColor('var(--color-green)')
            setButtonError(false)
        }
    }

    return (
        <div className={styles.container}>
            <Input value={name} error={errors.fio} label="Фамилия и имя" required onChange={handleChangeName} />
            <Input value={city} error={errors.city} label="Город" required onChange={handleChangeCity} />
            <CommentInput value={comment} label="Ваше мнение" onChange={handleChangeComment} />
            <div>
                <Button text={buttonText} color={buttonColor} onClick={handleSendComment} className={styles.send} error={buttonError} />
            </div>
        </div>
    )
}
