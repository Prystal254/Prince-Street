$(document).ready(function(){
    let initTop = parseInt($(".models").css("top").replace("px", ""));
    let initLeft = parseInt($(".models").css("left").replace("px", ""));
    $('#fullpage').fullpage({ 
        scrollBar: true,
        menu: '#main_menu',
        // sectionSelector: '.hero, .returns',
    });
    $(".scroll-down .icon").click(function(){
        $("#main_menu .menu-item").eq(parseInt($(this).parent().attr("no"))).click()
    })
    $(window).scroll(function(){
        let top = initTop + $(window).height();
        if($(".hero").hasClass("active")){
            $("#gif1").css("scale", "100%");
            $("#gif2").removeClass("show");
            $("#gif1").delay(400).addClass("show");
            $(".models").css({
                "top" : `${initTop}px`,
                "left" : `${initLeft}px`,
            });
            $(".media-item").fadeOut(500);
        }
        if($(".returns").hasClass("active")){
            $(".models").css({
                "top" : `${($(window).height()*1) + 30}px`,
                "left" : "300px",
            });
            $("#gif1").css("scale", "60%");
            $("#gif1").removeClass("show");
            $("#gif2").delay(400).addClass("show");
        }
        if($(".conversion").hasClass("active")){
            $(".models").css({
                "top" : `${($(window).height()*2) + 30}px`,
                "left" : "600px",
            });
            $("#gif3").removeClass("show");
            if(!($("#gif2").hasClass("show"))){
                $("#gif2").delay(400).addClass("show");
            }
        }
        if($(".brand-value").hasClass("active")){
            $(".models").css({
                "top" : `${($(window).height()*3) + 30}px`,
                "left" : "600px",
            });
            $("#gif2").removeClass("show");
            $("#gif3").delay(400).addClass("show");
        }
    });
    $(".smallprint").click(function(){
        $("#gif2").removeClass("show");
        if(!($(".media-item").eq($(this).index()).css("display") != "none")){
            $(".media-item").fadeOut(500);
            $(".media-item").eq($(this).index()).fadeIn(500);
        }
        if($(this).hasClass("show-model")){
            $("#gif2").addClass("show");
        }
        // $(".smallprint").removeClass("active");
        // $(this).addClass("active");
    });

    //description blurb

    $(".heart").click(function(){
        $(".heart .normal").toggle();
        $(".heart .clicked").toggle();
    })

    //CTA
    $(".color").click(function(){
        $(".color").removeClass("active");
        $(this).addClass("active");
        $(".color-text").hide()
        $(".color-text").eq($(this).index()).show()
    })

    $(".cta .box .cross").click(function(){
        $(".cta .box .box-wrap").animate({opacity: "0"}, 200).hide(250)
        $(".cta .button").addClass("engulf");
        setTimeout(() => {
            $(".cta .button").addClass("settle");
            $(".cta .button").mouseenter(function(){
                if($(".cta .box .box-wrap").css("display") == "none"){
                    $(".cta .peeker").css("max-width", "300px");
                    $(".cta .peeker .peeker-wrap").fadeIn(100);
                    $(".cta .peeker").addClass("show");
                }
            })
            $(".cta").mouseleave(function(){
                $(".cta .peeker").css("max-width", "290px");
                $(".cta .peeker .peeker-wrap").fadeOut(100);
                $(".cta .peeker").removeClass("show");
            })
        }, 500);
        $(".cta .peeker").click(function(){
            $(".cta .button").css("pointer-events", "none");
            setTimeout(() => {
                $(".cta .button").css("pointer-events", "all");
            }, 200);
            $(".cta .button").css("pointer-events", "none");
            $(".cta .peeker").css("max-width", "290px");
            $(".cta .peeker .peeker-wrap").fadeOut(100);
            $(".cta .peeker").removeClass("show");
            setTimeout(() => {
                $(".cta .box .box-wrap").animate({opacity: "1"}, 200).show(250);
                setTimeout(() => {
                    $(".cta .button").removeClass("engulf");
                    $(".cta .button").removeClass("settle");
                }, 500);
            }, 200);
        })
    })
})