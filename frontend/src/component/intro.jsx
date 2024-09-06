import reading from '../images/reading.png';
import booknum from '../images/booknum.png';
import bookmark from '../images/bookmark.png';
import { useNavigate } from 'react-router-dom';
const Intro = () => {
    const navigate = useNavigate()
    return (
        <div className='intro-container'>
            <div className="tag-line">
                <h1>Online BookStore For Book Enthusiast</h1>
                <span>
                    Explore top books, connect with fellow book worms, and contribute by sharing reviews and adding new titles to our bookstore.
                </span>
                <div className="intro-btns">
                    <button onClick={() => {
                        navigate("/home");
                    }}>Get Started</button>
                    <button onClick={() => navigate("/userlogin")}>LogIn</button>
                </div>
                <img className="info-block-img" src={reading} />
            </div>
            <div className="info">
                <div className="info-block-1">

                    <img style={{ width: "30%", height: "50%" }}
                        src={booknum} />  <h2>100+ Books</h2>
                    <span>Discover a collection of over 100 books, all available with ebook links for easy access. Dive in and explore!</span>
                </div>
                <div className="info-block-2">
                    <img style={{ width: "30%", height: "50%" }}
                        src={bookmark} /><h2>YourFavourite</h2>
                    <span>Bookmark your favorite books and read them later. You can also add reviews to share your thoughts.</span>
                </div>

            </div>
        </div>
    )
}
export default Intro;
