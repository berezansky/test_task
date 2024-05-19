import React, { useEffect, useState } from 'react'
import chunk from 'lodash/chunk';

import { apiService } from '@/Services';
import { Video } from '@/Models';

import { Slider } from '../Slider';

import styles from './OurVideos.module.css';
import { Text } from '@/Components';
import { TextType } from '@/Consts';

export const OurVideos = (): React.JSX.Element | null => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        apiService.getAllVideos().then(allVideos => {
            setVideos(allVideos);
        });
    }, [])

    if (videos.length === 0) {
        return null;
    }

    return (
        <div className={styles.ourVideosWrapper}>
            <Text tag="h1" type={TextType.TITLE} text="Наши видео" />
            <Slider items={chunk(videos, 6)} />
        </div>
    )
}
