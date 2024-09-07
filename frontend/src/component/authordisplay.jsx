
import { useNavigate } from 'react-router-dom';
import ruskin from "../authors/ruskin.jpg"
import ernest from "../authors/ernest.jpg";
import george from "../authors/george.jpg";
import james from "../authors/james.jpeg";
import jk from "../authors/jk.jpg";
import thomas from "../authors/thomas.jpg";
const Authordisplay = () => {
    const navigate = useNavigate();
    const author = [
        {
            name: 'Ruskin Bond',
            img: ruskin
        },
        {
            name: 'J.K. Rowling',
            img: jk
        },
        {
            name: 'George Orwell',
            img: george
        },
        {
            name: 'Ernest',
            img: ernest
        },
        {
            name: 'Thomas Keneally',
            img: thomas
        },
        {
            name: 'James Clear',
            img: james
        }
    ];
    return (
        <>
            <div className='author-comp'>
                <h1 style={{
                    fontFamily: "monospace",
                    color: "white",
                    fontWeight: "bolder",
                    textShadow: "0px 4px 5px black"
                }}>Know Your Favourite Authors</h1>
                {author.map((items, index) => (
                    <>
                        <div className="auth-details" key={index}>
                            <img src={items.img} onClick={() => navigate(`/authordetails/${items.name}`)} />
                            <span>{items.name}</span>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
export default Authordisplay;