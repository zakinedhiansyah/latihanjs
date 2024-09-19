function perkalian(p1,p2) {
    return p1 * p2 
}

function tambah(a1,a2) {
    return a1 + a2 
}

function kurang(b1,b2) {
  let  a = b1 - b2
    return a
}

let a = kurang(5,2)
console.log(a);

console.log(tambah(10,2));


function k(a,b,c,d,e,f) {
    let m = a - b * c + d / e - f
    return m
}
let v = k(10,5,6,1,8,9)
console.log(v)

let text = "hasil dari penambahan antara 10 + 2 =" + tambah(10,2);
console.log(text)

function nama(nama_orang , asal_saya , umur_saya, jumlah_print){
    let nama = "Nama saya adalah " + nama_orang;
    let asal = "Asal saya dari " + asal_saya;
    let umur = "Umur saya " + umur_saya
    let eek = jumlah_print

    for (let a = 0; a < eek; a++) {
        console.log(nama +"\n"+ asal +"\n" + umur )
    }
    
}
console.log(nama("Zaki","Jogja" , "23", 2))

function persegi(panjang, lebar) {
    let hasil = ''; // Variable untuk menyimpan hasil persegi panjang

    for (let s = 0; s < lebar; s++) {
        for (let a = 0; a < panjang; a++) {
            // hasil += '*'; // Tambahkan '*' ke dalam hasil
            hasil = hasil + '*'
        }
        hasil += '\n'; // Tambahkan baris baru setelah setiap baris persegi panjang
    }

    return hasil; // Mengembalikan hasil persegi panjang
}

console.log(persegi(6, 3)); // Memanggil fungsi dengan panjang = 6, lebar = 3
