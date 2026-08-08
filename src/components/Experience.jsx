import { motion } from "framer-motion";

const experiences = [
  {
    year: "Juli 2025 - September2025",
    title: "Kasir – WR Swalayan",
    description:
      "Melayani proses pembayaran pelanggan, melakukan stok opname, menata display barang, menerima barang datang, serta menjaga kebersihan area kerja."
  },
  {
    year: "Januari 2025 – Mei 2025",
    title: "Part-Time Crew – Crepes Time",
    description:
      "Melayani pelanggan, membuat produk sesuai pesanan, mengelola transaksi offline dan online, melakukan stok opname, serta merekap hasil penjualan harian."
  },
  {
    year: "Juli 2024 - Oktober 2024",
    title: "Staff Photoplace – Transmart Maguwo",
    description:
      "Melayani pelanggan dalam proses cetak foto, mengoperasikan mesin cetak, memastikan hasil cetak sesuai permintaan, serta menjaga kerapian area kerja."
  },
  {
    year: "Juni 2023 – Juni 2024",
    title: "Store Crew – PT Indomarco Prismatama (Indomaret)",
    description:
      "Melayani pelanggan, mengelola transaksi penjualan, melakukan stok opname, menata display produk, serta membantu operasional toko sesuai SOP."
  },

   {
    year: "Mei 2023 - juli 2024",
    title: "Kasir – Mediko Swalayan",
    description:
      "Melayani proses pembayaran pelanggan, melakukan stok opname, menata display barang, memasang label harga, menerima barang datang, serta menjaga kebersihan dan kerapian area kerja.",
  },

  {
    year: " 6 bulan ",
    title: "Praktik Kerja Lapangan – Youvee Komputer",
    description:
      "Melakukan pengecekan dan perbaikan komputer maupun laptop, mengganti komponen, serta memberikan pelayanan kepada pelanggan."
  },

  
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-600 mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition"
            >

              <span className="text-indigo-600 font-bold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;