import React from 'react';
import { Link } from 'react-router-dom';

function CategoryMenu () {
    return (
        <div className="dropdown category-dropdown">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories" >
                Browse Categories
            </Link>

            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows sf-js-enabled">
                        <li className="megamenu-container">
                            <Link className="sf-with-ul" to="#"><i className="icon-laptop"></i>Electronics</Link>

                            <div className="megamenu">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="menu-col">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="menu-title">Laptops &amp; Computers</div>
                                                    <ul>
                                                        <li><Link to="#">Desktop Computers</Link></li>
                                                        <li><Link to="#">Monitors</Link></li>
                                                        <li><Link to="#">Laptops</Link></li>
                                                        <li><Link to="#">iPad &amp; Tablets</Link></li>
                                                        <li><Link to="#">Hard Drives &amp; Storage</Link></li>
                                                        <li><Link to="#">Printers &amp; Supplies</Link></li>
                                                        <li><Link to="#">Computer Accessories</Link></li>
                                                    </ul>

                                                    <div className="menu-title">TV &amp; Video</div>
                                                    <ul>
                                                        <li><Link to="#">TVs</Link></li>
                                                        <li><Link to="#">Home Audio Speakers</Link></li>
                                                        <li><Link to="#">Projectors</Link></li>
                                                        <li><Link to="#">Media Streaming Devices</Link></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="menu-title">Cell Phones</div>
                                                    <ul>
                                                        <li><Link to="#">Carrier Phones</Link></li>
                                                        <li><Link to="#">Unlocked Phones</Link></li>
                                                        <li><Link to="#">Phone &amp; Cellphone Cases</Link></li>
                                                        <li><Link to="#">Cellphone Chargers </Link></li>
                                                    </ul>

                                                    <div className="menu-title">Digital Cameras</div>
                                                    <ul>
                                                        <li><Link to="#">Digital SLR Cameras</Link></li>
                                                        <li><Link to="#">Sports &amp; Action Cameras</Link></li>
                                                        <li><Link to="#">Camcorders</Link></li>
                                                        <li><Link to="#">Camera Lenses</Link></li>
                                                        <li><Link to="#">Photo Printer</Link></li>
                                                        <li><Link to="#">Digital Memory Cards</Link></li>
                                                        <li><Link to="#">Camera Bags, Backpacks &amp; Cases</Link></li>
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
                        <li className="megamenu-container">
                            <Link className="sf-with-ul" to="#"><i className="icon-couch"></i>Furniture</Link>

                            <div className="megamenu">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="menu-col">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="menu-title">Bedroom</div>
                                                    <ul>
                                                        <li><Link to="#">Beds, Frames &amp; Bases</Link></li>
                                                        <li><Link to="#">Dressers</Link></li>
                                                        <li><Link to="#">Nightstands</Link></li>
                                                        <li><Link to="#">Kids' Beds &amp; Headboards</Link></li>
                                                        <li><Link to="#">Armoires</Link></li>
                                                    </ul>

                                                    <div className="menu-title">Living Room</div>
                                                    <ul>
                                                        <li><Link to="#">Coffee Tables</Link></li>
                                                        <li><Link to="#">Chairs</Link></li>
                                                        <li><Link to="#">Tables</Link></li>
                                                        <li><Link to="#">Futons &amp; Sofa Beds</Link></li>
                                                        <li><Link to="#">Cabinets &amp; Chests</Link></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="menu-title">Office</div>
                                                    <ul>
                                                        <li><Link to="#">Office Chairs</Link></li>
                                                        <li><Link to="#">Desks</Link></li>
                                                        <li><Link to="#">Bookcases</Link></li>
                                                        <li><Link to="#">File Cabinets</Link></li>
                                                        <li><Link to="#">Breakroom Tables</Link></li>
                                                    </ul>

                                                    <div className="menu-title">Kitchen &amp; Dining</div>
                                                    <ul>
                                                        <li><Link to="#">Dining Sets</Link></li>
                                                        <li><Link to="#">Kitchen Storage Cabinets</Link></li>
                                                        <li><Link to="#">Bakers Racks</Link></li>
                                                        <li><Link to="#">Dining Chairs</Link></li>
                                                        <li><Link to="#">Dining Room Tables</Link></li>
                                                        <li><Link to="#">Bar Stools</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="banner banner-overlay">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner banner-menu">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/banner-2.jpg` } alt="Banner" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="megamenu-container">
                            <Link className="sf-with-ul" to="#"><i className="icon-concierge-bell"></i>Cooking</Link>

                            <div className="megamenu">
                                <div className="menu-col">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="menu-title">Cookware</div>
                                            <ul>
                                                <li><Link to="#">Cookware Sets</Link></li>
                                                <li><Link to="#">Pans, Griddles &amp; Woks</Link></li>
                                                <li><Link to="#">Pots</Link></li>
                                                <li><Link to="#">Skillets &amp; Grill Pans</Link></li>
                                                <li><Link to="#">Kettles</Link></li>
                                                <li><Link to="#">Soup &amp; Stockpots</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="menu-title">Dinnerware &amp; Tabletop</div>
                                            <ul>
                                                <li><Link to="#">Plates</Link></li>
                                                <li><Link to="#">Cups &amp; Mugs</Link></li>
                                                <li><Link to="#">Trays &amp; Platters</Link></li>
                                                <li><Link to="#">Coffee &amp; Tea Serving</Link></li>
                                                <li><Link to="#">Salt &amp; Pepper Shaker</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="menu-title">Cooking Appliances</div>
                                            <ul>
                                                <li><Link to="#">Microwaves</Link></li>
                                                <li><Link to="#">Coffee Makers</Link></li>
                                                <li><Link to="#">Mixers &amp; Attachments</Link></li>
                                                <li><Link to="#">Slow Cookers</Link></li>
                                                <li><Link to="#">Air Fryers</Link></li>
                                                <li><Link to="#">Toasters &amp; Ovens</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row menu-banners">
                                        <div className="col-md-4">
                                            <div className="banner">
                                                <Link to="#">
                                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/1.jpg` } alt="banner" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="banner">
                                                <Link to="#">
                                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/2.jpg` } alt="banner" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="banner">
                                                <Link to="#">
                                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/3.jpg` } alt="banner" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="megamenu-container">
                            <Link className="sf-with-ul" to="#"><i className="icon-tshirt"></i>Clothing</Link>

                            <div className="megamenu">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="menu-col">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="menu-title">Women</div>
                                                    <ul>
                                                        <li><Link to="#"><strong>New Arrivals</strong></Link></li>
                                                        <li><Link to="#"><strong>Best Sellers</strong></Link></li>
                                                        <li><Link to="#"><strong>Trending</strong></Link></li>
                                                        <li><Link to="#">Clothing</Link></li>
                                                        <li><Link to="#">Shoes</Link></li>
                                                        <li><Link to="#">Bags</Link></li>
                                                        <li><Link to="#">Accessories</Link></li>
                                                        <li><Link to="#">Jewlery &amp; Watches</Link></li>
                                                        <li><Link to="#"><strong>Sale</strong></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="menu-title">Men</div>
                                                    <ul>
                                                        <li><Link to="#"><strong>New Arrivals</strong></Link></li>
                                                        <li><Link to="#"><strong>Best Sellers</strong></Link></li>
                                                        <li><Link to="#"><strong>Trending</strong></Link></li>
                                                        <li><Link to="#">Clothing</Link></li>
                                                        <li><Link to="#">Shoes</Link></li>
                                                        <li><Link to="#">Bags</Link></li>
                                                        <li><Link to="#">Accessories</Link></li>
                                                        <li><Link to="#">Jewlery &amp; Watches</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="banner banner-overlay">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner banner-menu">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/menu/banner-3.jpg` } alt="Banner" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-col menu-brands">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <Link to="#" className="brand">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/brands/1.png` } alt="Brand Name" />
                                            </Link>
                                        </div>

                                        <div className="col-lg-2">
                                            <Link to="#" className="brand">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/brands/2.png` } alt="Brand Name" />
                                            </Link>
                                        </div>

                                        <div className="col-lg-2">
                                            <Link to="#" className="brand">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/brands/3.png` } alt="Brand Name" />
                                            </Link>
                                        </div>

                                        <div className="col-lg-2">
                                            <Link to="#" className="brand">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/brands/4.png` } alt="Brand Name" />
                                            </Link>
                                        </div>

                                        <div className="col-lg-2">
                                            <Link to="#" className="brand">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/brands/5.png` } alt="Brand Name" />
                                            </Link>
                                        </div>

                                        <div className="col-lg-2">
                                            <Link to="#" className="brand">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/brands/6.png` } alt="Brand Name" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="#"><i className="icon-blender"></i>Home Appliances</Link></li>
                        <li><Link to="#"><i className="icon-heartbeat"></i>Healthy &amp; Beauty</Link></li>
                        <li><Link to="#"><i className="icon-shoe-prints"></i>Shoes &amp; Boots</Link></li>
                        <li><Link to="#"><i className="icon-map-signs"></i>Travel &amp; Outdoor</Link></li>
                        <li><Link to="#"><i className="icon-mobile-alt"></i>Smart Phones</Link></li>
                        <li><Link to="#"><i className="icon-tv"></i>TV &amp; Audio</Link></li>
                        <li><Link to="#"><i className="icon-shopping-bag"></i>Backpack & Bag</Link></li>
                        <li><Link to="#"><i className="icon-music"></i>Musical Instruments</Link></li>
                        <li><Link to="#"><i className="icon-gift"></i>Gift Ideas</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default React.memo( CategoryMenu );