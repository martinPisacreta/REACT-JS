/**
 * Molla Docs JavaScript File
 */
'use strict';

/**
 * Molla Object
 */
window.Molla = {};

/**
 * Molla Base
 */
( function ( $ ) {
    // Properties & Status
    Molla.$window = $( window );
    Molla.$body = $( document.body );
    Molla.status = '';

    // Detect Internet Explorer
    Molla.isIE = navigator.userAgent.indexOf( "Trident" ) >= 0;
    // Detect Edge
    Molla.isEdge = navigator.userAgent.indexOf( "Edge" ) >= 0;
    // Detect Mobile
    Molla.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );

    /**
     * Make a macro task
     * 
     * @param {function} fn
     * @param {number} delay
     */
    Molla.call = function ( fn, delay ) {
        setTimeout( fn, delay );
    }

    /**
     * Get dom element by id
     * @param {string} id
     * @return {HTMLElement} element
     */
    Molla.byId = function ( id ) {
        return document.getElementById( id );
    }

    /**
     * Get dom elements by className
     * @param {string} className
     * @param {HTMLElement} element this can be omitted.
     * @return {HTMLCollection}
     */
    Molla.byClass = function ( className, element ) {
        return element ?
            element.getElementsByClassName( className ) :
            document.getElementsByClassName( className );
    }

    /**
     * Get jQuery object
     * @param {string|jQuery} selector
     * @return {jQuery|Object} jQuery Object or {each: $.noop}
     */
    Molla.$ = function ( selector ) {
        if ( selector instanceof jQuery ) {
            return selector;
        }
        return $( selector );
    }
} )( jQuery );

/**
 * Molla Dependent Plugins
 */

( function ( $ ) {
    /**
     * @function parallax
     * Initialize Parallax Background
     * @requires themePluginParallax
     * @param {string} selector
     */
    Molla.parallax = function ( selector ) {
        let parallax = document.querySelectorAll( selector );
        for ( let i = 0; i < parallax.length; i++ ) {

            let y = 0;
            if ( parallax[ i ].classList.contains( 'header-parallax' ) ) {
                y = ( 10 - window.pageYOffset ) * 47 / 900 + 50;
            } else {
                y = ( parallax[ i ].offsetTop - window.pageYOffset ) * 47 / parallax[ i ].offsetTop + 50;
            }
            parallax[ i ].style.backgroundPositionY = y + '%';

            document.addEventListener( "scroll", function () {
                if ( parallax[ i ].classList.contains( 'header-parallax' ) ) {
                    y = ( 10 - window.pageYOffset ) * 47 / 900 + 50;
                } else {
                    y = ( parallax[ i ].offsetTop - window.pageYOffset ) * 47 / parallax[ i ].offsetTop + 50;
                }

                parallax[ i ].style.backgroundPositionY = y + '%';
            } );
        }
    }

    Molla.stickySidebar = function ( selector ) {
        var stickyContent, top, bottom, offHeight, originHeight, originWidth;
        var height = 10;

        stickyContent = document.querySelector( selector );
        if ( !stickyContent ) return;
        stickyContent.style.position = "relative";
        stickyContent.style.top = '0';

        stickyContentHandler();

        function getWidth( self ) {
            return parseInt( self.clientWidth ) - parseInt( window.getComputedStyle( self ).getPropertyValue( "padding-left" ) ) - parseInt( window.getComputedStyle( self ).getPropertyValue( "padding-right" ) );
        }

        function stickyContentHandler( e ) {
            if ( Molla.byId( 'document-view' ).offsetHeight > document.querySelector( selector ).offsetHeight ) {
                stickyContent = document.querySelector( selector );
                offHeight = height;
                originHeight = stickyContent.offsetHeight;
                bottom = stickyContent.parentElement.getBoundingClientRect().bottom + window.pageYOffset;
                top = stickyContent.parentNode.getBoundingClientRect().top + window.pageYOffset;
                originWidth = getWidth( stickyContent.parentElement );
                if ( document.querySelector( "body" ).clientWidth < 992 ) {
                    stickyContent.style.position = "fixed";
                    //stickyContent.style.width = "unset";
                } else {

                    if ( top > window.pageYOffset + offHeight ) {
                        stickyContent.style.position = "relative";
                        stickyContent.style.top = '0';
                        stickyContent.style.width = originWidth + 'px';
                    }

                    if ( top < window.pageYOffset + offHeight ) {
                        stickyContent.style.position = "fixed";
                        stickyContent.style.top = offHeight + 'px';
                        stickyContent.style.width = originWidth + 'px';
                        stickyContent.style.bottom = 'auto';
                    }
                    if ( bottom - originHeight - offHeight < window.pageYOffset ) {
                        stickyContent.style.position = "absolute";
                        stickyContent.style.width = originWidth + 'px';
                        stickyContent.style.bottom = '0';
                        stickyContent.style.top = 'auto';
                    }
                }
            } else {
                if ( document.querySelector( "body" ).clientWidth > 991 ) {
                    stickyContent.style.position = "relative";
                    stickyContent.style.top = '0';
                    stickyContent.style.width = getWidth( stickyContent.parentElement ) + 'px';
                } else {
                    stickyContent.style.position = "fixed";
                }
            }
        }

        document.addEventListener( "scroll", stickyContentHandler, true );
    }

    Molla.initScrollTopButton = function () {
        // register scroll top button
        var domScrollTop = Molla.byId( 'scroll-top' );

        domScrollTop.addEventListener( 'click', function ( e ) {
            $( 'html, body' ).animate( { scrollTop: 0 }, 600 );
            e.preventDefault();
        } );

        var refreshScrollTop = function () {
            if ( window.pageYOffset > 400 ) {
                domScrollTop.classList.add( 'show' );
            } else {
                domScrollTop.classList.remove( 'show' );
            }
        }

        Molla.call( refreshScrollTop, 500 );
        window.addEventListener( 'scroll', refreshScrollTop, { passive: true } );
    }
} )( jQuery );

/**
 * Molla Plugin - Sidebar
 * @instance multiple
 */

function Sidebar( name ) {
    return this.init( name );
}

( function ( $ ) {
    /**
     * @function initMenu
     */
    var Menu = {
        init: function () {
            this.initCollapsibleWidget();
        },
        initCollapsibleWidget: function () {
            // generate toggle icon
            $( '.widget-collapsible .widget-title' ).each( function () {
                var span = document.createElement( 'span' );
                span.className = 'toggle-btn';
                this.appendChild( span );
            } );
            // slideToggle
            $( '.widget-collapsible .widget-title' ).on( 'click', function ( e ) {
                var $this = $( this ),
                    $body = $this.siblings( '.widget-body' );

                $this.hasClass( "collapsed" ) || $body.css( 'display', 'block' );

                $body.stop().slideToggle( 300 );
                $this.toggleClass( "collapsed" );
            } );
        }
    }

    Molla.menu = Menu;
} )( jQuery );

( function ( $ ) {
    'use strict';

    // Private Properties

    var onResizeNavigationStyle = function () {
        if ( window.innerWidth < 992 ) {
            this.$sidebar.find( '.sidebar-content, .filter-clean' ).removeAttr( 'style' );
            this.$sidebar.find( '.sidebar-content' ).attr( 'style', '' );
            this.$sidebar.siblings( '.toolbox' ).children( ':not(:first-child)' ).removeAttr( 'style' );
        }
    }

    // Public Properties

    Sidebar.prototype.init = function ( name ) {
        var self = this;

        self.name = name;
        self.$sidebar = $( '.' + name );
        self.isNavigation = false;

        // If sidebar exists
        if ( self.$sidebar.length ) {

            // check if navigation style
            self.isNavigation = self.$sidebar.hasClass( 'sidebar-fixed' ) &&
                self.$sidebar.parent().hasClass( 'toolbox-wrap' );

            if ( self.isNavigation ) {
                onResizeNavigationStyle = onResizeNavigationStyle.bind( this );
                Molla.$window.on( 'resize', onResizeNavigationStyle );
            }

            Molla.$window.on( 'resize', function () {
                Molla.$body.removeClass( name + '-active' );
            } );

            // Register toggle event
            self.$sidebar.find( '.sidebar-toggle, .sidebar-toggle-btn' )
                .add( name === 'sidebar' ? '.left-sidebar-toggle' : ( '.' + name + '-toggle' ) )
                .on( 'click', function ( e ) {
                    self.toggle();
                    $( this ).blur();
                    e.preventDefault();
                } );

            // Register close event
            self.$sidebar.find( '.sidebar-overlay, .sidebar-close' )
                .on( 'click', function ( e ) {
                    Molla.$body.removeClass( name + '-active' );
                    e.preventDefault();
                } );
        }
        return false;
    }

    Sidebar.prototype.toggle = function () {
        var self = this;

        // if fixed sidebar
        if ( window.innerWidth >= 992 && self.$sidebar.hasClass( 'sidebar-fixed' ) ) {

            // is closed ?
            var isClosed = self.$sidebar.hasClass( 'closed' );

            // if navigation style's sidebar
            if ( self.isNavigation ) {

                isClosed || self.$sidebar.find( '.filter-clean' ).hide();

                self.$sidebar.siblings( '.toolbox' ).children( ':not(:first-child)' ).fadeToggle( 'fast' );

                self.$sidebar
                    .find( '.sidebar-content' )
                    .stop()
                    .animate(
                        {
                            'height': 'toggle',
                            'margin-bottom': isClosed ? 'toggle' : -6
                        }, function () {
                            $( this ).css( 'margin-bottom', '' );
                            isClosed && self.$sidebar.find( '.filter-clean' ).fadeIn( 'fast' );
                        }
                    );
            }

            // if shop sidebar
            if ( self.$sidebar.hasClass( 'shop-sidebar' ) ) {

                // change columns
                var $wrapper = $( '.main-content .product-wrapper' );
                if ( $wrapper.length ) {
                    if ( $wrapper.hasClass( 'product-lists' ) ) {

                        // if list type, toggle 2 cols or 1 col
                        $wrapper.toggleClass( 'row cols-xl-2', !isClosed );

                    } else {

                        // if grid type
                        var colData = $wrapper.data( 'toggle-cols' ),
                            colsClasses = $wrapper.attr( 'class' ).match( /cols-\w*-*\d/g ),
                            // get max cols count
                            maxColsCount = colsClasses ?
                                Math.max.apply( null, colsClasses.map( function ( cls ) {
                                    return cls.match( /\d/ )[ 0 ];
                                } ) ) :
                                0;

                        if ( isClosed ) { // when open
                            4 === maxColsCount &&
                                3 == colData &&
                                $wrapper.removeClass( 'cols-md-4' );

                        } else { // when close
                            if ( 3 === maxColsCount ) {
                                $wrapper.addClass( 'cols-md-4' );

                                if ( !colData ) {
                                    $wrapper.data( 'toggle-cols', 3 );
                                }
                            }
                        }
                    }
                }
            }

            // finally, toggle fixed sidebar
            self.$sidebar.toggleClass( 'closed' );

        } else {

            self.$sidebar.find( '.sidebar-overlay .sidebar-close' ).css( 'margin-left', - ( window.innerWidth - document.body.clientWidth ) );

            // activate sidebar
            Molla.$body
                .toggleClass( self.name + '-active' )
                .removeClass( 'closed' );

            // issue
            if ( window.innerWidth >= 1200 && Molla.$body.hasClass( 'with-flex-container' ) ) {
                $( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
            }
        }
    }

    Molla.sidebar = function ( name ) {
        return new Sidebar().init( name );
    }
} )( jQuery );

/**
 * Molla Plugin - Docs
 * 
 * @instance single
 */

( function ( $ ) {
    'use strict';

    // Private Properties
    var templates = []; // array of id : { title, text }
    var activeId = 'template-welcome';

    // Public Functions

    var Docs = {
        init: function () {
            var self = this;

            // find and remove all script templates
            var len = document.scripts.length;
            for ( var i = 0; i < len; ++i ) {
                var script = document.scripts[ i ];
                if ( script.type === 'text/html' ) {
                    templates[ script.id ] = {
                        text: script.text
                    };
                    script.parentNode.removeChild( script );
                    --len, --i;
                }
            }

            // get titles
            $( 'aside .document-link' ).each( function () {
                var $this = $( this ),
                    id = $this.attr( 'href' ).slice( 1 );
                templates[ id ] && (
                    templates[ id ].title = $this.data( 'title' )
                )
            } );

            // # Register events
            Molla.$body.on( 'click', '.document-link', function ( e ) {
                self.open( e.currentTarget.getAttribute( 'href' ).slice( 1 ) );
                var mainContent = Molla.byClass( 'main-content' );
                mainContent.length && $( 'html' ).animate( { scrollTop: mainContent[ 0 ].offsetTop }, 600 );
            } );

            if ( location.hash ) {
                self.open( location.hash.slice( 1 ) );
            }

            $( '.btn-search' ).click( function () {
                self.search( this.previousElementSibling.value );
            } );

            $( '.input-search' ).keydown( function ( e ) {
                e.keyCode === 13 && self.search( this.value );
            } );
        },

        open: function ( id ) {
            // active new
            id && templates[ id ] && ( activeId = id );

            // show active
            if ( activeId && templates[ activeId ] ) {
                Molla.byId( 'document-view' ).innerHTML = templates[ activeId ].text;
                // Molla.byId( 'document-title' ).textContent = templates[ activeId ].title;
                Molla.byId( 'document-view' ).classList.remove( 'search-result' );
            }
            $( Molla.byClass( 'document-link' ) ).parent( 'li' ).removeClass( 'show' );
            $( '.document-link[href="#' + id + '"]' ).parent().addClass( 'show' );
        },

        search: function ( query ) {

            var searchText = query.trim();

            if ( searchText == '' ) {
                this.open();
                return;
            }
            if ( searchText.length < 3 ) {
                // do nothing
                return;
            }

            var results = [];

            Molla.byId( 'document-title' ).textContent = 'Search Result';

            // Perform search
            for ( var id in templates ) {
                var count = 0, result;
                result = templates[ id ].text.replace( new RegExp( searchText, 'gi' ), function ( match, offset, string ) {
                    var i = 0;
                    for ( i = offset; i >= 0; --i ) {
                        if ( string[ i ] === '<' ) {
                            return match;
                        }
                        if ( string[ i ] === '>' ) {
                            break;
                        }
                    }
                    for ( i = offset; offset[ i ]; ++i ) {
                        if ( string[ i ] === '>' ) {
                            return match;
                        }
                        if ( string[ i ] === '<' ) {
                            break;
                        }
                    }

                    ++count;
                    return '<mark>' + match + '</mark>';
                } );

                if ( count > 0 ) {
                    results.push( {
                        id: id,
                        count: count,
                        text: '<div class="search-pane"><sup class="search-count"><strong>' + count + '</strong> words found in:</sup>' + result + '</div>'
                    } );
                }
            }

            // Process result
            var finalResult = '';
            results.sort( function ( a, b ) {
                return b.count - a.count;
            } );
            for ( var id in results ) {
                finalResult += results[ id ].text;
            }
            Molla.byId( 'document-view' ).innerHTML = finalResult ? finalResult : '<h5 class="text-center">Nothing Found</h5>';
            Molla.byId( 'document-view' ).classList.add( 'search-result' );
        }
    }

    Molla.docs = Docs;

} )( jQuery );

/**
 * Molla Theme
 */
( function ( $ ) {
    // Initialize Method while document is being loaded.
    Molla.prepare = function () {
        Molla.$body.hasClass( 'with-flex-container' ) && window.innerWidth >= 1200 &&
            Molla.$body.addClass( 'sidebar-active' );
    };

    // Initialize Method while document is interactive
    Molla.initLayout = function () {
    }

    // Initialize Method after document has been loaded
    Molla.init = function () {
        Molla.sidebar( 'sidebar' );                             // Initialize left sidebar
        Molla.parallax( '.bg-parallax' );                       // Initialize parallax
        Molla.initScrollTopButton();                            // Initialize scroll top button.
        Molla.menu.init();                                      // Initialize menus
        Molla.docs.init();                                      // Initialize docs
        Molla.stickySidebar( '.sticky-content' );

        // Setup Events
        Molla.$window.on( 'resize', Molla.onResize );
    }

    Molla.onResize = function () {
        // refresh zoom images.
        Molla.stickySidebar( '.sticky-content' );
    }
} )( jQuery );

/**
 * Molla Theme Initializer
 */
( function ( $ ) {
    'use strict';

    // Prepare Molla Theme
    Molla.prepare();

    // Initialize Molla Theme
    document.onreadystatechange = function () {
        if ( document.readyState === "complete" ) {
        }
    }
    window.onload = function () {
        // loaded
        Molla.status = 'loaded';
        document.body.classList.add( 'loaded' );
        Molla.status = 'complete';

        Molla.call( Molla.initLayout );
        Molla.call( Molla.init );
    }
} )( jQuery );
