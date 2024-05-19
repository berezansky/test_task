import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { Text } from '@/Components';
import { TextType } from '@/Consts';
import { BannerBlock, Comment, VideoWithName } from '@/Widgets';
import { apiService } from '@/Services';

import styles from './SelectedVideo.module.css';

export const SelectedVideoPage = (): React.JSX.Element => {
    const [video, setVideo] = useState()
    const [comments, setComments] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            apiService.getVideo(id).then((videoInfo) => setVideo(videoInfo));
            apiService.getComments(id).then((commentsList) => setComments(commentsList.comments));
        }
    }, [])

    console.log(video, comments)

    return (
        <div className={styles.wrapper}>
            <div>
                <Text tag="h1" text="Выбранное видео" type={TextType.TITLE} />
                <VideoWithName />
                {comments.map(comment => (
                    <Comment />
                ))}
                <Text tag="h2" text="Оставьте комментарий" type={TextType.TITLE} />
                <Text tag="p" text="Что вы думаете об этом видео?" type={TextType.LABEL} />
            </div>
            <BannerBlock />
        </div>
    );
}
