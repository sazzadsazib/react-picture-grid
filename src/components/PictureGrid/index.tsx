import * as React from 'react';
import { css } from 'glamor';

let photoGrid = css({
  display: 'grid',
  gap: '1rem',
  'grid-template-columns': 'repeat(auto-fit, minmax(240px, 1fr))',
  'grid-auto-rows': '240px',
});

let card = css({
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
});

let cardElement = css({
  'background-size': 'cover',
  width: '100%',
  height: '100%',
  transition: 'all 0.2s ease-in',
  position: 'relative',
  ':hover': {
    color: 'orange',
    transform: 'scale(1.1)',
  },
});

let cardTall = css({
  '@media(min-width: 600px)': {
    'grid-row': 'span 2 / auto',
  },
});

let cardWide = css({
  '@media(min-width: 600px)': {
    'grid-column': 'span 2 / auto',
  },
});

let cardDetails = css({
  position: 'absolute',
  bottom: '0',
  background: 'rgba(0,0,0,0.3)',
  width: '100%',
  padding: '5px 15px',
});

let title = css({
  color: 'white',
  'margin-bottom': '0 !important',
  'font-weight': 'bold',
  'font-size': '1.1rem',
  'text-transform': 'capitalize',
});

let subtitle = css({
  color: 'rgb(201, 201, 201)',
  'margin-top': '0 !important',
  'font-weight': 'normal',
  'font-size': '0.9rem',
});

interface Props {}

const PictureGrid: React.FC<Props> = () => (
  <div className={`${photoGrid}`}>
    <div className={`${card} ${cardTall} ${cardWide}`}>
      <div
        className={`${cardElement}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        }}
      ></div>
      <div className={`${cardDetails}`}>
        <p className={`${title}`}>lorem</p>
        <p className={`${subtitle}`}>small brief about subtitle</p>
      </div>
    </div>
    <div className={`${card} ${cardTall}`}>
      <div
        className={`${cardElement}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        }}
      ></div>
      <div className={`${cardDetails}`}>
        <p className={`${title}`}>lorem</p>
        <p className={`${subtitle}`}>small brief about subtitle</p>
      </div>
    </div>
    <div className={`${card}`}>
      <div
        className={`${cardElement}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        }}
      ></div>
      <div className={`${cardDetails}`}>
        <p className={`${title}`}>lorem</p>
        <p className={`${subtitle}`}>small brief about subtitle</p>
      </div>
    </div>
    <div className={`${card}`}>
      <div
        className={`${cardElement}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        }}
      ></div>
      <div className={`${cardDetails}`}>
        <p className={`${title}`}>lorem</p>
        <p className={`${subtitle}`}>small brief about subtitle</p>
      </div>
    </div>
    <div className={`${card} ${cardWide}`}>
      <div
        className={`${cardElement}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        }}
      ></div>
      <div className={`${cardDetails}`}>
        <p className={`${title}`}>lorem</p>
        <p className={`${subtitle}`}>small brief about subtitle</p>
      </div>
    </div>
    <div className={`${card} ${cardWide}`}>
      <div
        className={`${cardElement}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        }}
      ></div>
      <div className={`${cardDetails}`}>
        <p className={`${title}`}>lorem</p>
        <p className={`${subtitle}`}>small brief about subtitle</p>
      </div>
    </div>
  </div>
);

export default PictureGrid;
