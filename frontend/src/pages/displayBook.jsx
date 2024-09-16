import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/slices/booksSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Slider from "../component/banner";
import Recommendation from "../component/recommendation";
import Series from "../component/series";
import Education from "../component/education";
import Adventure from "../component/Adventure";
import Fiction from "../component/fiction";
import Horror from "../component/horror";
import Mystery from "../component/mystery";
import NavBar from "../component/navBar";
import Allbooks from "../component/allbooks";
import Loading from "../component/loading";
import Footer from "../component/footer";
import reimg from "../images/rebg1.jpg"
import { useNavigate } from "react-router-dom";
import best from "../images/bestbookbg.jpg";
import chacha from "../images/chachbg.jpg";
import Authordisplay from "../component/authordisplay";
import useAuth from "../hooks/verifyUser";
const Displaybooks = () => {
    useAuth();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.books);
    const [expbooks, setExpbooks] = useState(false);
    const navigate = useNavigate();
    // verify token
    // Fetch books when the component mounts or when store data changes
    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);
    if (isLoading) {
        return (
            <Loading />
        );
    }
    return (
        <>

            <div className="container">
                <div className="nav-com"><NavBar /></div>
                <div className="banners">
                    <div className="banner-title">
                        <h1>Explore globally Best Selling Books</h1>
                        <h4>Discover top global titles and find your next great read.</h4>
                    </div>
                    <div className="banner-img">
                        <Slider />
                    </div>
                </div>

                {expbooks ? (<Allbooks setcheck={setExpbooks} />) : (
                    <>
                        <button style={{
                            marginLeft: "90%", backgroundColor: "#5924c1", color: "white", fontWeight: "bold"
                            , borderRadius: "5px"
                        }} onClick={() => setExpbooks(true)}>Explore All Books ⇛</button>
                        {/* //Recommendation */}
                        <Recommendation />
                        {/* {World Famous Series} */}
                        <Series />
                        {/* Educational books section*/}
                        <Education />
                        <div className="year-book">
                            <img src={best} onClick={() => navigate("/banner/bestbooks")} />
                            <img src={chacha} onClick={() => navigate("/banner/chacha")} />
                        </div>
                        {/* Adventure books section*/}
                        <Adventure />
                        <div className="rbook-sec">
                            <img src={reimg} alt="religious books" onClick={() => navigate("/banner/religious")} />
                        </div>
                        {/* Fictional books section*/}
                        <Fiction />
                        {/* Mystery books section*/}
                        <Mystery />
                        <Authordisplay />
                        {/* horror books section*/}
                        <Horror />
                        <Footer />
                    </>
                )
                }
            </div>
        </>
    );
}

export default Displaybooks;
