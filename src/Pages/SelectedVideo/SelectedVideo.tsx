import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { Text } from '@/Components';
import { AddComment, BannerBlock, Comment, VideoWithName } from '@/Widgets';
import { apiService } from '@/Services';

import styles from './SelectedVideo.module.css';
import { VideoInfo } from '@/Models';

export const SelectedVideoPage = (): React.JSX.Element => {
    const [video, setVideo] = useState<VideoInfo | null>(null)
    const [comments, setComments] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            apiService.getVideo(id).then((videoInfo) => setVideo(videoInfo));
            apiService.getComments(id).then((commentsList) => setComments(commentsList.comments));
        }
    }, [])

    console.log(comments)

    return (
        <div className={styles.container}>
            <div>
                <Text tag="h1" text="Выбранное видео" className={styles.title} />
                <VideoWithName video={video} />
                {comments.map(comment => (
                    <Comment comment={comment} />
                ))}
                <Text tag="h2" text="Оставьте комментарий" className={styles.addCommentTitle} />
                <Text tag="p" text="Что вы думаете об этом видео?" className={styles.addCommentSubtitle} />
                <AddComment />
            </div>
            <BannerBlock showOnSmallScreen />
        </div>
    );
}
