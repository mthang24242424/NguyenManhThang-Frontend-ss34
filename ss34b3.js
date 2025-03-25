document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('pass').value;
    if (!email) {
        alert("Email không được bỏ trống!");
        return;
    }
    if (!password) {
        alert("Mật khẩu không được bỏ trống!");
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let check = users.find(check => check.email === email); 
    if (check) { 
        if (check.password === password) { 
            alert("Đăng nhập thành công");
            return;
        } else {
            alert("Thông tin tài khoản chưa chính xác");
            return;
        }
    } else {
        alert("Chưa có tài khoản này");
        return;
    }
});
