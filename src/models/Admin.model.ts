import { Pool, QueryResult } from "pg";
import { pool } from "../config/db";

export interface Admin {
  name: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
}

export class AdminModel {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  public async createAdmin(adminData: Admin): Promise<QueryResult> {
    try {
      const query = `INSERT INTO admins (name, email, password, avatar, role) VALUES ('${adminData.name}', '${adminData.email}', '${adminData.password}', '${adminData.avatar}', 'admin') RETURNING *`;
      const values = [
        adminData.name,
        adminData.email,
        adminData.password,
        adminData.avatar,
      ];
      return this.pool.query(query, values);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAdmins(): Promise<QueryResult> {
    try {
      const query = "SELECT * FROM admins";
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAdminById(adminId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM admins WHERE id=${adminId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateAdmin(
    adminId: number,
    adminData: Admin
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE admins SET name='${adminData.name}', email='${adminData.email}', password='${adminData.password}' WHERE id=${adminId} RETURNING *`;
      const values = [adminData.name, adminData.email, adminData.password];
      return this.pool.query(query, values);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async deleteAdmin(adminId: number): Promise<QueryResult> {
    try {
      const query = `DELETE FROM admins WHERE id=${adminId} RETURNING *`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getAdminByEmail(adminEmail: string): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM admins WHERE email='${adminEmail}'`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
