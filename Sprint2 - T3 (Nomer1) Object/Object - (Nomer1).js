//OBJECT 1
var bahasaa = {
    divisi:'Mobile',
    mentor:'Mas Jujun',
    mentordivisi:function(){
        console.log('Saya Ingin Belajar Pemogramman Dengan' + this.mentor);
    }
}
console.log(bahasaa);
console.log(bahasaa.mentordivisi('Saya Ingin Membuat Project Mobile Apps'));

//OBJECT 2
var Handphone = {
    MerekH:'Iphone 11',
    harga:'15 Juta',
    warna:'Hitam',
    ip11:function(){
        console.log('Saya Ingin Membeli Hp ' + this.MerekH);
    }
}
console.log(Handphone)
console.log(Handphone.ip11('Saya Ingin Memiliki Hp Iphone 11 :))'))

//OBJECT 3
var Makanan = {
    NamaMakanan:'Seblak',
    harga:'10 Ribu',
    Porsi:'1 Porsi',
    sblk:function(){
        return 'Seblak 1 Porsi'
    },
    sblkk:function(){
        console.log('Saya Ingin Membeli Makanan ' + this.NamaMakanan);
    }
}
console.log(Makanan)
console.log(Makanan.sblkk('Saya Ingin Makan Seblak'));

//OBJECT 4
var Laptop = {
    Merek:'Asus',
    harga:'6 JUta',
    tipe:'Asus ROG Zephyrus S1',
    sblk:function(){
        console.log(`Saya Ingin Membeli Laptop ${this.Merek} Untuk Belajar Pemogramman :)`);
    }
}
console.log(Laptop);
console.log('Saya Ingin Menggunakan Laptop Asus untuk Belajar Bahasa Pemogramman.')

//OBJECT 5
var kota = {
    tempat:'Bandung',
    asal:'Bekasi',
    asaltempat:function(){
        console.log('Saya Ingin Pergi Ke ' + this.tempat);
    }
}
console.log(kota);
console.log(kota.asaltempat('Saya Dari Bekasi Ingin Pergi Ke Bandung.'));