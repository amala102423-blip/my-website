/* =====================================================
   UPLOAD JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const fileInput =
        document.getElementById("csvFile");

    const uploadArea =
        document.getElementById("uploadArea");

    const fileInfo =
        document.getElementById("fileInfo");

    const fileName =
        document.getElementById("fileName");

    const fileSize =
        document.getElementById("fileSize");

    const uploadButton =
        document.getElementById("uploadButton");

    const progress =
        document.getElementById("uploadProgress");

    const progressBar =
        document.getElementById("progressBar");


    /* =================================================
       CLICK UPLOAD AREA
    ================================================= */

    if (uploadArea && fileInput) {

        uploadArea.addEventListener(
            "click",
            function () {

                fileInput.click();

            }
        );

    }


    /* =================================================
       FILE SELECTED
    ================================================= */

    if (fileInput) {

        fileInput.addEventListener(
            "change",
            function () {

                handleFile(this.files[0]);

            }
        );

    }


    /* =================================================
       HANDLE FILE
    ================================================= */

    function handleFile(file) {

        if (!file) {
            return;
        }


        if (!file.name.endsWith(".csv")) {

            alert("Please select a CSV file.");

            return;

        }


        if (fileName) {

            fileName.textContent =
                file.name;

        }


        if (fileSize) {

            fileSize.textContent =
                formatFileSize(file.size);

        }


        if (fileInfo) {

            fileInfo.classList.add("show");

        }


        if (uploadButton) {

            uploadButton.disabled = false;

        }

    }


    /* =================================================
       FILE SIZE
    ================================================= */

    function formatFileSize(bytes) {

        if (bytes < 1024) {

            return bytes + " B";

        }

        if (bytes < 1024 * 1024) {

            return (
                (bytes / 1024).toFixed(1)
                + " KB"
            );

        }

        return (
            (bytes / (1024 * 1024)).toFixed(1)
            + " MB"
        );

    }


    /* =================================================
       UPLOAD
    ================================================= */

    if (uploadButton) {

        uploadButton.addEventListener(
            "click",
            async function () {

                const file =
                    fileInput.files[0];


                if (!file) {

                    alert("Please select a CSV file.");

                    return;

                }


                const formData =
                    new FormData();

                formData.append(
                    "file",
                    file
                );


                if (progress) {

                    progress.classList.add("show");

                }


                if (progressBar) {

                    progressBar.style.width =
                        "30%";

                }


                try {

                    const response =
                        await fetch(
                            "http://127.0.0.1:5000/api/upload",
                            {
                                method: "POST",
                                body: formData
                            }
                        );


                    if (progressBar) {

                        progressBar.style.width =
                            "80%";

                    }


                    const result =
                        await response.json();


                    if (!response.ok) {

                        throw new Error(
                            result.error ||
                            "Upload failed"
                        );

                    }


                    if (progressBar) {

                        progressBar.style.width =
                            "100%";

                    }


                    /* Store analysis */

                    localStorage.setItem(
                        "bizpilotAnalysis",
                        JSON.stringify(result.data)
                    );


                    alert(
                        "Business data analyzed successfully!"
                    );


                    window.location.href =
                        "insights.html";


                }
                catch (error) {

                    console.error(error);

                    alert(
                        "Error: " +
                        error.message
                    );
                    fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    body: formData
});

                }

            }
        );

    }

});