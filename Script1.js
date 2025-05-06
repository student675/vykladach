// �������� ��������� ��� ���������
function animateOnScroll() {
    const elements = document.querySelectorAll('section, img');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 50) {
            element.style.opacity = '1';
        }
    });
}

// ������ �������� ��� ���������
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
