
document.addEventListener("DOMContentLoaded", function () {

    // Data detail empat unit usaha
    const unitData = {
        fnb: {
            badge: "Kuliner & Minuman",
            title: "Unit F&B (Food & Drink)",
            image: "assets/fnb.jpg",
            description: "Menyediakan berbagai pilihan makanan, camilan, dan minuman segar untuk memenuhi kebutuhan konsumsi mahasiswa dan kegiatan kampus.",
            features: [
                "Aneka makanan ringan dan berat",
                "Kopi dan minuman dingin segar",
                "Paket snack box acara organisasi mahasiswa"
            ],
            benefit: "Memudahkan mahasiswa mendapatkan makanan dan minuman dengan harga ramah kantong."
        },

        percetakan: {
            badge: "Dokumen & Print",
            title: "Unit Percetakan & Dokumen",
            image: "assets/percetakan.jpg",
            description: "Menyediakan layanan percetakan dan pengelolaan dokumen untuk mendukung kebutuhan akademik mahasiswa.",
            features: [
                "Print tugas dan makalah",
                "Fotokopi dan jilid spiral atau hardcover",
                "Jasa pengetikan dan formatting dokumen"
            ],
            benefit: "Membantu mahasiswa menyelesaikan kebutuhan dokumen akademik dengan praktis."
        },

        konsinyasi: {
            badge: "Titip Jual Mahasiswa",
            title: "Unit Konsinyasi",
            image: "assets/konsinyasi.jpg",
            description: "Menjadi wadah pemasaran produk kreatif mahasiswa ITS melalui sistem titip jual di lingkungan kampus.",
            features: [
                "Fasilitas titip jual produk mahasiswa",
                "Merchandise dan apparel kampus",
                "Sistem pencatatan bagi hasil transparan"
            ],
            benefit: "Memberikan kesempatan kepada mahasiswa untuk memasarkan dan mengembangkan produk mereka."
        },

        kreatif: {
            badge: "Kreatif & Media",
            title: "Unit Jasa Kreatif",
            image: "assets/jasa-kreatif.jpg",
            description: "Menyediakan layanan kreatif digital untuk mendukung kebutuhan organisasi, kegiatan kampus, dan personal branding.",
            features: [
                "Desain grafis poster, feed, dan banner",
                "Fotografi wisuda dan dokumentasi acara",
                "Produksi dan editing videografi"
            ],
            benefit: "Membantu mahasiswa dan organisasi menghasilkan karya visual yang menarik dan profesional."
        }
    };

    const modal = document.getElementById("modal-overlay");
    const closeBtn = document.getElementById("modal-close-btn");
    const closeBtnBottom = document.getElementById("modal-btn-close");
    const contactBtn = document.getElementById("modal-btn-contact");

    let currentUnit = "";

    // Membuka detail unit usaha
    document.querySelectorAll(".btn-detail").forEach(function (button) {

        button.addEventListener("click", function () {

            const unit = button.dataset.unit;
            const data = unitData[unit];

            currentUnit = unit;

            document.getElementById("modal-badge").textContent = data.badge;
            document.getElementById("modal-title").textContent = data.title;
            document.getElementById("modal-img").src = data.image;
            document.getElementById("modal-img").alt = data.title;
            document.getElementById("modal-description").textContent = data.description;
            document.getElementById("modal-benefit").textContent = data.benefit;

            const featureList = document.getElementById("modal-features-list");
            featureList.innerHTML = "";

            data.features.forEach(function (feature) {
                const li = document.createElement("li");
                li.textContent = feature;
                featureList.appendChild(li);
            });

            // Tampilkan modal
            modal.style.display = "flex";
            modal.style.visibility = "visible";
            modal.style.opacity = "1";
            modal.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";
        });

    });

    // Fungsi menutup modal
    function closeModal() {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);
    closeBtnBottom.addEventListener("click", closeModal);
    // Tombol Tanya Unit Ini
    contactBtn.addEventListener("click", function () {

        // Mengisi pilihan unit secara otomatis
        const unitSelect = document.getElementById("target-unit");

        unitSelect.value = currentUnit;

        // Menutup pop-up
        closeModal();

        // Mengarahkan halaman ke formulir kontak
        const contactForm = document.getElementById("contact-form");

        contactForm.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Fokus ke kolom pesan
        setTimeout(function () {
            document.getElementById("sender-message").focus();
        }, 600);

    });

    // Tutup modal jika klik area luar
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Tutup modal menggunakan tombol Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    console.log("JavaScript berhasil terhubung!");

});
