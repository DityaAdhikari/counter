(function() {
    // Select all buttons
    const buttons = document.querySelectorAll(".btn-counter");
    let count = 0;

    // Select counter display and container
    const counter = document.querySelector(".counter-machine");
    const counterContainer = document.querySelector(".counter");

    // Add click event to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Increase or decrease count
            if (button.classList.contains("decrease-btn")) {
                count--;
            } else if (button.classList.contains("increase-btn")) {
                count++;
            }

            // Update counter number
            counter.textContent = count;

            // Update border color based on value
            if (count > 0) {
                counterContainer.classList.add("positive");
                counterContainer.classList.remove("negative");
            } else if (count < 0) {
                counterContainer.classList.add("negative");
                counterContainer.classList.remove("positive");
            } else {
                counterContainer.classList.remove("positive", "negative");
            }
        });
    });
})();