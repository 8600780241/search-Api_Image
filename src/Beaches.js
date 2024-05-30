import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
export default function Beaches() {
    let SearchApi = () => {
        const [image, setImage] = useState([]);
        useEffect(() => {
            axios.get("https://api.unsplash.com/search/photos?page=1&query=Beaches&client_id=5x0ImwPh01TABg5wGSo6-GoR6eoQltLjMEpniywwbvo")
                .then((res) => {
                    setImage(res.data.results)
                })
        }, [image])
        return image;
    }
    const data = SearchApi();
    return (
        <>
            <div>
                <h1 style={{ fontSize: "50px" }}>Beaches</h1>
            </div>
            <div className='Birds-container'>
                <div>
                    {
                        data.map((index, i) => {
                            return (<div key={i}>
                                <img src={index.urls.thumb} width="350px" height="350px" />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}