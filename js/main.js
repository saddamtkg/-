// ===== Main Application Logic =====

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggle(currentTheme);
    
    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggle(newTheme);
        });
    }
}

function updateThemeToggle(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
}

// Navigation Management
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    
    // Toggle sidebar on mobile
    if (navToggle && sidebar) {
        navToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }
    
    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && e.target !== navToggle) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Table of Contents Generation
function generateTOC() {
    const tocContainer = document.getElementById('tableOfContents');
    if (!tocContainer || !lessons) return;
    
    // Group lessons by category
    const categories = {};
    lessons.forEach(lesson => {
        if (!lesson.category) return;
        if (!categories[lesson.category]) {
            categories[lesson.category] = [];
        }
        categories[lesson.category].push(lesson);
    });
    
    // Define category display order
    const categoryOrder = ['শুরু করুন', 'বেসিক', 'DOM & Events', 'Advanced', 'Practice', 'Projects'];
    
    // Generate TOC HTML
    let tocHTML = '';
    categoryOrder.forEach(category => {
        if (categories[category] && categories[category].length > 0) {
            tocHTML += `<div class="toc-category">
                <b>${category}</b>
            `;
            
            categories[category].forEach(lesson => {
                const isActive = lesson.id === 'welcome' ? 'active' : '';
                tocHTML += `<a href="#" class="toc-link ${isActive}" data-lesson="${lesson.id}">${lesson.title}</a>`;
            });
            
            tocHTML += `</div>`;
        }
    });
    
    // Add any remaining categories not in the order list
    Object.keys(categories).forEach(category => {
        if (!categoryOrder.includes(category)) {
            tocHTML += `<div class="toc-category">
                <b>${category}</b>
            `;
            
            categories[category].forEach(lesson => {
                const isActive = lesson.id === 'welcome' ? 'active' : '';
                tocHTML += `<a href="#" class="toc-link ${isActive}" data-lesson="${lesson.id}">${lesson.title}</a>`;
            });
            
            tocHTML += `</div>`;
        }
    });
    
    tocContainer.innerHTML = tocHTML;
    
    // Add click handlers
    const tocLinks = tocContainer.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lessonId = link.getAttribute('data-lesson');
            if (lessonId) {
                loadLesson(lessonId);
                // Update active state
                tocLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close sidebar on mobile
                const sidebar = document.getElementById('sidebar');
                if (sidebar && window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            }
        });
    });
}

// Load Lesson Content
function loadLesson(lessonId) {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent || !lessons) return;
    
    // Find lesson
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) {
        // If not found, show welcome
        loadLesson('welcome');
        return;
    }
    
    // Hide all lesson sections
    const sections = mainContent.querySelectorAll('.lesson-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Create or update lesson section
    let lessonSection = document.getElementById(`lesson-${lessonId}`);
    if (!lessonSection) {
        lessonSection = document.createElement('section');
        lessonSection.id = `lesson-${lessonId}`;
        lessonSection.className = 'lesson-section';
        mainContent.appendChild(lessonSection);
    }
    
    // Set content
    if (lesson.content) {
        lessonSection.innerHTML = lesson.content;
    } else if (lessonId === 'welcome') {
        // Welcome section is already in HTML
        const welcomeSection = document.getElementById('welcome');
        if (welcomeSection) {
            welcomeSection.classList.add('active');
            return;
        }
    }
    
    // Show lesson section
    lessonSection.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL without reload
    if (history.pushState) {
        const newUrl = `${window.location.pathname}#${lessonId}`;
        window.history.pushState({ lessonId }, '', newUrl);
    }
    
    // Execute any inline scripts in the content
    executeInlineScripts(lessonSection);
    
    // Update output boxes with examples
    updateOutputBoxes(lessonId);
}

// Execute inline scripts in lesson content
function executeInlineScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
        document.body.removeChild(newScript);
    });
}

// Update output boxes with example outputs
function updateOutputBoxes(lessonId) {
    // Variables output
    if (lessonId === 'variables') {
        const varOutput = document.getElementById('varOutput');
        if (varOutput) {
            var name = "Saddam";
            var age = 25;
            var country = "Bangladesh";
            varOutput.innerHTML = `
                <strong>নাম:</strong> ${name}<br>
                <strong>বয়স:</strong> ${age}<br>
                <strong>দেশ:</strong> ${country}
            `;
        }
    }
    
    // Data types output
    if (lessonId === 'datatypes') {
        const typeOutput = document.getElementById('typeOutput');
        if (typeOutput) {
            let text = "I love JavaScript";
            let number = 2025;
            let isFun = true;
            let fruits = ["Apple", "Mango", "Banana"];
            let person = { name: "Saddam", age: 25 };
            let emptyValue = null;
            let notDefined;
            
            typeOutput.innerHTML = `
                <strong>String:</strong> ${text} (${typeof text})<br>
                <strong>Number:</strong> ${number} (${typeof number})<br>
                <strong>Boolean:</strong> ${isFun} (${typeof isFun})<br>
                <strong>Array:</strong> ${JSON.stringify(fruits)} (${typeof fruits})<br>
                <strong>Object:</strong> ${JSON.stringify(person)} (${typeof person})<br>
                <strong>Null:</strong> ${emptyValue} (${typeof emptyValue})<br>
                <strong>Undefined:</strong> ${notDefined} (${typeof notDefined})
            `;
        }
    }
    
    // Event handlers setup
    setupEventHandlers(lessonId);
}

// Setup event handlers for interactive demos
function setupEventHandlers(lessonId) {
    // Event demo handlers
    if (lessonId === 'events') {
        const eventBtn = document.getElementById('eventDemoBtn');
        const eventOutput = document.getElementById('eventOutput');
        const eventInput = document.getElementById('eventInput');
        const eventInputOutput = document.getElementById('eventInputOutput');
        
        if (eventBtn && eventOutput) {
            eventBtn.addEventListener('click', () => {
                eventOutput.textContent = 'Button clicked! ✅';
                eventOutput.style.color = 'green';
            });
        }
        
        if (eventInput && eventInputOutput) {
            eventInput.addEventListener('input', (e) => {
                eventInputOutput.textContent = `Typing: ${e.target.value}`;
                eventInputOutput.style.color = 'blue';
            });
        }
    }
    
    // Form validation handlers
    if (lessonId === 'forms') {
        const form = document.getElementById('demoForm');
        const formResult = document.getElementById('formResult');
        
        if (form && formResult) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('demoName')?.value.trim();
                const email = document.getElementById('demoEmail')?.value.trim();
                const password = document.getElementById('demoPassword')?.value.trim();
                
                if (!name || !email || !password) {
                    formResult.textContent = '❌ সব ফিল্ড পূরণ করুন!';
                    formResult.style.color = 'red';
                    return;
                }
                
                if (password.length < 6) {
                    formResult.textContent = '⚠️ পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে!';
                    formResult.style.color = 'orange';
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    formResult.textContent = '⚠️ বৈধ ইমেইল দিন!';
                    formResult.style.color = 'orange';
                    return;
                }
                
                formResult.textContent = `✅ ধন্যবাদ ${name}! আপনার ফর্ম সফলভাবে submit হয়েছে।`;
                formResult.style.color = 'green';
            });
        }
    }
    
    // Date lesson handler
    if (lessonId === 'date') {
        updateDateTime();
    }
    
    // Timer lesson handler
    if (lessonId === 'timers') {
        // Timer functions are already defined in lessons.js
        // Just ensure they're available
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.lessonId) {
        loadLesson(e.state.lessonId);
    } else {
        const hash = window.location.hash.slice(1);
        if (hash) {
            loadLesson(hash);
        }
    }
});

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize navigation
    initNavigation();
    
    // Generate table of contents
    generateTOC();
    
    // Load lesson from URL hash or default to welcome
    const hash = window.location.hash.slice(1);
    const lessonId = hash || 'welcome';
    loadLesson(lessonId);
    
    // Update active TOC link
    setTimeout(() => {
        const tocLinks = document.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            if (link.getAttribute('data-lesson') === lessonId) {
                link.classList.add('active');
            }
        });
    }, 100);
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth > 768 && sidebar) {
                sidebar.classList.remove('active');
            }
        }, 250);
    });
});

// Copy code functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        if (pre && !pre.querySelector('.copy-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.addEventListener('click', () => {
                const text = block.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            });
            pre.style.position = 'relative';
            pre.appendChild(copyBtn);
        }
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

