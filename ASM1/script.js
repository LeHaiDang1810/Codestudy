document.addEventListener("DOMContentLoaded", function () {
    // Alert chào mừng
    alert("Chào mừng bạn đến với website của Trường Tiểu Học Phạm Hồng Thái!");
  
    // Hiệu ứng cuộn header
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // Nút cuộn lên đầu trang
    const scrollBtn = document.querySelector(".scrollTopBtn");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  