import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    let searchApi = (query) => {
        const [Image, setImage] = useState([]);
        useEffect(() => {
            axios.get("https://api.unsplash.com/search/photos?page=1&query=" + query + "&client_id=5x0ImwPh01TABg5wGSo6-GoR6eoQltLjMEpniywwbvo")
                .then((res) => {
                    //console.log(res)
                    setImage(res.data.results)
                })
        }, [Image])
        return Image;
    }
    const [query, setQuery] = useState([]);
    const [getData, setgetData] = useState([]);

    const explore = () => {
        setgetData(query)
    }
    const data = searchApi(getData)
    return (
        <>
            <div className='main-container'>
                <h1 style={{ fontStyle: "oblique", color: "#00134d", fontSize: "40px" }}>
                    SnapShot
                </h1>
                <div>
                    <input type='text' name="input" className='inp' placeholder='search...' onChange={(e) => setQuery(e.target.value)} />
                    <button type='submit' className='btn' onClick={explore}>explore</button>
                </div>
                <div className='buttons'>
                    <Link to='/mountain'><button className='btn1'>Mountain</button></Link>
                    <Link to='/beach'><button className='btn2'>Beaches</button></Link>
                    <Link to='/birds'><button className='btn3'>Birds</button></Link>
                    <Link to='food'><button className='btn4'>Food</button></Link>
                </div>
            </div>

            <div className='imageContainer'>
                <div>
                    {
                        data.map((value, i) => {
                            return (<div key={i}>
                                <img src={value.urls.thumb} alt='images' />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}