﻿$(".nav li div").on("click", function () {
    $(".nav li div").removeClass("spdm_toplevel_active");
    $(this).addClass("spdm_toplevel_active");
   
});


$(".nav li").on("click", function () {
    $(".nav li").removeClass("open");
    $(this).addClass("open");

});