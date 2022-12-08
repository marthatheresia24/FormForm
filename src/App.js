import "./App.css";
import base from "./api/base";
import { useRef } from "react";

function App() {
  const nameRef = useRef();
  const tanggalmulaiRef = useRef();
  const tanggalselesaiRef = useRef();
  const detailfieldRef = useRef();
  const estimasihargaRef = useRef();
  const waktuselesaiRef = useRef();
  const pekerjaanyangakandilakukanRef = useRef();
  const skalaproyekRef = useRef();
  const catatanRef = useRef();
  const timelineRef = useRef();
  const contactRef = useRef();

  const createAir = (e) => {
    e.preventDefault();
    const JudulProject = nameRef.current.value;
    const TanggalMulai = tanggalmulaiRef.current.value;
    const TanggalSelesai = tanggalselesaiRef.current.value;
    const LatarBelakang = detailfieldRef.current.value;
    const EstimasiHarga = estimasihargaRef.current.value;
    const WaktuSelesai = waktuselesaiRef.current.value;
    const PekerjaanyangAkanDilakukan = pekerjaanyangakandilakukanRef.current.value;
    const SkalaProyek = skalaproyekRef.current.value;
    const Catatan = catatanRef.current.value;
    const Timeline = timelineRef.current.value;
    const Contact = contactRef.current.value;

    base("RequestaQuote").create(
      {
        JudulProject,
        Catatan,
        Contact,
        Timeline,
        TanggalMulai,
        TanggalSelesai,
        LatarBelakang,
        EstimasiHarga,
        WaktuSelesai,
        PekerjaanyangAkanDilakukan,
        SkalaProyek,
      },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        prompt(record.getId());
      }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-6/12 p-5 m-10 border border-2 rounded-md">
        <form className="space-y-8 flex-auto">
          <div className="text-3xl m-4 text-center font-bold text-slate-700">
            Request a Quote
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Judul Project : (*)
            </label>
            <input
              placeholder="Project xyz"
              type="text"
              name="judul"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={nameRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Tanggal Mulai : (*)
            </label>
            <input
              type="date"
              name="date"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={tanggalmulaiRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Tanggal Selesai : (*)
            </label>
            <input
              type="date"
              name="date"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={tanggalselesaiRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Waktu Selesai :
            </label>
            <input
              type="time"
              name="time"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={waktuselesaiRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Ceritakan latar belakang anda/perusahaan anda
            </label>
            <textarea
              placeholder="What you are looking to do, Details about your business, Who are your target audience, Objective of this project"
              name="deskripsi"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={detailfieldRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Apa yang harus penyedia jasa lakukan?
            </label>
            <textarea
              placeholder="What you are looking to do, Details about your business, Who are your target audience, Objective of this project"
              name="deskripsi"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={pekerjaanyangakandilakukanRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Skala proyek
            </label>
            <textarea
              placeholder="What you are looking to do, Details about your business, Who are your target audience, Objective of this project"
              name="deskripsi"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={skalaproyekRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Catatan khusus yang harus diperhatikan pada saat pengerjaan
            </label>
            <textarea
              placeholder="What you are looking to do, Details about your business, Who are your target audience, Objective of this project"
              name="deskripsi"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={catatanRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Flow pengerjaan/Timeline
            </label>
            <textarea
              placeholder="What you are looking to do, Details about your business, Who are your target audience, Objective of this project"
              name="deskripsi"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={timelineRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Contact person (no. wa & email)
            </label>
            <textarea
              placeholder="What you are looking to do, Details about your business, Who are your target audience, Objective of this project"
              name="deskripsi"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={contactRef}
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-semibold mb-2">
              Estimasi Budget : (*)
            </label>
            <input
              placeholder="4.000.000"
              type="text"
              name="judul"
              className="shadow border w-full text-sm rounded py-2 px-3 focus:outline-gray-400"
              ref={estimasihargaRef}
            />
          </div>
          <button
            type="submit"
            onClick={createAir}
            className="w-full py-2 px-3 border rounded-lg bg-slate-700 text-white hover:bg-slate-500"
          >
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
