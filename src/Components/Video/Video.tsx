import React, { FC } from 'react'

import { Image } from '../Image';
import { Text } from '../Text';

import styles from './Video.module.css';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

interface VideoProps {
    id: number;
    imageSource: string;
    description: string;
    title: string;
    subtitle: string;
}

export const Video: FC<VideoProps> = ({ id, imageSource, description, title, subtitle }): React.JSX.Element => {
    const navigate = useNavigate();

    return (
    <div className={styles.video}>
        <Image source={imageSource} />
        <div className={styles.videoDescription}>
            <Text tag='p' text={description} />
            <Button color='var(--color-dark-gray)' onClick={() => navigate(`/${id}`)} text='Смотреть' />
        </div>
        <div className={styles.videoInfo}>
            <Text tag='p' text={title} />
            <Text tag='p' text={subtitle} />
        </div>
    </div>
    )
}
