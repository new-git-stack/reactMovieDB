import { useState } from "react"

const MovieCard = ({ movie: 
    {title, vote_average, poster_path, release_date, original_language, overview}
 }) => {
    const [hover, setHover] = useState(false)
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    return (
        <div 
        className="movie-card" 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }}
        >
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />

            <div className="mt-4">
                <h3>{title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>

                    </div>
                    <span>.</span>
                    <p className="lang">{original_language}</p>
                    <span>.</span>
                    <p className="year">
                        {release_date ? release_date.split('-')[0] : 'N/A'}
                    </p>
                </div>

                {hover && 
                <div 
                className="movie-description"
                style={{
                    position: 'fixed',
                    left: mousePosition.x + 15,
                    top: mousePosition.y + 15,
                    backgroundColor: "black",
                    color: 'white',
                    padding: '15px',
                    width: '300px',
                    zIndex: 1000,
                    borderRadius: '20px',
                    opacity: .9,
                    fontSize: 20
                }}>
                    <p>{overview}</p>
                </div>
                }
            </div>
        </div>
    )
}

export default MovieCard