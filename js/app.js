/**
 * ==============================================================================
 * BÁNH TRÁNG CHỜ - GÒ CÔNG
 * APP.JS - INTERACTIVE CONTROLLER WITH FONTAWESOME
 * ==============================================================================
 */

// Application State
let currentCategory = 'all';
let searchQuery = '';

// Helper format giá
function formatPrice(price) {
    if (!price) return '';
    return String(price).trim();
}

// Helper bỏ dấu tiếng Việt tìm kiếm thông minh
function removeVietnameseTones(str) {
    if (!str) return '';
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
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

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', () => {
    initStoreData();
    renderCategories();
    renderMenuItems();
    setupEvents();
    setupVideoAudio();
});

/**
 * 1. Nạp dữ liệu quán từ STORE_CONFIG
 */
function initStoreData() {
    if (typeof STORE_CONFIG === 'undefined') return;

    // Logo & Slogan
    const storeLogoImg = document.getElementById('storeLogoImg');
    const storeName = document.getElementById('storeName');
    const storeSlogan = document.getElementById('storeSlogan');
    const storeHours = document.getElementById('storeHours');
    const storeHotlineText = document.getElementById('storeHotlineText');
    const navHotlineBtn = document.getElementById('navHotlineBtn');
    const navZaloBtn = document.getElementById('navZaloBtn');
    const navTiktokLink = document.getElementById('navTiktokLink');
    const navFbLink = document.getElementById('navFbLink');

    if (storeLogoImg && STORE_CONFIG.logo) storeLogoImg.src = STORE_CONFIG.logo;
    if (storeName) storeName.textContent = STORE_CONFIG.name;
    if (storeSlogan) storeSlogan.textContent = STORE_CONFIG.slogan;
    if (storeHours) storeHours.textContent = STORE_CONFIG.openHours;
    if (storeHotlineText) storeHotlineText.textContent = STORE_CONFIG.hotlineDisplay || STORE_CONFIG.hotline;
    if (navHotlineBtn) navHotlineBtn.href = `tel:${STORE_CONFIG.hotline}`;
    if (navZaloBtn && STORE_CONFIG.zaloUrl) navZaloBtn.href = STORE_CONFIG.zaloUrl;

    if (STORE_CONFIG.socialLinks) {
        if (navTiktokLink && STORE_CONFIG.socialLinks.tiktok) navTiktokLink.href = STORE_CONFIG.socialLinks.tiktok;
        if (navFbLink && STORE_CONFIG.socialLinks.facebook) navFbLink.href = STORE_CONFIG.socialLinks.facebook;
    }

    // Video giới thiệu quán
    const storeVideoPlayer = document.getElementById('storeVideoPlayer');
    if (storeVideoPlayer && STORE_CONFIG.video) {
        const videoSource = storeVideoPlayer.querySelector('source');
        if (videoSource) {
            if (videoSource.src !== STORE_CONFIG.video) {
                videoSource.src = STORE_CONFIG.video;
                storeVideoPlayer.load();
            }
        } else {
            storeVideoPlayer.src = STORE_CONFIG.video;
        }
    }

    // Dịch vụ xe điện Bảo Tuệ Green Car
    const carFeatureImg = document.getElementById('carFeatureImg');
    const carCallBtn = document.getElementById('carCallBtn');
    const carZaloBtn = document.getElementById('carZaloBtn');

    if (STORE_CONFIG.electricCarService) {
        if (carFeatureImg && STORE_CONFIG.electricCarService.image) {
            carFeatureImg.src = STORE_CONFIG.electricCarService.image;
        }
        if (carCallBtn && STORE_CONFIG.electricCarService.phone) {
            carCallBtn.href = `tel:${STORE_CONFIG.electricCarService.phone}`;
        }
        if (carZaloBtn && STORE_CONFIG.electricCarService.zaloUrl) {
            carZaloBtn.href = STORE_CONFIG.electricCarService.zaloUrl;
        }
    }
}

/**
 * 2. Render danh mục lọc với FontAwesome Icons
 */
function renderCategories() {
    const categoryNav = document.getElementById('categoryNav');
    if (!categoryNav || typeof MENU_CATEGORIES === 'undefined') return;

    categoryNav.innerHTML = MENU_CATEGORIES.map(cat => `
        <button type="button" class="cat-btn ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
            <span class="cat-icon"><i class="${cat.iconClass}"></i></span>
            <span class="cat-name">${cat.name}</span>
        </button>
    `).join('');

    categoryNav.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.getAttribute('data-category');
            categoryNav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Scroll ngang mượt
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            renderMenuItems();
        });
    });
}

/**
 * 3. Render danh sách 12 món ăn / dịch vụ
 */
function renderMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid || typeof MENU_ITEMS === 'undefined') return;

    const filtered = MENU_ITEMS.filter(item => {
        const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);

        let matchSearch = true;
        if (searchQuery) {
            const cleanSearch = removeVietnameseTones(searchQuery);
            const cleanName = removeVietnameseTones(item.name);
            const cleanDesc = removeVietnameseTones(item.description || '');
            matchSearch = cleanName.includes(cleanSearch) || cleanDesc.includes(cleanSearch);
        }

        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div class="empty-menu-box">
                <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h4 class="empty-title">Không tìm thấy món phù hợp</h4>
                <p class="empty-desc">Bạn vui lòng tìm kiếm từ khoá khác hoặc bấm chọn "Tất Cả Món" nhé!</p>
            </div>
        `;
        return;
    }

    const fallbackImg = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80";

    menuGrid.innerHTML = filtered.map(item => {
        const isService = item.isService || item.category === 'dich-vu';
        const buttonHtml = isService 
            ? '<i class="fa-solid fa-taxi"></i> Đặt xe' 
            : '<i class="fa-solid fa-cart-shopping"></i> Đặt món';

        return `
            <article class="food-card ${isService ? 'card-item-service' : ''}" data-id="${item.id}" onclick="openItemModal(${item.id})">
                <div class="food-card-thumb">
                    <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
                </div>
                <div class="food-card-body">
                    <h3 class="food-card-name" title="${item.name}">${item.name}</h3>
                    <p class="food-card-desc">${item.description || 'Đặc sản Bánh Tráng Chờ thơm ngon đậm đà.'}</p>
                    <div class="food-card-bottom">
                        <span class="food-card-price ${isService ? 'price-service' : ''}">${formatPrice(item.price)}</span>
                        <button type="button" class="btn-card-order ${isService ? 'btn-service' : ''}" onclick="event.stopPropagation(); handleOrderClick(${item.id});">
                            ${buttonHtml}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

/**
 * 4. Xử lý khi bấm nút Đặt Món trên từng thẻ
 */
function handleOrderClick(itemId) {
    openItemModal(itemId);
}

/**
 * 5. Mở Modal Chi Tiết Món Ăn
 */
function openItemModal(itemId) {
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (!item) return;

    const overlay = document.getElementById('itemModalOverlay');
    const img = document.getElementById('modalImage');
    const title = document.getElementById('modalTitle');
    const price = document.getElementById('modalPrice');
    const desc = document.getElementById('modalDescription');
    const callBtn = document.getElementById('modalCallBtn');

    if (img) {
        img.src = item.image;
        img.alt = item.name;
    }
    if (title) title.textContent = item.name;
    if (price) price.textContent = formatPrice(item.price);
    if (desc) desc.textContent = item.description || 'Món ngon nóng hổi, giao hàng tận nơi nhanh chóng.';

    const isService = item.isService || item.category === 'dich-vu';
    if (callBtn) {
        if (isService) {
            const carPhone = item.servicePhone || "0979889069";
            const carPhoneDisplay = item.servicePhoneDisplay || "0979.889.069";
            callBtn.href = `tel:${carPhone}`;
            callBtn.innerHTML = `<i class="fa-solid fa-phone"></i> Gọi Đặt Xe Bảo Tuệ Ngay (${carPhoneDisplay})`;
            callBtn.classList.add('btn-car-highlight');
        } else {
            const foodPhone = STORE_CONFIG.hotlineDisplay || STORE_CONFIG.hotline;
            callBtn.href = `tel:${STORE_CONFIG.hotline}`;
            callBtn.innerHTML = `<i class="fa-solid fa-phone"></i> Gọi Đặt Món Này (${foodPhone})`;
            callBtn.classList.remove('btn-car-highlight');
        }
    }

    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * 6. Đóng Modal
 */
function closeModal() {
    const overlay = document.getElementById('itemModalOverlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Modal xem ảnh danh thiếp xe điện Bảo Tuệ
window.openCarCardModal = function() {
    const modal = document.getElementById('carCardModalOverlay');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
};

window.closeCarCardModal = function() {
    const modal = document.getElementById('carCardModalOverlay');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
};

/**
 * 7. Thiết lập Video âm thanh
 */
function setupVideoAudio() {
    const video = document.getElementById('storeVideoPlayer');
    const unmuteBtn = document.getElementById('unmuteVideoBtn');

    if (video && unmuteBtn) {
        unmuteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            if (!video.muted) {
                unmuteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>Tắt Âm Thanh</span>';
                video.play().catch(() => {});
            } else {
                unmuteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>Bật Âm Thanh</span>';
            }
        });
    }
}

/**
 * 8. Thiết lập sự kiện
 */
function setupEvents() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (clearSearchBtn) {
                if (searchQuery.length > 0) {
                    clearSearchBtn.classList.add('show');
                } else {
                    clearSearchBtn.classList.remove('show');
                }
            }
            renderMenuItems();
        });
    }

    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.classList.remove('show');
            searchInput.focus();
            renderMenuItems();
        });
    }

    // Close modal
    const overlay = document.getElementById('itemModalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const carOverlay = document.getElementById('carCardModalOverlay');
    if (carOverlay) {
        carOverlay.addEventListener('click', (e) => {
            if (e.target === carOverlay) closeCarCardModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeCarCardModal();
        }
    });

    // Back to top
    const btnBackToTop = document.getElementById('btnBackToTop');
    if (btnBackToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnBackToTop.classList.add('visible');
            } else {
                btnBackToTop.classList.remove('visible');
            }
        }, { passive: true });

        btnBackToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
