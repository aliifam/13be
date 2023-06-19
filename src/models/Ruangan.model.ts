import { Pool, QueryResult } from "pg";

export interface Ruangan {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  images: string;
}

export class RuanganModel {
  private pool: Pool;

  constructor() {
    this.pool = new Pool();
  }

  public async createRuangan(ruanganData: Ruangan): Promise<QueryResult> {
    try {
      const query = `INSERT INTO ruangan (name, description, images) VALUES ('${ruanganData.name}', '${ruanganData.description}', '${ruanganData.images}') RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAllRuangan(): Promise<QueryResult> {
    try {
      const query = "SELECT * FROM ruangan";
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getRuanganById(ruanganId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM ruangan WHERE id=${ruanganId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateRuangan(
    ruanganId: number,
    ruanganData: Ruangan
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE ruangan SET name='${ruanganData.name}', description='${ruanganData.description}' WHERE id=${ruanganId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async deleteRuangan(ruanganId: number): Promise<QueryResult> {
    try {
      const query = `DELETE FROM ruangan WHERE id=${ruanganId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}