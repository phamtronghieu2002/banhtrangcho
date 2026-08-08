/**
 * ==============================================================================
 * BẢNG DỮ LIỆU CẤU HÌNH QUÁN & DANH SÁCH MÓN ĂN (DATA OBJECT ARRAY)
 * Bạn có thể dễ dàng chỉnh sửa thông tin quán, thêm/bớt/sửa món ăn tại file này.
 * ==============================================================================
 */

// 1. THÔNG TIN QUÁN & LIÊN HỆ
const STORE_CONFIG = {
    name: "Bánh Tráng Chờ",
    slogan: "Ăn vặt thả ga - Đậm đà chuẩn vị",
    hotline: "0988888888", // Số điện thoại nhận cuộc gọi đặt món (dạng số liền để gọi tel:)
    hotlineDisplay: "0988.888.888", // Số hiển thị đẹp mắt
    address: "123 Đường Ăn Vặt, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    mapUrl: "https://maps.google.com/?q=Quán+Bánh+Tráng+Chờ+Quận+1", // Link xem bản đồ / chỉ đường
    openHours: "09:30 - 22:30 hàng ngày",
    zaloPhone: "0988888888", // Số Zalo đặt hàng / tư vấn
    wifi: {
        ssid: "BanhTrangCho_FreeWifi",
        password: "banhtrangngonlam"
    },
    socialLinks: {
        facebook: "https://facebook.com",
        tiktok: "https://tiktok.com"
    }
};

// 2. DANH MỤC MÓN ĂN (Dùng để hiển thị các nút lọc danh mục)
const MENU_CATEGORIES = [
    { id: "all", name: "Tất Cả Món", icon: "🍽️" },
    { id: "banh-trang", name: "Bánh Tráng Đặc Sản", icon: "🌯" },
    { id: "an-vat", name: "Món Ăn Vặt", icon: "🍟" },
    { id: "do-uong", name: "Trà & Nước Uống", icon: "🧋" },
    { id: "combo", name: "Combo Tiết Kiệm", icon: "🔥" }
];

// 3. DANH SÁCH MÓN ĂN (ARRAY DATA OBJECT - GIÁ DẠNG STRING)
// Bạn có thể ghi giá dạng chuỗi tuỳ ý: "30.000đ", "30k", "25.000 - 35.000đ", "Theo thời giá"...
const MENU_ITEMS = [
    {
        id: 1,
        name: "Bánh Tráng Trộn Đặc Biệt",
        category: "banh-trang",
        price: "30.000đ",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        description: "Bánh tráng dẻo thơm, trứng cút lòng đào, bò khô sợi cay nồng, xoài chua giòn, rau răm và sốt tắc chua ngọt đậm đà.",
        badge: "Bán Chạy Nhất",
        isAvailable: true
    },
    {
        id: 2,
        name: "Bánh Tráng Cuốn Sốt Bơ Trứng Muối",
        category: "banh-trang",
        price: "35.000đ",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        description: "Bánh tráng phơi sương cuốn hành phi, tép khô, chấm cùng sốt bơ béo ngậy kèm bột trứng muối mằn mặn khó cưỡng.",
        badge: "Khuyên Thử",
        isAvailable: true
    },
    {
        id: 3,
        name: "Bánh Tráng Nướng Đà Lạt Thập Cẩm",
        category: "banh-trang",
        price: "25.000đ",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        description: "Bánh tráng nướng giòn rụm trên than hồng, trứng gà, xúc xích, phô mai kéo sợi, hành lá và sốt mayonnaise thơm nức.",
        badge: "Hot",
        isAvailable: true
    },
    {
        id: 4,
        name: "Bánh Tráng Chấm Sốt Me Cay Cay",
        category: "banh-trang",
        price: "20.000đ",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
        description: "Bánh tráng ớt dẻo Tây Ninh chấm ngập bát sốt me cốt dừa chua cay, thêm đậu phộng rang giòn và hành phi thơm lừng.",
        badge: "",
        isAvailable: true
    },
    {
        id: 5,
        name: "Nem Chua Rán Hà Nội Giòn Rụm",
        category: "an-vat",
        price: "45.000đ",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
        description: "Nem chua tẩm bột chiên xù vàng óng, ngoài giòn trong dẻo ngọt thịt, chấm tương ớt cay nồng chuẩn vị phố cổ.",
        badge: "Yêu Thích",
        isAvailable: true
    },
    {
        id: 6,
        name: "Chân Gà Rút Xương Sốt Thái Chua Cay",
        category: "an-vat",
        price: "55.000đ",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        description: "Chân gà giòn sần sật thấm đẫm sốt Thái cay xé lưỡi, quyện cùng xoài non, cóc giòn và lá chanh ngát hương.",
        badge: "Đặc Sản",
        isAvailable: true
    },
    {
        id: 7,
        name: "Khoai Tây Lắc Phô Mai Béo Ngậy",
        category: "an-vat",
        price: "25.000đ",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        description: "Khoai tây cọng chiên vàng giòn rụm, lắc đều cùng bột phô mai mặn ngọt cao cấp thơm lừng.",
        badge: "",
        isAvailable: true
    },
    {
        id: 8,
        name: "Cá Viên Chiên Mắm Tỏi Ớt Đậm Vị",
        category: "an-vat",
        price: "40.000đ",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
        description: "Thập cẩm cá viên, bò viên, tôm viên chiên giòn đảo sốt nước mắm tỏi ớt kẹo dẻo đậm đà kèm đậu bắp.",
        badge: "Hot",
        isAvailable: true
    },
    {
        id: 9,
        name: "Trà Tắc Xí Muội Hạt Chia Mát Lạnh",
        category: "do-uong",
        price: "20.000đ",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
        description: "Vị chua thanh mát lành của tắc tươi, đậm vị xí muội mặn ngọt kết hợp hạt chia giải nhiệt cực đã khi ăn bánh tráng.",
        badge: "Bán Chạy Nhất",
        isAvailable: true
    },
    {
        id: 10,
        name: "Trà Đào Cam Sả Tươi Mát",
        category: "do-uong",
        price: "28.000đ",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
        description: "Trà đen ủ thơm ngát hương cam vàng và sả tươi, kèm 3 miếng đào ngâm giòn ngọt mọng nước.",
        badge: "",
        isAvailable: true
    },
    {
        id: 11,
        name: "Trà Sữa Trân Châu Đường Đen Nhà Làm",
        category: "do-uong",
        price: "30.000đ",
        image: "https://images.unsplash.com/photo-1558857563-b37cf0c897f2?auto=format&fit=crop&w=800&q=80",
        description: "Trà sữa đậm vị trà béo ngậy vị sữa tươi, kèm trân châu đen dẻo dai nấu đường nâu mật mía thơm ngon.",
        badge: "Mới",
        isAvailable: true
    },
    {
        id: 12,
        name: "Combo Hẹn Hò (2 Người)",
        category: "combo",
        price: "79.000đ",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        description: "Gồm: 1 Bánh Tráng Trộn Đặc Biệt + 1 Nem Chua Rán + 2 Ly Trà Tắc Xí Muội mát lạnh (Tiết kiệm 16.000đ).",
        badge: "Tiết Kiệm 20%",
        isAvailable: true
    },
    {
        id: 13,
        name: "Combo Quẩy Bạn Bè (3-4 Người)",
        category: "combo",
        price: "139.000đ",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        description: "Gồm: 1 Bánh Tráng Cuốn + 1 Chân Gà Rút Xương + 1 Khoai Tây Phô Mai + 3 Đồ Uống tự chọn.",
        badge: "Siêu Ưu Đãi",
        isAvailable: true
    }
];
