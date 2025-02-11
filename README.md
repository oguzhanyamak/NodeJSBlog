# 📝 Node.js Blog Uygulaması

Bu proje, **Node.js, Express.js ve MongoDB** kullanılarak oluşturulmuş basit bir blog uygulamasıdır.  
Kullanıcılar blog gönderilerini oluşturabilir, düzenleyebilir, silebilir ve arama yapabilirler.  
Ayrıca bir **admin paneli** ile yetkilendirme işlemleri de mevcuttur.

## 📌 Özellikler
✅ **Blog Yönetimi**: Blog gönderileri ekleyebilir, düzenleyebilir ve silebilirsiniz.  
✅ **Kimlik Doğrulama**: JWT tabanlı kimlik doğrulama ile giriş yapabilirsiniz.  
✅ **Sayfalama**: Blog yazıları sayfa sayfa gösterilir.  
✅ **Arama İşlevi**: Kullanıcılar blog içeriğinde arama yapabilir.  
✅ **Admin Paneli**: Sadece yetkili kullanıcıların erişebileceği bir panel içerir.  
✅ **Şifre Hashleme**: Kullanıcı şifreleri güvenli bir şekilde hashlenerek saklanır.  

---

## 🚀 Kurulum & Çalıştırma

### 1️⃣ **Gereksinimler**
Bu projeyi çalıştırabilmek için aşağıdaki araçların bilgisayarınızda kurulu olması gerekir:

- [Node.js](https://nodejs.org/) (v14 veya üstü)
- [MongoDB](https://www.mongodb.com/) (Yerel veya bulut tabanlı Atlas)

### 2️⃣ **Projeyi Klonlayın**
Öncelikle terminal veya komut istemcisinde aşağıdaki komutu çalıştırarak projeyi klonlayın:

```bash
git clone https://github.com/oguzhanyamak/NodeJSBlog.git
cd nodejs-blog
```

### 3️⃣ **Bağımlılıkları Yükleyin**
Proje dizininde aşağıdaki komutu çalıştırarak bağımlılıkları yükleyin:

```bash
npm install
```

### 4️⃣ **Çevresel Değişkenleri Ayarlayın**
Proje kök dizininde **`.env`** adlı bir dosya oluşturun ve aşağıdaki bilgileri girin:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blogDB
SESSION_SECRET=mysecretkey
JWT_SECRET=myjwtsecret
```

> **Not:** `MONGODB_URI` değerini kendi MongoDB bağlantı adresinize göre güncelleyin.

### 5️⃣ **Veritabanını Başlatın**
MongoDB servisini başlatın:

```bash
mongod
```

> Eğer **MongoDB Atlas** kullanıyorsanız `.env` dosyanızdaki `MONGODB_URI` değerini **Atlas bağlantı stringiyle** değiştirin.

### 6️⃣ **Sunucuyu Çalıştırın**
Şimdi aşağıdaki komut ile uygulamayı başlatabilirsiniz:

```bash
npm start
```
veya geliştirme ortamında çalıştırmak için:

```bash
npm run dev
```

> **Sunucu Başlatıldığında**:  
> Terminalde şu mesajı görmelisiniz:  
> `App Listening on : 5000`

---

## 🛠️ **Proje Yapısı**
```bash
📂 nodejs-blog
├── 📂 public            # Statik dosyalar (CSS, JS, görseller)
├── 📂 server
│   ├── 📂 config        # Veritabanı bağlantı dosyası (db.js)
│   ├── 📂 models        # Mongoose modelleri (User.js, Post.js)
│   ├── 📂 routes        # Uygulama rotaları (main.js, admin.js)
│   ├── 📂 views         # EJS sayfaları
│   └── 📂 layouts       # Sayfa şablonları (admin.ejs, main.ejs)
├── .env                 # Çevresel değişkenler
├── app.js               # Ana uygulama dosyası
├── package.json         # Bağımlılıkları içeren dosya
└── README.md            # Proje açıklaması
```

---

## 🛠 **Kullanılan Teknolojiler**
Bu projede aşağıdaki teknolojiler kullanılmıştır:

| Teknoloji | Açıklama |
|-----------|---------|
| **Node.js** | JavaScript çalıştırma ortamı |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL veritabanı |
| **Mongoose** | MongoDB ORM |
| **JWT (jsonwebtoken)** | Kullanıcı kimlik doğrulama |
| **Bcrypt.js** | Şifre hashleme |
| **EJS** | HTML şablon motoru |
| **Express Session** | Kullanıcı oturumları |
| **Method-Override** | PUT ve DELETE işlemleri için |

---

## 📌 **Rotalar (API Endpoints)**

| Metot | Rota | Açıklama | Yetkilendirme |
|--------|----------------|---------------------------------|--------------|
| **GET** | `/` | Ana sayfa (blog yazıları listelenir) | ❌ |
| **GET** | `/about` | Hakkında sayfası | ❌ |
| **GET** | `/post/:id` | Belirli bir blog yazısını görüntüleme | ❌ |
| **POST** | `/search` | Blog gönderileri içinde arama yapar | ❌ |
| **GET** | `/admin` | Admin giriş sayfası | ❌ |
| **POST** | `/admin` | Admin giriş işlemi | ❌ |
| **POST** | `/register` | Yeni kullanıcı kaydı oluşturur | ❌ |
| **GET** | `/dashboard` | Yönetici paneli | ✅ |
| **GET** | `/add-post` | Yeni blog gönderisi ekleme sayfası | ✅ |
| **POST** | `/add-post` | Yeni blog gönderisi ekler | ✅ |
| **GET** | `/edit-post/:id` | Mevcut gönderiyi düzenleme sayfası | ✅ |
| **PUT** | `/edit-post/:id` | Mevcut gönderiyi günceller | ✅ |
| **DELETE** | `/delete-post/:id` | Belirli bir gönderiyi siler | ✅ |
| **GET** | `/logout` | Kullanıcı çıkış yapar | ✅ |

> ✅ **Yetkilendirme Gerektirir**  
> ❌ **Yetkilendirme Gerekmez**
