<img src="https://i.ibb.co/rpDjwVM/cover.png" width="60%">

## Demo

[**See Demo Here**](https://react-picture-grid.netlify.com)

## How to Use

Install **[ React Picture Grid](https://github.com/sazzadsazib/react-picture-grid)** as dependency

```
npm i react-picture-grid --save
```

or if you use yarn

```
yarn install react-picture-grid
```

In your component first import

```
import {ReactPictureGrid} from 'react-picture-grid';
```

Set your data

```
const data = [
  {
    image: 'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature 01',
    description: 'This picture is taken from unsplash.com',

  },
  {
    image: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    title: 'Nature 02',
    description: 'This picture is taken from unsplash.com',

  },
  {
    image: 'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80',
    title: 'Nature 03',
    description: 'This picture is taken from unsplash.com',

  },
  {
    image: 'https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Nature 04',
    description: 'This picture is taken from unsplash.com',
  }
];
```

then call component

```
<PictureGrid  data={data} showTitle  gap={10} />
```

## API Documentation

| Prop        | Type                | Details                                                                                                                   |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| data        | array of data props | This is the basic data array for your picture gallery. Please see Data prop to know how to send data or see example above |
| showTitle   | boolean             | If this is true it will show title and description from data prop.                                                        |
| showPreview | boolean             | Coming soon in v1.1.0 not available in v1.0.0                                                                             |
| gap         | number              | The gap between each picture grid. gap is in px                                                                           |
| className   | string              | You can Pass a class to change attribute in picture grid                                                                  |
| imageClass  | string              | any custom class if you want to pass directly to image file                                                               |
| pattern     | array               | string array of (**big** - **tall** - **small** - **wide**) . big - 2x2, small- 1x1, wide - 1x2, tall - 2x1               |

### Data Prop

| Prop        | Type   | Details                   |
| ----------- | ------ | ------------------------- |
| image       | string | Image link you show       |
| title       | string | Title of that image       |
| description | string | Description of that image |

## Develop

Clone the repo from github

```
$ git clone https://github.com/sazzadsazib/react-picture-grid
```

Install Dependencies

```
$ yarn install
```

Then, Run storybook

```
$ yarn storybook
```

To run tests

```
$ yarn test
```

## How to Contribute?

Fork the repo. pull the master branch if required. [**Create a issue**](https://github.com/sazzadsazib/react-picture-grid/issues) why we need this feature, then create your **feature branch** do your changes. write **test code** if required. and Send a **Pull Request** . PR's are always welcome!

## Release log

#### 23 March 2020 - v 1.0.0

- [x] Initial Release with Component.

#### 23 March 2020 - v 1.0.1

- [x] Updated Documentation
- [x] Updated storybook
