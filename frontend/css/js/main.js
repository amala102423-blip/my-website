/* =====================================================
   BIZPILOT MAIN JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("BizPilot loaded successfully");


    /* =================================================
       MOBILE MENU
    ================================================= */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const sidebar =
        document.querySelector(".sidebar");


    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                sidebar.classList.toggle("mobile-open");

            }
        );

    }


    /* =================================================
       CURRENT PAGE
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const links =
        document.querySelectorAll(".sidebar-link");


    links.forEach(function (link) {

        const href =
            link.getAttribute("href");


        if (href === currentPage) {

            link.classList.add("active");

        }
        fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    body: formData
});

    });

});