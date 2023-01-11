# NoJS-1_Cli_App

Menggunakan npm inquirer : https://www.npmjs.com/package/inquirer

CLI (Command Line Interface) App dalam Node.js adalah sebuah aplikasi yang dapat dijalankan melalui command line (terminal) dan ditulis menggunakan JavaScript. Node.js memungkinkan developer untuk membuat aplikasi CLI dengan cepat dan mudah menggunakan lingkungan yang sama dengan aplikasi web yang ditulis menggunakan JavaScript.

Aplikasi CLI dapat melakukan berbagai tugas, seperti mengambil input dari command line, mengeksekusi perintah, mengolah data, dan menampilkan output. Aplikasi ini dapat digunakan untuk menyelesaikan tugas-tugas otomatis, membantu developer dalam proses development, atau membantu pengguna dalam menjalankan tugas-tugas yang spesifik.

Untuk membuat aplikasi CLI dengan Node.js, Anda dapat menggunakan library seperti Commander, yargs, dan meow. Library ini dapat digunakan untuk membuat parsing argument, validasi input, dan membuat help message. Anda juga dapat menggunakan library seperti inquirer untuk membuat prompt interaktif di command line. Contoh sederhana dari cli app dengan node js menggunakan commander library :

    const program = require('commander');

    program
      .version('0.1.0')
      .option('-n, --name <name>', 'Your name')
      .parse(process.argv);

    console.log(`Hello ${program.name}`);

Anda jalankan dari command line dengan : node index.js --name "John". Akan mengeluarkan : Hello John.

Itulah sekilas pengertian CLI App dalam Node.js dan contoh sederhana dari pembuatan aplikasi CLI menggunakan Node.js. Anda dapat mengeksplore library lain yang tersedia untuk membuat aplikasi CLI dengan fitur yang lebih kompleks sesuai dengan kebutuhan aplikasi anda.

Selain library yang sudah saya sebutkan sebelumnya, masih ada beberapa library lain yang dapat digunakan untuk membuat aplikasi CLI dengan Node.js seperti:
* oclif: library dari Heroku yang memudahkan pengembangan CLI.
* caporal : library yang menyediakan CLI Argument Parsing, Validation, dan Generation
* vorpal : framework untuk membuat CLI interaktif
* cli-table : membuat tabel di command line
* chalk : memberikan warna dan gaya pada output command line

Selain library, Anda juga dapat membuat aplikasi CLI dengan hanya menggunakan Node.js dan JavaScript. Anda dapat mengambil input dari command line menggunakan `process.stdin`, mengeksekusi perintah menggunakan `child_process.exec`, dan menampilkan output menggunakan `console.log()` atau `process.stdout`.

Namun, dengan menggunakan library yang tersedia, Anda dapat mempercepat pengembangan aplikasi dan menambahkan fitur seperti parsing argument, validasi input, dan membuat help message secara mudah.

Pembuatan aplikasi CLI juga dapat di package menjadi sebuah modul yang dapat di share dan digunakan oleh developer lain. Sehingga dapat digunakan sebagai tool yang membantu developer dalam melakukan tugas tertentu. Dan juga dapat digunakan sebagai automation tool yang membantu user dalam menyelesaikan tugas yang spesifik.
