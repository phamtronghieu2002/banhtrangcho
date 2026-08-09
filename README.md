# 🍽️ Menu Điện Tử QR Quán Ăn (Digital QR Menu)

Trang web thực đơn điện tử chuẩn Mobile-First siêu đẹp, mượt mà dành cho quán ăn / quán bánh tráng / đồ ăn vặt khi khách quét mã QR tại bàn.

---

## ✨ Điểm nổi bật & Tính năng

1. **Chuẩn Mobile-First & Responsive Đa Thiết Bị**:
   - Tối ưu 100% cho màn hình điện thoại di động (iPhone, Android) khi khách quét mã QR.
   - Giao diện dạng thẻ món ăn hiện đại, hình ảnh trực quan, sắc nét.
2. **Nút "Đặt Món / Gọi Ngay"**:
   - Tự động mở số điện thoại cài sẵn (`tel:0988888888`) để khách hàng gọi điện đặt món chỉ bằng 1 chạm.
3. **Bộ Lọc Danh Mục & Tìm Kiếm Tức Thì (Live Search)**:
   - Lọc nhanh theo danh mục (Bánh tráng đặc sản, Đồ ăn vặt, Nước uống, Combo tiết kiệm).
   - Thanh tìm kiếm thông minh (hỗ trợ gõ có dấu hoặc không dấu).
4. **Tiện Ích Cho Khách Hàng Tại Quán**:
   - Thẻ thông tin quán: Địa chỉ, giờ mở cửa, nút mở Google Maps chỉ đường.
   - **Thẻ WiFi 1 Chạm**: Nút sao chép mật khẩu WiFi nhanh chóng kèm thông báo Toast.
   - Nút gọi nhanh cố định (Floating Bar) và nút Chat Zalo.
   - Modal xem chi tiết món ăn (phóng to ảnh, thành phần chi tiết).

---

## 📁 Cấu Trúc Thư Mục

```
banhtrangcho/
├── index.html          # Giao diện chính, tối ưu SEO và kích thước màn hình
├── css/
│   └── style.css       # Toàn bộ CSS phong cách ẩm thực cao cấp, responsive, animations
├── js/
│   ├── data.js         # NƠI BẠN SỬA THÔNG TIN QUÁN VÀ DANH SÁCH MÓN ĂN
│   └── app.js          # Logic hiển thị, lọc danh mục, tìm kiếm, gọi điện thoại
└── README.md           # Hướng dẫn sử dụng
```

---

## 🛠️ Hướng Dẫn Tự Chỉnh Sửa Dữ Liệu (File `js/data.js`)

Tất cả thông tin được lưu dưới dạng **Array Object JavaScript** rất dễ đọc và sửa tại file `js/data.js`.

### 1. Đổi Thông Tin Quán, Ảnh Logo, Video Giới Thiệu & WiFi
Mở file `js/data.js` và chỉnh sửa mục `STORE_CONFIG`:

```javascript
const STORE_CONFIG = {
    name: "Bánh Tráng Chờ Ruộng Cạn",                 // Tên quán của bạn
    
    // 👉 ẢNH LOGO TRÒN Ở ĐẦU TRANG:
    logo: "https://res.cloudinary.com/dzpj1y0ww/image/upload/v1786196597/banhtrangcho/banhtrangcho_tq6y85.jpg",
    
    // 👉 VIDEO GIỚI THIỆU QUÁN (Để file trong folder video/ hoặc điền link):
    video: "video/introduce.mp4",                     // Để trống "" nếu không muốn hiện video
    
    // 👉 ẢNH XE ĐẨY / QUẦY BÁNH TRÁNG THỰC TẾ (Để trống "" nếu không muốn hiện):
    banner: "https://link-anh-xe-day-cua-ban.jpg",
    
    slogan: "Ăn vặt thả ga - Đậm đà chuẩn vị",       // Slogan
    hotline: "0988888888",                           // Số điện thoại để gọi đặt món
    hotlineDisplay: "0988.888.888",                  // Số hiển thị đẹp mắt trên giao diện
    address: "123 Đường Ăn Vặt, Quận 1, TP. HCM",   // Địa chỉ quán
    mapUrl: "https://maps.google.com/?q=...",        // Link Google Maps
    openHours: "09:30 - 22:30 hàng ngày",           // Giờ mở cửa
    zaloPhone: "0988888888",                         // Số Zalo
    wifi: {
        ssid: "BanhTrangCho_FreeWifi",               // Tên WiFi quán
        password: "banhtrangngonlam"                 // Mật khẩu WiFi
    }
};
```

---

### 2. Thêm / Sửa / Xoá Món Ăn Trong Danh Sách (Giá Dạng String)
Chỉnh sửa mảng `MENU_ITEMS` trong `js/data.js`:

```javascript
const MENU_ITEMS = [
    {
        id: 1,                                       // Mã số món (duy nhất)
        name: "Bánh Tráng Trộn Đặc Biệt",            // Tên món ăn
        category: "banh-trang",                      // Danh mục: banh-trang, an-vat, do-uong, combo
        price: "30.000đ",                            // Giá tiền dạng STRING (Ví dụ: "30.000đ", "30k", "25.000 - 35.000đ", "Theo thời giá"...)
        image: "https://url-anh-cua-ban.jpg",        // Link ảnh món ăn
        description: "Bánh tráng dẻo thơm, trứng cút lòng đào, bò khô...", // Mô tả món
        badge: "Bán Chạy Nhất",                      // Huy hiệu: Bán Chạy Nhất, Hot, Mới, Khuyên Thử... (hoặc để trống "")
        isAvailable: true                            // true = còn món, false = tạm hết
    },
    // Thêm món mới bằng cách sao chép khối trên và dán tiếp xuống dưới
];
```

---

## 📱 Cách Tạo Mã QR Để Dán Tại Bàn Quán Ăn

1. Sau khi đưa trang web lên hosting (hoặc GitHub Pages, Vercel, Netlify, v.v.), bạn sẽ có một đường link (ví dụ: `https://tenquan.vercel.app`).
2. Vào các trang tạo QR miễn phí như [me-qr.com](https://me-qr.com) hoặc [qr-code-generator.com](https://www.qr-code-generator.com).
3. Dán link website của quán vào và tải ảnh mã QR về.
4. In mã QR kèm logo quán và dán lên từng bàn ăn để khách vào quán chỉ cần quét là xem được thực đơn ngay!
