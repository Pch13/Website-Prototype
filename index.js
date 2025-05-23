/*シンプルなスクロールアニメーション
$(function(){
    $(window).scroll(function(){
        const scroll = $(window).scrollTop();

        const windowHeight = $(window).height();

        $(".fadeIn").each(function(){
            const headHeight = $(this).offset().top;

            if(scroll + windowHeight > headHeight){
                $(this).addClass("is-show");
            }else
            {
                $(".fadeIn").remove();
            }
        });
    });
});
*/

//位置情報にもとづいたスクロールアニメーション
$(function(){
    var scrollStart = $('.menu-fadeIn').offset().top;
    var scrollEnd = $('.menu-fadeIn-border').offset().top;
    var distance = 0;

    $(document).scroll(function(){
        distance = $(this).scrollTop();

        if(scrollStart <= distance){
            $('.menu-fadeIn-border').addClass('fixed');
        }
        else if(scrollStart >= distance){
            $(this).removeClass('fixed');
        }

        if(scrollEnd <= distance){
            $('.menu-fadeIn-border').addClass('none');
        }
        else if(scrollEnd >= distance){
            $(this).removeClass('none');
        }
    });
});