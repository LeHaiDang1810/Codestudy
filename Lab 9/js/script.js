// js/script.js
function loadForm(formType) {
    const formContainer = document.getElementById('form-container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `components/${formType}-form.html`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            formContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Hàm chuyển đổi form
function switchForm(formType) {
    loadForm(formType);
}

// Tải form Đăng Nhập mặc định khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    loadForm('login');
});