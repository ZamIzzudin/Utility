
# Cheatsheet Google Cloud Build

Google Cloud Build adalah layanan CI/CD yang mengeksekusi build Anda pada infrastruktur Google Cloud Platform.

## Daftar Isi
- [Autentikasi](#autentikasi)
- [Membuat Konfigurasi Build](#membuat-konfigurasi-build)
- [Trigger](#trigger)
- [Perintah Umum](#perintah-umum)
- [Substitusi](#substitusi)
- [Variabel Lingkungan](#variabel-lingkungan)
- [Debugging](#debugging)
- [Referensi](#referensi)

## Autentikasi

Sebelum menggunakan Cloud Build, pastikan Google Cloud SDK Anda sudah terautentikasi:

```bash
gcloud auth login
gcloud config set project [PROJECT_ID]
```

Aktifkan API Cloud Build:

```bash
gcloud services enable cloudbuild.googleapis.com
```

## Membuat Konfigurasi Build

Cloud Build menggunakan file `cloudbuild.yaml` atau `cloudbuild.json` untuk mendefinisikan langkah-langkah build Anda.

### Contoh Konfigurasi YAML

```yaml
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-image', '.']
images:
- 'gcr.io/$PROJECT_ID/my-image'
```

### Contoh Konfigurasi JSON

```json
{
  "steps": [
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": ["build", "-t", "gcr.io/$PROJECT_ID/my-image", "."]
    }
  ],
  "images": [
    "gcr.io/$PROJECT_ID/my-image"
  ]
}
```

## Trigger

Trigger memungkinkan Anda untuk memulai build secara otomatis sebagai respons terhadap perubahan pada kode sumber Anda.

### Membuat Trigger

```bash
gcloud beta builds triggers create github   --name=[NAMA_TRIGGER]   --repo-name=[NAMA_REPOSITORI]   --repo-owner=[PEMILIK_REPOSITORI]   --branch-pattern="[POLA_BRANCH]"   --build-config="cloudbuild.yaml"
```

## Perintah Umum

- **Mengirim Build**: Kirim build menggunakan file konfigurasi.
  ```bash
  gcloud builds submit --config cloudbuild.yaml .
  ```

- **Daftar Build**: Tampilkan build terbaru di proyek Anda.
  ```bash
  gcloud builds list
  ```

- **Batalkan Build**: Batalkan build yang sedang berjalan.
  ```bash
  gcloud builds cancel [ID_BUILD]
  ```

- **Lihat Log Build**: Lihat log dari build tertentu.
  ```bash
  gcloud builds log [ID_BUILD]
  ```

## Substitusi

Substitusi memungkinkan Anda mendefinisikan variabel yang dapat digunakan dalam konfigurasi build Anda.

### Contoh

```yaml
substitutions:
  _CUSTOM_VAR: 'value'
steps:
- name: 'gcr.io/cloud-builders/gcloud'
  args: ['echo', '${_CUSTOM_VAR}']
```

## Variabel Lingkungan

- `PROJECT_ID`: ID proyek Google Cloud.
- `BUILD_ID`: Identifier unik untuk build.
- `REPO_NAME`: Nama repositori untuk build yang di-trigger.

## Debugging

- **Periksa Log Build**: Langkah pertama dalam debugging adalah memeriksa log build.
- **Eksekusi Lokal**: Gunakan Cloud Build Local untuk menguji build Anda secara lokal.
  
  ```bash
  gcloud components install cloud-build-local
  cloud-build-local --config=cloudbuild.yaml .
  ```

## Referensi

- [Dokumentasi Google Cloud Build](https://cloud.google.com/build/docs)
- [Membuat Trigger Build](https://cloud.google.com/build/docs/automating-builds/create-github-app-triggers)
- [Substitusi Cloud Build](https://cloud.google.com/build/docs/configuring-builds/substitute-variable-values)

