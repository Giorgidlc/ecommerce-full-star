

const VideoPlayer = ({ src }) => {
    return (
        <section className="video-background">
        <video className="videoproduct" autoPlay muted loop>
           <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </section>
    );
}

export default VideoPlayer;

