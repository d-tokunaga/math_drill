import React from 'react'
import Home from './Home'
import GifData from './static/img/data.gif'
import './static/css/content.css';

const Main = () => {
    return (
        <>
            <Home />
            <br />
            <h2>使い方</h2>
            <br />
            <div className='video_content'>
                <h3 style={{ marginTop:30, fontSize: 20, color: 'gray'}}>Comming Soon...</h3>
            </div>
        </>
    )
}

export default Main
