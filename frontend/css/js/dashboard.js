/* =====================================================
   DASHBOARD JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Dashboard initialized");


    /* =================================================
       DEMO BUSINESS DATA
    ================================================= */

    const businessData = {

        revenue: 384250,

        orders: 1248,

        customers: 486,

        lowStock: 7,

        healthScore: 82

    };


    /* =================================================
       UPDATE STATISTICS
    ================================================= */

    const revenue =
        document.getElementById("totalRevenue");

    const orders =
        document.getElementById("totalOrders");

    const customers =
        document.getElementById("totalCustomers");

    const lowStock =
        document.getElementById("lowStock");


    if (revenue) {

        revenue.textContent =
            "₹" +
            businessData.revenue.toLocaleString("en-IN");

    }


    if (orders) {

        orders.textContent =
            businessData.orders.toLocaleString("en-IN");

    }


    if (customers) {

        customers.textContent =
            businessData.customers.toLocaleString("en-IN");

    }


    if (lowStock) {

        lowStock.textContent =
            businessData.lowStock;

    }


    /* =================================================
       HEALTH SCORE
    ================================================= */

    const healthScore =
        document.getElementById("healthScore");


    if (healthScore) {

        healthScore.textContent =
            businessData.healthScore;

    }


    /* =================================================
       UPLOAD BUTTON
    ================================================= */

    const uploadButton =
        document.getElementById("uploadDataBtn");


    if (uploadButton) {

        uploadButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "upload.html";

            }
        );
        fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    body: formData
});

    }

});