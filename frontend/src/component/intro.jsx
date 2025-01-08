import reading from '../images/reading.png';
import booknum from '../images/booknum.png';
import bookmark from '../images/bookmark.png';
import { useNavigate } from 'react-router-dom';
const Intro = () => {
    const navigate = useNavigate()
    return (
        <div className='intro-container'>
            <div className="tag-line">
                <h1>BookStore For Book Enthusiast</h1>
                <span>
                    Explore top books, connect with fellow book worms, and contribute by sharing reviews and adding new titles to our bookstore.
                </span>
                <div className="intro-btns">
                    <button onClick={() => {
                        navigate("/home");
                    }}>Get Started</button>
                    <button onClick={() => navigate("/userlogin")}>LogIn</button>
                </div>
                <img className="info-block-img" src={reading} loading="lazy" />
            </div>

            <div className="info">
                <div className="info-block-1">

                    <img style={{ width: "30%", height: "50%" }}
                        src={booknum} loading="lazy" />  <h2>100+ Books</h2>
                    <span>Discover a collection of over 100 books, all available with ebook links for easy access. Dive in and explore!</span>
                </div>
                <div className="info-block-2">
                    <img style={{ width: "30%", height: "50%" }}
                        src={bookmark} loading="lazy"/><h2>Blogs</h2>
                    <span>Discover and share your voice with ease—write blogs and explore others &#39; stories on our dynamic platform</span>
                </div>

            </div>
        </div>
    )
}
export default Intro;
