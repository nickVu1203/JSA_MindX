const emailLogged = JSON.parse(localStorage.getItem("emailLogged"));
const users = JSON.parse(localStorage.getItem("users")) || [];

const handleSignOut = () => {
  localStorage.removeItem("emailLogged");
  window.location.reload();
};
console.log(emailLogged);

// phần: mở header + logo bên trái + phần nav giữa
var htmlString = `
<header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3"
>
    <a
    href="/"
    class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    >
        <img
        src="https://cdn.cellphones.com.vn/media/logo/logo-cps-full-2.png"
        alt=""
        width="200px"
        />
    </a>

    <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-danger">Home</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
    </ul>
`;

// thêm bên phải
if (emailLogged) {
  // nếu đã đăng nhập
  const userDB = users.find((user) => {
    return user.email === emailLogged;
  });
  htmlString += `<div class="col-md-3 text-end">`;
  htmlString += `
    <div class="dropdown">
        <button
            class="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Xin chào ${userDB.fullName}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
            <a class="dropdown-item" href="#" onclick="handleSignOut()"
                >Đăng xuất</a
            >
            </li>
        </ul>
    </div>
    `;
  htmlString += `</div>`;
} else {
  htmlString += `<div class="col-md-3 text-end">`;
  htmlString += `
    <div>
        <a
        type="button"         
        class="btn btn-outline-danger me-2"
        href="./sign-in.html"
        >Đăng nhập
        </a>
        <a type="button" class="btn btn-danger" href="./sign-up.html">
        Đăng ký
        </a>
    </div>`;
  htmlString += `</div>`;
}

// đóng header
htmlString += "</header>";

document.getElementById("header-container").innerHTML = htmlString;
