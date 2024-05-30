
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    const mystyle = {
        backgroundColor: "#F7DCB9",
        marginTop: "-40px",
    };

    const [query, setQuery] = useState('');
    const [getData, setGetData] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (getData) {
            axios.get(`https://api.unsplash.com/search/photos?page=1&query=${getData}&client_id=5x0ImwPh01TABg5wGSo6-GoR6eoQltLjMEpniywwbvo`)
                .then((res) => {
                    console.log(res);
                    setImages(res.data.results);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [getData]);

    const explore = () => {
        setGetData(query);
    };

    return (
        <>
            <div className='main' style={mystyle}>
                <div className='main-container'>
                    <h1 style={{ fontStyle: "oblique", color: "#00134d", fontSize: "60px" }}>
                        SnapShot
                    </h1>
                    <div style={{ backgroundColor: "#F6F5F2", width: "350px", borderRadius: "60px", marginLeft: "250px" }}>
                        <p style={{ fontSize: "20px", width: "300px", color: "#222831", paddingLeft: "20px", paddingTop: "20px" }}>Content is what the search engines use to fulfill user intent.</p>
                        <p style={{ fontSize: "20px", width: "300px", color: "#222831", paddingLeft: "20px", paddingBottom: "20px" }}>Isn't it amazing that we are all made in God's image, and yet there is so much diversity among his people?</p>
                    </div>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG0mr37qBTQTCQJELaasfQP7VZ0_IhZrQHDM96oarB2DSTgQRp9Vxv5h8HPnPOwkRUIY&usqp=CAU' alt='image' width="600px" style={{ position: "relative", left: "350px", bottom: "250px" }} />
                    </div>
                    <div style={{ position: "relative", bottom: "340px" }}>
                        <input type='text' name="input" className='inp' placeholder='search...' onChange={(e) => setQuery(e.target.value)} style={{
                            width: "560px",
                            height: "45px", borderRadius: "10px", fontSize: "18px", backgroundColor: "#2B2B2B", border: "2px solid white", color: "white"
                        }} />
                        <button type='submit' className='btn' onClick={explore} style={{
                            width: '110px', height: "45px", borderRadius: "10px",
                            position: "relative", right: "100px", bottom: "2px", fontSize: "14px", fontWeight: "bold"
                        }}>explore</button>
                    </div>
                    <p style={{ fontFamily: "monospace", fontSize: "19px", color: "#005B41", position: 'relative', bottom: "265px" }}>Look for the magic in every moment</p>
                    <div className='buttons'>
                        <Link to='/mountain'><button className='btn1'>Mountain</button></Link>
                        <Link to='/beach'><button className='btn2'>Beaches</button></Link>
                        <Link to='/birds'><button className='btn3'>Birds</button></Link>
                        <Link to='/food'><button className='btn4'>Food</button></Link>
                    </div>
                </div>

                <div className='imageContainer'>
                    <div>
                        {
                            images.map((value, i) => (
                                <div key={i}>
                                    <img src={value.urls.thumb} alt='images' className='images' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
