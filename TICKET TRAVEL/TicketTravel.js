// Deklarasi
var array = []
var arrayOrder = []

//object pattern
var Penumpang = (function(){

    const prompt = require ('prompt-sync')()
    
    // coonstructor penumpang
    function Penumpang(nama, alamat,noHP, noKTP){
        this.nama = nama
        this.alamat = alamat
        this.noHP = noHP
        this.noKTP = noKTP
    }
    //function menambahkan data penumpang
    function tambahPenumpang(){
        console.log("Tambah Penumpang")
            let nama = prompt("Input Nama\t: ")
            let alamat = prompt("Input Alamat\t: ")
            let noHP = prompt("Input NoHP\t: ")
            let noKTP = prompt("Input NoKTP\t: ")
            
        //memasukan object kedalam array
        let penumpang = new Penumpang(nama,alamat, noHP,noKTP)
        array.push(penumpang)
    }

    // function untuk menu order travel
    function order(){
        // tabel menu tujuan
        console.log(" ============================== ")
        console.log("| Pemesanan Gajah Mada Travel  |")
        console.log(" ==============================")
        console.log("|   Tujuan      |    Harga     |")
        console.log("|1. Purworejo   |   Rp.50.000  |")
        console.log("|2. Semarang    |   Rp.80.000  |")
        console.log("|3. Blora       |   Rp.100.000 |")
        console.log("|4. Solo        |   Rp.65.000  |")
        console.log("|5. Surabaya    |   Rp.130.000 |")
        console.log("|6. Sidoarjo    |   Rp.135.000 |")
        console.log("|7. Malang      |   Rp.120.000 |")
        console.log(" ============================== ")
        
        //input tujuan
        var tujuan = prompt("Input tujuan\t : ")
            //menampilkan data sementara
            console.log("\n Data Penumpang")
            for (let i = 0; i < array.length; i++){
              console.log(`Id Penumpang\t : ${(i + 1)}`)
              console.log(`Nama\t\t : ${array[i].nama}`)
              console.log("")
            }
            // Pemesanan banyaknya tiket travel yang dipesan
            idPenumpang = prompt("Input ID Penumpang\t:  ")
            jmlPenumpang = prompt("Input Banyak Penumpang\t:  ")
              // bentuk percabangan
            if (tujuan == 1){
                total1 = jmlPenumpang*50000
                console.log('Total Pembayaran\t: ', total1)
            }else if (tujuan == 2){
                total1 = jmlPenumpang*80000
                console.log('Total Pembayaran\t: ', total1)
            }else if (tujuan == 3){
                total1 = jmlPenumpang*100000
                console.log ('Total Pembayaran\t: ', total1)
            }else if (tujuan == 4){
                total1 = jmlPenumpang*65000
                console.log ('Total Pembayaran\t: ', total1)
            }else if (tujuan == 5){
                total1 = jmlPenumpang*130000
                console.log ('Total Pembayaran\t: ', total1)
            }else if (tujuan == 6){
                total1 = jmlPenumpang*135000
                console.log ('Total Pembayaran\t: ', total1)
            }else if (tujuan == 7){
                total1 = jmlPenumpang*120000
                console.log ('Total Pembayaran\t: ', total1)
            }else {
                console.log('Masukan Inputan Yang Benar')
            }
            //memasukan atribut ke array 
            var arrayOrderData = {
              idPenumpang: idPenumpang,
              jmlPenumpang: jmlPenumpang,
              tujuan : tujuan,
              total1 : total1,
            }

            var indexData = idPenumpang - 1;
            // arrayOrder[indexData].tujuan = tujuan
            // arrayOrder[indexData].total1 = total1
            arrayOrder.push(arrayOrderData)
    }

    function cetakData(){
        var arrTujuan = ['Purworejo', 'Semarang', 'Blora', 'Solo', 'Surabaya', 'Sidoarjo', 'Malang']

        // let index = 1
        for (let i = 0; i < array.length; i++){
        console.log("\nPenumpang ke - " + (i + 1))
        // index++
        console.log(`Nama\t: ${array[i].nama}`)
        console.log(`Tujuan\t: ` + arrTujuan[arrayOrder[i].tujuan - 1])
        console.log(`Total\t: ${arrayOrder[i].total1}`)
        }
       
    }

    var menu = true
    while(menu){
        console.log(' ======== Menu ======== ')
        console.log('|1. Tambah Penumpang   |')
        console.log('|2. Order              |')
        console.log('|3. Cetak              |')
        console.log('|4. Keluar             |')
        console.log(' ====================== ')

        var pilihMenu = prompt('Pilih Menu : ')
        switch(pilihMenu){
            case'1' : 
            pilihMenu = tambahPenumpang()
            break

            case'2' :
            pilihMenu  = order()
            break

            case'3':
            pilihMenu = cetakData()
            break

            case'4' :
            menu = false

            default :
            console.log('TERIMAKASIH TELAH MEMESAN GAJAH MADA TRAVEL')

        }
    }
}())