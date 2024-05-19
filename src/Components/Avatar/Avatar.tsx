import React, { FC } from 'react'

import styles from './Avatar.module.css';

interface AvatarProps {
    source: string;
}

export const Avatar: FC<AvatarProps> = ({ source }): React.JSX.Element => (
    <img src={source} className={styles.image} />
)
