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
    config: { mass: 1, tension: 50, friction: 10 }
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
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_438,q_42,r_0/a_0/v1573789106/devjacks/8_xh0vvu.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h1 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_269,q_42/v1573789075/devjacks/2_y7uzk4.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_385,q_48/v1573789079/devjacks/3_ahzzmn.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>
      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_500,q_42/v1573789050/devjacks/16_rt1kot.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_345,q_40/v1573789088/devjacks/5_xfyxbb.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h1 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_627,q_42/v1573789091/devjacks/6_abbyhv.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h3 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_403,q_41/v1573789096/devjacks/7_pweem8.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_357,q_42/v1573789072/devjacks/1_h92skh.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_431,q_35/v1573789108/devjacks/9_xlnzwc.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h1 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_353,q_42/v1573789108/devjacks/10_sslbxv.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_411,q_45/v1573789110/devjacks/11_lgsvm6.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h1 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_464,q_41/v1573789122/devjacks/12_wqar0n.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_339,q_39/v1573789118/devjacks/13_qgizrt.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,q_47,w_447/v1573789124/devjacks/15_flswmv.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_456,q_44/v1573789083/devjacks/4_yuklsk.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>
      <GridItem
        className='galleryItem h1 v3'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_545,q_41/v1573789054/devjacks/17_klqc5s.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_344,q_39/v1573789056/devjacks/18_eyjmqd.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>
      <GridItem
        className='galleryItem h3 v2'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_393,q_41/v1573789068/devjacks/21_cyrzcc.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h3 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_425,q_46/v1573789063/devjacks/20_pxptyb.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>

      <GridItem
        className='galleryItem h2 v4'
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          src={
            'https://res.cloudinary.com/dgnc11gw7/image/upload/c_scale,h_427,q_41/v1573789059/devjacks/19_a49tsy.jpg'
          }
          alt='Portfolio'
        />
      </GridItem>
    </GalleryGrid>
  );
}
