import db from "../config/db";
import User from "../models/User.model";

const createUser = async (
    name: string,
    email: string,
    password: string,
    avatar: string
  ): Promise<User> => {
    try {
      const query = `INSERT INTO users (name, email, password, avatar, role) VALUES ('${name}', '${email}', '${password}', '${avatar}', 'user') RETURNING *`;
      const result = await db.query<User>(query);
      return result.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getUsers = async (): Promise<User[]> => {
    try {
      const query = "SELECT * FROM users";
      const result = await db.query<User>(query);
      return result.rows;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updateUser = async (
    userId: number,
    name: string,
    email: string,
    password: string
  ): Promise<User | null> => {
    try {
      const query = `UPDATE users SET name='${name}', email='${email}', password='${password}' WHERE id=${userId} RETURNING *`;
      const result = await db.query<User>(query);
      return result.rows[0];
    }
  };
  
const deleteUser = async (userId: number): Promise<User | null> => {
    try {
        const query = `DELETE FROM users WHERE id=${userId} RETURNING *`;
        const result = await db.query<User>(query);
        return result.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};



