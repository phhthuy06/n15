const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const password = form.querySelector("input[type='password']").value;
      const confirmPassword = form.querySelectorAll("input[type='password']")[1].value;

      if (!username || !email || !password || !confirmPassword) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
      }

      alert("Đăng ký thành công!");
      form.reset();
    });