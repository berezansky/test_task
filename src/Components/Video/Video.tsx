import React, { FC } from 'react'

import { TextType } from '@/Consts';

import { Image } from '../Image';
import { Text } from '../Text';

import styles from './Video.module.css';
import { Button } from '../Button';

interface VideoProps {
    imageSource: string;
    description: string;
}

export const Video: FC<VideoProps> = ({ imageSource, description }): React.JSX.Element => (
    <div className={styles.video}>
        <Image source={imageSource} />
        <div className={styles.videoDescription}>
            <Text tag='p' text={description} type={TextType.VIDEO_DESCRIPTION as string} />
            <Button color='var(--color-dark-gray)' textType={TextType.BUTTON} onClick={() => {}} text='Смотреть' />
        </div>
    </div>
)
