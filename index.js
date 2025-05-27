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

/*位置情報にもとづいたスクロールアニメーション
$(function(){
    var scrollStart = $('.menu-fadeIn').offset().top;
    var scrollEnd = $('.menu-fadeIn').offset().top;
    var distance = 0;

    $(document).scroll(function(){
        distance = $(this).scrollTop();

        if(scrollStart <= distance){
            $('.menu-fadeIn').addClass('fixed');
        }
        else if(scrollStart >= distance){
            $(this).removeClass('fixed');
        }

        if(scrollEnd >= distance){
            $('.menu-fadeIn').addClass('none');
        }
        else if(scrollEnd <= distance){
            $(this).removeClass('none');
        }
    });
});
*/

//コンストラクター用意
const element = document.getElementById('fadeIn');

//視差を生むように距離を開けておく
const shiftDistance = 100;
element.style.top = '${shiftDistance}px';

//要素の初期の位置情報を取得
const initialElementPosition = element.getBoundingClientRect().top;
//スタート位置を計算
const startScrollPosition = (initialElementPosition + window.scrollY) - window.innerHeight;
//関数処理
window.addEventListener('scroll', () => requestAnimationFrame(animateElement));

function animateElement(){
    if(window.scrollY > startScrollPosition){
        element.style.top = '${Math.max(0, (shiftDistance - (window.scrollY - startScrollPosition) / 2))}px';
    }
}

if(window.scrollY === 0){
    requestAnimationFrame(animateElement);
}

