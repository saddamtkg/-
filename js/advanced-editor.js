// ===== Advanced Code Editor Functionality =====

// Global state
let editorCode = '';
let consoleLogs = [];
let previewIframe = null;

// Initialize Advanced Editor
function initAdvancedEditor() {
    // Initialize enhanced editor with delay to ensure DOM is ready
    setTimeout(() => {
        if (window.enhancedEditor && window.enhancedEditor.init) {
            window.enhancedEditor.init();
        }
    }, 200);
    
    const floatingBtn = document.getElementById('floatingCodeBtn');
    const modal = document.getElementById('advancedEditorModal');
    const closeBtn = document.getElementById('closeAdvancedEditor');
    const editor = document.getElementById('advancedCodeEditor');
    const lineNumbers = document.getElementById('editorLineNumbers');
    const runBtn = document.getElementById('runEditorBtn');
    const clearBtn = document.getElementById('clearEditorBtn');
    const formatBtn = document.getElementById('formatCodeBtn');
    const togglePreviewBtn = document.getElementById('togglePreviewBtn');
    const togglePreviewPanelBtn = document.getElementById('togglePreviewPanel');
    const container = document.querySelector('.advanced-editor-container');

    // Open modal on floating button click
    if (floatingBtn) {
        floatingBtn.addEventListener('click', () => {
            openAdvancedEditor();
        });
    }

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeAdvancedEditor();
        });
    }

    // Close on backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAdvancedEditor();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeAdvancedEditor();
        }
    });

    // Enhanced editor handles all event listeners
    // We just update our local state when code changes
    if (editor) {
        // Only update local state, don't add duplicate listeners
        // Enhanced editor will handle all input, scroll, and keyboard events
        editor.addEventListener('input', () => {
            editorCode = editor.value;
        });
    }

    // Run code
    if (runBtn) {
        runBtn.addEventListener('click', () => {
            runAdvancedCode();
        });
    }

    // Clear editor
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('আপনি কি নিশ্চিত যে আপনি editor clear করতে চান?')) {
                clearEditor();
            }
        });
    }

    // Format code (simple formatting)
    if (formatBtn) {
        formatBtn.addEventListener('click', () => {
            formatCode();
        });
    }

    // Toggle preview panel
    if (togglePreviewBtn) {
        togglePreviewBtn.addEventListener('click', () => {
            togglePreviewPanel();
        });
    }

    if (togglePreviewPanelBtn) {
        togglePreviewPanelBtn.addEventListener('click', () => {
            togglePreviewPanel();
        });
    }

    // Auto-save to localStorage
    if (editor) {
        // Load saved code
        const savedCode = localStorage.getItem('advancedEditorCode');
        if (savedCode) {
            editor.value = savedCode;
            editorCode = savedCode;
            updateLineNumbers();
        } else {
            // Set default example code
            const exampleCode = getExampleCode();
            editor.value = exampleCode;
            editorCode = exampleCode;
            updateLineNumbers();
        }

        // Save on input (debounced)
        let saveTimeout;
        editor.addEventListener('input', () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                localStorage.setItem('advancedEditorCode', editor.value);
            }, 1000);
        });
    }
}

// Open Advanced Editor
function openAdvancedEditor() {
    const modal = document.getElementById('advancedEditorModal');
    const editor = document.getElementById('advancedCodeEditor');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        if (editor) {
            // Focus editor after a short delay
            setTimeout(() => {
                editor.focus();
                if (window.enhancedEditor) {
                    if (window.enhancedEditor.updateLineNumbers) window.enhancedEditor.updateLineNumbers();
                    if (window.enhancedEditor.updateSyntaxHighlighting) window.enhancedEditor.updateSyntaxHighlighting();
                } else {
                    updateLineNumbers();
                }
            }, 100);
        }
    }
}

// Close Advanced Editor
function closeAdvancedEditor() {
    const modal = document.getElementById('advancedEditorModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Update Line Numbers
function updateLineNumbers() {
    const editor = document.getElementById('advancedCodeEditor');
    const lineNumbers = document.getElementById('editorLineNumbers');
    
    if (!editor || !lineNumbers) return;
    
    const lines = editor.value.split('\n');
    const lineCount = lines.length;
    
    let numbersHtml = '';
    for (let i = 1; i <= Math.max(lineCount, 1); i++) {
        numbersHtml += i + '<br>';
    }
    
    lineNumbers.innerHTML = numbersHtml;
}

// Sync scroll between editor and line numbers
function syncScroll(lineNumbers, editor) {
    lineNumbers.scrollTop = editor.scrollTop;
}

// Run Advanced Code
function runAdvancedCode() {
    const editor = document.getElementById('advancedCodeEditor');
    const previewOutput = document.getElementById('previewOutput');
    const consoleOutput = document.getElementById('consoleOutput');
    
    if (!editor) return;
    
    const code = editor.value;
    if (!code.trim()) {
        alert('কোড লিখুন!');
        return;
    }
    
    // Clear previous output
    consoleLogs = [];
    if (consoleOutput) {
        consoleOutput.innerHTML = '<span class="log">Running code...</span>';
    }
    if (previewOutput) {
        previewOutput.innerHTML = '';
    }
    
    try {
        // Execute code in sandbox iframe
        if (!previewIframe) {
            previewIframe = document.createElement('iframe');
            previewIframe.style.display = 'none';
            previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
            document.body.appendChild(previewIframe);
        }
        
        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        margin: 0;
                        background: #ffffff;
                        color: #333;
                        min-height: 100vh;
                    }
                    h1, h2, h3, h4, h5, h6 {
                        margin: 10px 0;
                    }
                    p {
                        margin: 8px 0;
                    }
                </style>
            </head>
            <body>
                <div id="preview-content"></div>
                <script>
                    (function() {
                        // Override console to send messages to parent
                        const originalLog = console.log;
                        const originalError = console.error;
                        const originalWarn = console.warn;
                        const originalInfo = console.info;
                        
                        function sendConsoleMessage(type, ...args) {
                            window.parent.postMessage({
                                type: 'console',
                                logType: type,
                                message: args.map(arg => {
                                    if (typeof arg === 'object') {
                                        try {
                                            return JSON.stringify(arg, null, 2);
                                        } catch (e) {
                                            return String(arg);
                                        }
                                    }
                                    return String(arg);
                                }).join(' ')
                            }, '*');
                        }
                        
                        console.log = function(...args) {
                            originalLog.apply(console, args);
                            sendConsoleMessage('log', ...args);
                        };
                        
                        console.error = function(...args) {
                            originalError.apply(console, args);
                            sendConsoleMessage('error', ...args);
                        };
                        
                        console.warn = function(...args) {
                            originalWarn.apply(console, args);
                            sendConsoleMessage('warn', ...args);
                        };
                        
                        console.info = function(...args) {
                            originalInfo.apply(console, args);
                            sendConsoleMessage('info', ...args);
                        };
                        
                        // Monitor DOM changes
                        const observer = new MutationObserver(function(mutations) {
                            window.parent.postMessage({
                                type: 'preview-update',
                                html: document.body.innerHTML
                            }, '*');
                        });
                        
                        observer.observe(document.body, {
                            childList: true,
                            subtree: true,
                            attributes: true,
                            characterData: true
                        });
                        
                        // Execute user code
                        try {
                            ${code}
                        } catch (error) {
                            console.error('Execution Error:', error.message, error.stack);
                        }
                        
                        // Send initial preview
                        setTimeout(function() {
                            window.parent.postMessage({
                                type: 'preview-update',
                                html: document.body.innerHTML
                            }, '*');
                        }, 100);
                    })();
                <\/script>
            </body>
            </html>
        `);
        iframeDoc.close();
        
        // Set up message listener for preview and console updates
        const messageHandler = (event) => {
            if (event.data && event.data.type === 'preview-update') {
                const previewOutput = document.getElementById('previewOutput');
                if (previewOutput) {
                    previewOutput.innerHTML = event.data.html || '';
                }
            } else if (event.data && event.data.type === 'console') {
                consoleLogs.push({
                    type: event.data.logType || 'log',
                    message: event.data.message || ''
                });
                updateConsoleOutput();
            }
        };
        
        // Remove old listener and add new one
        window.removeEventListener('message', handlePreviewMessage);
        window.addEventListener('message', messageHandler);
        
        // Store handler for cleanup
        handlePreviewMessage = messageHandler;
        
    } catch (error) {
        consoleLogs.push({ type: 'error', message: `Setup Error: ${error.message}` });
        updateConsoleOutput();
    }
}

// Handle preview message from iframe (will be overridden)
let handlePreviewMessage = function(event) {
    if (event.data && event.data.type === 'preview-update') {
        const previewOutput = document.getElementById('previewOutput');
        if (previewOutput) {
            previewOutput.innerHTML = event.data.html;
        }
    } else if (event.data && event.data.type === 'console') {
        consoleLogs.push({
            type: event.data.logType || 'log',
            message: event.data.message || ''
        });
        updateConsoleOutput();
    }
};

// Update Console Output
function updateConsoleOutput() {
    const consoleOutput = document.getElementById('consoleOutput');
    if (!consoleOutput) return;
    
    if (consoleLogs.length === 0) {
        consoleOutput.innerHTML = '<span class="log">No output</span>';
        return;
    }
    
    let outputHtml = '';
    consoleLogs.forEach(log => {
        const className = log.type || 'log';
        outputHtml += `<div class="${className}">${escapeHtml(log.message)}</div>`;
    });
    
    consoleOutput.innerHTML = outputHtml;
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Clear Editor
function clearEditor() {
    const editor = document.getElementById('advancedCodeEditor');
    if (editor) {
        editor.value = '';
        editorCode = '';
        if (window.enhancedEditor && window.enhancedEditor.updateLineNumbers) {
            window.enhancedEditor.updateLineNumbers();
        } else {
            updateLineNumbers();
        }
        if (window.enhancedEditor && window.enhancedEditor.updateSyntaxHighlighting) {
            window.enhancedEditor.updateSyntaxHighlighting();
        }
        localStorage.removeItem('advancedEditorCode');
    }
    
    const previewOutput = document.getElementById('previewOutput');
    const consoleOutput = document.getElementById('consoleOutput');
    if (previewOutput) previewOutput.innerHTML = '';
    if (consoleOutput) consoleOutput.innerHTML = '';
    consoleLogs = [];
    
    // Hide autocomplete
    const autocomplete = document.getElementById('autoCompleteList');
    if (autocomplete) {
        autocomplete.style.display = 'none';
    }
    
    // Clear errors
    const errorPanel = document.getElementById('errorPanel');
    if (errorPanel) {
        errorPanel.style.display = 'none';
    }
}

// Format Code (improved formatting)
function formatCode() {
    const editor = document.getElementById('advancedCodeEditor');
    if (!editor) return;
    
    let code = editor.value;
    if (!code.trim()) {
        alert('কোড নেই format করার জন্য!');
        return;
    }
    
    try {
        // Better formatting logic
        code = formatJavaScriptCode(code);
        editor.value = code;
        editorCode = code;
        
        if (window.enhancedEditor && window.enhancedEditor.updateLineNumbers) {
            window.enhancedEditor.updateLineNumbers();
        } else {
            updateLineNumbers();
        }
        
        if (window.enhancedEditor && window.enhancedEditor.updateSyntaxHighlighting) {
            window.enhancedEditor.updateSyntaxHighlighting();
        }
        
        localStorage.setItem('advancedEditorCode', code);
    } catch (error) {
        console.error('Format error:', error);
        alert('Format করতে সমস্যা হয়েছে। কোড check করুন।');
    }
}

// Format JavaScript Code (Improved)
function formatJavaScriptCode(code) {
    if (window.enhancedEditor && window.enhancedEditor.formatCode) {
        return window.enhancedEditor.formatCode(code);
    }
    
    // Fallback simple formatting
    let formatted = code;
    const lines = formatted.split('\n');
    let indentLevel = 0;
    const indentSize = 4;
    
    const formattedLines = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';
        
        // Decrease indent for closing braces
        if (trimmed.endsWith('}') || trimmed.endsWith(']')) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add indentation
        const indented = ' '.repeat(indentLevel * indentSize) + trimmed;
        
        // Increase indent for opening braces
        if (trimmed.endsWith('{') || trimmed.endsWith('[')) {
            indentLevel++;
        }
        
        return indented;
    });
    
    return formattedLines.join('\n').trim();
}

// Toggle Preview Panel
function togglePreviewPanel() {
    const container = document.querySelector('.advanced-editor-container');
    if (container) {
        container.classList.toggle('preview-hidden');
    }
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Get Example Code (Simplified and Clear)
function getExampleCode() {
    return `// ===== JavaScript Code Editor - সহজ উদাহরণ =====
// এই কোড run করলে Preview এবং Console-এ output দেখবেন

// 1. Console Output - Console Panel-এ দেখাবে
console.log('Hello, World!');
console.log('আমি JavaScript শিখছি!');

// 2. Variables
let name = 'Saddam';
let age = 25;
console.log('নাম:', name);
console.log('বয়স:', age);

// 3. Calculations
let sum = 10 + 20;
console.log('যোগফল:', sum);

// 4. DOM Manipulation - Preview Panel-এ HTML দেখাবে
document.body.innerHTML = '<h1 style="color: blue;">Welcome!</h1>';

// 5. Create Element
let div = document.createElement('div');
div.innerHTML = '<p>Name: ' + name + '</p>';
div.style.padding = '20px';
div.style.backgroundColor = '#f0f0f0';
document.body.appendChild(div);

// 6. Console Output
console.log('✅ Code executed successfully!');`;
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdvancedEditor);
} else {
    initAdvancedEditor();
}

