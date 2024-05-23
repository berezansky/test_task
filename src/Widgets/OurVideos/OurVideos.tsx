import React, { useEffect, useState } from 'react'
import chunk from 'lodash/chunk';

import { apiService } from '@/Services';
import { Video } from '@/Models';

import { Slider } from '../Slider';

import styles from './OurVideos.module.css';
import { Text } from '@/Components';

export const OurVideos = (): React.JSX.Element | null => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        apiService.getAllVideos().then(allVideos => {
            allVideos?.length > 0 && setVideos(allVideos);
        });
    }, [])

    if (videos.length === 0) {
        return null;
    }

    return (
        <div>
            <Text 
                tag="h1" 
                className={styles.title} 
                text="Наши видео" />
            <div className={styles.ourVideosWrapper}>
                <Slider items={chunk(videos, 6)} />
            </div>
        </div>
    )
}
