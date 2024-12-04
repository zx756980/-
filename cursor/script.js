document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('消息已发送！我们会尽快回复您。');
        this.reset();
    });
}

const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 修改随机图片功能
function loadRandomImages() {
    const imageElements = document.querySelectorAll('.random-image');
    const images = [
        'imgs/120940509_p0.jpg',
        'imgs/120941692_p0.jpg',
        'imgs/120975473_p0.jpg',
        'imgs/121061301_p0.png'
    ];
    
    imageElements.forEach((img, index) => {
        if (index === 0) {
            // 第一个项目卡片使用指定图片
            img.src = 'imgs/屏幕截图 2023-06-25 135426(1).png';
            img.classList.add('loaded');
        } else if (index === 1) {
            // 第二个项目卡片使用指定图片
            img.src = 'imgs/2024-09-06-18-21-32.png';
            img.classList.add('loaded');
        } else if (index === 2) {
            // 第三个项目卡片使用指定图片
            img.src = 'imgs/2024-09-06-18-26-19.png';
            img.classList.add('loaded');
        } else if (index === 3) {
            // 第四个项目卡片使用指定图片
            img.src = 'imgs/2024-11-05-15-34-04.png';
            img.classList.add('loaded');
        }
    });
}

// 在页面加载时加载随机图片
document.addEventListener('DOMContentLoaded', loadRandomImages);

// 添加刷新按钮功能
const refreshButton = document.createElement('button');
refreshButton.className = 'refresh-images';
refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i>';
refreshButton.onclick = loadRandomImages;
document.querySelector('.project-grid').prepend(refreshButton); 

// 添加图片查看功能
function setupImageViewer() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    
    // 为每个"查看详情"按钮添加点击事件
    document.querySelectorAll('.project-links .btn:first-child').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.project-card');
            const img = card.querySelector('.random-image');
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });
    
    // 点击关闭按钮关闭模态框
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
    
    // 点击模态框外部关闭模态框
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// 在页面加载完成后初始化图片查看功能
document.addEventListener('DOMContentLoaded', () => {
    // 现有的代码...
    setupImageViewer();
}); 