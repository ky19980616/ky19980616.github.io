$(function(){
    $('#dowebok').fullpage({
        //设置背景颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //到达某一屏的回调函数
        afterLoad:function(link,index){
            console.log("aa");
            //去除前一屏的current
            $(".section").removeClass("current");
            //延时执行当前屏的动画
            setTimeout(function() {
                document.querySelectorAll(".section")[index-1].classList.add("current");
            }, 100);
        }
    });
});

window.onload = function(){
    document.querySelectorAll(".section")[0].classList.add("current");
}