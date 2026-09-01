/* =====================================================
   AI ADVISOR JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const input =
        document.getElementById(
            "questionInput"
        );


    const sendButton =
        document.getElementById(
            "sendButton"
        );


    const chatBody =
        document.getElementById(
            "chatBody"
        );


    /* =================================================
       SEND MESSAGE
    ================================================= */

    function sendMessage() {

        if (!input) {
            return;
        }


        const question =
            input.value.trim();


        if (!question) {
            return;
        }


        addMessage(
            question,
            "user"
        );


        input.value = "";


        setTimeout(
            function () {

                const answer =
                    generateAnswer(question);


                addMessage(
                    answer,
                    "ai"
                );

            },
            600
        );

    }


    /* =================================================
       ADD MESSAGE
    ================================================= */

    function addMessage(
        text,
        sender
    ) {

        if (!chatBody) {
            return;
        }


        const message =
            document.createElement(
                "div"
            );


        message.className =
            "message " +
            (sender === "user"
                ? "user"
                : "ai");


        message.innerHTML = `

            <div class="message-content">

                <div class="message-bubble">

                    ${text}

                </div>

                <div class="message-time">

                    Just now

                </div>

            </div>

        `;


        chatBody.appendChild(
            message
        );


        chatBody.scrollTop =
            chatBody.scrollHeight;

    }


    /* =================================================
       BASIC BUSINESS ANSWERS
    ================================================= */

    function generateAnswer(question) {

        const q =
            question.toLowerCase();


        if (
            q.includes("sales") ||
            q.includes("revenue")
        ) {

            return `
                Your recent sales are showing
                positive growth. Focus on your
                best-performing products and
                maintain sufficient inventory.
            `;

        }


        if (
            q.includes("inventory") ||
            q.includes("stock")
        ) {

            return `
                Based on the current business
                pattern, prioritize fast-moving
                products and avoid overstocking
                slow-moving items.
            `;

        }


        if (
            q.includes("customer") ||
            q.includes("retention")
        ) {

            return `
                Customers with declining purchase
                frequency should be targeted with
                personalized offers or follow-up
                campaigns.
            `;

        }


        if (
            q.includes("profit") ||
            q.includes("growth")
        ) {

            return `
                To improve profitability, focus
                on high-margin products, reduce
                unnecessary inventory costs, and
                improve repeat purchases.
            `;

        }


        return `
            I recommend reviewing your sales,
            inventory and customer trends together
            before making the next business decision.
        `;

    }


    /* =================================================
       BUTTON
    ================================================= */

    if (sendButton) {

        sendButton.addEventListener(
            "click",
            sendMessage
        );

    }


    /* =================================================
       ENTER KEY
    ================================================= */

    if (input) {

        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    sendMessage();

                }

            }
        );

    }


    /* =================================================
       QUICK QUESTIONS
    ================================================= */

    document
        .querySelectorAll(".question-btn")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        if (input) {

                            input.value =
                                button.textContent
                                    .trim();

                            sendMessage();

                        }

                    }
                );
                fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    body: formData
});

            }
        );

});