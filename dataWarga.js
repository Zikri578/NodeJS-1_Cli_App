// membuat sebuah aplikasi sederhana untuk data warga
// membuat sebuah pertanyaan
/**
 * 1. Nama Lengkap
 * 2. Tempat / Tanggal Lahir
 * 3. Pendidikan Terakhir
 * 4. No. KTP
 * 5. No. Telp
 * 6. Alamat Rumah
 * 7. Status Pernikahan -> menggunakan choice / list yang isinya : sudah menikah, belum menikah, janda / duda 
 */

import inquirer from "inquirer";
import fs from "fs";


inquirer.prompt(
    [
        {
            name: "name",
            message: "Masukkan Nama Anda : "
        },
        {
            name: "time",
            message: "Masukkan Tempat Lahir : "
        },
        {
            name: "pendidikan",
            message: "Pendidikan Terakhir : "
        },
        {
            name: "ktp",
            message: "Masukkan no. ktp : "
        },
        {
            name: "telp",
            message: "Masukkan no hp : "
        },
        {
            name: "alamat",
            message: "Masukkan alamat rumah : "
        },
        {
            name: "status",
            message: "Status Pernikahan?",
            type: "list",
            choices: ["Sudah Menikah", "Belum Menikah", "Janda / Duda"]
        }
    ]
)
    .then(answer => {
        console.clear();    // untuk membersihkan isi yang sudah diinput

        // membuat sebuah variabel hasil
        let hasil =
            `
                ===============================================================
                |                       Status Data Warga                     |
                ===============================================================
                | Nama Lengkap            : ${answer.name}
                | Tempat Lahir            : ${answer.time}
                | Pendidikan              : ${answer.pendidikan}
                | No. KTP                 : ${answer.ktp}     
                | No. Telp                : ${answer.telp}
                | Alamat                  : ${answer.alamat}
                | Status                  : ${answer.status}
                ===============================================================
            `

        // membuat sebuah nama file
        let fileName = answer.name;

        // menulis data hasil kedalam bentuk file txt
        fs.writeFileSync(`./storage/${fileName}.txt`, hasil, "utf-8"); // storage -> membuat folder secara manual

        // menampilkan ke console hasil
        console.log(hasil);

    }).catch((err) => {
        console.log(err);
    });

