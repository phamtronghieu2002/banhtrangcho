/**
 * ==============================================================================
 * BẢNG DỮ LIỆU CẤU HÌNH QUÁN & DANH SÁCH MÓN ĂN (BÁNH TRÁNG CHỜ)
 * ==============================================================================
 */

// 1. THÔNG TIN QUÁN & LIÊN HỆ
const STORE_CONFIG = {
    name: "Bánh Tráng Chờ",
    logo: "https://res.cloudinary.com/dzpj1y0ww/image/upload/v1789880973/logo_hdfzqr.jpg",
    banner: "images/banner3.png", // Ảnh quầy bánh tráng thực tế tại quán
    video: "https://res.cloudinary.com/dzpj1y0ww/video/upload/v1789880973/ideo_eyzzkf.mp4", // Video giới thiệu quán
    slogan: "Ăn vặt thả ga - Đậm đà chuẩn vị",
    hotline: "0399069063",
    hotlineDisplay: "0399.069.063",
    address: "Gò Công",
    addressFull: "Ruộng cạn tân hoà, Gò Công",
    mapUrl: "https://maps.google.com/?q=Bánh+Tráng+Chờ+Ruộng+Cạn+Tân+Hoà",
    openHours: "09:30 - 22:30",
    openHoursSub: "Hàng ngày",
    zaloUrl: "https://zalo.me/0399069063",
    socialLinks: {
        tiktok: "https://www.tiktok.com/@banhtrangchogocong",
        tiktokHandle: "@banhtrangchogocong",
        facebook: "https://www.facebook.com/profile.php?id=61594315014607",
        facebookName: "Bánh Tráng Chờ"
    },
    // DỊCH VỤ XE ĐIỆN BẢO TUỆ GREEN CAR (Thông tin chuẩn từ danh thiếp sếp gửi)
    electricCarService: {
        brand: "BẢO TUỆ GREEN CAR",
        badge: "DỊCH VỤ XE ĐIỆN 5 CHỖ GIÁ RẺ",
        title: "Bảo Tuệ Green Car - Dịch Vụ Xe Điện 5 Chỗ Giá Rẻ",
        specialty: "Chuyên: Phục vụ Taxi 24/24 trong và ngoài tỉnh",
        slogan: "Hân hạnh được phục vụ quý khách!",
        shortDesc: "Đưa đón khách tận nơi, an toàn, êm ái, không mùi say xe. Phục vụ taxi 24/24 trong và ngoài tỉnh. Gọi là có!",
        phone: "0979889069",
        phoneDisplay: "0979.889.069",
        zaloUrl: "https://zalo.me/0979889069",
        address: "Ruộng Cạn - Tân Hòa",
        image: "https://cdn.oto360.net/images/car/vinfast/VF5.webp",
        cardImage: "images/card_xe_clean.jpg"
    }
};

// 2. DANH MỤC LỌC VỚI FONTAWESOME ICONS
const MENU_CATEGORIES = [
    { id: "all", name: "Tất Cả Món", iconClass: "fa-solid fa-border-all" },
    { id: "banh-trang", name: "Bánh Tráng", iconClass: "fa-solid fa-cookie-bite" },
    { id: "an-vat", name: "Ăn Vặt & Mì Nui", iconClass: "fa-solid fa-utensils" },
    { id: "do-uong", name: "Trà & Giải Khát", iconClass: "fa-solid fa-mug-hot" },
    { id: "dich-vu", name: "Xe Điện Bảo Tuệ", iconClass: "fa-solid fa-car-side" },
    { id: "khuyen-mai", name: "Khuyến Mãi", iconClass: "fa-solid fa-gift" }
];

// 3. DANH SÁCH MÓN ĂN & DỊCH VỤ (Bảo toàn 100% URL gốc & cập nhật xe điện Bảo Tuệ)
const MENU_ITEMS = [
    {
        id: 1,
        name: "Bánh Tráng Trộn",
        category: "banh-trang",
        price: "15k-20k-25k",
        image: "https://www.cet.edu.vn/wp-content/uploads/2018/03/cach-lam-banh-trang-tron.jpg",
        description: "Bánh tráng dẻo thơm, trứng cút, khô bò cay nồng, xoài chua giòn, rau răm và sốt tắc chua ngọt...",
        isAvailable: true
    },
    {
        id: 2,
        name: "Bánh Tráng Cuộn",
        category: "banh-trang",
        price: "15k-20k-25k",
        image: "https://bizweb.dktcdn.net/100/004/714/files/banh-trang-cuon-bo.png?v=1636078724932",
        description: "Bánh tráng cuộn hành phi giòn tan, trứng cút, khô bò đậm vị chấm sốt bơ béo ngậy sốt me...",
        isAvailable: true
    },
    {
        id: 3,
        name: "Trứng Cút Nướng",
        category: "an-vat",
        price: "20k - 25k",
        image: "https://i.ytimg.com/vi/oQxxyAYrNII/sddefault.jpg",
        description: "Chén trứng cút nướng thơm hồng béo ngậy, topping xúc xích, hành phi giòn ruốc sấy...",
        isAvailable: true
    },
    {
        id: 4,
        name: "Bánh Tráng Nướng",
        category: "banh-trang",
        price: "15k - 20k",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWf86_00biJdBUJYtmmPSndMetazpmO5VYYcAYFbFGq3VsWKmsCGhF-Cnn&s=10",
        description: "Bánh tráng nướng thơm giòn rụm, trứng gà, xúc xích, phô mai, tép sấy, hành hoa...",
        isAvailable: true
    },
    {
        id: 5,
        name: "Mì Trộn",
        category: "an-vat",
        price: "15k-20k-25k",
        image: "https://res.cloudinary.com/dzpj1y0ww/image/upload/v1789884045/mitron_n0qbrh.png",
        description: "Mì sợi dai ngon trộn sốt đặc chế chua cay mặn ngọt, ăn kèm xúc xích, trứng cút...",
        isAvailable: true
    },
    {
        id: 6,
        name: "Nui Trộn",
        category: "an-vat",
        price: "20k - 25k",
        image: "https://cdn.tgdd.vn/2021/01/CookRecipe/Avatar/nui-xao-suon-non-chay-thumbnail.jpg",
        description: "Nui tùy vị trộn chín tới dẻo mềm, trộn đều cùng sốt gia vị thơm ngon bò khô...",
        isAvailable: true
    },
    {
        id: 7,
        name: "Bắp Xào",
        category: "an-vat",
        price: "15k - 20k",
        image: "https://res.cloudinary.com/dzpj1y0ww/image/upload/v1789884045/bapxao_vmfybs.png",
        description: "Bắp nếp ngọt xào bơ cùng hạt bơ béo ngậy, tép khô giòn rụm và hành lá xanh mướt...",
        isAvailable: true
    },
    {
        id: 8,
        name: "Nui Chiên",
        category: "an-vat",
        price: "15k - 20k",
        image: "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/News/News_expe_18970/18970.png?version=082303",
        description: "Nui chiên giòn rụm kết hợp lớp trứng gà vàng ươm, phô mai béo ngậy giòn tan...",
        isAvailable: true
    },
    {
        id: 9,
        name: "Sâm Lạnh",
        category: "do-uong",
        price: "5k",
        image: "https://hunufa.vn/wp-content/uploads/2025/06/cach-nau-nuoc-sam-mua-o-tiem-thuoc-bac-4.webp",
        description: "Nước sâm thảo mộc nấu từ mía lau, rễ tranh và lá dứa thanh mát giải nhiệt tức thì...",
        isAvailable: true
    },
    {
        id: 10,
        name: "Trà Trái Cây",
        category: "do-uong",
        price: "10k",
        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/421/036/products/cozy-dao-hoa-tan-goi-400gram.jpg?v=1639626614293",
        description: "Đa dạng hương vị trà trái cây thanh mát: Trà đào Cozy, trà tắc, trà dâu, trà chanh...",
        isAvailable: true
    },
    {
        id: 11,
        name: "Cacao Sữa",
        category: "do-uong",
        price: "15k - 20k",
        image: "https://product.hstatic.net/1000405326/product/a90df0d44578296e3944b562b78_1024x1024_634ad270734b40bd868f4dbb04e21f85_48120a9effa1437f9bbe33e8446a1629_master.jpg",
        description: "Cacao sữa thơm lừng đậm vị, hòa quyện giữa vị đắng nhẹ của cacao và ngọt béo của sữa đá sảng khoái...",
        isAvailable: true
    },
    {
        id: 12,
        name: "Các Loại Nước Giải Khát",
        category: "do-uong",
        price: "10k - 15k",
        image: "https://dailybianuocngot.cdn.vccloud.vn/wp-content/uploads/2025/06/cac-loai-nuoc-ngot-pho-bien.jpg",
        description: "Đầy đủ các loại nước ngọt có gas ướp lạnh sảng khoái: Coca Cola, Pepsi, Sting...",
        isAvailable: true
    },
    {
        id: 13,
        name: "Bảo Tuệ Green Car (Xe Điện 5 Chỗ)",
        category: "dich-vu",
        price: "Giá Rẻ (24/24)",
        image: "https://cdn.oto360.net/images/car/vinfast/VF5.webp",
        description: "Taxi xe điện 5 chỗ hiện đại, êm ái, không mùi say xe. Phục vụ 24/24 trong & ngoài tỉnh. Gọi là có: 0979.889.069!",
        isAvailable: true,
        isService: true,
        servicePhone: "0979889069",
        servicePhoneDisplay: "0979.889.069"
    }
];