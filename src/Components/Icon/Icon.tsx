import React, { FC } from 'react'

import { SVG_ICONS } from '@/Consts/SvgIcons';

interface IconProps {
    name: string;
}

export const Icon: FC<IconProps> = ({ name }): React.JSX.Element =>
    SVG_ICONS[name]
