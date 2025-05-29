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

//ヘッダーアニメーション
const onScroll = () => {
    console.log("scroll");
};

window.addEventListener("scroll", () => {
    onScroll();    
    
    if(pos > hH && pos > lastPos){
        header.classList.add("header-unpinned");
    }
    if(pos < hH || pos < lastPos){
        header.classList.remove("header-unpinned");
    }
    if(pos < hH || pos < lastPos || winBtm <= pos){
        header.classList.remove("header-unpinned");
    }

    lastPos = pos;
});

const header = document.getElementById("header");
const hH = header.clientHeight;
let pos = 0;
let lastPos = 0;

window.addEventListener("scroll", () => {
    pos = window.scrollY;
    onScroll();
})

const winH = window.innerHeight;
const docH = window.documentElement.scrollHeight;
const winBtm = docH - winH;
