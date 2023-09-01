import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import FotoCarrossel1 from './imagens/fotocarrossel1.jpg';
import FotoCarrossel2 from './imagens/fotocarrossel2.jpg';
import FotoCarrossel3 from './imagens/fotocarrossel3.jpg';

export default function Carrossel() {
    return (
      <div style={{ display: 'block', width: '100%', height: '200px' }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={FotoCarrossel1}
              alt="Imagem Carrossel 1"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={FotoCarrossel2}
              alt="Imagem Carrossel 2"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
            src={FotoCarrossel3}
            alt='Imagem Carrossel 3'
            style={{ maxHeight: '600px', objectFit: 'cover'}}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }