import React from 'react'
import bannerImg from '../../Assets/Images/bannerImage.png'

import styles from './Banner.module.css';

export const Banner = (): React.JSX.Element =>
    <img src={bannerImg} className={styles.banner} />
