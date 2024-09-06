
import { useNavigate } from "react-router-dom";
const mySeries = [
    { img: "https://i.pinimg.com/736x/34/04/b4/3404b4ce2b34cf48adf9cfce4dba1078.jpg", id: "65e4c5626725f7134b986c61" },
    { img: "https://i.pinimg.com/originals/7d/4b/bc/7d4bbcda5f8a7d4afce73514c445caf2.jpg", id: "65e58fdab8cb7ab1cdade1a1" },
    { img: "https://eachpage.org/wp-content/uploads/2018/02/books-catching-fire-mockingjay-the-hunger-games.jpg", id: "66bc6561e81fbda521068cb0" }
]
const Series = () => {
    const navigate = useNavigate();
    return (
        <div className="series-book-container">
            <h3>Top Book Series</h3>
            <div className="series-book-content">
                {
                    mySeries.map((items, index) => (
                        <div className="series-book-img" key={index} onClick={() => navigate(`/detail/${items.id}`)}>
                            <img src={items.img} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Series;