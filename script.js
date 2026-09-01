// KONFIGURASI TOKO
const nomorWhatsApp = "6281234567890"; // Ganti dengan nomor HP Anda

// DATA PRODUK
const produkList = [
    {
        nama: "Produk Contoh 1",
        harga: "Rp 75.000",
        deskripsi: "Deskripsi singkat mengenai keunggulan atau spesifikasi dari produk pertama.",
        gambar: "https://via.placeholder.com/300x200?text=Produk+1"
    },
    {
        nama: "Produk Contoh 2",
        harga: "Rp 120.000",
        deskripsi: "Deskripsi singkat mengenai bahan, ukuran, atau fitur produk kedua.",
        gambar: "https://via.placeholder.com/300x200?text=Produk+2"
    },
    {
        nama: "Produk Contoh 3",
        harga: "Rp 50.000",
        deskripsi: "Deskripsi singkat mengenai variasi atau fungsi dari produk ketiga.",
        gambar: "https://via.placeholder.com/300x200?text=Produk+3"
    },
    {
        nama: "Produk Contoh 4",
        harga: "Rp 90.000",
        deskripsi: "Tambahan produk agar terlihat rapi pada mode 2 kolom di HP.",
        gambar: "https://via.placeholder.com/300x200?text=Produk+4"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");
    
    // Teks Pesan Umum untuk tombol Footer & Floating
    const pesanUmum = "Halo, saya ingin bertanya mengenai produk di etalase Anda.";
    const linkUmum = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanUmum)}`;

    // Pasang link pada tombol Footer dan Tombol Melayang (Floating WA)
    document.getElementById("whatsapp-footer").href = linkUmum;
    document.getElementById("floating-wa").href = linkUmum;

    // Masukkan produk secara dinamis
    produkList.forEach(produk => {
        const pesanProduk = `Halo, saya tertarik dengan *${produk.nama}* seharga ${produk.harga}. Apakah stoknya masih tersedia?`;
        const linkWaProduk = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanProduk)}`;

        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <img src="${produk.gambar}" alt="${produk.nama}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${produk.nama}</h3>
                <div class="product-price">${produk.harga}</div>
                <p class="product-description">${produk.deskripsi}</p>
                <a href="${linkWaProduk}" class="product-btn" target="_blank">
                    Beli <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
});