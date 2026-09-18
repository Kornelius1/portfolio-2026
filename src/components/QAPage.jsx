import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function QAPage() {
  return (
    <div className="min-h-screen bg-[#12121a] text-white px-6 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Tombol Kembali ke Beranda */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft /> Kembali ke Beranda
        </Link>

        {/* Header Artikel */}
        <header className="mb-12">
          <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">Portofolio QA</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6 leading-tight">
            Menjaga Keandalan Sistem Melalui Pengujian Fungsional Sederhana
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Di balik setiap aplikasi yang berjalan mulus, pastilah terdapat ratusan skenario pengujian yang memastikan tidak ada celah bagi kegagalan sistem. Sebagai seorang QA, sudah menjadi tugasnya menjaga kualitas sistem dan memastikan sistem bekerja sesuai dengan kebutuhan. Kualitas bukan sekadar hasil akhir melainkan proses perancangan yang sistematis sejak awal pengembangan.
          </p>
        </header>

        {/* Konten Naratif Artikel */}
        <article className="space-y-6 text-slate-300 text-base leading-relaxed mb-12">
          <h2 className="text-2xl font-semibold text-white pt-4">Pendekatan Pengujian Berbasis Skenario Nyata</h2>
          <p>
            Sebagai seseorang yang tertarik dalam pengujian perangkat lunak, saya merancang dokumentasi test case ini untuk membedah bagaimana sebuah fitur diuji. Mulai dari alur positif ketika pengguna memasukkan data yang valid, hingga penanganan kasus ekstrem untuk menguji ketahanan aplikasi terhadap kesalahan input oleh pengguna.
          </p>
        </article>

        {/* Area Pratinjau Dokumen dan Unduh */}
        <div className="bg-[#1e1e2f] border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Lembar Kerja Dokumentasi Resmi</h3>
              <p className="text-slate-400 text-sm">Anda dapat melihat langsung isi dokumen pengujian atau mengunduhnya.</p>
            </div>
            
            <a
              href="/pdf/test-cases.pdf"
              download="Test_Case_Portfolio.pdf"
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-medium px-5 py-2.5 rounded-lg transition-all shadow-lg hover:scale-105"
            >
              <FaDownload /> Download Dokumen
            </a>
          </div>

          <div className="w-full h-[600px] bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800">
            <iframe
              src="/pdf/test-cases.pdf"
              title="Pratinjau Test Case"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QAPage;