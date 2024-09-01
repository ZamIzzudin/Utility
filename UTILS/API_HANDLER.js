/** @format */

import axios from "axios";

const api = (() => {
  const baseUrl = process.env.REACT_APP_API_ENDPOINT;

  axios.defaults.withCredentials = true;

  // GET
  async function GET() {
    const url = baseUrl + "/faq";

    const response = await axios.get(url);
    return response.data.data;
  }

  // POST
  async function POST(data) {
    const url = baseUrl + "/berita";
    const form = new FormData();

    form.append("judul_berita", data.judul_berita);
    form.append("gambar_berita", data.gambar_berita.file || undefined);

    data.kategori_berita.forEach((kategori) => {
      form.append("kategori_berita[]", kategori);
    });

    const response = await axios.post(url, form);
    return response.data.data;
  }

  // PUT
  async function PUT(data) {
    const url = baseUrl + "/event/" + data._id;

    const form = new FormData();

    form.append("judul_event", data.judul_event);
    form.append("header_event", data?.header_event.file || undefined);

    if (data.tanggal_selesai_event !== null) {
      form.append("tanggal_selesai_event", data.tanggal_selesai_event);
    }

    data.dokumentasi_event.forEach((gambar) => {
      form.append("dokumentasi_event", gambar);
    });

    const response = await axios.put(url, form);
    return response.data.data;
  }

  // DELETE
  async function DELETE(_id) {
    const url = baseUrl + "/faq/" + _id;

    const response = await axios.delete(url);
    return response.data.data;
  }

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
})();

export default api;
