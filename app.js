require("dotenv").config();
const expressLayout = require("express-ejs-layouts");
const express = require("express");
// HTTP metodlarını (PUT, DELETE vs.) kullanabilmek için method-override modülünü dahil ediyoruz
const methodOverride = require("method-override");
const connectDB = require("./server/config/db");
// Çerezleri (cookies) okumak ve yönetmek için cookie-parser modülünü dahil ediyoruz
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
// Express.js'in session yönetimi için express-session modülünü dahil ediyoruz
const session = require("express-session");

const app = express();
// Sunucu portunu belirliyoruz (Öncelikle .env dosyasındaki PORT değeri, yoksa 5000 kullanılır)
const PORT = 5000 || process.env.PORT;

connectDB();

// Public klasörünü statik dosya olarak ayarlıyoruz (CSS, JS, img gibi dosyalar buradan servis edilir)
app.use(express.static("public"));
// Formlardan gelen verileri işleyebilmek için urlencoded middleware'ini kullanıyoruz
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Çerezleri işleyebilmek için cookie-parser kullanıyoruz
app.use(cookieParser());
// HTTP metotlarını (PUT, DELETE gibi) tarayıcıdan gönderebilmek için method-override kullanıyoruz
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Ana rotaları (sayfaları) tanımlıyoruz
app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
  console.log(`App Listening on : ${PORT}`);
});
