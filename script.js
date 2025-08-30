// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.fade-in-section');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Check if the skills section is visible and hasn't been animated yet
            if(entry.target.id === 'skills' && !entry.target.dataset.animated) {
                initHackerTerminalAnimation();
                entry.target.dataset.animated = 'true'; // Mark as animated
            }
            // No unobserve, to re-trigger animation if user scrolls up and down
        } else {
             entry.target.classList.remove('is-visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


// --- HACKER TERMINAL ANIMATION --- //
function initHackerTerminalAnimation() {
    const terminal = document.getElementById('hacker-terminal');
    if (!terminal) return;
    terminal.innerHTML = ''; // Clear previous animation

    const lines = [
        { text: 'Loading Master Nilay\'s skills...', speed: 10 },
        { text: '// Injecting Skills into system...', speed: 8, delay: 150 },
        { text: '', speed: 8, delay: 20 },
        { text: '>> ANDROID_&_KMM_DEV_STACK', speed: 12, color: '#FFD700' },
        { text: '   - Jetpack Compose (UI) & MVVM (Architecture)', speed: 5 },
        { text: '   - Room & SQL & Shared Preferences (Local Data Storage)', speed: 5 },
        { text: '   - Retrofit & Ktor (Networking)', speed: 5 },
        { text: '   - LiveData, Kotlin Coroutines (Concurrency)', speed: 5 },
        { text: '   - Firebase (Backend as a Service) & Google AI Studio (AI)', speed: 5 },
        { text: '   - Google ML Kit (AI/ML)', speed: 5 },
        { text: '   - Lottie (Animations)', speed: 5 },
        { text: '', speed: 8, delay: 20 },
        { text: '>> LANGUAGES', speed: 12, color: '#FFD700' },
        { text: '   - Java (Advanced)', speed: 5 },
        { text: '   - Kotlin (Advanced)', speed: 5 },
        { text: '   - C++', speed: 5 },
        { text: '   - Python', speed: 5 },
        { text: '', speed: 8, delay: 20 },
        { text: '>> CORE_CONCEPTS_&_TOOLS', speed: 12, color: '#FFD700' },
        { text: '   - Data Structures & Algorithms', speed: 5 },
        { text: '   - Object-Oriented Programming', speed: 5 },
        { text: '   - Git & GitHub', speed: 5 },
        { text: '   - Android Studio, Cursor Code Editor, VS Code', speed: 5 },
        { text: '', speed: 8, delay: 20 },
        { text: '//Trust me bro. He is the best', speed: 8 }
    ];

    let lineIndex = 0;
    
    // Add the cursor to the terminal
    terminal.classList.add('blinking-cursor');

    function typeLine() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            const lineElement = document.createElement('span');
            
            if (line.color) {
                lineElement.style.color = line.color;
            }

            terminal.appendChild(lineElement);
            
            let charIndex = 0;
            function typeChar() {
                if (charIndex < line.text.length) {
                    lineElement.textContent += line.text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, line.speed);
                } else {
                    terminal.innerHTML += '\n';
                    lineIndex++;
                    setTimeout(typeLine, line.delay || 50);
                }
            }
            typeChar();
        } else {
            terminal.classList.remove('blinking-cursor');
            const finalCursorSpan = document.createElement('span');
            finalCursorSpan.classList.add('blinking-cursor');
            terminal.appendChild(finalCursorSpan);
        }
    }
    
    setTimeout(typeLine, 150);
}

// --- MOBILE MENU TOGGLE --- //
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

