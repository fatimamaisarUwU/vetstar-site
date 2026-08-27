// ===== ПЛАВНЫЙ СКРОЛЛ ПО ССЫЛКАМ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== КНОПКА "ЗАПИСАТЬСЯ" =====
document.querySelectorAll('.btn--primary, .btn--big').forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (!this.closest('form')) {
            e.preventDefault();
            const form = document.querySelector('.contacts__form');
            if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
                // Подсветка формы
                form.style.transition = 'box-shadow 0.5s';
                form.style.boxShadow = '0 0 0 4px #00a86b';
                setTimeout(() => {
                    form.style.boxShadow = 'none';
                }, 2000);
            }
        }
    });
});

// ===== ПРИВЕТСТВИЕ В КОНСОЛИ (для крутости) =====
console.log('🐾 VetStar — Забота о ваших питомцах! 🐾');
console.log('📞 +7 (727) 243-63-55 | ул. Сейфулина, 198');