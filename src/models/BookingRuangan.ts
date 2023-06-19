interface BookingRuangan {
  id: number;
  created_at: Date;
  type: string;
  status: string;
  start_time: Date;
  end_time: Date;
  user_id: number;
  admin_id: number;
  ruangan_id: number;
}

export default BookingRuangan;
