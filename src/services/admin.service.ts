import { AdminModel, Admin } from "../models/Admin.model";
import { UserModel, User } from "../models/User.model";
import { Ruangan, RuanganModel } from "../models/Ruangan.model";
import { Kursi, KursiModel } from "../models/Kursi.model";
import {
  BookingRuanganModel,
  BookingRuangan,
} from "../models/BookingRuangan.model";

export class AdminService {
  private adminModel: AdminModel;
  private userModel: UserModel;
  private ruanganModel: RuanganModel;
  private kursiModel: KursiModel;
  private bookingRuanganModel: BookingRuanganModel;

  constructor() {
    this.adminModel = new AdminModel();
    this.userModel = new UserModel();
    this.ruanganModel = new RuanganModel();
    this.kursiModel = new KursiModel();
    this.bookingRuanganModel = new BookingRuanganModel();
  }

  public async createAdmin(adminData: Admin): Promise<Admin> {
    const newAdmin: Admin = {
      name: adminData.name,
      email: adminData.email,
      password: adminData.password,
      avatar: adminData.avatar,
      role: adminData.role,
    };
    const admin = await this.adminModel.createAdmin(newAdmin);
    return admin.rows[0];
  }

  public async createUser(userData: User): Promise<User> {
    const newUser: User = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      avatar: userData.avatar,
      role: userData.role,
    };
    const user = await this.userModel.createUser(newUser);
    return user.rows[0];
  }

  public async updateUser(userId: number, userData: User): Promise<User> {
    const updatedUser = await this.userModel.updateUser(userId, userData);
    return updatedUser.rows[0];
  }

  public async deleteUser(userId: number): Promise<User> {
    const deletedUser = await this.userModel.deleteUser(userId);
    return deletedUser.rows[0];
  }

  public async getUsers(): Promise<User[]> {
    const users = await this.userModel.getUsers();
    return users.rows;
  }

  public async createRuangan(ruanganData: Ruangan): Promise<Ruangan> {
    const newRuangan: Ruangan = {
      name: ruanganData.name,
      description: ruanganData.description,
      images: ruanganData.images,
    };
    const ruangan = await this.ruanganModel.createRuangan(newRuangan);
    return ruangan.rows[0];
  }

  public async updateRuangan(
    ruanganId: number,
    ruanganData: Ruangan
  ): Promise<Ruangan> {
    const updatedRuangan = await this.ruanganModel.updateRuangan(
      ruanganId,
      ruanganData
    );
    return updatedRuangan.rows[0];
  }

  public async deleteRuangan(ruanganId: number): Promise<Ruangan> {
    const deletedRuangan = await this.ruanganModel.deleteRuangan(ruanganId);
    return deletedRuangan.rows[0];
  }

  public async approveBookingRuangan(
    adminId: number,
    ruanganId: number,
    approved: string
  ): Promise<BookingRuangan> {
    const approvedBookingRuangan =
      await this.bookingRuanganModel.updateBookingRuanganApproval(
        adminId,
        ruanganId,
        approved
      );
    return approvedBookingRuangan.rows[0];
  }

  public async createKursi(kursiData: Kursi): Promise<Kursi> {
    const newKursi: Kursi = {
      name: kursiData.name,
      ruangan_id: kursiData.ruangan_id,
      description: kursiData.description,
    };
    const kursi = await this.kursiModel.createKursi(newKursi);
    return kursi.rows[0];
  }
}
