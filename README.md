=== Vehicle Monitoring App ===

o- user list :

    - email : admin@example.com
    - password : admin123

    - email : jajang@example.com
    - password : supervisor

    - email : asep@example.com
    - password : supervisor

    - email : bambang@example.com
    - password : supervisor

-o

o- versions :

    - PHP version : 8.0.2
    - Database version : libmysql - mysqlnd 8.1.2
    - framework : laravel

-o

!! PETUNJUK PENGGUNAAN : !!

1. clone repository
2. pada terminal jalankan 'composer install'
3. copy file .env.example dan rename menjadi .env
4. sambungkan dengan database dengan cara menyesuaikan koneksi database pada file .env
5. pastikan database anda sudah berjalan dan dapat terhubung
6. jalankan 'php artisan key:generate' pada terminal
7. jalankan 'php artisan migrate' lalu 'php artisan db:seed' pada terminal
8. jalankan 'npm run dev' lalu 'php artisan serve' pada terminal
9. buka url localhost yang ditampilkan pada terminal

Untuk menambahkan user baru, tambahkan /register pada url website.
Untuk menambahkan pengajuan peminjaman, klik tombol new request pada dashboard.
Untuk menambahkan kendaraan, navigasi ke halaman Vehicles pada dashboard.


