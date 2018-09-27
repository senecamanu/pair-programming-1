'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {
        title: 'Meghan Markle Tutup Pintu Mobilnya Sendiri, Seantero Inggris Heboh',
        body: `Menutup pintu mobil merupakan hal yang wajar dilakukan oleh semua orang yang berkendara. Tapi, hal itu menjadi tidak biasa jika dilakukan oleh seorang bangsawan seperti Meghan Markle.

Saat Meghan terekam menutup pintu mobilnya sendiri pada Selasa, 25 September, momen itu sontak jadi perbincangan banyak orang, secara khusus di Inggris. 

Kejadian bermula ketika Meghan sampai di Royal Academy of Arts untuk menghadiri acara individu pertamanya sejak menjadi bagian dari keluarga kerajaan.Meghan tampak santai melangkah keluar dari mobilnya.Ia kemudian menutup pintu mobilnya sendiri tanpa ragu-ragu. 

Beberapa warganet yang melihat kejadian itu memuji sikap rendah hati dan "membuminya" sikap sang putri.Sementara ada pula yang bercanda tingkah Meghan mungkin membuat seseorang kehilangan pekerjaannya.

Walaupun tingkah Meghan yang menutup pintu mobilnya sendiri bukan lah suatu pelanggaran protokol kerajaan, William Hanson, seorang pakar etiket berkata tindakan para pengawal yang membuka dan menutup pintu mobil anggota kerajaan semata demi keamanan mereka.

Dilansir dari Radio 1 Newsbeat, William Hanson berkata "Biasanya, jika Anda adalah anggota kerjaan atau bangsawan, Anda memiliki anggota staf untuk membuka dan menutup pintu mobil Anda."

"Alasannya untuk keamanan," tambah William.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Suka Pamer Kemewahan, 3 Fakta Keluarga Syahrini Ini Pasti Bikin Kamu Kaget',
        body: `Kabar meninggalnya Ridwan Zaelani, kakak kandung dari Syahrini ini tentu membuat orang lain kaget. Beberapa warganet bahkan terang-terangan mengatakan bahwa ia baru tahu jika Syahrini memiliki saudara kandung lain selain adik sekaligus manajernya, Aisyahrani. Karena kabar tersebut pula, banyak fakta terungkap dari kehidupan Syahrini selain kemewahan yang sering ditunjukkannya di Instagram. Apa saja?

1. Syahrini merupakan anak dari seorang pengusaha tambang bernama Haji Dadang Zaelani. Banyak yang belum tahu bahwa Dadang adalah pemilik usaha tambang pasir di sebuah gunung di daerah Bogor, Jawa Barat.

2. Selain pengusaha, ayah Syahrini juga merupakan anak dari seorang kiai yang sukses dan dermawan

3. Selain Aisyahrani, ternyata Syahrini juga memiliki kakak laki-laki bernama Ridwan Zaelani. Ridwan memang jarang terekspos lantaran kesibukannya mengurus perusahaan tambang peninggalan sang ayah`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', [], {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
