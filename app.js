    
    let rating = null;
    let previouslySelected = null;

    const allSpans = document.querySelectorAll(".rating");

    // Hover Effects
    allSpans.forEach((span) => {
    span.addEventListener("mouseover", function () {
        if (!span.classList.contains("selected")) {
        span.classList.add("ratingHover");
        }
    });
    span.addEventListener("mouseout", function () {
        span.classList.remove("ratingHover");
    });
    });

    // Click Selection
    allSpans.forEach((span) => {
    span.addEventListener("click", function () {
        rating = this.textContent;

        // Remove selection from previous
        if (previouslySelected) {
        previouslySelected.classList.remove("selected");
        }
        // Mark current as selected
        this.classList.add("selected");
        previouslySelected = this;
    });
    });

    // Submit
    let messageTimeout = null;
    function submit() {
    const submitBtn = document.getElementById("submit");

    if (rating === null) {
        submitBtn.innerText = "Please, Select a Rate";
        clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => {
        submitBtn.innerText = "SUBMIT";
        }, 2000);
    } else {

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./thankYou.css";
        document.head.appendChild(link);

        document.getElementById("rate-div").style.display = "none";

        const thankYouSection = document.getElementById("thank-you");
        thankYouSection.style.display = "block";

        const ratingParagraph = document.getElementById("Rating-paragrph");
        ratingParagraph.innerText = `You selected ${rating} out of 5`;
    }
    }
