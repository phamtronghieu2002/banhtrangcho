/**
 * ==============================================================================
 * BẢNG DỮ LIỆU CẤU HÌNH QUÁN & DANH SÁCH MÓN ĂN (DATA OBJECT ARRAY)
 * Bạn có thể dễ dàng chỉnh sửa thông tin quán, thêm/bớt/sửa món ăn tại file này.
 * ==============================================================================
 */

// 1. THÔNG TIN QUÁN & LIÊN HỆ
const STORE_CONFIG = {
    name: "Bánh Tráng Chờ Ruộng Cạn",
    logo: "https://res.cloudinary.com/dzpj1y0ww/image/upload/v1786196597/banhtrangcho/banhtrangcho_tq6y85.jpg", // Ảnh Logo tròn

    // 👉 ẢNH XE ĐẨY / QUẦY HÀNG CỦA QUÁN (Dán link ảnh xe đẩy của bạn vào đây):
    banner: "https://res.cloudinary.com/dzpj1y0ww/image/upload/v1786265727/banhtrangcho/banner_qhu246.jpg",

    slogan: "Ăn vặt thả ga - Đậm đà chuẩn vị",
    hotline: "0399069063", // Số điện thoại nhận cuộc gọi đặt món (dạng số liền để gọi tel:)
    hotlineDisplay: "0399.069.063", // Số hiển thị đẹp mắt
    address: "Ruộng cạn tân hoà",
    mapUrl: "https://maps.google.com/?q=Quán+Bánh+Tráng+Chờ+Quận+1", // Link xem bản đồ / chỉ đường
    openHours: "09:30 - 22:30 hàng ngày",
    zaloPhone: "0399069063", // Số Zalo đặt hàng / tư vấn
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
    { id: "banh-trang", name: "Bánh Tráng", icon: "🌯" },
    { id: "an-vat", name: "Ăn Vặt & Chiên Xào", icon: "🍟" },
    { id: "do-uong", name: "Nước Giải Khát", icon: "🧋" }
];

// 3. DANH SÁCH MÓN ĂN (HÌNH ẢNH CHUẨN XÁC 100% TỪNG MÓN ĂN)
const MENU_ITEMS = [
    {
        id: 1,
        name: "Bánh Tráng Trộn",
        category: "banh-trang",
        price: "15k - 20k",
        image: "images/banh_trang_tron.png",
        description: "Bánh tráng dẻo thơm, trứng cút, khô bò cay nồng, xoài chua giòn, rau răm và sốt tắc chua ngọt đậm đà chuẩn vị.",
        badge: "Bán Chạy Nhất",
        isAvailable: true
    },
    {
        id: 2,
        name: "Bánh Tráng Trộn Mỡ Hành",
        category: "banh-trang",
        price: "15k - 20k",
        image: "images/banh_trang_mo_hanh.png",
        description: "Bánh tráng phơi sương thấm đẫm mỡ hành phi thơm lừng, béo ngậy kèm tép khô, đậu phộng rang và muối tôm Tây Ninh.",
        badge: "Khuyên Thử",
        isAvailable: true
    },
    {
        id: 3,
        name: "Bánh Tráng Nướng",
        category: "banh-trang",
        price: "15k",
        image: "images/banh_trang_nuong.png",
        description: "Bánh tráng nướng than hồng giòn rụm, trứng gà, xúc xích, phô mai, tép sấy, hành hoa và tương ớt thơm nức mũi.",
        badge: "Hot",
        isAvailable: true
    },
    {
        id: 4,
        name: "Bánh Tráng Cuộn",
        category: "banh-trang",
        price: "20k",
        image: "images/banh_trang_cuon.png",
        description: "Bánh tráng cuốn hành phi giòn tan, trứng cút, khô bò chấm ngập sốt bơ béo ngậy kèm sốt me chua cay cực dính.",
        badge: "Yêu Thích",
        isAvailable: true
    },
    {
        id: 5,
        name: "Cá Viên Sốt Mắm Tỏi",
        category: "an-vat",
        price: "20k",
        image: "images/ca_vien_mam_toi.png",
        description: "Cá viên chiên vàng giòn rụm, đảo đều cùng sốt nước mắm tỏi ớt kẹo dẻo thơm lừng cay cay mặn ngọt.",
        badge: "Hot",
        isAvailable: true
    },
    {
        id: 6,
        name: "Bắp Xào Bơ Tép",
        category: "an-vat",
        price: "15k - 20k",
        image: "images/bap_xao_bo.png",
        description: "Bắp nếp ngọt dẻo hạt xào cùng bơ béo ngậy, tép khô giòn rụm và hành lá xanh mướt thơm phức.",
        badge: "Khuyên Thử",
        isAvailable: true
    },
    {
        id: 7,
        name: "Trứng Cút Nướng",
        category: "an-vat",
        price: "20k",
        image: "images/trung_cut_nuong.png",
        description: "Chén trứng cút nướng than hồng béo ngậy, topping xúc xích, hành phi giòn, ruốc sấy và sốt mayonnaise béo thơm.",
        badge: "Yêu Thích",
        isAvailable: true
    },
    {
        id: 8,
        name: "Mì Trộn Xúc Xích Trứng Cút",
        category: "an-vat",
        price: "20k",
        image: "images/mi_tron.png",
        description: "Mì sợi dai ngon trộn sốt đặc chế chua cay mặn ngọt, ăn kèm xúc xích, trứng cút, xoài băm và rau thơm.",
        badge: "Món No",
        isAvailable: true
    },
    {
        id: 9,
        name: "Nui Trộn Thập Cẩm",
        category: "an-vat",
        price: "20k",
        image: "images/nui_tron.png",
        description: "Nui luộc vừa chín tới dẻo mềm, trộn đều cùng sốt gia vị thơm ngon, bò khô, trứng cút, xoài chua và rau răm.",
        badge: "",
        isAvailable: true
    },
    {
        id: 10,
        name: "Nui Chiên Trứng Giòn Rụm",
        category: "an-vat",
        price: "20k",
        image: "images/nui_chien.png",
        description: "Nui chiên giòn rụm kết hợp lớp trứng gà vàng óng phủ ngoài, rắc hành lá và chấm kèm nước tương tỏi ớt chua ngọt.",
        badge: "Giòn Rụm",
        isAvailable: true
    },
    {
        id: 11,
        name: "Bột Chiên Trứng Truyền Thống",
        category: "an-vat",
        price: "20k",
        image: "images/bot_chien.png",
        description: "Bột gạo chiên vàng giòn rụm bên ngoài, dẻo mềm bên trong, đập thêm trứng gà béo ngậy kèm đu đủ bào ngâm chua ngọt.",
        badge: "Đặc Sản",
        isAvailable: true
    },
    {
        id: 12,
        name: "Sữa Dừa Thạch Trái Cây",
        category: "do-uong",
        price: "10k",
        image: "images/sua_dua_thach.png",
        description: "Sữa dừa béo thơm thanh mát kết hợp topping thạch trái cây giòn dai nhiều màu sắc, giải nhiệt ngày hè cực đã.",
        badge: "Mát Lạnh",
        isAvailable: true
    },
    {
        id: 13,
        name: "Các Loại Trà Trái Cây",
        category: "do-uong",
        price: "10k / ly",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FMgNU9Yywfj_7ULc2a0_qDr_-22t96VbHq1g-Mcg-n3cQ1oOSe_agFY&s=10",
        description: "Đa dạng hương vị thanh mát: Trà tắc xí muội, trà đào, trà chanh, trà dâu... mát lạnh giải ngấy khi ăn bánh tráng.",
        badge: "Bán Chạy Nhất",
        isAvailable: true
    },
    {
        id: 14,
        name: "Sâm Lạnh Giải Nhiệt",
        category: "do-uong",
        price: "5k",
        image: "https://hunufa.vn/wp-content/uploads/2025/06/cach-nau-nuoc-sam-mua-o-tiem-thuoc-bac-4.webp",
        description: "Nước sâm thảo mộc nấu từ mía lau, rễ tranh và lá dứa thơm mát, vị ngọt thanh tự nhiên giải khát tức thì.",
        badge: "Giá Siêu Rẻ",
        isAvailable: true
    },
    {
        id: 15,
        name: "Nước Ngọt Các Loại",
        category: "do-uong",
        price: "10k - 15k",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
        description: "Đầy đủ các loại nước ngọt có gas ướp lạnh sảng khoái: Coca Cola, Pepsi, Sting dâu, 7Up, Mirinda, Twister...",
        badge: "",
        isAvailable: true
    }
];
