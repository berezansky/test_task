import React, { FC } from 'react'
import { Comment as CommentModel } from '@/Models';

import styles from './Comment.module.css';
import { Text } from '@/Components';

interface CommentProps {
    comment: CommentModel;
}

export const Comment: FC<CommentProps> = ({ comment }): React.JSX.Element => {

    return (
        <div className={styles.container}>
            <div className={styles.authorWrapper}>
                <div className={styles.authorInfo}>
                    <Text tag="p" text={comment.author} />
                    <Text tag="p" text={comment.description} />
                </div>
            </div>
            <Text tag="p" text={comment.comment} className={styles.comment} />
        </div>
    )
}
