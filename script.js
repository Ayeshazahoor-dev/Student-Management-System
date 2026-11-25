let students = [];

const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let email = document.getElementById("studentEmail").value.trim();

    if (!name || !rollNumber || !email) {
        alert("Please fill all fields!");
        return;
    }

    let student = {
        name: name,
        rollNumber: rollNumber,
        email: email
    };

    if (editingIndex === -1) {
    students.push(student);
} else {
    students[editingIndex] = student;
    editingIndex = -1;
}

    displayStudents();

    alert("Student Added Successfully!");

    studentForm.reset();
});

function displayStudents() {
    studentTable.innerHTML = "";

    students.forEach(function(student, index) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.email}</td>
           <td>
    <button onclick="editStudent(${index})">
        Edit
    </button>

    <button onclick="deleteStudent(${index})">
        Delete
    </button>
</td>
        `;

        studentTable.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
    alert("Student Deleted Successfully!");
}
let editingIndex = -1;

function editStudent(index) {
    let student = students[index];

    document.getElementById("studentName").value = student.name;
    document.getElementById("rollNumber").value = student.rollNumber;
    document.getElementById("studentEmail").value = student.email;

    editingIndex = index;

    alert("Update the details and click Add Student.");
}