import * as React from 'react';
import { css } from 'glamor';

let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink',
  },
  '@media(max-width: 800px)': {
    color: 'green',
    ':hover': {
      color: 'yellow',
    },
  },
});

interface Props {}

const PictureGrid: React.FC<Props> = () => (
  <div role='heading' {...rule}>
    React Picture Grid
  </div>
);

export default PictureGrid;
