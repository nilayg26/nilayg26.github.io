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
    threshold: 0.25 // A bit more of the section needs to be visible
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
            observer.unobserve(entry.target);
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

    const lines = [
        { text: 'Loading Master Nilay\'s skills...', speed: 20 },
        { text: '// Injecting Skills into system...', speed: 15, delay: 250 },
        { text: '', speed: 15, delay: 40 },
        { text: '>> ANDROID_&_KMM_DEV_STACK', speed: 25, color: '#FFD700' },
        { text: '   - Jetpack Compose (UI) & MVVM (Architecture)', speed: 10 },
        { text: '   - Room & SQL & Shared Preferences (Local Data Storage)', speed: 10 },
        { text: '   - Retrofit & Ktor (Networking)', speed: 10 },
        { text: '   - LiveData, Kotlin Coroutines (Concurrency)', speed: 10 },
        { text: '   - Firebase (Backend as a Service) & Google AI Studio (AI)', speed: 10 },
        { text: '   - Google ML Kit (AI/ML)', speed: 10 },
        { text: '   - Lottie (Animations)', speed: 10 },
        { text: '', speed: 15, delay: 40 },
        { text: '>> LANGUAGES', speed: 25, color: '#FFD700' },
        { text: '   - Java (Advanced)', speed: 10 },
        { text: '   - Kotlin (Advanced)', speed: 10 },
        { text: '   - C++', speed: 10 },
        { text: '   - Python', speed: 10 },
        { text: '', speed: 15, delay: 40 },
        { text: '>> CORE_CONCEPTS_&_TOOLS', speed: 25, color: '#FFD700' },
        { text: '   - Data Structures & Algorithms', speed: 10 },
        { text: '   - Object-Oriented Programming', speed: 10 },
        { text: '   - Git & GitHub', speed: 10 },
        { text: '   - Android Studio, Cursor Code Editor, VS Code', speed: 10 },
        { text: '', speed: 15, delay: 40 },
        { text: '//Trust me bro. He is the best', speed: 15 }
    ];

    let lineIndex = 0;
    
    // Add the cursor to the terminal
    terminal.classList.add('blinking-cursor');

    function typeLine() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            const lineElement = document.createElement('span');
            
            // Apply color if specified
            if (line.color) {
                lineElement.style.color = line.color;
            }

            // Append the new line span to the terminal
            terminal.appendChild(lineElement);
            
            let charIndex = 0;
            function typeChar() {
                if (charIndex < line.text.length) {
                    lineElement.textContent += line.text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, line.speed);
                } else {
                    // Move to the next line after a delay
                    terminal.innerHTML += '\n';
                    lineIndex++;
                    setTimeout(typeLine, line.delay || 50);
                }
            }
            typeChar();
        } else {
            // Animation finished, remove the main cursor and add a final one
            terminal.classList.remove('blinking-cursor');
            const finalCursorSpan = document.createElement('span');
            finalCursorSpan.classList.add('blinking-cursor');
            terminal.appendChild(finalCursorSpan);
        }
    }
    
    setTimeout(typeLine, 250); // Initial delay before starting
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

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

