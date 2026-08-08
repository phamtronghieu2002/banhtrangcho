/**
 * ==============================================================================
 * LOGIC ĐIỀU KHIỂN MENU QR & TƯƠNG TÁC (APP.JS)
 * Tối ưu 100% chống vỡ chữ, responsive mượt mà trên mọi thiết bị
 * ==============================================================================
 */

// Trạng thái ứng dụng
let currentCategory = 'all';
let searchQuery = '';
let toastTimeout = null;

// Helper format tiền tệ Việt Nam (Hỗ trợ linh hoạt cả String và Number)
// Ví dụ: "30.000đ", "30k", "25.000 - 35.000đ", "Theo thời giá", hoặc số 30000
function formatCurrency(price) {
    if (price === null || price === undefined) return '';
    
    // Nếu là String
    if (typeof price === 'string') {
        const trimmed = price.trim();
        // Nếu là string thuần số (ví dụ: "30000") thì tự thêm định dạng chuẩn .000đ
        if (!isNaN(trimmed) && trimmed !== '') {
            return new Intl.NumberFormat('vi-VN').format(Number(trimmed)) + 'đ';
        }
        // Nếu chuỗi đã được định dạng sẵn (ví dụ: "30.000đ", "30k", "25.000đ - 35.000đ")
        return trimmed;
    }
    
    // Nếu là Number
    if (typeof price === 'number') {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    }
    
    return String(price);
}

// Helper loại bỏ dấu tiếng Việt để tìm kiếm thông minh
function removeVietnameseTones(str) {
    if (!str) return '';
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|Ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.toLowerCase().trim();
}

// Hiển thị Toast thông báo ngắn gọn & tự ẩn sạch sẽ
function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'toast-box';
        document.body.appendChild(toast);
    }
    
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    toast.style.display = 'inline-flex';
    
    // Trigger reflow để kích hoạt CSS transition
    void toast.offsetWidth;
    toast.classList.add('show');
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (!toast.classList.contains('show')) {
                toast.style.display = 'none';
            }
        }, 300);
    }, 2200);
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    initStoreInfo();
    renderCategories();
    renderMenuItems();
    setupEventListeners();
});

/**
 * 1. Đổ dữ liệu thông tin quán từ STORE_CONFIG trong data.js vào giao diện
 */
function initStoreInfo() {
    if (typeof STORE_CONFIG === 'undefined') return;

    // Tên quán, slogan, địa chỉ, giờ
    const storeNameEl = document.getElementById('storeName');
    const storeSloganEl = document.getElementById('storeSlogan');
    const storeAddressEl = document.getElementById('storeAddress');
    const storeHoursEl = document.getElementById('storeHours');
    const storeMapLinkEl = document.getElementById('storeMapLink');
    const wifiSsidEl = document.getElementById('wifiSsid');
    const wifiPassEl = document.getElementById('wifiPass');
    
    // Nút gọi điện & liên hệ
    const heroCallBtn = document.getElementById('heroCallBtn');
    const floatCallBtn = document.getElementById('floatCallBtn');
    const floatZaloBtn = document.getElementById('floatZaloBtn');
    const copyrightStoreEl = document.getElementById('copyrightStore');

    if (storeNameEl) storeNameEl.textContent = STORE_CONFIG.name;
    if (storeSloganEl) storeSloganEl.textContent = STORE_CONFIG.slogan;
    if (storeAddressEl) storeAddressEl.textContent = STORE_CONFIG.address;
    if (storeHoursEl) storeHoursEl.textContent = STORE_CONFIG.openHours;
    
    if (storeMapLinkEl && STORE_CONFIG.mapUrl) {
        storeMapLinkEl.href = STORE_CONFIG.mapUrl;
    }

    if (wifiSsidEl && STORE_CONFIG.wifi) wifiSsidEl.textContent = STORE_CONFIG.wifi.ssid;
    if (wifiPassEl && STORE_CONFIG.wifi) wifiPassEl.textContent = STORE_CONFIG.wifi.password;

    // Hotline tel: links (text chuẩn ngắn gọn 1 dòng, không tràn)
    const telLink = `tel:${STORE_CONFIG.hotline}`;
    if (heroCallBtn) {
        heroCallBtn.href = telLink;
        heroCallBtn.innerHTML = `📞 Gọi Đặt Món: ${STORE_CONFIG.hotlineDisplay || STORE_CONFIG.hotline}`;
    }
    if (floatCallBtn) {
        floatCallBtn.href = telLink;
        floatCallBtn.innerHTML = `📞 Gọi Đặt Món`;
    }
    if (floatZaloBtn && STORE_CONFIG.zaloPhone) {
        floatZaloBtn.href = `https://zalo.me/${STORE_CONFIG.zaloPhone}`;
        floatZaloBtn.innerHTML = `💬 Chat Zalo`;
    }
    if (copyrightStoreEl) {
        copyrightStoreEl.textContent = STORE_CONFIG.name;
    }
}

/**
 * 2. Render các danh mục món ăn
 */
function renderCategories() {
    const categoryListEl = document.getElementById('categoryList');
    if (!categoryListEl || typeof MENU_CATEGORIES === 'undefined') return;

    categoryListEl.innerHTML = MENU_CATEGORIES.map(cat => `
        <li>
            <button class="category-pill ${cat.id === currentCategory ? 'active' : ''}" 
                    data-category="${cat.id}">
                <span>${cat.icon}</span>
                <span>${cat.name}</span>
            </button>
        </li>
    `).join('');

    // Bắt sự kiện chọn danh mục
    categoryListEl.querySelectorAll('.category-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.getAttribute('data-category');
            
            // Cập nhật class active
            categoryListEl.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Scroll ngang mượt đến danh mục vừa chọn trên mobile
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

            renderMenuItems();
        });
    });
}

/**
 * 3. Render danh sách món ăn theo bộ lọc & tìm kiếm
 */
function renderMenuItems() {
    const menuGridEl = document.getElementById('menuGrid');
    const itemCountEl = document.getElementById('itemCount');
    if (!menuGridEl || typeof MENU_ITEMS === 'undefined') return;

    // Lọc theo category và search
    const filteredItems = MENU_ITEMS.filter(item => {
        const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);
        
        let matchSearch = true;
        if (searchQuery) {
            const rawSearch = removeVietnameseTones(searchQuery);
            const rawName = removeVietnameseTones(item.name);
            const rawDesc = removeVietnameseTones(item.description || '');
            matchSearch = rawName.includes(rawSearch) || rawDesc.includes(rawSearch);
        }

        return matchCategory && matchSearch && item.isAvailable;
    });

    // Cập nhật số lượng món
    if (itemCountEl) {
        itemCountEl.textContent = `${filteredItems.length} món`;
    }

    // Nếu không tìm thấy món nào
    if (filteredItems.length === 0) {
        menuGridEl.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <div class="no-results-text">Không tìm thấy món phù hợp</div>
                <div class="no-results-sub">Hãy thử từ khoá khác hoặc chọn danh mục khác nhé!</div>
            </div>
        `;
        return;
    }

    // Render danh sách món
    menuGridEl.innerHTML = filteredItems.map(item => {
        // Class style cho badge
        let badgeClass = 'badge-bestseller';
        if (item.badge && item.badge.toLowerCase().includes('khuyên')) badgeClass = 'badge-recommend';
        if (item.badge && item.badge.toLowerCase().includes('tiết kiệm')) badgeClass = 'badge-save';

        // Xử lý fallback ảnh nếu mạng chậm
        const fallbackImg = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80";

        return `
            <div class="food-card" data-id="${item.id}">
                <div class="food-image-wrap" onclick="openItemModal(${item.id})">
                    <img src="${item.image}" 
                         alt="${item.name}" 
                         class="food-image" 
                         loading="lazy" 
                         onerror="this.onerror=null; this.src='${fallbackImg}';">
                    ${item.badge ? `<span class="food-badge ${badgeClass}">${item.badge}</span>` : ''}
                </div>
                <div class="food-content">
                    <h3 class="food-name" onclick="openItemModal(${item.id})">${item.name}</h3>
                    <p class="food-description">${item.description || 'Món ăn thơm ngon đậm đà chuẩn vị quán.'}</p>
                    <div class="food-footer">
                        <span class="food-price">${formatCurrency(item.price)}</span>
                        <a href="tel:${STORE_CONFIG.hotline}" 
                           class="btn-order-call" 
                           title="Gọi đặt món này ngay">
                            <span>📞</span> Đặt Món
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * 4. Thiết lập sự kiện tương tác (Search, Copy Wifi, Modal, Back To Top)
 */
function setupEventListeners() {
    // Tìm kiếm món ăn Live Search
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
            }
            renderMenuItems();
        });
    }

    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            searchInput.focus();
            renderMenuItems();
        });
    }

    // Nút copy mật khẩu WiFi 1 chạm
    const copyWifiBtn = document.getElementById('copyWifiBtn');
    if (copyWifiBtn && STORE_CONFIG.wifi) {
        copyWifiBtn.addEventListener('click', () => {
            const pass = STORE_CONFIG.wifi.password;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(pass).then(() => {
                    showToast(`Đã sao chép mật khẩu: ${pass}`);
                }).catch(() => {
                    fallbackCopy(pass);
                });
            } else {
                fallbackCopy(pass);
            }
        });
    }

    function fallbackCopy(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Đã sao chép mật khẩu: ${text}`);
    }

    // Đóng Modal khi bấm overlay hoặc nút đóng
    const modalOverlay = document.getElementById('itemModalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Phím ESC đóng modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Nút cuộn lên đầu trang (Back to Top)
    const btnBackToTop = document.getElementById('btnBackToTop');
    if (btnBackToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 280) {
                btnBackToTop.classList.add('show');
            } else {
                btnBackToTop.classList.remove('show');
            }
        }, { passive: true });

        btnBackToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/**
 * 5. Mở Modal xem chi tiết món ăn
 */
function openItemModal(itemId) {
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (!item) return;

    const modalOverlay = document.getElementById('itemModalOverlay');
    const modalImage = document.getElementById('modalImage');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalCallBtn = document.getElementById('modalCallBtn');

    if (modalImage) {
        modalImage.src = item.image;
        modalImage.alt = item.name;
    }
    if (modalBadge) {
        if (item.badge) {
            modalBadge.textContent = item.badge;
            modalBadge.style.display = 'inline-block';
        } else {
            modalBadge.style.display = 'none';
        }
    }
    if (modalTitle) modalTitle.textContent = item.name;
    if (modalPrice) modalPrice.textContent = formatCurrency(item.price);
    if (modalDescription) modalDescription.textContent = item.description || 'Món ăn đặc sản thơm ngon hấp dẫn.';

    if (modalCallBtn) {
        modalCallBtn.href = `tel:${STORE_CONFIG.hotline}`;
        modalCallBtn.innerHTML = `📞 Gọi Đặt Món Này (${STORE_CONFIG.hotlineDisplay || STORE_CONFIG.hotline})`;
    }

    if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * 6. Đóng Modal
 */
function closeModal() {
    const modalOverlay = document.getElementById('itemModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}
