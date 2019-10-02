var $ = jQuery.noConflict();
$(function(){
    mainMenuHover();

    $(window).on('resize', function() {
        mainMenuHover();
    });

    /* Testimonial slider */
    $("#customer-testimonial-list").flexisel({
        visibleItems: 1,
        itemsToScroll: 1,
        animationSpeed: 400,
        infinite: true,
        navigationTargetSelector: null,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
          mobile: {
            changePoint:768,
            visibleItems: 1,
            itemsToScroll: 1
          }
        }
    });

    /* Tabbed content home page */
    if( $('.lifecycle').length>0 ) {
        $('ul.tabs li').click(function(e){
            e.preventDefault();
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('active');
            $('.tab-content').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });

        tabControl();

        var resizeTimer;
        $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            tabControl();
        }, 250);
        });
    }

});

$(window).on('load', function() {

    /* Login banner show/hide */
    if( $('.home').length > 0 && $('.login-banner-wrapper').length > 0) {

        var container = $('.login-banner-wrapper');

        function hideEle() {
            container.slideUp().removeClass('opened');
        }

        function showEle() {
            container.slideDown().addClass('opened');
        }

        setTimeout(function () {
            showEle();
        }, 3000);
        
        $('.login-banner-close',).on('click', function(e){
            hideEle();
        });

        $(document).on( 'click', function (e) {
            if (!container.is(e.target) && container.has(e.target).length === 0)  {
                hideEle();
            }
        });

        setTimeout(function () {
            hideEle();
        }, 63000);

    }

});


// Main menu nav hover
function mainMenuHover() {
    var el, leftPos, newWidth, initialActiveWidth, activeEle,
    mainNav = $("#main-nav"),
    mainNavLi = $("#main-nav>li");

    mainNav.append('<li id="menu-magic-line"></li>');

    var magicLine = $("#menu-magic-line");

    if ( mainNavLi.hasClass( 'current_page_item' ) ) {
        activeEle = $("#main-nav>li.current_page_item");
        initialActiveWidth = $(".main-nav>li.current_page_item>a").innerWidth();
    } else if ( mainNavLi.hasClass( 'current-menu-parent' ) ) {
        activeEle = $("#main-nav>li.current-menu-parent");
        initialActiveWidth = $(".main-nav>li.current-menu-parent>a").innerWidth();
    } else {
        activeEle = $("#main-nav>li:first-child");
        initialActiveWidth = $(".main-nav>li:first-child>a").innerWidth();
    }

    magicLine
        .width(initialActiveWidth)
        .css("left", activeEle.position().left)
        .data("origLeft", magicLine.position().left)
        .data("origWidth", magicLine.width());
    
    $("#main-nav>li").hover(function() {
        el = $(this);
        if ( el.find('.sub-menu-wrapper').length > 0 ) {
            
            if (el.hasClass('two-column')) {
                newWidth = 298;
                leftPos = el.position().left - 74;                
            } else {
                newWidth = 148;
                el.find('.sub-menu-wrapper').css( 'left', -(newWidth-el.width())/2 );                
                leftPos = $(this).position().left - (newWidth - el.width())/2 + 1;
            }

            
        } else {
            newWidth = el.width();
            leftPos = el.position().left;
        }
        
        magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        magicLine.stop().animate({
            left: magicLine.data("origLeft"),
            width: magicLine.data("origWidth")
        });    
    });

    /* Read more/less */
    $( document ).on("click", ".roadmap-read-more", function (e) {
        e.preventDefault();
        var txt = $(this).next(".roadmap-read-content").is(':visible') ? 'Read More' : 'Read Less';
        $(this).html(txt).toggleClass('opened');        
        $(this).next('.roadmap-read-content').stop(true, true).slideToggle(200);
    });

    /* Roadmap list accordion list */
    $('.roadmap-releases-list a').on('click', function(e){
        e.preventDefault();

        _this = $(this);
        var theID = _this.attr('id');

        if (_this.hasClass('active')) {
            return;
        } else {
            $('.roadmap-releases-list a').removeClass('active');
            _this.addClass('active');
            $('.roadmap-releases-wrapper>div').each(function(){
                if ( theID == $(this).attr('data-release') ) {
                    $(this).slideDown();
                } else if ( theID == 'all-releases' ) {
                    $(this).slideDown();
                } else {
                    $(this).slideUp();
                }
            });
        }

    });
}



function tabControl() {
    var tabs = $('.tabbed-content').find('.tabs');
    if(tabs.is(':visible')) {
      tabs.find('a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href'),
            tabs = $(this).parents('.tabs'),
            buttons = tabs.find('a'),
            item = tabs.parents('.tabbed-content').find('.tab-content');
        buttons.removeClass('active');
        item.removeClass('active');
        $(this).addClass('active');
        $(target).addClass('active');
      });
    } else {
      $('.tab-content').on('click', function() {
        var container = $(this).parents('.tabbed-content'),
            currId = $(this).attr('id'),
            items = container.find('.tab-content');
        container.find('.tabs a').removeClass('active');
        items.removeClass('active');
        $(this).addClass('active');
        container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
      });
    } 
  }