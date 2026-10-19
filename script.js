document.addEventListener('DOMContentLoaded', () => {
    
    // ===== АККОРДЕОН FAQ =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            const isActive = parent.classList.contains('active');
            
            // Закрываем все остальные
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Открываем текущий, если он был закрыт
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    // ===== МОДАЛЬНОЕ ОКНО ПОЛИТИКИ =====
    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalAccept = document.querySelector('.modal-accept');
    const footerLegal = document.querySelector('.footer-legal');
    
    function openModal(e) {
        if (e) e.preventDefault();
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (privacyLink) privacyLink.addEventListener('click', openModal);
    if (footerLegal) footerLegal.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalAccept) modalAccept.addEventListener('click', closeModal);
    
    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ===== ОБРАБОТКА ФОРМЫ =====
    const leadForm = document.getElementById('lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = leadForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Отправка...';
            btn.disabled = true;
            btn.style.opacity = '0.7';
            
            // Имитация отправки
            setTimeout(() => {
                btn.textContent = 'Заявка отправлена!';
                btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                btn.style.opacity = '1';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    leadForm.reset();
                }, 3000);
            }, 1200);
        });
    }

    // ===== ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРНЫХ ССЫЛОК =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});