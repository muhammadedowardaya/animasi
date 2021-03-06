function animasiIntro() {
    $("#text span").velocity("transition.slideLeftIn", {
        stagger: 150,
        complete: function () {
            animasiButtonStart();
        }
    });
}


function animasiButtonStart() {
    $("#start").velocity("transition.bounceUpIn")
        .mouseenter(function () {
            $(this).velocity({
                width: 100
            });
        })
        .mouseleave(function () {
            $(this).velocity({
                width: 125
            });
        });
}

function animasiIntroOut() {
    $("#start").velocity("transition.whirlOut", {
        stagger: 150,
        complete: function () {
            $("#text pre").velocity({
                "font-size": "20px",
                "top": "90%"
            }, {
                duration: 1000,
                complete: function () {
                    callMenu();
                    $("#menu ul li a[href='what_we_do']").trigger("click");
                }
            });

        }
    });
}

function callMenu() {
    $("nav#menu ul li").velocity("transition.slideLeftIn", {
        stagger: 250,
    });

    $("nav#menu ul li a").click(function (e) {
        e.preventDefault();
        $(this).parent("li").addClass("active").siblings().removeClass("active");
        var hrefString = $(this).attr("href");
        $(".container-content").css("display", "none");
        document.querySelector("#" + hrefString).style.display = "flex";
        // document.querySelector("#" + hrefString).nextElementSibling.classList.remove("flex");
        // document.querySelector("#" + hrefString).previousElementSibling.classList.remove("flex");
        window[hrefString]();
    })


}

function what_we_do() {

    $("#main #what_we_do section.gambar").velocity("transition.flipYIn", {
        duration: 3000,
    })
    $("#main #what_we_do div .title").velocity("transition.slideUpIn", {
        duration: 3000
    })

    $("#main #what_we_do div").velocity("transition.slideDownIn", {
        duration: 3000
    })
}

function our_team() {
    $("#our_team").velocity("transition.flipYIn", {
        duration: 5000
    });
}

function tampilScroll() {
    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();
        console.log(wScroll);
    });
}

$(document).ready(function () {
    const nama = document.querySelector(".intro #text pre");
    const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join("");
    nama.innerHTML = huruf;
    animasiIntro();
});

document.querySelector("#" + hrefString).nextElementSibling.style.display = "none";
document.querySelector("#" + hrefString).nextElementSibling.style.display = "none";