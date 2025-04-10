// js/script.js
function loadContent(page) {
    const contentContainer = document.getElementById('content-container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `components/${page}.html`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Hàm chuyển đổi trang
function switchPage(page) {
    loadContent(page);
}

// Tải trang Home mặc định khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    loadContent('home');
});