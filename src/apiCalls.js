import React from 'react';
import { capitalise } from './utils.js';

export const fetchImages = async (q = '', p = 1) => {
  const url = `https://images-api.nasa.gov/search?q=${q}&media_type=image&page=${p}`;
  const res = await fetch(url);
  res
    .json()
    .then(data => {
      p === 1 ? setPictures(data.collection.items) : setPictures(pictures.concat(data.collection.items));
    })
    .catch(err => console.log(err));
  }