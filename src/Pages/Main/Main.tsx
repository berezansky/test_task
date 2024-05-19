import React from 'react'
import { BannerBlock, OurVideos } from '@/Widgets';

import styles from './Main.module.css';

export const MainPage = (): React.JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <OurVideos />
            <BannerBlock />
        </div>
    );
}
