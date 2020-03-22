import * as React from 'react';
import PictureGrid from './index';

export default { title: 'React Picture Grid' };


const data: any[] = [
  {
    image:
      'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature 01',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
    'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    title: 'Nature 02',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80',
    title: 'Nature 03',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Nature 04',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature 05',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1583442590229-8044f7dde750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature 06',
    description: 'This picture is taken from unsplash.com',
  },
];
export const withData = () => <PictureGrid data={data} />;
export const showTitle = () => <PictureGrid data={data} showTitle />;
export const withCustomGap = () => <PictureGrid data={data}  gap={5} />;
export const withNoGap = () => <PictureGrid data={data}  gap={0} pattern={['small','small','tall','tall','big','wide','wide']}  />;
export const ChangeOfPattern = () => <PictureGrid data={data} pattern={['small','small','tall','tall','big','wide','wide']} />;
export const WithNoData = () => <PictureGrid  />;

