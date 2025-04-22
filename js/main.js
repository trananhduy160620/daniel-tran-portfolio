// ==== Contact ====
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    const fields = [
        {
            id: "name",
            message: "Name can't be empty",
        },
        {
            id: "email",
            message: "Email can't be empty",
            validate: (value) => /\S+@\S+\.\S+/.test(value),
            invalidMessage: "Email format is invalid",
        },
        {
            id: "phone",
            message: "Phone number can't be empty",
        },
        {
            id: "services",
            message: "Please select a service",
            validate: (value) => value !== "Service Of Interest",
        },
        {
            id: "project-details",
            message: "Project details can't be empty",
        },
    ];

    const getFieldValue = (field) => {
        const el = document.getElementById(field.id);
        return el ? el.value.trim() : "";
    };

    const showError = (field, message) => {
        let errorEl = document.getElementById(`error-${field.id}`);
        errorEl.textContent = message;
    };

    const clearError = (field) => {
        const errorEl = document.getElementById(`error-${field.id}`);
        if (errorEl) {
            errorEl.textContent = "";
        }
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent for submitting
        let hasError = false;

        fields.forEach((field) => {
            const value = getFieldValue(field);
            if (!value) {
                showError(field, field.message);
                hasError = true;
            } else if (field.validate && !field.validate(value)) {
                showError(field, field.invalidMessage || field.message);
                hasError = true;
            } else {
                clearError(field);
            }
        });
    });
});

function projectDetailsCountDownWords() {
    const maxLength = 200;
    const textarea = document.getElementById("project-details");
    const charCount = document.getElementById("char-count");
    const projectDetailsError = document.getElementById(
        "error-project-details"
    );

    textarea.addEventListener("input", () => {
        const remaining = textarea.value.length;
        charCount.textContent = `${remaining}/${maxLength} word(s)`;
        if (textarea.value.length >= maxLength) {
            projectDetailsError.textContent = `The limit of description is ${maxLength} words`;
        } else {
            projectDetailsError.textContent = "";
        }
    });

    textarea.addEventListener("keydown", (e) => {
        const currentLength = textarea.value.length;

        // If the content is reached of max length and the key is not navigation, delete, enter then block it
        const isControlKey = [
            "Backspace",
            "ArrowLeft",
            "ArrowUp",
            "ArrowDown",
            "ArrowRight",
            "Delete",
        ].includes(e.key);
        if (currentLength >= maxLength && !isControlKey) {
            e.preventDefault(); // Prevent for editting
        }
    });
}
projectDetailsCountDownWords();