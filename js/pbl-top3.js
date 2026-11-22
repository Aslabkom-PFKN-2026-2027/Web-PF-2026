/* ================================================================
   pbl-top3.js — Konfigurasi Top 3 PBL Pemrograman Fisika 2026/2027
   ================================================================
   Cara memajang foto pemenang saat Top 3 sudah diumumkan:
   1. Simpan foto pemenang ke folder assets/images/
      (contoh: pbl-juara-1.jpg, pbl-juara-2.jpg, pbl-juara-3.jpg)
   2. Ubah `revealed: false` menjadi `revealed: true`
   3. Isi `photo`, `team`, `project`, dan (opsional) `members`
   ================================================================ */
window.PBL_TOP3_CONFIG = {
  revealed: false,
  statusText: 'Menunggu Pengumuman Pemenang',
  revealedStatusText: 'Pemenang Top 3 PBL Resmi Diumumkan',
  winners: {
    1: {
      photo: '',
      team: '',
      project: '',
      members: '',
    },
    2: {
      photo: '',
      team: '',
      project: '',
      members: '',
    },
    3: {
      photo: '',
      team: '',
      project: '',
      members: '',
    },
  },
};
