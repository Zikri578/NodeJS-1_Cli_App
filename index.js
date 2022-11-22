import inquirer from "inquirer";


// menampilkan text ke console
// console.log("Saya Belajar Node JS");

// // Membuat sebuah variabel
// const data = {
//     username: "Muzik",
//     email: "muzik12@gmail.com"
// }

// console.log(`Semoga Bisa Menjadi Seorang Programmer dengan bahasa pemrograman yaitu : Javascript`);
// console.log(`
//     ================================================
//        SELAMAT DATANG DI APLIKASI SEDERHANA SAYA
//     ================================================
//     |    Username         : ${data.username}                  |
//     ------------------------------------------------
//     |    Email            : ${data.email}      |
//     ================================================
// `);

inquirer.prompt(
    [
        {
            name: "fullname",
            message: "Masukkan Nama Lengkap Anda : "
        },
        {
            name: "age",
            message: "Masukkan Umur Anda : "
        },
        {
            name: "datetime",
            message: "Masukkan Tanggal Lahir Anda : "
        },
        {
            name: "married",
            message: "Apakah anda sudah menikah?",
            type: "list",
            choices: ["Belum Menikah", "Sudah Menikah"]
        }
    ]
)
    .then((answer) => {
        console.clear(); // untuk membersihkan isi yang sudah diinput
        console.log(`
        ===========================================
            Nama Lengkap    : ${answer.fullname}       
            Usia            : ${answer.age}     
            Tanggal Lahir   : ${answer.datetime}    
            Status          : ${answer.married} 
        ===========================================
        `);
    }).catch((err) => {
        console.log(err);
    });