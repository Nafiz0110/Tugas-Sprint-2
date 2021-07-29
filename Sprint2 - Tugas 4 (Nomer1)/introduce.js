const introduce = {
    perkenalkan : function() {
        console.log('Nama Saya ' + this.nama + ' Umur Saya ' + this.age + ' Tahun' + ' Alamat Saya di ' + this.address + ' Dan punya hobby ' + this.hobby);
    }
}
var data = Object.create(introduce)
data.nama = "Agus ";
data.age = 30;
data.address = "Jln. Malioboro, Yogyakarta";
data.hobby = "Gaming";
data.perkenalkan()