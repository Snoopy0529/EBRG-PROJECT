<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ebrgy";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$first_name = $_POST['first_name'];
$middle_name = $_POST['middle_name'];
$last_name = $_POST['last_name'];
$age = $_POST['age'];
$assistance_type = $_POST['assistance_type'];
$apply_myself = isset($_POST['for_myself']) ? $_POST['for_myself'] : null; // Retrieve the value of the radio button

// Handle file upload
$id_pic = $_FILES['id_pic']['name'];
$target_dir = "uploads/";
$target_file = $target_dir . basename($id_pic);

// Move uploaded file to the target directory
if (move_uploaded_file($_FILES["id_pic"]["tmp_name"], $target_file)) {
    // Insert data into the database
    $sql = "INSERT INTO indigency_cert (first_name, middle_name, last_name, age, id_pic, assistance_type, apply_myself)
            VALUES ('$first_name', '$middle_name', '$last_name', '$age', '$id_pic', '$assistance_type', '$apply_myself')";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Error uploading file.";
}

$conn->close();
?>
