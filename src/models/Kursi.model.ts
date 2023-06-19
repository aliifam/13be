import { Pool, QueryResult } from "pg";

export interface Kursi {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  ruangan_id: number;
}

export class KursiModel {
  private pool: Pool;

  constructor() {
    this.pool = new Pool();
  }

  public async createKursi(kursiData: Kursi): Promise<QueryResult> {
    try {
      const query = `INSERT INTO kursi (name, description, ruangan_id) VALUES ('${kursiData.name}', '${kursiData.description}', ${kursiData.ruangan_id}) RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAllKursi(): Promise<QueryResult> {
    try {
      const query = "SELECT * FROM kursi";
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAllKursiByRuanganId(ruanganId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM kursi WHERE ruangan_id=${ruanganId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getKursiById(kursiId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM kursi WHERE id=${kursiId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateKursi(
    kursiId: number,
    kursiData: Kursi
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE kursi SET name='${kursiData.name}', description='${kursiData.description}' WHERE id=${kursiId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async deleteKursi(kursiId: number): Promise<QueryResult> {
    try {
      const query = `DELETE FROM kursi WHERE id=${kursiId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
