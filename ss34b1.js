document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('pass').value;
    let confirmPassword = document.getElementById('passCheck').value;
    if (!email) {
        alert("Email không được bỏ trống!");
        return;
    }
    if (!password) {
        alert("Mật khẩu không được bỏ trống!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Xác nhận mật khẩu không trùng khớp!");
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let check = users.some(user => user.email === email);
    if (check) {
        alert("Email này đã được đăng ký!");
        return;
    }
    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng ký thành công!");
    document.querySelector('form').reset();
});