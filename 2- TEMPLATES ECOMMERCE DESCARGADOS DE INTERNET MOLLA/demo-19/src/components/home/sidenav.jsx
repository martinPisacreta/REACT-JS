import React from 'react';
import { Link } from 'react-router-dom';

function SideNavBar( props ) {
    return (
        <nav className="side-nav">
            <div className="sidenav-title">Browse Categories</div>
            <ul className="menu-vertical sf-arrows">
                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/product/default/27` } className="sf-with-ul">Playstation</Link>

                    <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="menu-col">
                                    <div className="menu-title">Games Software</div>
                                    <ul>
                                        <li><Link to="#">Action</Link></li>
                                        <li><Link to="#">Adventure</Link></li>
                                        <li><Link to="#">Sports</Link></li>
                                        <li><Link to="#">Strategy</Link></li>
                                        <li><Link to="#">Role-Playing Game</Link></li>
                                        <li><Link to="#">Action-Adventure</Link></li>
                                        <li><Link to="#">Stealth</Link></li>
                                        <li><Link to="#">Shooter</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner banner-overlay">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/banner-2.jpg` } alt="Banner" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="megamenu-container">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="sf-with-ul">XBOX</Link>

                    <div className="megamenu">
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="menu-col">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="menu-title">Games Software</div>
                                            <ul>
                                                <li><Link to="#">Action</Link></li>
                                                <li><Link to="#">Adventure</Link></li>
                                                <li><Link to="#">Music</Link></li>
                                                <li><Link to="#">Racing</Link></li>
                                                <li><Link to="#">Sports</Link></li>
                                                <li><Link to="#">Strategy</Link></li>
                                                <li><Link to="#">Role-Playing Game</Link></li>
                                                <li><Link to="#">Action-Adventure</Link></li>
                                                <li><Link to="#">Stealth</Link></li>
                                                <li><Link to="#">Shooter</Link></li>
                                                <li><Link to="#">Horror</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="menu-title">Game Console & Accessories</div>
                                            <ul>
                                                <li><Link to="#">Console</Link></li>
                                                <li><Link to="#">Headsets</Link></li>
                                                <li><Link to="#">Collectibles</Link></li>
                                                <li><Link to="#">Gaming Chairs</Link></li>
                                                <li><Link to="#">Controller</Link></li>
                                                <li><Link to="#">Digital</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="banner banner-overlay">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner banner-menu">
                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/banner-1.jpg` } alt="Banner" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to="#">Nindendo</Link></li>
                <li><Link to="#">PC Gaming</Link></li>
                <li><Link to="#">Phones & Tablets</Link></li>
                <li><Link to="#">Pre-owned</Link></li>
                <li><Link to="#">Deals</Link></li>
                <li><Link to="#">Coming Soon</Link></li>
                <li><Link to="#">Accessories</Link></li>
            </ul>
        </nav>
    )
}

export default SideNavBar;