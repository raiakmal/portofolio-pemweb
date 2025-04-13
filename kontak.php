<?php
// Konfigurasi koneksi database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "portofolio";

$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Tangkap data dari form
$email = $_POST['email'];
$phone = $_POST['phone'];
$nama  = $_POST['nama'];
$pesan = $_POST['pesan'];

// Insert ke tabel
$sql = "INSERT INTO kontak (email, phone, nama, pesan) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $email, $phone, $nama, $pesan);

if ($stmt->execute()) {
    echo "<script>alert('Pesan berhasil dikirim!'); window.location.href='index.html';</script>";
} else {
    echo "Gagal mengirim pesan: " . $conn->error;
}

$stmt->close();
$conn->close();
