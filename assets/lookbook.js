document.addEventListener('click', function(event) {
    if (event.target.matches('.lookbook-dots span')) {
        var galleryRightMains = document.querySelectorAll('.lookbook-gallery-right-main');
        galleryRightMains.forEach(function(galleryRightMain) {
            galleryRightMain.classList.remove('active');
        });
        var allDots = document.querySelectorAll('.lookbook-dots span');
        allDots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        event.target.classList.add('active');

        var dotAttr = event.target.getAttribute('dots-attr');
        galleryRightMains.forEach(function(galleryRightMain) {
            var slideAttr = galleryRightMain.getAttribute('slider-attr');
            if (dotAttr === slideAttr) {
                galleryRightMain.classList.add('active');
            }
        });
    }

    if (event.target.closest('.lookbook-gallery-left .lookbook-dots span')) {
        var clk = event.target.getAttribute('dots-attr');
        var rightDots = document.querySelectorAll('.lookbook-dots.lookbook-gallery-right-dots span');
        rightDots.forEach(function(dot) {
            var sld = dot.getAttribute('dots-attr');
            if (clk === sld) {
                dot.classList.add('active');
            }
        });
    }
});
