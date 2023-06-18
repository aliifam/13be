interface Booking {
  id: number;
  id_ruangan: number;
  id_user: number;
  id_kursi: number;
  tanggal: string;
  waktu_mulai: string;
  waktu_selesai: string;
  keperluan: string;
  status: string;
}

export default Booking;
