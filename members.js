
// members.js
const members = [
    { id: 1, nim: '12345', nama: 'Nama Anggota 1', nomor_telp: '123456789' },
    { id: 2, nim: '67890', nama: 'Nama Anggota 2', nomor_telp: '987654321' },
    // Add more members as needed
  ];
  
  function getMembers() {
    return members;
  }
  
  module.exports = {
    getMembers,
  };
  
  