import { Pool, QueryResult } from "pg";

export interface BookingRuangan {
  // id: number;
  // created_at: Date;
  type: string;
  status: string;
  approved: boolean;
  start_time: Date;
  end_time: Date;
  user_id: number;
  admin_id: number;
  ruangan_id: number;
}

export class BookingRuanganModel {
  private pool: Pool;

  constructor() {
    this.pool = new Pool();
  }

  public async createBookingRuangan(
    bookingRuanganData: BookingRuangan
  ): Promise<QueryResult> {
    try {
      const query = `INSERT INTO booking_ruangan (type, status, start_time, end_time, user_id, admin_id, ruangan_id) VALUES ('${bookingRuanganData.type}', '${bookingRuanganData.status}', '${bookingRuanganData.start_time}', '${bookingRuanganData.end_time}', ${bookingRuanganData.user_id}, ${bookingRuanganData.admin_id}, ${bookingRuanganData.ruangan_id}) RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAllBookingRuangan(): Promise<QueryResult> {
    try {
      const query = "SELECT * FROM booking_ruangan";
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getBookingRuanganById(
    bookingRuanganId: number
  ): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM booking_ruangan WHERE id=${bookingRuanganId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getBookingRuanganByUserId(userId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM booking_ruangan WHERE user_id=${userId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getBookingRuanganByAdminId(
    adminId: number
  ): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM booking_ruangan WHERE admin_id=${adminId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getBookingRuanganByRuanganId(
    ruanganId: number
  ): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM booking_ruangan WHERE ruangan_id=${ruanganId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateBookingRuanganApproval(
    adminId: number,
    bookingRuanganId: number,
    approved: string
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE booking_ruangan SET approved='${approved}', admin_id=${adminId} WHERE id=${bookingRuanganId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateBookingRuanganStatus(
    bookingRuanganId: number,
    status: string
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE booking_ruangan SET status='${status}' WHERE id=${bookingRuanganId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async deleteBookingRuangan(
    bookingRuanganId: number
  ): Promise<QueryResult> {
    try {
      const query = `DELETE FROM booking_ruangan WHERE id=${bookingRuanganId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
