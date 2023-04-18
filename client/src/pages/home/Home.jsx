import './home.scss'
import Navbar from "../../components/navbar/Navbar";
import Line from "../../components/line/Line";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Line />

            <div className="container">
                <div className="main">

                    <div className="top">
                        <img src="img/book.jpg" alt="" />
                        <button>-27%</button>
                    </div>

                    <div className="down">
                        <h2>Rs. 700</h2>
                        <p>Longines Master Paris Store
                            Novel</p>
                        <div className="stars">
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star1.png" alt="" className='pp' />
                        </div>

                        <div className='line'></div>
                        <span>Sold: 22</span>
                    </div>
                </div>

                <div className="main">
                    <div className="top">
                        <img src="img/headP.jpg" alt="" />
                        <button>-6%</button>
                    </div>

                    <div className="down">
                        <h2>Rs. 800</h2>
                        <p>Boat Headphone with ANC
                            and 8 mikes</p>
                        <div className="stars">
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star1.png" alt="" className='pp' />
                        </div>

                        <div className='line'></div>
                        <span>Sold: 10</span>
                    </div>
                </div>

                <div className="main">
                    <div className="top">
                        <img src="img/sofa.jpg" alt="" />
                        <button>-18%</button>
                    </div>

                    <div className="down">
                        <h2>Rs. 900</h2>
                        <p>Sofa Set</p>
                        <div className="stars">
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star1.png" alt="" className='pp' />
                        </div>

                        <div className='line'></div>
                        <span>Sold: 79</span>
                    </div>
                </div>

                <div className="main">
                    <div className="top">
                        <img src="img/Mbeg.jpg" alt="" />
                        <button>-18%</button>
                    </div>

                    <div className="down">
                        <h2>Rs. 700</h2>
                        <p>Military Bag</p>
                        <div className="stars">
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star.png" alt="" />
                            <img src="img/star1.png" alt="" className='pp' />
                        </div>

                        <div className='line'></div>
                        <span>Sold: 10</span>
                    </div>
                </div>

                <div className="add">
                    <Link to="/add">
                        <img src="img/plus.png" alt="" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home