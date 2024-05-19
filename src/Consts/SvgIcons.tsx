import { ReactComponent as PlayIcon } from '@/Assets/Icons/play.svg';
import { ReactComponent as ShareIcon } from '@/Assets/Icons/share.svg';
import { ReactComponent as BookmarkIcon } from '@/Assets/Icons/bookmark.svg';
import { ReactComponent as FavoriteIcon } from '@/Assets/Icons/favorite.svg';
import { ReactComponent as KinopoiskIcon } from '@/Assets/Icons/kinopoisk.svg';

/**
 * Модель переменной с набором иконок в формате SVG.
 */
interface SVGIconItems {
    /**
     * Компонента иконки.
     */
    [index: string]: JSX.Element;
}

export const SVG_ICONS: SVGIconItems = {
    play: <PlayIcon key={'play-icon-1'} className='play-icon' />,
    share: <ShareIcon key={'share-icon-1'} className='share-icon' />,
    bookmark: <BookmarkIcon key={'bookmark-icon-1'} className='bookmark-icon' />,
    favorite: <FavoriteIcon key={'favorite-icon-1'} className='favorite-icon' />,
    kinopoisk: <KinopoiskIcon key={'kinopoisk-icon-1'} className='kinopoisk-icon' />,
};
