document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen form
    const contactForm = document.getElementById("contactForm");

    // Tambahkan event listener untuk submit form
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah halaman reload saat submit

        // Ambil nilai dari input
        const name = document.getElementById("name").value.trim(); // Ambil nama dan hilangkan spasi
        const email = document.getElementById("email").value.trim(); // Ambil email
        const packageOption = document.getElementById("package").value; // Ambil pilihan paket

        // Validasi input
        if (name === "" || email === "" || packageOption === "") {
            alert("Please fill in all fields before submitting.");
            return; // Hentikan eksekusi jika validasi gagal
        }

        // Tampilkan pesan alert setelah validasi berhasil
        alert(`Thank you, ${name}! Your inquiry about the ${packageOption} package has been sent.`);

        // Reset form setelah sukses submit
        contactForm.reset();
    });
});
