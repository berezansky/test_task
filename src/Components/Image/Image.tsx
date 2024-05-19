import React, { FC } from 'react'

import styles from './Image.module.css';

interface ImageProps {
    source: string;
}

export const Image: FC<ImageProps> = ({ source }): React.JSX.Element => (
    <img src={source} className={styles.image} />
)
