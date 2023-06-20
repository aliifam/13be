import { UserModel, User } from "../models/User.model";
import { BookingKursi, BookingKursiModel } from "../models/BookingKursi.model";
import {
  BookingRuangan,
  BookingRuanganModel,
} from "../models/BookingRuangan.model";
export class UserService {
  private userModel: UserModel;
  private bookingKursiModel: BookingKursiModel;
  private bookingRuanganModel: BookingRuanganModel;

  constructor() {
    this.userModel = new UserModel();
    this.bookingKursiModel = new BookingKursiModel();
    this.bookingRuanganModel = new BookingRuanganModel();
  }

  public async updateUser(userId: number, userData: User): Promise<User> {
    const updatedUser = await this.userModel.updateUser(userId, userData);
    return updatedUser.rows[0];
  }
  public async bookingRuangan(
    bookingRuanganData: BookingRuangan
  ): Promise<BookingRuangan> {
    const newBookingRuangan: BookingRuangan = {
      id_user: bookingRuanganData.id_user,
      id_ruangan: bookingRuanganData.id_ruangan,
      tanggal: bookingRuanganData.tanggal,
      waktu_mulai: bookingRuanganData.waktu_mulai,
      waktu_selesai: bookingRuanganData.waktu_selesai,
    };
    const bookingRuangan = await this.bookingRuanganModel.createBookingRuangan(
      newBookingRuangan
    );
    return bookingRuangan.rows[0];
  }
}
