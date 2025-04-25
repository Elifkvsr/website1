const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});



const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalCards = 5;
const visibleCards = 2;

const updateSlider = () => {
    const cardWidth = slider.children[0].offsetWidth + 20;
    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}px)`;

    // Butonlara active class ver
    prevBtn.classList.remove("active");
    nextBtn.classList.remove("active");

    if (currentIndex === 0) {
        prevBtn.classList.add("active");
    } else if (currentIndex >= totalCards - visibleCards) {
        nextBtn.classList.add("active");
    } else {
        // Ortadaysa her seferde yönü değiştirmek yerine son tıklanana active veriyoruz
    }
};

// Tıklama olunca active class'ı ayarla
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        prevBtn.classList.add("active");
        nextBtn.classList.remove("active");
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateSlider();
        nextBtn.classList.add("active");
        prevBtn.classList.remove("active");
    }
});

window.addEventListener("load", updateSlider);


const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.textt');
    const cards = document.querySelectorAll('.doctors');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Aktif class'ı değiştir
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Seçilen kategori
            const selectedCategory = this.textContent.trim().toLowerCase().replace(/\s/g, '');

            // Kartları filtrele
            cards.forEach(card => {
                const category = card.dataset.category;
                if (!category || selectedCategory === 'doğumahazırlık') {
                    // Eğer kategori yoksa veya "Doğuma Hazırlık" seçiliyse hepsini göster
                    card.style.display = 'block';
                } else if (category === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const testButton = document.getElementById('testAccordion');

    // Yumuşak geçiş için timeout ekleme
    function toggleAccordion(item) {
        item.classList.toggle('active');

        // Diğerlerini kapat
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    }

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const questionText = item.querySelector('.question-text');
        const iconCircle = item.querySelector('.icon-circle');

        [header, questionText, iconCircle].forEach(element => {
            if (element) {
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleAccordion(item);
                });
            }
        });
    });

    if (testButton) {
        testButton.addEventListener('click', function () {
            const firstItem = accordionItems[0];
            toggleAccordion(firstItem);

            if (firstItem.classList.contains('active')) {
                setTimeout(() => {
                    this.textContent = 'Accordion\'u Kapat';
                }, 250); // Metin değişikliğini animasyonla senkronize et
            } else {
                setTimeout(() => {
                    this.textContent = 'Accordion\'u Test Et';
                }, 250);
            }
        });
    }
});