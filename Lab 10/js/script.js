function loadForm(formFile) {
    fetch(`components/${formFile}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("form-container").innerHTML = data;
        })
        .catch(error => console.error("Lỗi khi tải form:", error));
}

document.addEventListener("DOMContentLoaded", function () {
    // Hiển thị Form Bài 1 mặc định
    loadForm("form1.html");
});

function switchForm(formName) {
    const forms = {
        form1: "form1.html",
        form2: "form2.html"
    };
    const file = forms[formName];
    if (file) {
        loadForm(file);
    }
}
