// ===== Code Playground Functionality =====

// Global function to open playground with code
function openPlayground(code = '') {
    const modal = document.getElementById('playgroundModal');
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('codeOutput');
    
    if (modal && editor) {
        editor.value = code;
        if (output) {
            output.textContent = '';
        }
        modal.classList.add('active');
        editor.focus();
    }
}

// Close playground modal
function closePlayground() {
    const modal = document.getElementById('playgroundModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Run code in sandbox
function runCode() {
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('codeOutput');
    
    if (!editor || !output) return;
    
    const code = editor.value;
    output.textContent = '';
    
    // Create sandbox iframe
    let sandbox = document.getElementById('codeSandbox');
    if (!sandbox) {
        sandbox = document.createElement('iframe');
        sandbox.id = 'codeSandbox';
        sandbox.style.display = 'none';
        sandbox.setAttribute('sandbox', 'allow-scripts');
        sandbox.srcdoc = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <script>
        // Override console methods to send messages to parent
        const sendMessage = (type, data) => {
            parent.postMessage({ type, data }, '*');
        };
        
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        const originalInfo = console.info;
        
        console.log = (...args) => {
            originalLog.apply(console, args);
            sendMessage('log', args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' '));
        };
        
        console.error = (...args) => {
            originalError.apply(console, args);
            sendMessage('error', args.join(' '));
        };
        
        console.warn = (...args) => {
            originalWarn.apply(console, args);
            sendMessage('warn', args.join(' '));
        };
        
        console.info = (...args) => {
            originalInfo.apply(console, args);
            sendMessage('info', args.join(' '));
        };
        
        // Listen for code execution messages
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'execute') {
                try {
                    // Execute the code
                    const result = new Function(event.data.code)();
                    if (result !== undefined) {
                        sendMessage('result', result);
                    }
                    sendMessage('done', 'Execution completed');
                } catch (error) {
                    sendMessage('error', error.toString());
                }
            }
        });
        
        // Send ready signal
        sendMessage('ready', 'Sandbox ready');
    <\/script>
</body>
</html>`;
        document.body.appendChild(sandbox);
    }
    
    // Wait for sandbox to be ready
    const checkReady = setInterval(() => {
        if (sandbox.contentWindow) {
            clearInterval(checkReady);
            executeCode();
        }
    }, 100);
    
    function executeCode() {
        try {
            sandbox.contentWindow.postMessage({
                type: 'execute',
                code: code
            }, '*');
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
            output.style.color = 'red';
        }
    }
}

// Listen for messages from sandbox
window.addEventListener('message', (event) => {
    const output = document.getElementById('codeOutput');
    if (!output) return;
    
    const { type, data } = event.data;
    
    switch (type) {
        case 'log':
            output.textContent += data + '\n';
            output.style.color = '#d4d4d4';
            break;
        case 'error':
            output.textContent += '❌ Error: ' + data + '\n';
            output.style.color = '#ff6b6b';
            break;
        case 'warn':
            output.textContent += '⚠️ Warning: ' + data + '\n';
            output.style.color = '#ffa500';
            break;
        case 'info':
            output.textContent += 'ℹ️ Info: ' + data + '\n';
            output.style.color = '#4ecdc4';
            break;
        case 'result':
            output.textContent += 'Result: ' + data + '\n';
            output.style.color = '#51cf66';
            break;
        case 'done':
            // Execution completed
            break;
    }
});

// Clear code
function clearCode() {
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('codeOutput');
    
    if (editor) {
        editor.value = '';
    }
    if (output) {
        output.textContent = '';
    }
}

// Reset code to default
function resetCode() {
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.value = '// আপনার কোড এখানে লিখুন\nconsole.log("Hello, JavaScript!");';
    }
    clearCode();
}

// Initialize playground when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Setup event listeners
    const runBtn = document.getElementById('runCodeBtn');
    const clearBtn = document.getElementById('clearCodeBtn');
    const resetBtn = document.getElementById('resetCodeBtn');
    const closeBtn = document.getElementById('closePlayground');
    const modal = document.getElementById('playgroundModal');
    
    if (runBtn) {
        runBtn.addEventListener('click', runCode);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCode);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetCode);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closePlayground);
    }
    
    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePlayground();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closePlayground();
        }
    });
    
    // Allow Ctrl+Enter to run code
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });
    }
});

