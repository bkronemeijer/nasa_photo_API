import React, { useState, useEffect } from 'react';
import './index.css';
// import ReactDOM from 'react-dom';
import {LikeButton} from './likeButton.js'
// import {fetchImages} from './apiCalls.js'
import { capitalise } from './utils.js';
// import { Header } from './header.js'
import {
  // BrowserRouter,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

const Header = (props) => {
  const {reloadPage} = props

  return (
    <div className='header'>
      <svg width="188" height="53" viewBox="0 0 188 53" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={reloadPage}>
      <path d="M13.2301 0C18.8106 0 23.7254 3.49972 25.627 8.65251L25.6836 8.80913L25.7449 8.98164L34.6117 40.7661C35.0152 41.7441 35.9695 42.4 37.0443 42.4C38.4909 42.4 39.6656 41.2385 39.69 39.7957L39.6904 39.75V1.325H50.2745V39.75C50.2745 47.0681 44.3515 53 37.0443 53C31.4639 53 26.549 49.5003 24.6474 44.3475L24.5908 44.1909L24.5296 44.0184L15.6627 12.2339C15.2592 11.2559 14.3049 10.6 13.2301 10.6C11.7835 10.6 10.6088 11.7615 10.5845 13.2043L10.5841 13.25V51.675H0V13.25C0 5.93189 5.92299 0 13.2301 0ZM74.0887 0C79.6698 0 84.5865 3.50065 86.4862 8.65437L86.5428 8.81098L86.5676 8.88055L96.9777 41.0645L123.702 41.075C126.259 41.075 128.332 38.9995 128.332 36.4401C128.332 33.9063 126.3 31.8469 123.778 31.806L123.702 31.8053H110.471C102.06 31.8053 95.2436 24.9839 95.2436 16.5651C95.2436 8.23249 101.923 1.46161 110.212 1.32699L110.464 1.325H136.27V11.925H110.464C107.903 11.925 105.828 14.0031 105.828 16.5651C105.828 19.1021 107.863 21.1637 110.395 21.2046L110.471 21.2053H123.702C132.104 21.2053 138.916 28.0259 138.916 36.4401C138.916 44.7702 132.24 51.5385 123.951 51.673L123.7 51.675L96.5778 51.6644V51.5425H89.2411L76.55 12.3065C76.1721 11.3054 75.2212 10.6216 74.1403 10.6005L74.0887 10.6C73.0038 10.6 72.0417 11.2681 71.6457 12.2589L71.6272 12.3065L58.9362 51.5425H47.8106L61.6098 8.88055L61.6345 8.81098C63.4916 3.57167 68.4512 0 74.0887 0ZM161.611 0C167.196 0 172.117 3.4976 174.021 8.65053L174.077 8.80727L174.102 8.87737L187.927 51.5425H176.799L164.087 12.3098C163.899 11.8152 163.568 11.3881 163.136 11.0835C162.704 10.779 162.191 10.6107 161.662 10.6005L161.611 10.6C160.518 10.6 159.551 11.2704 159.154 12.263L159.135 12.3098L146.423 51.5425H135.296L149.12 8.87737L149.145 8.80714C151.007 3.56876 155.97 0 161.611 0Z" fill="white"/>
      </svg>
      <div className='headerMenu'>
        <Link to='/'>HOME</Link>
        <Link to='/favourites'>FAVOURITES</Link>
      </div>
    </div>
  )
}

const EnlargeOverlayBackground = (props) => {
  const {isHidden, setIsHidden} = props

  return (
    <div className={isHidden === true ? 'hide' : 'enlargeOverlayBackground'} onClick={() => setIsHidden(true)}></div>
  )
}

const handleKeyPress = (event) => {
  console.log("hoi")
  if (event.key === 'ArrowLeft'){
    console.log('previous!')
  }

  if (event.key === 'ArrowRight'){
    console.log('next!')
  }
}

const EnlargeOverlay = (props) => {
  const {enlargeID, isHidden, description, enlargePic, date, item} = props;

  // let idList = []
  // let liked = false
  // if (JSON.parse(localStorage.getItem('itemStorage'))) {
  //   idList = []
  // } else {
  //   idList = JSON.parse(localStorage.getItem('itemStorage')).map((entry) => {
  //     return entry.id
  //   })
  // }

  // if (idList === null) {
  //   liked = false
  // } else {
  //   liked = idList.includes(enlargeID) ? true : false;
  // }

  return (
    // /* <div className={["enlargeOverlay", isHidden === true ? 'hide' : '']} onClick={() => setIsHidden(true)}> */
    <div className={isHidden === true ? 'hide' : 'enlargeOverlay'}>
        <img src={enlargePic} onKeyDown={(e) => handleKeyPress(e)} alt=''/>
        <div className='enlargeDescription'>
          <div className='enlargeDescriptionTitle'>
            <h4>{ description.title }</h4>
            <p className='date'>Created on { date[1] } by { description.center }</p>
          </div>
          <p id='descriptionText'>{ description.description }</p>
          {/* <div className='favouritesCounter'>
            <LikeButton id={enlargeID} item={item} liked={liked}/>
          </div> */}
        </div>
      </div>
  )
}

const LoadMoreButton = (props) => {
  const {loadMoreImages} = props;
  
  return(
    <div className="loadButton">
      <button onClick={loadMoreImages}>Load more pictures</button>
    </div>
  )
}

const SearchBar = (props) => {
  const {submitApiRequest, setApiRequest} = props

  return(
    <div className="searchBar">
      <div className="searchForm">
        <form>
          <input type="text" placeholder="Search for photos by keywords.." onChange={(e) => setApiRequest(e.target.value)}></input>
        </form>
        <button onClick={submitApiRequest}>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.6881 17.3241C20.7591 20.253 16.0104 20.2531 13.0815 17.3241C10.1525 14.3952 10.1525 9.64645 13.0815 6.71751C16.0104 3.78858 20.7591 3.78857 23.6881 6.71751C26.617 9.64646 26.617 14.3952 23.6881 17.3241ZM24.3952 18.0312C21.0757 21.3507 15.6938 21.3507 12.3744 18.0312C9.05492 14.7118 9.0549 9.32987 12.3744 6.01041C15.6938 2.69095 21.0757 2.69097 24.3952 6.01041C27.7146 9.32985 27.7146 14.7118 24.3952 18.0312ZM12.3744 18.0312L12.7279 18.3848L6.36395 24.7487L5.65684 24.0416L12.0208 17.6777L12.3744 18.0312Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

const App = (props) => {
  const [pictures, setPictures] = useState([])
  const [apiRequest, setApiRequest] = useState("")
  const [page, setPage] = useState(1)
  const [isHidden, setIsHidden] = useState(true)
  const [enlargePic, setEnlargePic] = useState("")
  const [enlargeID, setEnlargeID] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [favList, setFavList] = useState([])
  
  useEffect(() => {
    let idList = []
    
    if (JSON.parse(localStorage.getItem('itemStorage')) !== null) {
      idList = JSON.parse(localStorage.getItem('itemStorage')).map((entry) => {
        return entry.id
      })
    }

    setFavList(idList)
    fetchImages();
  }, []);
  
  const reloadPage = () => {
    window.location.reload();
  }
  
  const loadMoreImages = () => {
    setPage(page + 1);
    fetchImages(apiRequest, page);
  }
  
  const submitApiRequest = () => {
    fetchImages(apiRequest);
    return false; // want anders laadt die alles opnieuw en dan werkt het niet meer (?)
  }
  
  async function fetchImages(q = '', p = 1) {
    const url = `https://images-api.nasa.gov/search?q=${q}&media_type=image&page=${p}`;
    const res = await fetch(url);
    res
      .json()
      .then(data => {
        p === 1 ? setPictures(data.collection.items) : setPictures(pictures.concat(data.collection.items));
      })
      .catch(err => console.log(err));
    }
    
  const pics = pictures.map((item) => {
    const tags = item.data[0].keywords;
    const url = item.links[0].href;
    const desc = item.data[0];
    const id = item.data[0].nasa_id;
    let liked = false
    if (favList == null) {
      liked = false
    } else {
      liked = favList.includes(id) ? true : false;
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
      <EnlargeOverlayBackground isHidden={isHidden} setIsHidden={setIsHidden}/>
      <EnlargeOverlay isHidden={isHidden} description={description} enlargePic={enlargePic} date={date} enlargeID={enlargeID}/>
      <main className="main">
        <Header reloadPage={reloadPage} setApiRequest={setApiRequest}/>
        <SearchBar submitApiRequest={submitApiRequest} setApiRequest={setApiRequest}/>
        <div className='pics-container'>
          {pics}
        </div>
        <LoadMoreButton loadMoreImages={loadMoreImages}/>
      </main>
    </div>
  )
}

export default App;
