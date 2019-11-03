import React from 'react';
import { useSpring } from 'react-spring';

import { GalleryGrid, GridItem } from './styles';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 90,
  (x - window.innerWidth / 2) / 90,
  1
];

const trans = (x, y, s) =>
  `
  perspective(600px) 
  rotateX(${x}deg) 
  rotateY(${y}deg) 
  scale(${s})
  `;

export default function Gallery() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 350, friction: 40 }
  }));

  return (
    <GalleryGrid
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/8.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h1 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/2.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/3.png')} alt='Portfolio' />
      </GridItem>
      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/16.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/5.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h1 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/6.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h3 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/7.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/1.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/9.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h1 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/10.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/11.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h1 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/12.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/13.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/15.jpg')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/4.png')} alt='Portfolio' />
      </GridItem>
      <GridItem
        className='galleryItem h1 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/17.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/18.png')} alt='Portfolio' />
      </GridItem>
      <GridItem
        className='galleryItem h3 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/21.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h3 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/20.png')} alt='Portfolio' />
      </GridItem>

      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={require('../../img/gallery/19.png')} alt='Portfolio' />
      </GridItem>
    </GalleryGrid>
  );
}
