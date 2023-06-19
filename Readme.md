# Backend Project 13

backend for project 13

- express
- postgres sql
- jsonwebtoken
- cloudinary integration

## MCS (model, controller, service) pattern

Database -> Model -> Service -> Controller -> Route

## project structure

```
📦src
 ┣ 📂config
 ┃ ┗ 📜db.ts
 ┣ 📂controllers
 ┃ ┣ 📜admin.controller.ts
 ┃ ┣ 📜auth.controller.ts
 ┃ ┣ 📜booking.controller.ts
 ┃ ┣ 📜kursi.controller.ts
 ┃ ┣ 📜ruangan.controller.ts
 ┃ ┗ 📜user.controller.ts
 ┣ 📂middlewares
 ┃ ┣ 📜auth.middleware.ts
 ┃ ┗ 📜error.middleware.ts
 ┣ 📂models
 ┃ ┣ 📜Admin.model.ts
 ┃ ┣ 📜BookingKursi.model.ts
 ┃ ┣ 📜BookingRuangan.model.ts
 ┃ ┣ 📜Kursi.model.ts
 ┃ ┣ 📜Ruangan.model.ts
 ┃ ┗ 📜User.model.ts
 ┣ 📂routes
 ┃ ┣ 📜admin.routes.ts
 ┃ ┣ 📜auth.routes.ts
 ┃ ┣ 📜booking.routes.ts
 ┃ ┣ 📜kursi.routes.ts
 ┃ ┗ 📜ruangan.routes.ts
 ┣ 📂services
 ┃ ┣ 📜admin.service.ts
 ┃ ┣ 📜auth.service.ts
 ┃ ┣ 📜booking.service.ts
 ┃ ┣ 📜kursi.service.ts
 ┃ ┣ 📜ruangan.service.ts
 ┃ ┗ 📜user.service.ts
 ┣ 📂utils
 ┃ ┣ 📜cloudinary.utils.ts
 ┃ ┣ 📜jwt.utils.ts
 ┃ ┗ 📜multer.utils.ts
 ┗ 📜app.ts
```
