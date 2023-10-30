import React, { useState, useEffect } from 'react';
import '../styles/css/home.css';
import { useLoaderData } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import ProductsMainScreen from '../components/ProductsMainScreen';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
    const data = useLoaderData();
    const [videoName, setVideoName] = useState(""); // Define el estado para el nombre (ruta) del video
    const videoURL = `http://localhost:5000${videoName}`; // Construye la URL del video usando el estado

    const fetchVideoPath = async () => {
        try {
            const response = await fetch("http://localhost:5000/media/background-video");
            const result = await response.json();
            if (result && result.path) {
                setVideoName(result.path);
            }
        } catch (error) {
            console.error("Error fetching video path:", error);
        }
    };

    // Invoca fetchVideoPath al montar el componente
    useEffect(() => {
        fetchVideoPath();
    }, []);

    return (
        <main className="layout">
            {videoName && <VideoPlayer src={videoURL} />}
            {data.products.length > 0 ? (
                data.products.map((product) => (
                    <ProductsMainScreen key={product.id} product={product} />
                ))
            ) : (
                <h2>Card not found</h2>
            )}
            <section className="footer">
                <Footer />
            </section>
        </main>
    );
}

export default Home;