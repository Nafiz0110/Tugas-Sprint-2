function hitungLuasPersegiPanjang(panjang,lebar) {
        luas = panjang * lebar;
        document.write("Panjang : " + panjang + "<br/>");
        document.write("Lebar : " + lebar + "<br/>");
        document.write(`Luas Persegi Panjang : ` + luas);
}
panjang = prompt("Masukan Nilai Panjang");
lebar= prompt("Masukan NIlai Lebar");
hitungLuasPersegiPanjang(panjang,lebar)