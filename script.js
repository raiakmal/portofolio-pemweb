function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

$(document).ready(function () {
  $(".form-kontak").submit(function (e) {
    e.preventDefault();

    let isValid = true;
    let email = $("input[type=email]").val().trim();
    let phone = $("input[type=tel]").val().trim();
    let name = $("input[type=text]").val().trim();
    let message = $("textarea").val().trim();

    $(".error").remove();

    // Validasi Email
    if (email === "") {
      $("input[type=email]").after(
        '<span class="error">Email wajib diisi.</span>'
      );
      isValid = false;
    }

    // Validasi Nomor Handphone (Minimal 10 angka)
    if (phone === "" || phone.length < 10 || !/^[0-9]+$/.test(phone)) {
      $("input[type=tel]").after(
        '<span class="error">Nomor handphone minimal 10 angka.</span>'
      );
      isValid = false;
    }

    // Validasi Nama (Tidak boleh kosong)
    if (name === "") {
      $("input[type=text]").after(
        '<span class="error">Nama wajib diisi.</span>'
      );
      isValid = false;
    }

    // Validasi Pesan (Maksimal 100 kata)
    if (message === "" || message.split(" ").length > 100) {
      $("textarea").after(
        '<span class="error">Pesan maksimal 100 kata.</span>'
      );
      isValid = false;
    }

    if (isValid) {
      alert("Form berhasil dikirim!");
      this.submit();
    }
  });

  // Tambahkan CSS untuk error dan word count
  $("<style>")
    .prop("type", "text/css")
    .html(
      `
    .error {
      color: red;
      font-size: 12px;
      margin-top: 5px;
      display: block;
    }
    .word-count {
      font-size: 0.8em;
      color: gray;
      margin-left: 10px;
      display: inline-block;
    }
    .word-count-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  `
    )
    .appendTo("head");

  // Tambahkan elemen untuk menampilkan jumlah kata
  $("textarea").after(
    '<div class="word-count-container"><span class="word-count">0/100</span></div>'
  );

  // Hitung jumlah kata saat mengetik
  $("textarea").on("input", function () {
    let wordCount = $(this).val().trim().split(/\s+/).filter(Boolean).length;
    $(".word-count").text(`${wordCount}/100`);
  });
});
