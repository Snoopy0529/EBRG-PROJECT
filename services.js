function toggleDropdown() {
    const dropdownOptions = document.getElementById("dropdown-options");
    dropdownOptions.style.display = dropdownOptions.style.display === "none" ? "block" : "none";
}

function selectOption(optionText) {
    // Update the displayed text of the selected option
    const selectedOption = document.getElementById("selected-option");
    selectedOption.innerHTML = `${optionText} <span class="dropdown-icon">&#9662;</span>`;

    // Hide the dropdown options after selection
    document.getElementById("dropdown-options").style.display = "none";
}

// Separate function for the "Select Assistance Type" dropdown
function toggleTypeDropdown() {
    const typeOptions = document.getElementById("type-options");
    typeOptions.style.display = typeOptions.style.display === "none" ? "block" : "none";
}

function selectTypeOption(optionText) {
    const selectedTypeOption = document.querySelector(".type-dropdown .selected-option");
    selectedTypeOption.innerHTML = `${optionText} <span class="type-icon">&#9662;</span>`;
    document.getElementById("type-options").style.display = "none";
}

function showCertificateDetails(type) {
    const div1 = document.getElementById("div1");
    div1.style.display = 'block';

    if (type === 'indigency') {
        div1.innerHTML = `
            <h4 class="detail">Indigency Certificate Details:</h4>
            <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
            <input type="text" class="middlename" name="middle_name" placeholder="Middle Name" required>
            <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
            <input type="text" class="age" name="age" placeholder="Age" required>
            <div class="select-bg">
                    <input type="file" id="image" name="image" required>
                    <label for="image" class="select" id="fileLabel">
                        <strong><i class="fas fa-upload"></i> &nbsp; Select a picture</strong>
                    </label>
            </div>
            <div class="type-dropdown">
            <div class="selected-option" onclick="toggleTypeDropdown()">
            -- Assistance Type -- <span class="type-icon">&#9662;</span> <!-- Dropdown arrow -->
            </div>
            <div class="type-options" id="type-options" style="display: none;">
            <div class="type-option" onclick="selectTypeOption('Financial')">Financial</div>
            <div class="type-option" onclick="selectTypeOption('Medical')">Medical</div>
            </div>
             </div>
        <label class="myself-option">
            <input type="radio" name="for-myself" value="myself"> Apply for myself
        </label>
        <button id="clearBtn" class="clear" onclick="clear('clear')">CLEAR</button>
        <button id="submitBtn" class="submit" onclick="submit('submit')">SUBMIT</button>

        `;
    } else if (type === 'residency') {
        div1.innerHTML = `
            <h4 class="detail">Residency Certificate Details:</h4>
            <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
            <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
            <input type="text" class="address" name="address" placeholder="Address" required>
        `;
    } else if (type === 'solo_parent') {
        div1.innerHTML = `
            <h4 class="detail">Solo Parent Certificate Details:</h4>
            <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
            <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
            <input type="number" class="children_count" name="children_count" placeholder="Number of Children" required>
        `;
    }
}

function showField(type) {
    const div1 = document.getElementById("div1");
    div1.style.display = 'block';

    if (type === 'health_services') {
        div1.innerHTML = `
            <h4 class="detail">Health Services & Medications:</h4>
            <input type="text" class="patient_name" name="patient_name" placeholder="Patient Name" required>
            <input type="text" class="medication" name="medication" placeholder="Medication Name" required>
            <input type="date" class="appointment_date" name="appointment_date" required>
        `;
    } else if (type === 'daycare') {
        div1.innerHTML = `
            <h4 class="detail">Daycare Admission Shortlisting:</h4>
            <input type="text" class="child_name" name="child_name" placeholder="Child's Name" required>
            <input type="text" class="parent_name" name="parent_name" placeholder="Parent's Name" required>
            <input type="number" class="child_age" name="child_age" placeholder="Child's Age" required>
        `;
    }
}

function showSubmenu(id) {
    document.getElementById(id).style.display = 'block';
}

// Hide submenu on mouse leave
document.getElementById("certificates-submenu").addEventListener("mouseleave", function() {
    this.style.display = "none";
});

// Close the dropdown if clicking outside of it
document.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".custom-dropdown");
    const dropdownOptions = document.getElementById("dropdown-options");
    const submenu = document.getElementById("certificates-submenu");

    if (!dropdown.contains(event.target)) {
        dropdownOptions.style.display = "none";
        submenu.style.display = "none";
    }
});

// Close the dropdown if clicking outside of it
document.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".type-dropdown");
    const dropdownOptions = document.getElementById("type-options");

    if (!dropdown.contains(event.target)) {
        dropdownOptions.style.display = "none";
        submenu.style.display = "none";
    }
});
