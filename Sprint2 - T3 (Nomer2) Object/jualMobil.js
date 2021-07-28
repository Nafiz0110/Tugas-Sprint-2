var jualMobil = {
    nama : "Tompel",
    merek : "Avanza",
    tahun : 2017,
    iklan : function(){
        document.write(`Bu, Nama Saya ${this.nama}, Jual Mobil ${this.merek},Tahun ${this.tahun},bekas`)
    }
}
jualMobil.iklan();