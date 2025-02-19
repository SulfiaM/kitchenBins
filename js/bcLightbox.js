$(document).ready(function() {

    var enableKeys = false;
    var $firstNormal = $('.productView-thumbnails.normal li:first'),
    $lastNormal = $('.productView-thumbnails.normal li:last');

    function hideRotate() {
        if($('.bcLightbox .right').hasClass('imageHidden')) {
            $('.bcLightbox .right').removeClass('imageHidden');
            $('.bcLightbox .right img').show();
            $('.bcLightbox .right #mySpriteSpin').hide();
        }
        $('.bcLightbox .right #dragspin').hide();
    }

    function showRotate() {
        $('.bcLightbox .right img').hide();
        $('.bcLightbox .right #mySpriteSpin').show();
        $('.bcLightbox .right #dragspin').show();
        $('.bcLightbox .right').addClass('imageHidden');
    }

    function showLightbox() {
        $('.bcLightboxOverlay, .bcLightbox').show();
        $('.bcLightboxOverlay, .bcLightbox').toggleClass('show');

        enableKeys = true;
    }

    function hideLightbox() {
        $('.bcLightboxOverlay, .bcLightbox').hide();
        $('.bcLightboxOverlay, .bcLightbox').toggleClass('show');

        enableKeys = false;
    }

    function nextImage() {
        var $next, $selected = $(".productView-thumbnails.normal .selected");

        if(!$('.productView-thumbnails.normal .selected').hasClass('rotate')) {
            $('.productView-thumbnails.normal .selected').find('a'); 
            $next = $selected.next('li').length ? $selected.next('li') : $firstNormal;
            $selected.removeClass("selected");
            $next.addClass('selected');

            var selectedLink = $('.productView-thumbnails.normal .selected').find('a');

            console.log(selectedLink);

            $('.productView-image .mainImage').attr('href', $(selectedLink).attr('href'));
            $('.productView-image--default').attr('src', $(selectedLink).attr('href'));
            $('.bcLightbox--mainImage').attr('src', $(selectedLink).attr('href'));

            var myEm = $(selectedLink).closest('li').attr('data-slick-index');
            $('.bcLightbox .bcLightbox--thumbnail[data-slick-index = '+myEm+']').addClass('selected').siblings().removeClass('selected');

            $('.productView-image .mainImage').attr('data-slick-index', $(selectedLink).closest('li').attr('data-slick-index'));

            var thumbnailAttr = $(selectedLink).find('img').attr('alt');

            if(thumbnailAttr == "Customer Image") {
                $('.productView-image.normal .customerImage').css('display', 'table');
            } else {
                $('.productView-image.normal .customerImage').hide();
            }

        } else {
            $next = $('.productView-thumbnails.normal li:first');
            $(this).removeClass("selected");
            $next.addClass('selected');
        }

    }

    function previousImage() {
        var $prev, $selected = $(".productView-thumbnails.normal .selected");
        
        $prev = $selected.prev('li').length ? $selected.prev('li') : $lastNormal;
        $selected.removeClass("selected");
        $prev.addClass('selected');

        var selectedLink = $('.productView-thumbnails.normal .selected').find('a');

        console.log(selectedLink);

        $('.productView-image .mainImage').attr('href', $(selectedLink).attr('href'));
        $('.productView-image--default').attr('src', $(selectedLink).attr('href'));
        $('.bcLightbox--mainImage').attr('src', $(selectedLink).attr('href'));

        var myEm = $(selectedLink).closest('li').attr('data-slick-index');
        $('.bcLightbox .bcLightbox--thumbnail[data-slick-index = '+myEm+']').addClass('selected').siblings().removeClass('selected');

        $('.productView-image .mainImage').attr('data-slick-index', $(selectedLink).closest('li').attr('data-slick-index'));

        var thumbnailAttr = $(selectedLink).find('img').attr('alt');

        if(thumbnailAttr == "Customer Image") {
            $('.productView-image.normal .customerImage').css('display', 'table');
        } else {
            $('.productView-image.normal .customerImage').hide();
        }
    }

    function nextImageLightbox() {
        var $next, $selected = $(".bcLightbox .selected");
        
        $next = $selected.next('li').length ? $selected.next('li') : $firstLightbox;
        $selected.removeClass("selected");
        $next.addClass('selected');

        var selectedLinkLightbox = $('.bcLightbox .selected').find('a');

        var thumbnailSrc = $(selectedLinkLightbox).attr('href');
    
        $('.bcLightbox--mainImage').attr('src', thumbnailSrc);

        var thumbnailAttr = $(selectedLinkLightbox).find('img').attr('alt'); 

        if($('.bcLightbox .selected').hasClass('rotate')) {
            console.log('Hello');
            setTimeout(function(){ showRotate() }, 500);
            $('.bcLightbox .right .customerImage').hide();
            $('.bcLightbox .right .bcLightbox--mainImage').hide();
        }

        if(thumbnailAttr == "Customer Image") {
            $('.bcLightbox .right .customerImage').css('display', 'table');
        } else {
            $('.bcLightbox .right .customerImage').hide();
        }

        hideRotate();
    }

    function prevImageLightbox() {
        var $prev, $selected = $(".bcLightbox .selected");
        
        $prev = $selected.prev('li').length ? $selected.prev('li') : $lastLightbox;
        $selected.removeClass("selected");
        $prev.addClass('selected');

        var selectedLinkLightbox = $('.bcLightbox .selected').find('a');

        var thumbnailSrc = $(selectedLinkLightbox).attr('href');
    
        $('.bcLightbox--mainImage').attr('src', thumbnailSrc);

        var thumbnailAttr = $(selectedLinkLightbox).find('img').attr('alt'); 

        if($('.bcLightbox .selected').hasClass('rotate')) {
            console.log('Hello');
            setTimeout(function(){ showRotate() }, 500);
            $('.bcLightbox .right .customerImage').hide();
            $('.bcLightbox .right .bcLightbox--mainImage').hide();
        }

        if(thumbnailAttr == "Customer Image") {
            $('.bcLightbox .right .customerImage').css('display', 'table');
        } else {
            $('.bcLightbox .right .customerImage').hide();
        }

        hideRotate();
    }
    
    $('.productView-thumbnails.normal li:first').addClass('selected');
    $('.productView-thumbnails.normal li:first a').addClass('is-active');
    
    $(document).on('click', '.productView-image .next', function() {
        nextImage();
    });

    
    $(document).on('click', '.productView-image .previous', function() {
        previousImage();
    });

    $('.productView-image--default').on('swiperight', function () {
        previousImage();
    });

    $('.productView-image--default').on('swipeleft', function () {
        nextImage();
    });

    var $firstLightbox = $('.bcLightbox--thumbnails li:first'),
    $lastLightbox = $('.bcLightbox--thumbnails li:last');
    
    $('.productView-thumbnails.bcLightbox--thumbnails li:first').addClass('selected');
    
    $(document).on('click', '.bcLightbox .next', function() {
        nextImageLightbox();
    });
    
    $(document).on('click', '.bcLightbox .previous', function() {
        prevImageLightbox();
    });
    
    $(document).keydown(function(e){
        if (e.keyCode == 37) { 
            if(enableKeys == true) {
                var $prev, $selected = $(".bcLightbox .selected");
                
                $prev = $selected.prev('li').length ? $selected.prev('li') : $lastLightbox;
                $selected.removeClass("selected");
                $prev.addClass('selected');
                $('.bcLightbox .selected').find('a')[0].click();
                return false;
            }
        }
    });

    $(document).keydown(function(e){
        if (e.keyCode == 39) { 
            if(enableKeys == true) {
                var $next, $selected = $(".bcLightbox .selected");

                $next = $selected.next('li').length ? $selected.next('li') : $firstLightbox;
                $selected.removeClass("selected");
                $next.addClass('selected');
                $('.bcLightbox .selected').find('a')[0].click();
                return false;
            }
        }
    });
    
    $(document).on('click', '.productView-thumbnails li', function() {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    $(document).on('click', '.productView-image .mainImage', function(e) {
        e.preventDefault();
        
        showLightbox();
        $('.bcLightbox .productView-thumbnails').get(0).slick.setPosition(); //Refresh slick

        $('.bcLightbox--mainImage').attr('src', $(this).attr('href'));

        var myEm = $('.productView-image .mainImage').attr('data-slick-index');
        $('.bcLightbox .bcLightbox--thumbnail[data-slick-index = '+myEm+']').addClass('selected').siblings().removeClass('selected');
        
    });
    
    $(document).on('click', '.bcLightbox .bcLightbox--thumbnail-link', function(e) {
        e.preventDefault();
        var thumbnailSrc = $(this).attr('href');
    
        $('.bcLightbox--mainImage').attr('src', thumbnailSrc);

        var thumbnailAttr = $(this).find('img').attr('alt'); 

        if(thumbnailAttr == "Customer Image") {
            $('.bcLightbox .right .customerImage').css('display', 'table');
        } else {
            $('.bcLightbox .right .customerImage').hide();
        }

        hideRotate();
    });
    
    $(document).on('click', '.bcLightboxOverlay, .bcLightbox .bcLightbox--close', function() {
        hideLightbox();
        $('.bcLightbox .right').removeClass('imageHidden');
        $('.bcLightbox .right img').show();
        $('.bcLightbox .right #mySpriteSpin').hide();

    });

    $(document).keyup(function(e) { 
        if (e.keyCode == 27) {
            hideLightbox();
            $('.bcLightbox .right').removeClass('imageHidden');
            $('.bcLightbox .right img').show();
            $('.bcLightbox .right #mySpriteSpin').hide();
        }
    });

    $(document).on('click', '.bcLightbox .productView-thumbnail.rotate', function(e) {
        e.preventDefault();
        showRotate();
        $('.bcLightbox .right .customerImage').hide();

        ga('send', 'event', '360 Image', 'Product Page Lightbox Button Clicked', '360 Rotate Image');
    });

    $(document).on('click', '.productView-images .rotate', function(e) {
        e.preventDefault();
        showLightbox();
        $('.bcLightbox .productView-thumbnails').get(0).slick.setPosition(); //Refresh slick
        showRotate();
    });

    $(document).on('click', '.rotateImage', function(e) {
        showLightbox();
        $('.bcLightbox .productView-thumbnails').get(0).slick.setPosition(); //Refresh slick
        showRotate();
        $('.productView-thumbnail.rotate').addClass('selected').siblings().removeClass('selected');

        ga('send', 'event', '360 Image', 'Product Page Button Clicked', '360 Rotate Image');
    });

});