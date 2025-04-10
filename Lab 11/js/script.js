function loadTable(tableFile) {
    fetch(`components/${tableFile}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("table-container").innerHTML = data;
        })
        .catch(error => console.error("Lỗi khi tải bảng:", error));
}

document.addEventListener("DOMContentLoaded", function () {
    // Mặc định hiển thị Bảng 1 khi tải trang
    loadTable("table1.html");
});

function switchTable(tableName) {
    const tables = {
        table1: "table1.html",
        table2: "table2.html"
    };
    const file = tables[tableName];
    if (file) {
        loadTable(file);
    }
}
