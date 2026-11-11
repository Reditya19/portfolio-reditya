// Semua data pribadi dikumpulkan di sini agar mudah diedit.

export const profile = {
  name: "Reditya",
  fullName: "Reditya Nur Karomah",
  firstName: "Reditya",
  lastName: "Nur Karomah",
  roles: ["UI/UX Designer", "Frontend Developer", "Web Designer", "Creative Thinker"],
  tagline:
    "Saya fokus pada pembuatan website modern, responsif, dan mudah digunakan. Saya senang mengubah ide menjadi tampilan yang menarik dan fungsional.",
  about:
    "Saya Reditya Nur Karomah, mahasiswa Informatika yang memiliki ketertarikan pada bidang UI/UX Design dan Frontend Development. Saya senang membuat tampilan website yang modern, mudah digunakan, serta memberikan pengalaman terbaik bagi pengguna.",
  photo: "/profile.png", // letakkan foto kamu di public/profile.png
  cv: "/cv.pdf",
  email: "redityakaromah53@gmail.com",
  whatsapp: "081952730968",
  whatsappLink: "https://wa.me/6281952730968",
  // TODO: ganti dengan link asli kamu
  github: { label: "github.com/username", url: "https://github.com/" },
  linkedin: { label: "linkedin.com/in/username", url: "https://linkedin.com/" },
  instagram: { label: "@Tyaa_ya_", url: "https://instagram.com/Tyaa_ya_" },
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const aboutCards = [
  { title: "Pendidikan", value: "S1 Informatika", note: "UTDI" },
  { title: "Pengalaman", value: "PKL & Store Crew" },
  { title: "Organisasi", value: "HIMAFORKA" },
  { title: "Domisili", value: "Indonesia" },
];

export const projects = [
  {
    title: "Restaurant Management",
    image: "/restaurant.webp",
    description:
      "Website untuk mengelola menu, pesanan, dan pelanggan menggunakan PHP Native dan MySQL.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
  },
  {
    title: "Camping Management",
    image: "/camping.png",
    description: "Website CRUD alat camping dengan pencarian dan manajemen stok.",
    tech: ["PHP", "MySQL"],
    github: "#",
  },
  {
    title: "Mobile Banking UI",
    image: "/mobilebanking.png",
    description: "Desain aplikasi Mobile Banking menggunakan Figma.",
    tech: ["Figma"],
    github: "#",
  },
];

export const experiences = [
  {
    year: "Juli 2025 – September 2025",
    title: "Kasir – WR Swalayan",
    description:
      "Melayani proses pembayaran pelanggan, melakukan stok opname, menata display barang, menerima barang datang, serta menjaga kebersihan area kerja.",
  },
  {
    year: "Januari 2025 – Mei 2025",
    title: "Part-Time Crew – Crepes Time",
    description:
      "Melayani pelanggan, membuat produk sesuai pesanan, mengelola transaksi offline dan online, melakukan stok opname, serta merekap hasil penjualan harian.",
  },
  {
    year: "Juli 2024 – Oktober 2024",
    title: "Staff Photoplace – Transmart Maguwo",
    description:
      "Melayani pelanggan dalam proses cetak foto, mengoperasikan mesin cetak, memastikan hasil cetak sesuai permintaan, serta menjaga kerapian area kerja.",
  },
  {
    year: "Juni 2023 – Juni 2024",
    title: "Store Crew – PT Indomarco Prismatama (Indomaret)",
    description:
      "Melayani pelanggan, mengelola transaksi penjualan, melakukan stok opname, menata display produk, serta membantu operasional toko sesuai SOP.",
  },
  {
    year: "Mei 2023 – Juli 2024",
    title: "Kasir – Mediko Swalayan",
    description:
      "Melayani proses pembayaran pelanggan, melakukan stok opname, menata display barang, memasang label harga, menerima barang datang, serta menjaga kebersihan dan kerapian area kerja.",
  },
  {
    year: "6 bulan",
    title: "Praktik Kerja Lapangan – Youvee Komputer",
    description:
      "Melakukan pengecekan dan perbaikan komputer maupun laptop, mengganti komponen, serta memberikan pelayanan kepada pelanggan.",
  },
];
