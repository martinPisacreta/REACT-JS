import React from 'react';
import { Link } from 'react-router-dom';

function CategoryMenu( props ) {
    return (
        <div className="dropdown category-dropdown">
            <Link to="#dropdown" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                Browse Categories
                </Link>

            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows sf-js-enabled" style={ { touchAction: 'pan-y' } }>
                        <li className="item-lead"><Link to="#">Best Books of 2018</Link></li>
                        <li className="item-lead"><Link to="#">New for { ( new Date() ).getFullYear() }</Link></li>
                        <li><Link to="#">Art &amp; Photography</Link></li>
                        <li><Link to="#">Biography</Link></li>
                        <li><Link to="#">Children's Books</Link></li>
                        <li><Link to="#">Crafts &amp; Hobbies</Link></li>
                        <li><Link to="#">Fiction</Link></li>
                        <li><Link to="#">Food &amp; Drink</Link></li>
                        <li><Link to="#">Graphic Novels, Anime &amp; Manga</Link></li>
                        <li><Link to="#">Health &amp; Fitness Books</Link></li>
                        <li><Link to="#">Young Adult</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default React.memo( CategoryMenu ); 