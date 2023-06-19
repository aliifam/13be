import { Pool, QueryResult } from "pg";

interface BookingKursi {
  id: number;
  created_at: Date;
  status: string;
  start_time: Date;
  end_time: Date;
  user_id: number;
  kursi_id: number;
  ruangan_id: number;
}

export class BookingKursiModel {
  private pool: Pool;

  constructor() {
    this.pool = new Pool();
  }

  public async createBookingKursi(
    bookingKursiData: BookingKursi
  ): Promise<QueryResult> {
    try {
      const query = `INSERT INTO booking_kursi (status, start_time, end_time, user_id, kursi_id, ruangan_id) VALUES ('${bookingKursiData.status}', '${bookingKursiData.start_time}', '${bookingKursiData.end_time}', ${bookingKursiData.user_id}, ${bookingKursiData.kursi_id}, ${bookingKursiData.ruangan_id}) RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAllBookingKursi(): Promise<QueryResult> {
    try {
      const query = "SELECT * FROM booking_kursi";
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getBookingKursiById(
    bookingKursiId: number
  ): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM booking_kursi WHERE id=${bookingKursiId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getBookingKursiByUserId(userId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM booking_kursi WHERE user_id=${userId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateBookingKursiStatus(
    bookingKursiId: number,
    status: string
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE booking_kursi SET status='${status}' WHERE id=${bookingKursiId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async deleteBookingKursi(
    bookingKursiId: number
  ): Promise<QueryResult> {
    try {
      const query = `DELETE FROM booking_kursi WHERE id=${bookingKursiId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
