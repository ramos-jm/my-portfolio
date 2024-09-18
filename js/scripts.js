// scripts.js

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.backgroundColor = 'rgba(238,238,238,255)'; // New background color
scrollToTopBtn.style.color = '#000'; // Arrow color
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.borderRadius = '5px'; // Adjusted roundness
scrollToTopBtn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.innerHTML = '▲'; // Arrow icon
scrollToTopBtn.style.fontSize = '20px';
scrollToTopBtn.style.textAlign = 'center';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
});

// Modal Window for Portfolio Project Previews
const modal = document.createElement('div');
modal.className = 'modal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
modal.style.zIndex = '1000';
modal.style.overflow = 'auto';
modal.style.textAlign = 'center';
modal.style.paddingTop = '60px';
document.body.appendChild(modal);

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modalContent.style.backgroundColor = '#fefefe';
modalContent.style.margin = '5% auto';
modalContent.style.padding = '20px';
modalContent.style.border = '1px solid #888';
modalContent.style.width = '80%';
modal.appendChild(modalContent);

const closeBtn = document.createElement('span');
closeBtn.className = 'close';
closeBtn.textContent = '×';
closeBtn.style.color = '#aaa';
closeBtn.style.float = 'right';
closeBtn.style.fontSize = '28px';
closeBtn.style.fontWeight = 'bold';
closeBtn.style.cursor = 'pointer';
modalContent.appendChild(closeBtn);

document.querySelectorAll('.panel img').forEach(image => {
    image.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = image.src;
        img.style.width = '100%';
        img.style.maxHeight = '80vh';
        img.style.objectFit = 'contain';
        modalContent.insertBefore(img, closeBtn);
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.querySelector('img')?.remove();
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalContent.querySelector('img')?.remove();
    }
});
