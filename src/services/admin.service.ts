import db from "../config/db";
import Admin from "../models/Admin";
import Kursi from "../models/Kursi";
import Ruangan from "../models/Ruangan";
import User from "../models/User";

const login = async (email: string, password: string): Promise<string> => {
    
    try {
        const query = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
        const result = await db.query<Admin>(query);
        if (result.rowCount === 0) {
        throw new Error("Invalid email or password");
        }
        return result.rows[0];
    } catch (error) {
        throw new Error(error);
    }
}

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
    throw new Error(error.);
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

const createRuangan = async (
  name: string,
  description: string,
    capacity: number,
    image: string

): Promise<Ruangan> => {
  // Implement the logic to create a new ruangan (CRUD operation)
};

const getRuangan = async (): Promise<Ruangan[]> => {
  // Implement the logic to get all ruangan (CRUD operation)
};

const updateRuangan = async (
  ruanganId: number,
  name: string,
  capacity: number
): Promise<Ruangan | null> => {
  // Implement the logic to update a ruangan (CRUD operation)
};

const deleteRuangan = async (ruanganId: number): Promise<Ruangan | null> => {
  // Implement the logic to delete a ruangan (CRUD operation)
};

const createKursi = async (
  ruanganId: number,
  totalKursi: number
): Promise<Kursi[]> => {
  // Implement the logic to create multiple kursi for a ruangan (CRUD operation)
};

const getKursi = async (): Promise<Kursi[]> => {
  // Implement the logic to get all kursi (CRUD operation)
};

const updateKursi = async (
  kursiId: number,
  ruanganId: number
): Promise<Kursi | null> => {
  // Implement the logic to update a kursi (CRUD operation)
};

const deleteKursi = async (kursiId: number): Promise<Kursi | null> => {
  // Implement the logic to delete a kursi (CRUD operation)
};

export default {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  createRuangan,
  getRuangan,
  updateRuangan,
  deleteRuangan,
  createKursi,
  getKursi,
  updateKursi,
  deleteKursi,
};
