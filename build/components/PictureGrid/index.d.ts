import * as React from 'react';
interface Props {
    data?: dataObjectProps[];
    showTitle?: boolean;
    showPreview?: boolean;
    gap?: number;
    className?: string;
    imageClass?: string;
    pattern?: ('big' | 'tall' | 'small' | 'wide')[];
}
interface dataObjectProps {
    image: string;
    title: string;
    description: string;
}
declare const PictureGrid: React.FC<Props>;
export default PictureGrid;
