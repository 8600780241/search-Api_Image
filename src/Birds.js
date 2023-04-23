import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
export default function Birds() {
    let searchApi = () => {
        const [Image, setImage] = useState([]);
        useEffect(() => {
            axios.get("https://api.unsplash.com/search/photos?page=1&query=Birds&client_id=5x0ImwPh01TABg5wGSo6-GoR6eoQltLjMEpniywwbvo")
                .then((res) => {
                    setImage(res.data.results)
                })
        }, [Image])
        return Image;
    }
    const data = searchApi();
    return (
        <>
            <div>
                <h1>Birds</h1>
            </div>
            <div className='Birds-container'>
                <div>
                    {
                        data.map((index, i) => {
                            return (<div key={i}>
                                <img src={index.urls.thumb} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}