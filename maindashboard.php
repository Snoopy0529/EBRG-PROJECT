
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main dashboard</title>
    <link rel="stylesheet" href="maindashboard.css" />
    <link rel="stylesheet" href="darkmode.css"/>
    <!--font style links-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ysabeau+Office:ital,wght@0,1..1000;1,1..1000&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="hamburger" id="hamburger">
            &#9776; <!-- Unicode character for hamburger icon -->
        </div>
        <nav id="nav-menu" class="nav_menu">
            <ul>
                <li><a href="about_us.html">About us</a></li>
                <li><a href="#">Conducted Projects</a></li>
                <li><a href="vision.html">Vission</a></li>
                <li><a href="mission.html">Mission</a></li>
                <li><a href="#">Guest Mode</a></li>
                <li><a href="#" id="darkModeLink">Dark Mode</a></li>
                <li><a href="index.php">Log Out</a></li>
                <li><a href="#">Delete Account</a></li>
                
            </ul>
        </nav>
        <div class="nav_logo">
            <img src="logo/mainpage_logo.png" alt="EBRGY logo">
        </div>
        <!--For search bar-->
            <input type="text" placeholder="Search..." class="search_bar">  
    </header>
    <footer>
        <nav id="nav_left" class="nav_left">
            <ul>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Business Email</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </nav>
        <div class="footer_center">
            <img src="logo/logo.png" alt="EBRGY logo">
             <p>Copyright © 2024. All Rights Reserved</p>
        </div>
        <nav id="nav_right" class="nav_right">
            <ul>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="vision.html">Vission</a></li>
                <li><a href="mission.html">Mission</a></li>
                <li><a href="#">Conducted Projects</a></li>
            </ul>
        </nav>
    </footer>
    
    <div class="btns">
        <button id="announcementsBtn" class="a1" onclick="showDiv('announcements')">announcements</button>
        <button id="eventsBtn" class="e1" onclick="showDiv('events')">events</button>
        <button id="servicesBtn" class="s1" onclick="showDiv('services')">services</button>
        <button id="hotlinesBtn" class="h1" onclick="showDiv('hotlines')">hotlines</button>
    </div>
    
    <div id="announcements" class="content-div">

    <div id="AnnouncementContainer">
    <!-- Announcements will be dynamically loaded here -->
    </div>
    <div style="height: 110px;"></div>

    <script>
    function loadAnnouncements() {
    fetch('announcement-content.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('AnnouncementContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading announcements:', error));
    }

    // Initial load of announcements on page load
    loadAnnouncements();

    </script>
    </div>

    <div id="events" class="content-div" style="display: none;">
    <div id="EventsContainer">
    <!-- Events will be dynamically loaded here -->
    </div>
    <div style="height: 110px;"></div>

    <script>
    function loadEvents() {
    fetch('event-content.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('EventsContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading announcements:', error));
    }

    // Initial load of announcements on page load
    loadEvents();

    </script>
    </div>

    </div>

    <div id="services" class="content-div" style="display: none;">
        <div id="serv">
            <h4 class="type">Type of Service:</h4>
            <select id="dropdown" onchange="showField()">
                <option value="">--Select an option--</option>
                <option value="val1">Certificate of Indigency</option>
                <option value="val2">Certificate of Residency</option>
                <option value="val3">Certificate of First Time Job Seeker</option>
                <option value="val3">Certificate of Job Absence</option>
                <option value="val3">Certificate of Solo Parent</option>
                <option value="val3">Barangay Clearance</option>
                <option value="val3">Fencing Clearance</option>
                <option value="val3">Building Clearance</option>
                <option value="val3">Order of Payment</option>
                <option value="val3">Electricity Installation Clearance</option>
                <option value="val3">Daycare Admission Shortlistin</option>
            </select>

        <div id="div1" class="val-div" style="display: none;">
            <h4 class="detail">Details:</h4>
            <input type="text" class="lastname" name="last_name" placeholder="Last Name" required>
            <input type="text" class="firstname" name="first_name" placeholder="First Name" required>
            <input type="text" class="age" name="age" placeholder="Age" required>
            <input type="file" id="image" name="image" placeholder="ID Picture" required>
            <label for="image" class="select" id="fileLabel">
                <strong><i class="fas fa-upload"></i> &nbsp; ID Pciture</strong>
            </label>
        </div>
        <div id="div2" class="val-div" style="display: none;">Content for Option 2</div>
        <div id="div3" class="val-div" style="display: none;">Content for Option 3</div>
        </div>
    </div>
    <div id="hotlines" class="content-div" style="display: none;">
        <div id="hotl"></div>
        <div id="hotl2"></div>
    </div>
    

        <!-- Link to the JavaScript file for darkmode function -->
        <script src="darkmode.js"></script>
       <!-- Link to the JavaScript file for hamburger menu function -->
       <script src="hamburgermenu.js"></script>
       <script src="AESH.js"></script>
       <script src="services.js"></script>

</body>
</html>