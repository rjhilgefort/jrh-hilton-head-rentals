import React from 'react';
import { Carousel } from 'react-bootstrap';
import { mapIndexed } from '../utils';

const { Item } = Carousel;

const SlideImage = ({ src }) => (
  <img width={1000} height={250} alt="Slide" src={src} />
);

const SlideItem = (src, i) => (
  <Item key={i} >
    <SlideImage src={src} />
  </Item>
);

const SlideShow = ({ slides }) => (
  <Carousel>
    {mapIndexed(SlideItem)(slides)}
  </Carousel>
);

export default SlideShow;
