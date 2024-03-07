document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");
    const successMessage = document.getElementById("successMessage");
    const submitBtn = document.getElementById("submitBtn");
    const closeButton = document.getElementById("closeButton");

    submitBtn.addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform form validation here
        if (validateForm()) {
            // Assuming the form is valid, make an AJAX request
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
            })
                .then((response) => {
                    // Handle the response based on your server's behavior
                    if (response.ok) {
                        // Show success message
                        successMessage.style.display = "block";
                    } else {
                        // Handle errors, e.g., show an error message
                        console.error("Server error:", response.status);
                    }
                })
                .catch((error) => {
                    // Handle network errors
                    console.error("Network error:", error);
                });
        }
    });

    // Close the success message when the user clicks on the close button
    closeButton.addEventListener("click", closeSuccessMessage);

    function closeSuccessMessage() {
        successMessage.style.display = "none";
    }

    function validateForm() {
        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");

        // Validate name (only letters, up to 15 characters)
        const nameRegex = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]$/;
        if (!nameRegex.test(nameInput.value)) {
            alert('Можна вводити тільки літери "Ім\'я".');
            return false;
        }

        // Validate phone (numeric, 10 to 13 digits)
        const phoneRegex = /^[0-9]{10,13}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            alert(
                'Можна вводити тільки цифри від 10 до 13 символів в поле "Номер телефону".'
            );
            return false;
        }
        return true;
    }
});
