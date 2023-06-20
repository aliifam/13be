import multer from "multer";

const storage = multer.diskStorage({
  destination: (
    req: any,
    file: any,
    cb: (arg0: null, arg1: string) => void
  ) => {
    cb(null, "uploads/"); // Specify the destination folder for uploaded files
  },
  filename: (
    req: any,
    file: { fieldname: any },
    cb: (arg0: null, arg1: string) => void
  ) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`); // Set the filename for uploaded files
  },
});

export const upload = multer({ storage });
