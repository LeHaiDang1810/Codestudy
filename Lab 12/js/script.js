// js/script.js
function loadContent(file, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `components/${file}.html`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

function switchContent(contentType) {
    const contentContainer = document.getElementById('content-container');
    loadContent(contentType, function (content) {
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    switchContent('news');
});

document.addEventListener('DOMContentLoaded', function () {
    // Lấy iframe chính và các ảnh đại diện
    const mainIframe = document.getElementById('main-video-iframe');
    const thumbnails = document.querySelectorAll('.thumbnail-row a');

    // Gắn sự kiện click cho từng ảnh đại diện
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function (e) {
            e.preventDefault(); // Ngăn hành động mặc định của link
            const videoSrc = this.getAttribute('data-video-src'); // Lấy nguồn video từ data attribute
            mainIframe.src = videoSrc; // Thay đổi src của iframe chính
        });
    });
});
