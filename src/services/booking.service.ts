const bookingRuangan = async (
  user_id: string,
  ruangan_id: string
): Promise<string> => {
  try {
    const query = `INSERT INTO bookings (user_id, ruangan_id) VALUES ('${user_id}', '${ruangan_id}') RETURNING *`;
    const result = await db.query<Booking>(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
