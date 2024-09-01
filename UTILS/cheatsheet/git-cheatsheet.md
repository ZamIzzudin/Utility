# Git Command Cheatsheet

1. git init
   - Fungsi: Menginisialisasi repositori Git baru
   - Contoh: `git init`

2. git clone
   - Fungsi: Mengkloning repositori yang sudah ada
   - Contoh: `git clone https://github.com/user/repo.git`

3. git add
   - Fungsi: Menambahkan file ke staging area
   - Contoh: `git add file.txt` atau `git add .` (untuk semua file)

4. git commit
   - Fungsi: Menyimpan perubahan ke repositori
   - Contoh: `git commit -m "Pesan commit"`

5. git status
   - Fungsi: Menampilkan status working directory
   - Contoh: `git status`

6. git log
   - Fungsi: Menampilkan riwayat commit
   - Contoh: `git log`

7. git branch
   - Fungsi: Membuat, menampilkan, atau menghapus branch
   - Contoh: 
     - Membuat: `git branch nama-branch`
     - Menampilkan: `git branch`
     - Menghapus: `git branch -d nama-branch`

8. git checkout
   - Fungsi: Berpindah ke branch atau commit tertentu
   - Contoh: 
     - Pindah branch: `git checkout nama-branch`
     - Membuat dan pindah: `git checkout -b nama-branch`

9. git merge
   - Fungsi: Menggabungkan branch
   - Contoh: `git merge nama-branch`

10. git pull
    - Fungsi: Mengambil dan menggabungkan perubahan dari remote repository
    - Contoh: `git pull origin main`

11. git push
    - Fungsi: Mengirim perubahan ke remote repository
    - Contoh: `git push origin main`

12. git remote
    - Fungsi: Mengelola remote repository
    - Contoh: `git remote add origin https://github.com/user/repo.git`

13. git diff
    - Fungsi: Menampilkan perbedaan antara file
    - Contoh: `git diff` atau `git diff file.txt`

14. git reset
    - Fungsi: Membatalkan perubahan
    - Contoh: `git reset HEAD~1` (membatalkan commit terakhir)

15. git stash
    - Fungsi: Menyimpan perubahan sementara
    - Contoh: 
      - Menyimpan: `git stash`
      - Mengembalikan: `git stash pop`

16. git tag
    - Fungsi: Menandai commit tertentu
    - Contoh: 
      - Tag sederhana: `git tag v1.0.0`
      - Tag dengan pesan: `git tag -a v1.0.0 -m "Versi 1.0.0"`
