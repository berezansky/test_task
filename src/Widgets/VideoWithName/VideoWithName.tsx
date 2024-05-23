import React, { FC } from 'react'
import { VideoInfo } from '@/Models';
import { Button, Image, Text } from '@/Components';

import styles from './VideoWithName.module.css';

interface VideoWithNameProps {
    video: VideoInfo | null;
}

export const VideoWithName: FC<VideoWithNameProps> = ({ video }): React.JSX.Element => {

    return (
        <div className={styles.wrapper}>
            {video?.image ? <Image source={video.image} /> : null}
            <div className={styles.infoWrapper}>
                {video?.title ? <Text tag="h2" text={video.title} /> : null}
                <div className={styles.labels}>
                    {video?.labels?.fullhd ? <Text tag="span" text="Full HD" /> : null}
                    {video?.labels?.subtitles ? <Text tag="span" text="СУБ" /> : null}
                    {
                        video?.labels?.age_restriction ?
                            <Text tag="span" text={video.labels.age_restriction} /> :
                            null
                    }
                </div>
                <div className={styles.info}>
                    {video?.production?.year ? (
                        <Text tag="span" text={`${video.production.year} `} />
                    ) : null}
                    {video?.genre ? video.genre.map(genre => (
                        <>
                            <span className={styles.dot} />
                            <Text tag="span" text={`${genre}, ${video?.production?.country}`} />
                        </>
                    )) : null}
                </div>
                <Button className={styles.bigButton} color='var(--color-blue)' onClick={() => {}} text='Смотреть' description="осталось смотреть 7 дней" />
                <Button className={styles.bigButton} color='var(--color-green)' onClick={() => {}} text='СМОТРЕТЬ за 1 ₽ без рекламы' />
                <div className={styles.buttons}>
                    <Button color='var(--color-dark)' iconName="play" className={styles.trailerButton} onClick={() => {}} text='Трейлер' />
                    <Button color='var(--color-dark)' iconName="bookmark" onClick={() => {}} />
                    <Button color='var(--color-dark)' iconName="favorite" onClick={() => {}} />
                    <Button color='var(--color-dark)' iconName="share" onClick={() => {}} />
                </div>
            </div>
        </div>
    )
}
