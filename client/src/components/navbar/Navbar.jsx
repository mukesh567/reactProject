import React from './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <div className="first">
                        <select name="cats" id="cats">
                            <option value="design">All</option>
                            <option value="web">Web Development</option>
                            <option value="animation">Animation</option>
                            <option value="music">Music</option>
                        </select>
                    </div>

                    <div className="second">
                        <input type="text" placeholder='Search by SKU or Product Name' />
                        <button>Search</button>
                    </div>
                </div>

                <div className="right">
                    <div className="items">
                        <div className="item">
                            <img src="img/first.png" alt="" />
                            <span></span>
                        </div>

                        <div className="item">
                            <img src="img/heart7.jpg" alt="" />
                            <span></span>
                        </div>

                        <div className="item">
                            <img src="img/ecom.png" alt="" />
                            <span></span>
                        </div>
                    </div>

                    <div className="user">
                        <img src="img/login.png" alt="" />

                        <div className="log">
                            <h2>Login</h2>
                            <h2>Register</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar