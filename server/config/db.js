const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // Mongoose'un strictQuery özelliğini devre dışı bırakıyoruz (bazı sorgu hatalarını engeller)
    // Mongoose 7+ sürümünde bazı eski sorguların hataya sebep olmasını önlemek için bu ayar kullanılır.
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

// connectDB fonksiyonunu dışa aktarıyoruz, böylece diğer dosyalarda kullanılabilir
module.exports = connectDB;