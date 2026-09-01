/* =====================================================
   INSIGHTS JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Insights initialized");


    /* =================================================
       GET ANALYSIS
    ================================================= */

    const storedData =
        localStorage.getItem(
            "bizpilotAnalysis"
        );


    if (!storedData) {

        console.log(
            "No uploaded business data yet."
        );

        return;

    }


    const data =
        JSON.parse(storedData);


    console.log(
        "Business analysis:",
        data
    );


    /* =================================================
       REVENUE
    ================================================= */

    const revenue =
        document.getElementById(
            "insightRevenue"
        );


    if (revenue && data.total_revenue) {

        revenue.textContent =
            "₹" +
            data.total_revenue
                .toLocaleString("en-IN");

    }


    /* =================================================
       AI INSIGHTS
    ================================================= */

    const container =
        document.getElementById(
            "insightsContainer"
        );


    if (
        container &&
        data.insights
    ) {

        container.innerHTML = "";


        data.insights.forEach(
            function (insight) {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "ai-insight";


                card.innerHTML = `

                    <div class="ai-insight-header">

                        <div class="ai-insight-icon">

                            <i class="bi bi-lightbulb"></i>

                        </div>

                        <span class="badge-custom badge-warning">

                            ${insight.priority}

                        </span>

                    </div>


                    <h3>

                        ${insight.title}

                    </h3>


                    <p>

                        ${insight.description}

                    </p>


                    <div class="recommendation">

                        <strong>

                            AI Recommendation

                        </strong>

                        <span>

                            ${insight.recommendation}

                        </span>

                    </div>

                `;


                container.appendChild(card);

            }
        );
        fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    body: formData
});

    }

});