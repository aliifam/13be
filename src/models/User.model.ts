import { Pool, QueryResult } from "pg";
import { pool } from "../config/db";

export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
}

export class UserModel {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  public async createUser(userData: User): Promise<QueryResult> {
    try {
      const query = `INSERT INTO users (name, email, password, avatar, role) VALUES ('${userData.name}', '${userData.email}', '${userData.password}', '${userData.avatar}', 'user') RETURNING *`;
      const values = [
        userData.name,
        userData.email,
        userData.password,
        userData.avatar,
      ];
      return this.pool.query(query, values);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getUsers(): Promise<QueryResult> {
    try {
      const query = "SELECT * FROM users";
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getUserById(userId: number): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM users WHERE id=${userId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async updateUser(
    userId: number,
    userData: User
  ): Promise<QueryResult> {
    try {
      const query = `UPDATE users SET name='${userData.name}', email='${userData.email}', password='${userData.password}' WHERE id=${userId} RETURNING *`;
      const values = [userData.name, userData.email, userData.password];
      return this.pool.query(query, values);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async deleteUser(userId: number): Promise<QueryResult> {
    try {
      const query = `DELETE FROM users WHERE id=${userId}`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  public async getUserByEmail(email: string): Promise<QueryResult> {
    try {
      const query = `SELECT * FROM users WHERE email='${email}'`;
      return this.pool.query(query);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
