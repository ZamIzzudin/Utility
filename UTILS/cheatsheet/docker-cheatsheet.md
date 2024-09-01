# Docker Command Cheatsheet

1. docker run
   - Fungsi: Menjalankan container dari image
   - Contoh: `docker run -d -p 80:80 nginx`

2. docker pull
   - Fungsi: Mengunduh image dari Docker Hub
   - Contoh: `docker pull ubuntu:latest`

3. docker ps
   - Fungsi: Menampilkan daftar container yang sedang berjalan
   - Contoh: `docker ps` atau `docker ps -a` (termasuk container yang berhenti)

4. docker images
   - Fungsi: Menampilkan daftar image yang tersedia di lokal
   - Contoh: `docker images`

5. docker build
   - Fungsi: Membuat image dari Dockerfile
   - Contoh: `docker build -t myapp:1.0 .`

6. docker stop
   - Fungsi: Menghentikan container yang sedang berjalan
   - Contoh: `docker stop container_id`

7. docker rm
   - Fungsi: Menghapus container
   - Contoh: `docker rm container_id`

8. docker rmi
   - Fungsi: Menghapus image
   - Contoh: `docker rmi image_id`

9. docker exec
   - Fungsi: Menjalankan perintah di dalam container yang sedang berjalan
   - Contoh: `docker exec -it container_id /bin/bash`

10. docker-compose up
    - Fungsi: Menjalankan multi-container Docker applications
    - Contoh: `docker-compose up -d`

11. docker logs
    - Fungsi: Melihat log dari container
    - Contoh: `docker logs container_id`

12. docker network
    - Fungsi: Mengelola jaringan Docker
    - Contoh: `docker network create mynetwork`

13. docker volume
    - Fungsi: Mengelola volume Docker
    - Contoh: `docker volume create myvolume`

14. docker inspect
    - Fungsi: Menampilkan informasi detail tentang objek Docker
    - Contoh: `docker inspect container_id`

15. docker push
    - Fungsi: Mengunggah image ke registry Docker
    - Contoh: `docker push username/image:tag`

16. docker-compose down
    - Fungsi: Menghentikan dan menghapus container yang dibuat oleh docker-compose up
    - Contoh: `docker-compose down`

17. docker save
    - Fungsi: Menyimpan image ke file tar
    - Contoh: `docker save -o myimage.tar myimage:latest`

18. docker load
    - Fungsi: Memuat image dari file tar
    - Contoh: `docker load -i myimage.tar`
