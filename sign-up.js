console.log("sign-up nè");

var users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("sign-up-form").addEventListener("submit", (e) => {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fullName = document.getElementById("fullName").value;

  var user = {
    fullName,
    password,
    email,
  };

  var userDB = users.find((_user) => {
    return _user.email === user.email;
  });

  // kiem tra email da ton tai trong he thong chua

  if (userDB) {
    document.getElementById("error-message").innerHTML =
      "Người dùng đã tồn tại";
    document.getElementById("error-message").classList.remove("d-none");
    document.getElementById("error-message").classList.remove("alert-success");
    document.getElementById("error-message").classList.add("alert-danger");

    throw new Error("Nguoi dung da ton tai");
  }

  document.getElementById("error-message").innerHTML = "dang ky thanh cong";
  document.getElementById("error-message").classList.remove("d-none");
  document.getElementById("error-message").classList.remove("alert-danger");
  document.getElementById("error-message").classList.add("alert-success");

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
});
