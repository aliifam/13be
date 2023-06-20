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
      user_id: bookingRuanganData.user_id,
      ruangan_id: bookingRuanganData.ruangan_id,
      start_time: bookingRuanganData.start_time,
      end_time: bookingRuanganData.end_time,
      approved: "pending",
      status: "pending",
      admin_id: 0,
    };
    const bookingRuangan = await this.bookingRuanganModel.createBookingRuangan(
      newBookingRuangan
    );
    return bookingRuangan.rows[0];
  }
}
