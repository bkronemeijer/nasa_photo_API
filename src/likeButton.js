import React, { useState, useContext, useEffect } from 'react';
import './index.css';
// import { addEntryToLocalStorage } from './utils.js'
import FavouritesContext from './FavouritesContext';

const addEntryToLocalStorage = (isFavourite=false, key, value, id, setIsFavourite) => {
  // Parse any JSON previously stored in allEntries
  let existingEntries = JSON.parse(localStorage.getItem(key));
  if (existingEntries == null) existingEntries = [];

  let entry = {
    "id": id,
    "item": value
  };

  let idList = existingEntries.map((entry) => {
    return entry.id
  })
  console.log('idList', idList, isFavourite)

  // delete entry from localstorage
  if (isFavourite === true) {
    existingEntries.splice(idList.indexOf(entry.id), 1)
    localStorage.setItem(key, JSON.stringify(existingEntries));
  }

  // add entry to localstorage
  if (isFavourite === false) {
    if (!idList.includes(entry.id)) existingEntries.push(entry);
    localStorage.setItem(key, JSON.stringify(existingEntries));
  }
};

export const LikeButton = (props) => {
    // const favContextList = useContext(FavouritesContext)
    const {item, id, liked} = props
    const [isFavourite, setIsFavourite] = useState(liked)

    const handleLikeClick = () => {
      // isFavourite === false ? favContextList.push(item) : favContextList.splice(favContextList.indexOf(item), 1);
      // isFavourite === false? setIsFavourite(true) : setIsFavourite(false)
      setIsFavourite(!isFavourite)
      // addEntryToLocalStorage(isFavourite, "favStorage", id);
      // JSON.parse(localStorage.getItem('favStorage')).includes(id) ? setIsFavourite(true) : setIsFavourite(false);

      addEntryToLocalStorage(isFavourite, "itemStorage", item, id, setIsFavourite)
      console.log('localstorage', JSON.parse(localStorage.getItem('itemStorage')))
    }

    return(
      <div className='likeButton'>
        <button id={id} className={
          isFavourite === false ? 'noneFavourite' : 'favourite'
          }>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" onClick={handleLikeClick}>
            <path d="M11 19.593C5.37 14.054 0 9.296 0 5.191 0 1.4 3.068 0 5.281 0 6.593 0 9.432.501 11 4.457 12.59.489 15.464.01 16.726.01 19.266.01 22 1.631 22 5.191c0 4.069-5.136 8.625-11 14.402" fillRule="even"/>
          </svg>
        </button>
      </div>
    )
  }
