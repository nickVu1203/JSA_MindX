console.log("sign in nè");

const users = JSON.parse(localStorage.getItem("users")) || [];

// lắng nghe sự kiện người dùng submit form
document.getElementById("sign-in-form").addEventListener("submit", (e) => {
  // test lắng nghe sự kiện thành công
  console.log("submit login ne");

  // chặn sự kiện load trang
  e.preventDefault();

  // lấy thông tin của người dùng nhập vào form: email/password
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // tạo ra đối tượng user
  const user = {
    email,
    password,
  };

  // tìm ra user cần đăng nhập vào hệ thống từ email. Ex: *.find()
  const userDB = users.find((_user) => {
    return _user.email === user.email;
  });

  if (userDB?.password === user.password) {
    console.log("dang nhap thanh cong");
    // tạo 1 cái key vào localStorage có tên là emailLogged => email
    localStorage.setItem("emailLogged", JSON.stringify(userDB.email));
    window.location.href = "index.html";
  } else {
    console.log("Tai khoan hoac mat khau cua ban khong dung");
  }
});
