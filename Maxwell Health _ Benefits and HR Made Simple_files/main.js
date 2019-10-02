// ಠ_ಠ 
var $ = jQuery.noConflict();
// POPULATES BANNER VIDEO IF WINDOW SIZE IS GREATER THAN 960PX
var siteUrl = window.location.href;

 /*if ($(window).width() > 960) {
    $( ".header-container.video" ).append( '<video onended="this.play();" class="benefits-video" src="' + siteUrl + '/wp-content/themes/maxwellhealth/newAssets/vid/commercial.mp4" autoplay="autoplay"  muted="muted"></video>' );
  }
  else {

  }*/

//INITIALIZES FOUNDATION
$(document).foundation();

// REGULAR SKROLLR INIT
// var skrollr = skrollr.init();
// SKROLLR BLOCK MOBILE INIT
$(function () {
  /* verify user agent if is touch device */
  function is_touch_device() {
    return 'ontouchstart' in window        /* works on most browsers */
        || navigator.maxTouchPoints;       /* works on IE10/11 and Surface */
  };

  /* Disable menu clickthrough on dropdown toggle links */
  var isMobile = false; /* initiate as false */
  /* device detection */
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
  if ( isMobile || is_touch_device() ) {
    skrollr.init().destroy();
  } else {
    skrollr.init();    
  }
  // disable skrollr if the window is resized below 768px wide
  /*$(window).on('resize', function () {
    if ($(window).width() <= 960) {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
    } else {
      skrollr.init();
    }
  });*/
});

/* Slider background */
/*$(function () {
  if ($(window).width() > 960) {
    // FLOATER BACKGROUND SLIDER
    var counter = 1,
        int = setInterval(function(){
        $("div.parallax.people").attr("id", "image" + counter);
        if (counter === 4){
            counter = 1;
        } else {
            counter++;
        }
    }, 5000);
  }
});*/


// TRANSFORMS NAVBAR AND SHOWS PRESS BAR ON SCROLL
if( $(".header-container").length > 0 ) {
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      var topofDiv = $(".header-container").offset().top; //gets offset of header
      var height = $(".header-container").outerHeight(); //gets height of header
       
      if (scroll >= (topofDiv + height) - 80) { 
            $(".header").addClass("scroll");
            $(".press").addClass("scroll");
            $(".sideNav").addClass("fixed");
        } else {
            $(".header").removeClass("scroll");
            $(".press").removeClass("scroll");
            $(".sideNav").removeClass("fixed");
        }
  });
}

// HIDES PRESS BAR ON BOTTOM TOUCHING FOOTER
if( $("#waiting-for").length > 0 ) {
  $(window).scroll(function() {    
      var scroll2 = $(window).scrollTop();
      var topofDiv2 = $("#waiting-for").offset().top; //gets offset of header
      var height2 = $("#waiting-for").outerHeight(); //gets height of header

      if (scroll2 <= (topofDiv2 - height2) - 80) { 
          $(".press").addClass("scroll");
      } else {
          $(".press").removeClass("scroll");
      }
       if (scroll2 < 10) { 
          $(".press").removeClass("scroll");
      } 
  });
}

if( $(".sideNav").length > 0 ) {
  $( window ).scroll(function() {
      var nav = $(".sideNav");
      if (nav.length > 0) {
        var footer = $("#waiting-for");
        var nav_top = nav.offset().top;
        var footer_top = footer.offset().top;
        var nav_bottom = nav_top + nav.height();
        var footer_bottom = footer_top + footer.height();

         if (nav_bottom >= footer_top && nav_top < footer_bottom) {
           $(".sideNav").removeClass("fixed");
        };
      }
  });
}

// OPENS MOBILE MENU
$( "a#nav-toggle" ).click(function() {
  $( ".mobile-nav-menu" ).toggleClass( "slide-open" );
  $( "#nav-toggle" ).toggleClass( "active" );
  $( ".header" ).toggleClass( "slide-open" );
});

// MODAL AUTOPLAY 
$(function () {

  var video =  $('.flex-video iframe');
  var videoLink = $(video).attr('src');

  if ( videoLink !== 'undefined') {
    if ($(window).width() > 960 ) {
      $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
        video.attr('src', videoLink + '&autoplay=1');
      });
      $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
        video.attr('src', videoLink + '&autoplay=0');
      });
    } else {
      $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
        video.attr('src', videoLink + '&autoplay=0');
      });
      $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
        video.attr('src', videoLink + '&autoplay=0');
      });
    }
  }
});


// Adds Hash URL for Modal
$(document).ready(function() {
    var hash = document.location.hash.substring(1);
    $(".reveal-modal").each(function() {
        if($(this).attr("id") === hash) {
            $(this).foundation("reveal","open");
        }
    });
});

// SMOOTH SCROLLING
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});

// FASTCLICK.JS
function FastClick(a){"use strict";function c(a,b){return function(){return a.apply(b,arguments)}}var b;this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,FastClick.notNeeded(a)||(deviceIsAndroid&&(a.addEventListener("mouseover",c(this.onMouse,this),!0),a.addEventListener("mousedown",c(this.onMouse,this),!0),a.addEventListener("mouseup",c(this.onMouse,this),!0)),a.addEventListener("click",c(this.onClick,this),!0),a.addEventListener("touchstart",c(this.onTouchStart,this),!1),a.addEventListener("touchmove",c(this.onTouchMove,this),!1),a.addEventListener("touchend",c(this.onTouchEnd,this),!1),a.addEventListener("touchcancel",c(this.onTouchCancel,this),!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){"use strict";return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;

// INIT FASTCLICK
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

$(document).ready(function(){
  
  /* Tabbed content home page */
  $('ul.tabs li').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  })

  /* Testimonial slider */
  $("#flexisel-testimonial").flexisel({
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

  /* Videos slider */
  $("#flexisel-videos").flexisel({
    visibleItems: 3,
    itemsToScroll: 1,
    animationSpeed: 400,
    infinite: false,
    navigationTargetSelector: null,
    autoPlay: {
      enable: false,
      interval: 5000,
      pauseOnHover: true
    },
    responsiveBreakpoints: { 
      portrait: { 
        changePoint:480,
        visibleItems: 1,
        itemsToScroll: 1
      }, 
        landscape: { 
        changePoint:640,
        visibleItems: 2,
      },
        tablet: { 
        changePoint:768,
        visibleItems: 3,
      }
    }
  });


  /* Videos modals */
  $('.videos .play-btn').on( 'click', function(e) {
    e.preventDefault();
    var videoID = $(this).attr('data-video');
    $('#videos-modal-iframe').attr('src', videoID);

    var newVideo =  $('#videos-modal-iframe');
    var newVideoLink = $(newVideo).attr('src');
    if ($(window).width() > 960) {
      $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
        newVideo.attr('src', newVideoLink + '?autoplay=1');
      });
      $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
        newVideo.attr('src', newVideoLink + '?autoplay=0');
      });
    } else {
      $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
        newVideo.attr('src', newVideoLink + '?autoplay=0');
      });
      $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
        newVideo.attr('src', newVideoLink + '?autoplay=0');
      });
    }
  });

});