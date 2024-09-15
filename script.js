// Accessing the elements
var generateResumeButton = document.getElementById('generateResumeButton');
var printResumeButton = document.getElementById('printResumeButton');
var printResumeButtonModal = document.getElementById('printResumeButtonModal');
var resumeModal = document.getElementById('resumeModal');
var closeModalButton = document.getElementById('closeModal');
var resumeOutput = document.getElementById('resumeOutput');
var profilePhotoInput = document.getElementById('profilePhoto');
// Function to generate resume preview
function generateResume(data) {
    resumeOutput.innerHTML = "\n        <img src=\"".concat(data.profilePhoto, "\" alt=\"Profile Photo\" class=\"profile-photo\">\n        <h3>").concat(data.fullName, "</h3>\n        <p>Email: ").concat(data.email, "</p>\n        <p>Phone: ").concat(data.phone, "</p>\n        <h4>Summary</h4>\n        <p>").concat(data.summary, "</p>\n        <h4>Experience</h4>\n        <p>").concat(data.experience, "</p>\n        <h4>Skills</h4>\n        <p>").concat(data.skills, "</p>\n    ");
}
// Function to print the resume
function printResume() {
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Resume</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(resumeOutput.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
// Event listener for "Generate Resume" button
generateResumeButton.addEventListener('click', function () {
    var _a;
    console.log('Generate Resume button clicked'); // Debugging line
    // Fetching values from the fields
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle profile photo
    var profilePhoto = (_a = profilePhotoInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePhotoURL = '';
    if (profilePhoto) {
        profilePhotoURL = URL.createObjectURL(profilePhoto);
    }
    // Creating a data object
    var resumeData = {
        profilePhoto: profilePhotoURL,
        fullName: fullName,
        email: email,
        phone: phone,
        summary: summary,
        experience: experience,
        skills: skills
    };
    // Generating the resume preview and showing the modal
    generateResume(resumeData);
    resumeModal.style.display = 'flex';
});
// Event listener for "Print Resume" button in modal
printResumeButtonModal.addEventListener('click', function () {
    console.log('Print Resume button clicked in modal'); // Debugging line
    printResume();
});
// Event listener for close button in modal
closeModalButton.addEventListener('click', function () {
    console.log('Close button clicked'); // Debugging line
    resumeModal.style.display = 'none';
});
