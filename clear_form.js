function clearForm(containerId = null) {
    // Select the specific container based on containerId, or use the whole document if no containerId is provided
    const container = containerId ? document.getElementById(containerId) : document;

    if (!container) return; // Exit if the container does not exist

    // Clear text and number inputs within the specific container
    container.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = "");
    
    // Clear date inputs
    container.querySelectorAll('input[type="date"]').forEach(input => input.value = "");

    // Reset file inputs within the specific container
    container.querySelectorAll('input[type="file"]').forEach(input => input.value = "");

    // Reset specific dropdowns with unique placeholders within the specific container (or globally if no containerId)
    const dropdownSelectors = [
        { selector: '.type-dropdown .selected-option', placeholder: '-- Assistance Type -- <span class="type-icon">&#9662;</span>' },
        { selector: '.type-dropdown2 .selected-option2', placeholder: '-- Source of Income -- <span class="type-icon2">&#9662;</span>' },
        { selector: '.type-dropdown3 .selected-option3', placeholder: '-- Monthly Income -- <span class="type-icon3">&#9662;</span>' },
        { selector: '.type-dropdown4 .selected-option4', placeholder: '-- Type of Business -- <span class="type-icon4">&#9662;</span>' },
        { selector: '.type-dropdown5 .selected-option5', placeholder: '-- Kinder Level -- <span class="type-icon5">&#9662;</span>' }
    ];

    dropdownSelectors.forEach(({ selector, placeholder }) => {
        const dropdown = container.querySelector(selector);
        if (dropdown) dropdown.innerHTML = placeholder;
    });

    // Hide specific divs if clearing all fields (no containerId provided)
    if (!containerId) {
        document.getElementById("div1").style.display = "none";
        document.getElementById("daycare_container2").style.display = "none";
    }
}
