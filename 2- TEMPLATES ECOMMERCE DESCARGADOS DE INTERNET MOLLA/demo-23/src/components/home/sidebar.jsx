import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar ( props ) {
    const [ path, setPath ] = useState( "" );
    const PUBLIC_URL = "/react/molla";

    useEffect( () => {
        setPath( window.location.href );
    } )

    useEffect( () => {
        document.querySelector( ".megamenu-container .sf-with-ul" ).addEventListener( "mouseover", function ( e ) {
            let demoItems = document.querySelectorAll( '.demo-item.show' );
            for ( let i = 0; i < demoItems.length; i++ ) {
                demoItems[ i ].classList.toggle( 'show' );
            }
            document.querySelector( '.view-all-demos' ).classList.remove( 'disabled-hidden' );
        } );
    } )

    function showAllDemosHandler ( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }

    return (
        <div className="side-div">
            <div className="header sidebar">
                <div className="header-top">
                    <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.png` } alt="OLLA Logo" width="100" height="20" />
                    </Link>
                </div>

                <div className="header-main">
                    <nav className="main-nav">
                        <ul className="menu sf-arrows">
                            <li className="megamenu-container" id="menu-home">
                                <Link to={ `${process.env.PUBLIC_URL}/` } className="sf-with-ul">Home</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">Choose your demo</div>

                                        <div className="demo-list">
                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-1/` } target="_blank">
                                                    <span className="demo-title">01 - Furniture Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-2/` } target="_blank">
                                                    <span className="demo-title">02 - Furniture Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-3/` } target="_blank">
                                                    <span className="demo-title">03 - Electronic Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-4/` } target="_blank">
                                                    <span className="demo-title">04 - Electronic Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-5/` } target="_blank">
                                                    <span className="demo-title">05 - Fashion Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-6/` } target="_blank">
                                                    <span className="demo-title">06 - fashion store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-7/` } target="_blank">
                                                    <span className="demo-title">07 - Fashion Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-8/` } target="_blank">
                                                    <span className="demo-title">08 - Fashion Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-9/` } target="_blank">
                                                    <span className="demo-title">09 - Fashion Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-10/` } target="_blank">
                                                    <span className="demo-title">10 - Shoes Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-11/` } target="_blank">
                                                    <span className="demo-title">11 - Furniture Simple Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-12/` } target="_blank">
                                                    <span className="demo-title">12 - Fashion Simple Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-13/` } target="_blank">
                                                    <span className="demo-title">13 - Market</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-14/` } target="_blank">
                                                    <span className="demo-title">14 - Market Fullwidth</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-15/` } target="_blank">
                                                    <span className="demo-title">15 - Lookbook 1</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-16/` } target="_blank">
                                                    <span className="demo-title">16 - Lookbook 2</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-17/` } target="_blank">
                                                    <span className="demo-title">17 - Fashion Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-18/` } target="_blank">
                                                    <span className="demo-title">18 - Fashion Store (with sidebar)</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-19/` } target="_blank">
                                                    <span className="demo-title">19 - Games Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item">
                                                <Link to={ `${PUBLIC_URL}/demo-20/` } target="_blank">
                                                    <span className="demo-title">20 - Book Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item hidden">
                                                <Link to={ `${PUBLIC_URL}/demo-21/` } target="_blank">
                                                    <span className="demo-title">21 - Sport Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item hidden">
                                                <Link to={ `${PUBLIC_URL}/demo-22/` } target="_blank">
                                                    <span className="demo-title">22 - Tools Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item hidden">
                                                <Link to={ `${PUBLIC_URL}/demo-23/` } target="_blank">
                                                    <span className="demo-title">23 - Fashion Left Navigation Store</span>
                                                </Link>
                                            </div>

                                            <div className="demo-item hidden">
                                                <Link to={ `${PUBLIC_URL}/demo-24/` } target="_blank">
                                                    <span className="demo-title">24 - Extreme Sport Store</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="megamenu-action text-left">
                                            <Link to="#ViewAll" className="btn view-all-demos" onClick={ showAllDemosHandler }><span>View All Demos</span><i className="icon-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={ path.indexOf( "shop" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="sf-with-ul">Shop</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">Shop pages</div>

                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop List</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/2cols` }>Shop Grid 2 Columns</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>Shop Grid 3 Columns</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/4cols` }>Shop Grid 4 Columns</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/market` }><span>Shop Market<span className="tip tip-new">New</span></span></Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed` }>Product Category Boxed</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/category/fullwidth` }><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>Cart</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/checkout` }>Checkout</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>Wishlist</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/dashboard` }>My Account</Link></li>
                                            <li><Link to="#">Lookbook</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className={ path.indexOf( "about" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">About us </Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">About us</div>

                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About 01</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/about-2` }>About 02</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className={ path.indexOf( "blog/" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="sf-with-ul">Blog</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">blog</div>

                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>Classic</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/blog/listing` }>Listing</Link></li>

                                            <li>
                                                <Link to={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` }>Grid</Link>

                                                <ul className="sub-menu">
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` }>Grid 2 columns</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/3cols` }>Grid 3 columns</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/4cols` }>Grid 4 columns</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` }>Grid sidebar</Link></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link to={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` }>Masonry</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` }>Masonry 2 columns</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/3cols` }>Masonry 3 columns</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/4cols` }>Masonry 4 columns</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` }>Masonry sidebar</Link></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` }>Mask</Link>

                                                <ul className="sub-menu">
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` }>Blog mask grid</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/masonry` }>Blog mask masonry</Link></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link to={ `${process.env.PUBLIC_URL}/blog/single/100` }>Single Post</Link>

                                                <ul className="sub-menu">
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single/3` }>Default with sidebar</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-2/97` }>Fullwidth no sidebar</Link></li>

                                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-3/98` }>Fullwidth with sidebar</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className={ path.indexOf( "contact" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul">contacts</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">contacts</div>

                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact 01</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact-2` }>Contact 02</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className={ path.indexOf( "element" ) > -1 ? 'active' : '' }>
                                <Link to="#" className="sf-with-ul">buy Molla</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">Molla elements</div>

                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/products` }>Products</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/typography` }>Typography</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/titles` }>Titles</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/banners` }>Banners</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/categories` }>Product Category</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/video-banners` }>Video Banners</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/buttons` }>Buttons</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/accordions` }>Accordions</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/tabs` }>Tabs</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/testimonials` }>Testimonials</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/blog-posts` }>Blog Posts</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/portfolios` }>Portfolio</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/cta` }>Call to Action</Link></li>

                                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/icon-boxes` }>Icon Boxes</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-bottom">
                    <div className="social-icons">
                        <Link to="#" className="social-icon facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>

                        <Link to="#" className="social-icon twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>

                        <Link to="#" className="social-icon instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>

                        <Link to="#" className="social-icon youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>

                        <Link to="#" className="social-icon pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                    </div>

                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } Molla Store.<br />All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar;