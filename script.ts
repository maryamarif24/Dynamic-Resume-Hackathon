// Accessing the elements
const generateResumeButton = document.getElementById('generateResumeButton') as HTMLButtonElement;
const printResumeButton = document.getElementById('printResumeButton') as HTMLButtonElement;
const printResumeButtonModal = document.getElementById('printResumeButtonModal') as HTMLButtonElement;
const resumeModal = document.getElementById('resumeModal') as HTMLDivElement;
const closeModalButton = document.getElementById('closeModal') as HTMLSpanElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const profilePhotoInput = document.getElementById('profilePhoto') as HTMLInputElement;

// Interface for the resume data
interface ResumeData {
    profilePhoto: string;
    fullName: string;
    email: string;
    phone: string;
    summary: string;
    experience: string;
    skills: string;
}

// Function to generate resume preview
function generateResume(data: ResumeData) {
    resumeOutput.innerHTML = `
        <h2 class="profile-info">
            <img src="${data.profilePhoto}" alt="Profile Photo" class="profile-photo">
            ${data.fullName}
        </h2>
        <hr>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <h4>Summary</h4>
        <p>${data.summary}</p>
        <h4>Experience</h4>
        <p>${data.experience}</p>
        <h4>Skills</h4>
        <p>${data.skills}</p>
    `;
}

// Function to print the resume
function printResume() {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow!.document.write('<html><head><title>Resume</title>');
    printWindow!.document.write('</head><body>');
    printWindow!.document.write(resumeOutput.innerHTML);
    printWindow!.document.close();
    printWindow!.print();
}

// Event listener for "Generate Resume" button
generateResumeButton.addEventListener('click', () => {
    console.log('Generate Resume button clicked'); // Debugging line

    // Fetching values from the fields
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Handle profile photo
    const profilePhoto = profilePhotoInput.files?.[0];
    let profilePhotoURL = '';
    if (profilePhoto) {
        profilePhotoURL = URL.createObjectURL(profilePhoto);
    }

    // Creating a data object
    const resumeData: ResumeData = {
        profilePhoto: profilePhotoURL,
        fullName,
        email,
        phone,
        summary,
        experience,
        skills
    };

    // Generating the resume preview and showing the modal
    generateResume(resumeData);
    resumeModal.style.display = 'flex';
});

// Event listener for "Print Resume" button in modal
printResumeButtonModal.addEventListener('click', () => {
    console.log('Print Resume button clicked in modal'); // Debugging line
    printResume();
});

// Event listener for close button in modal
closeModalButton.addEventListener('click', () => {
    console.log('Close button clicked'); // Debugging line
    resumeModal.style.display = 'none';
});

