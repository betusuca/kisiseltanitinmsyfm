document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklenme animasyonu
    const card = document.querySelector('.card-container');
    card.style.opacity = '0';
    card.style.transform = 'translateY(15px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
});
