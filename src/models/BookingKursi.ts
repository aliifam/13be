interface BookingKursi {
  id: number;
  created_at: Date;
  type: string;
  status: string;
  start_time: Date;
  end_time: Date;
  user_id: number;
  kursi_id: number;
  ruangan_id: number;
}

export default BookingKursi;
