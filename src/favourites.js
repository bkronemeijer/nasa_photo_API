import React, { useContext, useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import './index.css';
import FavouritesContext from './FavouritesContext';
import {LikeButton} from './likeButton.js'
import {capitalise} from './utils.js'
import {Header} from './header.js'

export const Favourites = (props) => {
  const favContextList = useContext(FavouritesContext)
  const [favItemList, setFavItemList] = useState([])
  const [favIDList, setFavIDList] = useState([])
  const [isHidden, setIsHidden] = useState(true)
  const [enlargePic, setEnlargePic] = useState("")
  const [enlargeID, setEnlargeID] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    let itemList = []
    let idList = []

    if (JSON.parse(localStorage.getItem('itemStorage')) !== null) {
      itemList = JSON.parse(localStorage.getItem('itemStorage')).map((entry) => {
        return entry.item
      })
      idList = JSON.parse(localStorage.getItem('itemStorage')).map((entry) => {
        return entry.id
      })
    }
    
    setFavItemList(itemList)
    setFavIDList(idList)
  }, []);

  const pics = favItemList.map((item) => {
    const tags = item.data[0].keywords;
    const url = item.links[0].href;
    const desc = item.data[0];
    const id = item.data[0].nasa_id;
    let liked = true
    if (favIDList == null) {
      liked = false
    } else {
      liked = favIDList.includes(id);
    }
    return (
      <div className="imageClass" id={id} key={id}>
        <LikeButton item={item} id={id} liked={liked}/>
        <img src={url} alt='' id={id}/>
        <div className="overlay" onClick={() => {
          setIsHidden(false); 
          setEnlargePic(url); 
          setEnlargeID(id);
          setDescription(desc);
          setDate((desc.date_created).match(/^(.*?)\T/));
        }}>
          <div className="overlayText">
            {tags != null && tags.map((tag) => {
              return <li className="overlayTextItem">{capitalise(tag)}</li>
            })}
          </div>
        </div>
    </div>
  )
});

  return (
    <div className="flex-container">
      <main className="main">
        <Header/>
        <div className="pics-container">
          {pics}
        </div>
      </main>
    </div>
  )
}
