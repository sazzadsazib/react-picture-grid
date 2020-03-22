import * as React from 'react';
import { css } from 'glamor';

const photoGrid = css({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gridAutoRows: '240px',
});

const card = css({
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
});

const cardElement = css({
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  transition: 'all 0.2s ease-in',
  position: 'relative',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

const cardTall = css({
  '@media(min-width: 600px)': {
    gridRow: 'span 2 / auto',
  },
});

const cardWide = css({
  '@media(min-width: 600px)': {
    gridColumn: 'span 2 / auto',
  },
});

const cardDetails = css({
  position: 'absolute',
  bottom: '0',
  background: 'rgba(0,0,0,0.3)',
  width: '100%',
  padding: '5px 15px',
});

const title = css({
  color: 'white',
  marginBottom: '0 !important',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textTransform: 'capitalize',
});

const description = css({
  color: 'rgb(201, 201, 201)',
  marginTop: '3px !important',
  fontWeight: 'normal',
  fontSize: '0.9rem',
});

const noData = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
  minHeight: '400px',
});

interface Props {
  data?: dataObjectProps[];
  showTitle?: boolean;
  showPreview?: boolean; //will implement later :(
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

const generatePatternClass = (
  pattern: ('big' | 'tall' | 'small' | 'wide')[],
  index: number
) => {
  if (pattern.length > 0) {
    const currentPattern: string = pattern[index % pattern.length];
    switch (currentPattern) {
      case 'big':
        return `${card} ${cardTall} ${cardWide}`;
      case 'tall':
        return `${card} ${cardTall}`;
      case 'wide':
        return `${card} ${cardWide}`;
      case 'small':
      default:
        return `${card}`;
    }
  }
  return `${card}`;
};

const PictureGrid: React.FC<Props> = ({
  data,
  showTitle,
  gap,
  className,
  imageClass,
  pattern,
}) => (
  <div className={`${photoGrid} ${className}`} style={{ gap: `${gap}px` }}>
    {!!data && data.length === 0 && (
      <div className={`${noData}`}> No Image Provided</div>
    )}
    {!!data &&
      data.length > 0 &&
      data.map((grid, i) => (
        <div key={i} className={`${!!pattern ? generatePatternClass(pattern, i): []}`}>
          <div
            className={`${cardElement} ${imageClass}`}
            style={{
              backgroundImage: `url('${
                !!grid.image
                  ? grid.image
                  : 'https://i.ibb.co/rkCBGSG/Artboard-1.png'
              }')`,
            }}
          ></div>
          {showTitle && (
            <div className={`${cardDetails}`}>
              <p className={`${title}`}>{grid.title || 'Title'}</p>
              <p className={`${description}`}>
                {grid.description || 'Description'}
              </p>
            </div>
          )}
        </div>
      ))}
  </div>
);

PictureGrid.defaultProps = {
  data: [],
  showTitle: false,
  showPreview: false,
  gap: 16,
  className: '',
  imageClass: '',
  pattern: ['big', 'tall', 'small', 'small', 'wide', 'wide'],
};

export default PictureGrid;
