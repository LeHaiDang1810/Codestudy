// js/script.js
function loadContent() {
    const contentContainer = document.getElementById('content-container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/Lab13.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Tải nội dung mặc định khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    loadContent();
});