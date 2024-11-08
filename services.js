function toggleDropdown() {
    const dropdownOptions = document.getElementById("dropdown-options");
    dropdownOptions.style.display = dropdownOptions.style.display === "none" ? "block" : "none";
}

function showSubmenu(submenuId) {
    document.getElementById(submenuId).style.display = "block";
}

function hideSubmenu(submenuId) {
    document.getElementById(submenuId).style.display = "none";
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

// dropdown for monthly income

function toggleTypeDropdown2() {
    const typeOptions = document.getElementById("type-options2");
    typeOptions.style.display = typeOptions.style.display === "none" ? "block" : "none";
}

function selectTypeOption2(optionText) {
    const selectedTypeOption = document.querySelector(".type-dropdown2 .selected-option2");
    selectedTypeOption.innerHTML = `${optionText} <span class="type-icon2">&#9662;</span>`;
    document.getElementById("type-options2").style.display = "none";
}

// dropdowon for number of children
function toggleTypeDropdown3() {
    const typeOptions = document.getElementById("type-options3");
    typeOptions.style.display = typeOptions.style.display === "none" ? "block" : "none";
}

function selectTypeOption3(optionText) {
    const selectedTypeOption = document.querySelector(".type-dropdown3 .selected-option3");
    selectedTypeOption.innerHTML = `${optionText} <span class="type-icon3">&#9662;</span>`;
    document.getElementById("type-options3").style.display = "none";
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
        <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
        <input type="text" class="middlename" name="middle_name" placeholder="Middle Name" required>
        <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
        <input type="number" id="years_of_occupancy" name="years_of_occupancy" min="0" step="1" value="" placeholder="Years of Occupancy">
        <input type="text" class="address" name="address" placeholder="Complete Address" required>
            <div class="select-bg2">
                    <input type="file" id="image" name="image" required>
                    <label for="image" class="select" id="fileLabel">
                        <strong><i class="fas fa-upload"></i> &nbsp; Select a picture</strong>
                    </label>
            </div>
            <label class="myself-option2">
            <input type="radio" name="for-myself" value="myself"> Apply for myself
            </label>
        <button id="clearBtn" class="clear2" onclick="clear('clear')">CLEAR</button>
        <button id="submitBtn" class="submit2" onclick="submit('submit')">SUBMIT</button>
        `;
    } else if (type === 'job_seeker') {
        div1.innerHTML = `
        <h4 class="detail">First Time Job Seeker Certificate Details:</h4>
        <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
        <input type="text" class="middlename" name="middle_name" placeholder="Middle Name" required>
        <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
        <div class="select-bg3">
                    <input type="file" id="image" name="image" required>
                    <label for="image" class="select" id="fileLabel">
                        <strong><i class="fas fa-upload"></i> &nbsp; Select a picture</strong>
                    </label>
        </div>
        <input type="text" class="employer" name="employer" placeholder="Employer/Company Name" required>
        <label class="myself-option3">
            <input type="radio" name="for-myself" value="myself"> Apply for myself
        </label>
        <button id="clearBtn" class="clear3" onclick="clear('clear')">CLEAR</button>
        <button id="submitBtn" class="submit3" onclick="submit('submit')">SUBMIT</button>
        `;
    } else if (type === 'absence') {
        div1.innerHTML = `
        <h4 class="detail">Job Absence Certificate Details:</h4>
        <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
        <input type="text" class="middlename" name="middle_name" placeholder="Middle Name" required>
        <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
        <div class="select-bg3">
                    <input type="file" id="image" name="image" required>
                    <label for="image" class="select" id="fileLabel">
                        <strong><i class="fas fa-upload"></i> &nbsp; Select a picture</strong>
                    </label>
        </div>
        <input type="text" class="employer2" name="employer" placeholder="Employer/Company Name" required>
        <label for="absence_date" class="absence_label">Absence Date:</label>
        <input type="date" class="absence_date" name="absence_date" placeholder="Absence Date" required>
        <input type="number" id="duration" name="duration" min="0" step="1" value="" placeholder="Duration">
        <input type="text" class="reason" name="reason" placeholder="Reason" required>
        <label class="myself-option2">
            <input type="radio" name="for-myself" value="myself"> Apply for myself
        </label>
        <button id="clearBtn" class="clear4" onclick="clear('clear')">CLEAR</button>
        <button id="submitBtn" class="submit4" onclick="submit('submit')">SUBMIT</button>
        `;
    } else if (type === 'solo_parent') {
        div1.innerHTML = `
        <h4 class="detail">Solo Parent Certificate Details:</h4>
        <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
        <input type="text" class="middlename" name="middle_name" placeholder="Middle Name" required>
        <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
        <div class="select-bg3">
                    <input type="file" id="image" name="image" required>
                    <label for="image" class="select" id="fileLabel">
                        <strong><i class="fas fa-upload"></i> &nbsp; Select a picture</strong>
                    </label>
        </div>
        <input type="number" id="years_of_separation" name="years_of_separation" min="0" step="1" value="" placeholder="Years of Separation">
        <input type="number" id="number_of_children" name="number_of_children" min="0" step="1" value="" placeholder="No. of Children">
        <label class="myself-option2">
        <div class="type-dropdown2">
            <div class="selected-option2" onclick="toggleTypeDropdown2()">
            -- Source of Income -- <span class="type-icon2">&#9662;</span> <!-- Dropdown arrow -->
            </div>
            <div class="type-options2" id="type-options2" style="display: none;">
            <div class="type-option2" onclick="selectTypeOption2('Employment')">Employment</div>
            <div class="type-option2" onclick="selectTypeOption2('Self-Employment')">Self-Employment</div>
            <div class="type-option2" onclick="selectTypeOption2('Investment')">Investment</div>
            <div class="type-option2" onclick="selectTypeOption2('Retirement Income')">Retirement Income</div>
            <div class="type-option2" onclick="selectTypeOption2('Savings')">Savings</div>
            <div class="type-option2" onclick="selectTypeOption2('No Income')">No Income</div>
            </div>
        </div>
        <div class="type-dropdown3">
            <div class="selected-option3" onclick="toggleTypeDropdown3()">
            -- Monthly Income -- <span class="type-icon3">&#9662;</span> <!-- Dropdown arrow -->
            </div>
            <div class="type-options3" id="type-options3" style="display: none;">
            <div class="type-option3" onclick="selectTypeOption3('₱10,000 - ₱20,000')">₱10,000 - ₱20,000</div>
            <div class="type-option3" onclick="selectTypeOption3('₱20,000 - ₱30,000')">₱20,000 - ₱30,000</div>
            <div class="type-option3" onclick="selectTypeOption3('Above ₱30,000')">Above ₱30,000</div>
            </div>
        </div>
        <label class="myself-option4">
            <input type="radio" name="for-myself" value="myself"> Apply for myself
        </label>
        <button id="clearBtn" class="clear4" onclick="clear('clear')">CLEAR</button>
        <button id="submitBtn" class="submit4" onclick="submit('submit')">SUBMIT</button>
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
