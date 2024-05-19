import React from 'react'
import { Banner } from '@/Components';

import styles from './BannerBlock.module.css';

export const BannerBlock = (): React.JSX.Element => {

    return (
        <div className={styles.bannerWrapper}>
            <Banner />
        </div>
    )
}
