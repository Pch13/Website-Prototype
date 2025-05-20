/*紐付けられてない*/
$ (function(){
   if($('.anim-box.slidein.is-animated').length){
    scrollAnimation();
   } 

    function scrollAnimation(){
        $(window).scroll(function(){
            $(".is-animated").each(function(){
                let position=$(this).offset().top,
                scroll=$(window).scrollTop(),
                windowHeight=$(window).height();

            if(scroll > position - windowHeight + 200){
                $(this).addClass('is-active');
            }
        });
    });
    }
    $(window).trigger('scroll');
});
