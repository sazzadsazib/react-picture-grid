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

const imageViewerStyle = css({
  background: 'rgba(0,0,0,0.7)',
  position: 'absolute',
  height: '100vh',
  width: '100vw',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const imagePreview = css({
  width: 'auto',
  height: '80vh',
  marginTop: '-10vh',
  borderRadius: 5
});

const closeButton = css({
  height: 30,
  width: 30,
  position: 'absolute',
  top: 30,
  right: 40,
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: 'all 0.2s ease-in',
  ':hover': {
    transform: 'scale(1.2)',
  },
});

const arrowLeft = css({
  height: 30,
  width: 30,
  position: 'absolute',
  left: 30,
  top: '48%',
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: 'all 0.1s ease-in',
  ':hover': {
    transform: 'scale(1.1)',
  },
});
const arrowRight = css({
  height: 30,
  width: 30,
  position: 'absolute',
  right: 30,
  top: '48%',
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: 'all 0.1s ease-in',
  ':hover': {
    transform: 'scale(1.1)',
  },
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
  showPreview,
  gap,
  className,
  imageClass,
  pattern,
}) => {
  const [currentImage, setCurrentImage] = React.useState<number>(-1);
  const [isShown, setIsShown] = React.useState<boolean>(false);

  return (
    <div
      className={`${photoGrid} ${className}`}
      style={
        isShown
          ? { gap: `${gap}px`, height: '100vh', overflow: 'hidden' }
          : { gap: `${gap}px` }
      }
    >
      {!!data && data.length === 0 && (
        <div className={`${noData}`}> No Image Provided</div>
      )}
      {!!data &&
        data.length > 0 &&
        data.map((grid, i) => (
          <div
            key={i}
            className={`${!!pattern ? generatePatternClass(pattern, i) : []}`}
          >
            <div
              className={`${cardElement} ${imageClass}`}
              onClick={() => {
                if (showPreview) {
                  setCurrentImage(i);
                  setIsShown(true);
                }
              }}
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

      {isShown && currentImage >= 0 && (
        <div className={`${imageViewerStyle}`}>
          <img
            className={`${imagePreview}`}
            src={
              (!!data && data[currentImage].image) ||
              'https://i.ibb.co/rkCBGSG/Artboard-1.png'
            }
            alt='image-preview'
          />

          <svg
            className={`${closeButton}`}
            onClick={() => {
              setIsShown(false);
              setCurrentImage(-1);
            }}
            viewBox='0 0 512 512'
          >
            <path
              d='m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0'
              fill='rgba(255,255,255,0.5)'
            />
            <g fill='rgba(255,255,255,0.9)'>
              <path d='m342.734375 312.574219-143.308594-143.308594c-6.257812-6.257813-16.386719-6.257813-22.625 0l-7.535156 7.535156c-6.257813 6.253907-6.257813 16.382813 0 22.625l143.308594 143.308594c6.257812 6.257813 16.386719 6.257813 22.625 0l7.535156-7.535156c6.257813-6.253907 6.257813-16.382813 0-22.625zm0 0' />
              <path d='m312.574219 169.265625-143.308594 143.308594c-6.257813 6.257812-6.257813 16.386719 0 22.625l7.535156 7.535156c6.253907 6.257813 16.382813 6.257813 22.625 0l143.308594-143.308594c6.257813-6.257812 6.257813-16.386719 0-22.625l-7.535156-7.535156c-6.253907-6.257813-16.382813-6.257813-22.625 0zm0 0' />
            </g>
          </svg>

          <svg
            aria-hidden='true'
            focusable='false'
            onClick={() => {
              if (currentImage > 0) {
                setCurrentImage(currentImage - 1);
              }
            }}
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className={`${arrowLeft}`}
          >
            <g>
              <path
                fill='rgba(255,255,255,0.5)'
                d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM288 372.6c0 10.14-14.07 15.21-22.29 8L131.82 264a10.38 10.38 0 0 1 0-16.08l133.89-116.57c8.22-7.16 22.29-2.09 22.29 8.05z'
              ></path>
              <path
                fill='rgba(255,255,255,0.9)'
                d='M288 372.6c0 10.14-14.07 15.21-22.29 8L131.82 264a10.38 10.38 0 0 1 0-16.08l133.89-116.57c8.22-7.16 22.29-2.09 22.29 8.05z'
              ></path>
            </g>
          </svg>

          <svg
            aria-hidden='true'
            focusable='false'
            onClick={() => {
              const max = data?.length || 0;
              if (currentImage < max - 1) {
                setCurrentImage(currentImage + 1);
              }
            }}
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className={`${arrowRight}`}
          >
            <g>
              <path
                fill='rgba(255,255,255,0.5)'
                d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-83.82 232L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.06-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z'
              ></path>
              <path
                fill='rgba(255,255,255,0.9)'
                d='M316.18 264L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.07-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z'
              ></path>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

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
