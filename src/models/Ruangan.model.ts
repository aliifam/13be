import { Pool, QueryResult } from "pg";
import { pool } from "../config/db";

export interface Ruangan {
  name: string;
  description: string;
  images: string;
}

export class RuanganModel {
  private pool: Pool;

  constructor() {
    this.pool = pool;
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
