interface Admin {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  avatar: string;
  role: string;
}

export default Admin;