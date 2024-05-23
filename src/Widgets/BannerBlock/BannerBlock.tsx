import React, { FC } from 'react'
import { Banner } from '@/Components';

import styles from './BannerBlock.module.css';

interface BannerBlockProps {
    showOnSmallScreen?: boolean
}

export const BannerBlock: FC<BannerBlockProps> = ({ showOnSmallScreen }): React.JSX.Element => {

    return (
        <div className={`${styles.bannerWrapper}${showOnSmallScreen ? ` ${styles.showOnSmallScreen}` : ''}`}>
            <Banner />
        </div>
    )
}
