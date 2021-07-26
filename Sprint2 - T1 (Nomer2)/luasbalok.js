function hitungVolumeDanLuasPermukaanBalok(panjang, lebar, tinggi){
    volume = panjang * lebar * tinggi
    luaspermukaan = 2 * (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi)
    document.write("panjang : " + panjang + "<br/>");
    document.write("lebar : " + lebar + "<br/>");
    document.write("tinggi : " + tinggi + "<br/><br/>");
    document.write("volume : " + volume + "<br/>");
    document.write("luas permukaan : " + luaspermukaan + "<br/>");
}
panjang = prompt("Masukan Nilai Panjangnya");
lebar = prompt("Masukan Nilai Lebarnya");
tinggi = prompt("Masukan Nilai Lebarnya");
hitungVolumeDanLuasPermukaanBalok(panjang, lebar, tinggi)