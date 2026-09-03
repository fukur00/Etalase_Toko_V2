// KONFIGURASI TOKO
const nomorWhatsApp = "6289677088920"; // Ganti dengan nomor HP Anda

// DATA PRODUK
const produkList = [
  {
    nama: "Produk Contoh 1",
    deskripsi:
      "Deskripsi singkat mengenai keunggulan atau spesifikasi dari produk pertama.",
    gambar: "https://via.placeholder.com/300x200?text=Produk+1",
  },
  {
    nama: "Produk Contoh 2",
    deskripsi:
      "Deskripsi singkat mengenai bahan, ukuran, atau fitur produk kedua.",
    gambar: "https://via.placeholder.com/300x200?text=Produk+2",
  },
  {
    nama: "Produk Contoh 3",
    deskripsi:
      "Deskripsi singkat mengenai variasi atau fungsi dari produk ketiga.",
    gambar: "https://via.placeholder.com/300x200?text=Produk+3",
  },
  {
    nama: "Produk Contoh 4",
    deskripsi: "Tambahan produk agar terlihat rapi pada mode 2 kolom di HP.",
    gambar: "https://via.placeholder.com/300x200?text=Produk+4",
  },
];

// Fungsionalitas untuk merender produk ke halaman web
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");

  // Set link tombol WhatsApp di footer
  const footerWaBtn = document.getElementById("whatsapp-footer");
  footerWaBtn.href = `https://wa.me/${nomorWhatsApp}?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20produk%20di%20etalase%20Anda.`;

  // 1. Fungsi untuk menampilkan produk
  function renderProduk(dataProduk) {
    productGrid.innerHTML = ""; // Kosongkan tampilan terlebih dahulu

    // Tampilkan pesan jika produk tidak ditemukan
    if (dataProduk.length === 0) {
      productGrid.innerHTML =
        "<p style='grid-column: 1 / -1; text-align: center; color: #888; padding: 20px;'>Produk yang Anda cari tidak ditemukan.</p>";
      return;
    }

    // Masukkan produk yang sesuai secara dinamis
    dataProduk.forEach((produk) => {
      const pesanWhatsApp = encodeURIComponent(
        `Halo, saya tertarik untuk membeli ${produk.nama}. Apakah stoknya masih tersedia?`,
      );
      const linkWaProduk = `https://wa.me/${nomorWhatsApp}?text=${pesanWhatsApp}`;

      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
                <img src="${produk.gambar}" alt="${produk.nama}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${produk.nama}</h3>
                    <p class="product-description">${produk.deskripsi}</p>
                    <a href="${linkWaProduk}" class="product-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Beli via WhatsApp
                    </a>
                </div>
            `;

      productGrid.appendChild(card);
    });
  }

  // 2. Tampilkan semua produk saat website pertama kali dibuka
  renderProduk(produkList);

  // 3. Fungsionalitas Pencarian (Search)
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (e) => {
    const kataKunci = e.target.value.toLowerCase();

    // Saring (filter) produk berdasarkan nama atau deskripsinya
    const hasilPencarian = produkList.filter((produk) => {
      return (
        produk.nama.toLowerCase().includes(kataKunci) ||
        produk.deskripsi.toLowerCase().includes(kataKunci)
      );
    });

    // Perbarui tampilan dengan hasil pencarian
    renderProduk(hasilPencarian);
  });
});
