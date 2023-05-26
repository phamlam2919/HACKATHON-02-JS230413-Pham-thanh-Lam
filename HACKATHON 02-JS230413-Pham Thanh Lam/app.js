let students = [];

const buttonAdd = document.querySelector(".luu");
function save(event) {
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  if (event.target.classList.contains("update")) {
    const index = event.target.getAttribute("data-index");
    students[index].fullname = fullname;
    students[index].phone = phone;
    students[index].email = email;
    students[index].address = address;

    displayStudents(students);

    // update
  } else {
    let gender = "";
    if (document.getElementById("male").checked) {
      gender = document.getElementById("male").value;
    } else if (document.getElementById("famale").checked) {
      gender = document.getElementById("famale").value;
    }
    students.push({
      fullname: fullname,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
    });

    displayStudents();
    return false;
  }
}

function displayStudents() {
  let tableContent = `<tr>
    <td>STT</td>
    <td>Họ và Tên</td>
    <td>Email</td>
    <td>Điện Thoại</td>
    <td>Quê quán</td>
    <td>Giới tính</td>
    <td>Hành động</td>
  </tr>`;

  students.forEach(function (student, index) {
    let studentIndex = index + 1;
    tableContent += `<tr>
      <td>${studentIndex}</td>
      <td>${student.fullname}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
      <a href="#" onclick="editStudent(${index})">Edit</a>
        <a href="#" onclick="deleteStudent(${index})">Delete</a>
       
      </td>
    </tr>`;
  });

  document.getElementsByClassName("listStudent")[0].innerHTML = tableContent;
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("male").checked = true;
  return false;
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) {
  let student = students[index];
  document.getElementById("fullname").value = student.fullname;
  console.log(student);
  document.getElementById("email").value = student.email;
  document.getElementById("phone").value = student.phone;
  document.getElementById("address").value = student.address;
  if (student.gender === "Nam") {
    document.getElementById("male").checked = true;
  } else if (student.gender === "Nữ") {
    document.getElementById("female").checked = true;
  }

  // change burtton
  buttonAdd.textContent = "update";
  buttonAdd.classList.add("update");
  buttonAdd.setAttribute("data-index", index);
}
