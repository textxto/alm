// ALM Core - Navegação e Tema

(function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function goToSlide(index) {
        slides[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        currentIndex = index;
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
        if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    });

    // Dark mode
    const hour = new Date().getHours();
    if (hour >= 19 || hour <= 6) {
        document.body.classList.add('dark');
    }

    // Quiz
    const quizBtn = document.getElementById('openQuizBtn');
    if (quizBtn) {
        quizBtn.addEventListener('click', () => {
            alert('Questionário - Versão em desenvolvimento');
        });
    }
})();
