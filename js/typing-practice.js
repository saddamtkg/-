// ===== Typing Practice Functions =====
// This file contains all typing practice and guided project functionality

// Typing Practice Exercises Data
let typingExercises = {
    beginner: {
        variables: `let name = "Saddam";
let age = 25;
const country = "Bangladesh";
let isStudent = true;
console.log(name, age, country);`,
        conditionals: `let age = 20;
if (age >= 18) {
    console.log("প্রাপ্তবয়স্ক");
} else {
    console.log("অপ্রাপ্তবয়স্ক");
}`,
        loops: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
        functions: `function greet(name) {
    return "Hello, " + name;
}

let message = greet("Saddam");
console.log(message);`,
        arrays: `let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);
fruits.push("Orange");
console.log(fruits.length);`,
        objects: `let person = {
    name: "Saddam",
    age: 25,
    greet: function() {
        return "Hello, " + this.name;
    }
};
console.log(person.greet());`,
        strings: `let text = "Hello JavaScript";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());`,
        operators: `let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);`
    },
    intermediate: {
        variables: `let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(doubled, sum);`,
        conditionals: `let score = 85;
if (score >= 90) {
    console.log("A+");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else {
    console.log("C");
}`,
        loops: `let fruits = ["Apple", "Mango", "Banana"];
fruits.forEach(fruit => {
    console.log(fruit);
});

for (let fruit of fruits) {
    console.log(fruit);
}`,
        functions: `function calculate(a, b, operation) {
    return operation(a, b);
}

let add = (x, y) => x + y;
let result = calculate(5, 3, add);
console.log(result);`,
        arrays: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(n => n % 2 === 0);
let squared = numbers.map(n => n * n);
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(even, squared, sum);`,
        objects: `let person = {
    name: "Saddam",
    age: 25,
    skills: ["JavaScript", "Python"]
};

let { name, age } = person;
console.log(name, age);
console.log(person.skills);`,
        strings: `let text = "Hello World";
let upper = text.toUpperCase();
let lower = text.toLowerCase();
let index = text.indexOf("World");
let replaced = text.replace("World", "JavaScript");
console.log(upper, lower, index, replaced);`,
        date: `let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.toLocaleString());`,
        math: `let num1 = 4.7;
let num2 = 4.3;
console.log(Math.round(num1));
console.log(Math.floor(num1));
console.log(Math.ceil(num2));
console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));
console.log(Math.random());`,
        dom: `let element = document.getElementById('myId');
element.textContent = "Hello";
element.style.color = "red";
element.classList.add('active');`,
        events: `let button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log('Button clicked!');
});`
    },
    advanced: {
        variables: `const [a, b, c] = [1, 2, 3];
const { name, age } = { name: "Saddam", age: 25 };
let result = \`Name: \${name}, Age: \${age}\`;
console.log(result);`,
        conditionals: `let day = "Monday";
switch (day) {
    case "Monday":
        console.log("সোমবার");
        break;
    case "Tuesday":
        console.log("মঙ্গলবার");
        break;
    default:
        console.log("অন্যান্য");
}`,
        loops: `let numbers = [1, 2, 3, 4, 5];
let result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b, 0);
console.log(result);`,
        functions: `const asyncFunction = async () => {
    try {
        let data = await fetch('https://api.example.com/data');
        return await data.json();
    } catch (error) {
        console.error(error);
    }
};`,
        arrays: `let numbers = [1, 2, 3, 4, 5];
let result = numbers
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((a, b) => a + b, 0);
console.log(result);`,
        objects: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
}
let person = new Person("Saddam", 25);
console.log(person.greet());`,
        strings: `let text = "Hello JavaScript";
let words = text.split(" ");
let joined = words.join("-");
let sliced = text.slice(0, 5);
let includes = text.includes("Java");
console.log(words, joined, sliced, includes);`,
        date: `let now = new Date();
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let diff = tomorrow - now;
let hours = Math.floor(diff / (1000 * 60 * 60));
console.log(hours);`,
        math: `function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 100));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));`,
        async: `async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}`,
        promises: `let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});`,
        error: `try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Invalid calculation");
    }
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
}`,
        json: `let person = {
    name: "Saddam",
    age: 25
};
let json = JSON.stringify(person);
let parsed = JSON.parse(json);
console.log(json, parsed);`,
        closure: `function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log(counter());
console.log(counter());`,
        this: `let person = {
    name: "Saddam",
    greet: function() {
        return "Hello, " + this.name;
    }
};
console.log(person.greet());

function greet() {
    return "Hello, " + this.name;
}
let boundGreet = greet.bind(person);
console.log(boundGreet());`,
        regex: `let email = "test@example.com";
let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
let isValid = emailRegex.test(email);
console.log(isValid);`,
        localStorage: `localStorage.setItem('name', 'Saddam');
let name = localStorage.getItem('name');
console.log(name);

let person = { name: "Saddam", age: 25 };
localStorage.setItem('person', JSON.stringify(person));
let saved = JSON.parse(localStorage.getItem('person'));
console.log(saved);`,
        timers: `setTimeout(() => {
    console.log("Hello after 1 second");
}, 1000);

let intervalId = setInterval(() => {
    console.log("Every second");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);`,
        fetch: `async function getData() {
    try {
        let response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network error');
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}`,
        spread: `let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);

let obj1 = { name: "Saddam", age: 25 };
let obj2 = { city: "Dhaka", ...obj1 };
console.log(obj2);`,
        rest: `function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));`,
        defaultParams: `function greet(name = 'Guest', greeting = 'Hello') {
    return greeting + ', ' + name + '!';
}
console.log(greet());
console.log(greet('Saddam'));`,
        ternary: `let age = 20;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);

let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(grade);`,
        nullish: `let value1 = null;
let value2 = value1 ?? 'Default';
console.log(value2);

let count = 0;
let result = count ?? 10;
console.log(result);`,
        optional: `let user = {
    name: 'Saddam',
    address: {
        city: 'Dhaka'
    }
};
let city = user?.address?.city;
console.log(city);

let user2 = null;
let name = user2?.name;
console.log(name);`,
        find: `let users = [
    { id: 1, name: 'Saddam', age: 25 },
    { id: 2, name: 'John', age: 30 }
];
let user = users.find(u => u.id === 2);
console.log(user);

let userIndex = users.findIndex(u => u.name === 'John');
console.log(userIndex);`,
        someEvery: `let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(n => n % 2 === 0);
let allPositive = numbers.every(n => n > 0);
console.log(hasEven, allPositive);`,
        includes: `let fruits = ['apple', 'banana', 'orange'];
let hasApple = fruits.includes('apple');
console.log(hasApple);

let text = 'Hello World';
let hasHello = text.includes('Hello');
let startsWithHello = text.startsWith('Hello');
console.log(hasHello, startsWithHello);`,
        sort: `let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

let users = [
    { name: 'Saddam', age: 25 },
    { name: 'John', age: 30 }
];
let sortedByAge = users.sort((a, b) => a.age - b.age);
console.log(sortedByAge);`,
        objectMethods: `let person = {
    name: 'Saddam',
    age: 25,
    city: 'Dhaka'
};
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
console.log(keys, values, entries);`,
        recursion: `function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));`,
        callback: `function processData(data, callback) {
    let result = data * 2;
    callback(result);
}

processData(5, function(result) {
    console.log('Result:', result);
});`
    }
};

// Typing Practice State
let currentTypingExercise = null;
let typingStartTime = null;
let typingStats = { correct: 0, total: 0, errors: 0 };
let currentExerciseIndex = 0;
let currentDifficulty = 'beginner';

// Start Typing Practice
function startTypingPractice() {
    let difficultyEl = document.getElementById('typingDifficulty');
    let difficulty = difficultyEl ? difficultyEl.value : 'beginner';
    currentDifficulty = difficulty;
    
    let container = document.getElementById('typingPracticeContainer');
    let target = document.getElementById('typingTarget');
    let input = document.getElementById('typingInput');
    
    if (container && target && input) {
        container.style.display = 'block';
        let exercises = Object.keys(typingExercises[difficulty] || {});
        if (exercises.length > 0) {
            currentTypingExercise = typingExercises[difficulty][exercises[0]];
            currentExerciseIndex = 0;
            target.textContent = currentTypingExercise;
            input.value = '';
            input.focus();
            typingStartTime = Date.now();
            typingStats = { correct: 0, total: 0, errors: 0 };
            updateTypingStats();
            
            // Remove existing listener and add new one
            input.removeEventListener('input', checkTypingInRealTime);
            input.addEventListener('input', checkTypingInRealTime);
        }
    }
}

// Load Specific Typing Exercise
function loadTypingExercise(type) {
    let difficultyEl = document.getElementById('typingDifficulty');
    let difficulty = difficultyEl ? difficultyEl.value : 'beginner';
    currentDifficulty = difficulty;
    
    let container = document.getElementById('typingPracticeContainer');
    let target = document.getElementById('typingTarget');
    let input = document.getElementById('typingInput');
    
    if (container && typingExercises[difficulty] && typingExercises[difficulty][type]) {
        container.style.display = 'block';
        currentTypingExercise = typingExercises[difficulty][type];
        if (target) target.textContent = currentTypingExercise;
        if (input) {
            input.value = '';
            input.style.borderColor = '#ccc';
            input.focus();
        }
        typingStartTime = Date.now();
        typingStats = { correct: 0, total: 0, errors: 0 };
        updateTypingStats();
        
        let feedback = document.getElementById('typingFeedback');
        if (feedback) feedback.innerHTML = '';
        
        // Scroll to container
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Real-time Typing Check
function checkTypingInRealTime() {
    let input = document.getElementById('typingInput');
    let target = document.getElementById('typingTarget');
    let feedback = document.getElementById('typingFeedback');
    
    if (!input || !target || !currentTypingExercise) return;
    
    let typed = input.value;
    let targetText = currentTypingExercise;
    
    // Check character by character
    let correct = 0;
    let errors = 0;
    
    for (let i = 0; i < typed.length; i++) {
        if (i < targetText.length) {
            if (typed[i] === targetText[i]) {
                correct++;
            } else {
                errors++;
            }
        } else {
            errors++;
        }
    }
    
    typingStats.correct = correct;
    typingStats.errors = errors;
    typingStats.total = typed.length;
    
    // Visual feedback
    if (input) {
        if (errors === 0 && typed === targetText.substring(0, typed.length)) {
            input.style.borderColor = '#28a745';
        } else if (errors > 0) {
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#ffc107';
        }
    }
    
    updateTypingStats();
    
    // Check if complete
    if (typed.trim() === targetText.trim()) {
        if (feedback) {
            let timeTaken = Math.round((Date.now() - typingStartTime) / 1000);
            feedback.innerHTML = '<div class="alert alert-success">✅ সম্পূর্ণ! Excellent work! Time: ' + timeTaken + 's</div>';
            input.style.borderColor = '#28a745';
        }
    }
}

// Check Typing Progress
function checkTypingProgress() {
    let input = document.getElementById('typingInput');
    let feedback = document.getElementById('typingFeedback');
    
    if (!input || !currentTypingExercise) return;
    
    let typed = input.value.trim();
    let target = currentTypingExercise.trim();
    
    if (typed === target) {
        if (feedback) {
            let timeTaken = Math.round((Date.now() - typingStartTime) / 1000);
            feedback.innerHTML = '<div class="alert alert-success">✅ Perfect! You typed it correctly! Time: ' + timeTaken + 's</div>';
        }
    } else {
        let accuracy = calculateAccuracy(typed, target);
        if (feedback) {
            feedback.innerHTML = '<div class="alert alert-warning">⚠️ Accuracy: ' + accuracy + '%. Keep practicing! Try to match the code exactly.</div>';
        }
    }
}

// Calculate Accuracy
function calculateAccuracy(typed, target) {
    if (!target || target.length === 0) return 0;
    let matches = 0;
    let minLength = Math.min(typed.length, target.length);
    
    for (let i = 0; i < minLength; i++) {
        if (typed[i] === target[i]) matches++;
    }
    
    return Math.round((matches / target.length) * 100);
}

// Update Typing Stats
function updateTypingStats() {
    let progressEl = document.getElementById('typingProgress');
    let accuracyEl = document.getElementById('typingAccuracy');
    let timeEl = document.getElementById('typingTime');
    
    if (!currentTypingExercise) return;
    
    let progress = Math.round((typingStats.total / currentTypingExercise.length) * 100);
    let accuracy = typingStats.total > 0 ? Math.round((typingStats.correct / typingStats.total) * 100) : 0;
    let time = typingStartTime ? Math.round((Date.now() - typingStartTime) / 1000) : 0;
    
    if (progressEl) progressEl.textContent = progress + '%';
    if (accuracyEl) accuracyEl.textContent = accuracy + '%';
    if (timeEl) timeEl.textContent = time + 's';
}

// Reset Typing Practice
function resetTypingPractice() {
    let input = document.getElementById('typingInput');
    let feedback = document.getElementById('typingFeedback');
    
    if (input) {
        input.value = '';
        input.style.borderColor = '#ccc';
    }
    if (feedback) feedback.innerHTML = '';
    if (currentTypingExercise) {
        typingStartTime = Date.now();
        typingStats = { correct: 0, total: 0, errors: 0 };
        updateTypingStats();
        if (input) input.focus();
    }
}

// Show Typing Hint
function showTypingHint() {
    let feedback = document.getElementById('typingFeedback');
    if (feedback && currentTypingExercise) {
        let lines = currentTypingExercise.split('\n');
        let firstLine = lines[0] || currentTypingExercise.substring(0, 50);
        feedback.innerHTML = '<div class="alert alert-info">💡 Hint: Start with: <code>' + firstLine + '</code></div>';
    }
}

// Next Typing Exercise
function nextTypingExercise() {
    let difficultyEl = document.getElementById('typingDifficulty');
    let difficulty = difficultyEl ? difficultyEl.value : 'beginner';
    let exercises = Object.keys(typingExercises[difficulty] || {});
    
    if (currentExerciseIndex < exercises.length - 1) {
        currentExerciseIndex++;
        loadTypingExercise(exercises[currentExerciseIndex]);
    } else {
        alert('🎉 সব exercises complete! Well done! Start again or try a different difficulty level.');
        currentExerciseIndex = 0;
        loadTypingExercise(exercises[0]);
    }
}

// Practice Pattern
function practicePattern(patternType) {
    // Load pattern into typing practice
    let container = document.getElementById('typingPracticeContainer');
    if (container) {
        container.style.display = 'block';
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Load appropriate exercise based on pattern
    loadTypingExercise(patternType);
}

// ===== Guided Projects Functions =====

// Guided Projects Data
let guidedProjects = {
    calculator: {
        title: 'Calculator Project',
        description: 'একটি simple calculator তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure তৈরি করুন',
                description: 'প্রথমে HTML structure তৈরি করুন',
                code: `<!-- HTML -->
<div class="calculator">
    <input type="text" id="display" readonly>
    <div class="buttons">
        <button onclick="appendNumber('1')">1</button>
        <button onclick="appendNumber('2')">2</button>
        <button onclick="appendNumber('3')">3</button>
        <button onclick="appendOperator('+')">+</button>
        <button onclick="calculate()">=</button>
        <button onclick="clearDisplay()">C</button>
    </div>
</div>`,
                explanation: 'এই HTML structure calculator-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Variables এবং Functions declare করুন',
                description: 'Calculator-এর জন্য প্রয়োজনীয় variables এবং functions তৈরি করুন',
                code: `// JavaScript
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}`,
                explanation: 'এই functions calculator-এর basic functionality handle করবে।'
            },
            {
                step: 3,
                title: 'Calculate function তৈরি করুন',
                description: 'গণনা করার জন্য calculate function তৈরি করুন',
                code: `function calculate() {
    if (previousInput !== '' && currentInput !== '' && operator !== '') {
        let result;
        let prev = parseFloat(previousInput);
        let curr = parseFloat(currentInput);
        
        switch(operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        previousInput = '';
        operator = '';
        updateDisplay();
    }
}`,
                explanation: 'এই function mathematical operations perform করবে।'
            },
            {
                step: 4,
                title: 'CSS Styling যোগ করুন',
                description: 'Calculator-কে সুন্দর দেখানোর জন্য CSS যোগ করুন',
                code: `/* CSS */
.calculator {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 10px;
}

#display {
    width: 100%;
    padding: 10px;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: right;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 15px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #fff;
}

button:hover {
    background: #ddd;
}`,
                explanation: 'এই CSS calculator-কে সুন্দর এবং user-friendly করবে।'
            },
            {
                step: 5,
                title: 'Test করুন',
                description: 'Calculator test করুন এবং সব operations check করুন',
                code: `// Test cases
// 1. যোগ: 5 + 3 = 8
// 2. বিয়োগ: 10 - 4 = 6
// 3. গুণ: 6 * 7 = 42
// 4. ভাগ: 20 / 4 = 5

// আপনার calculator test করুন!`,
                explanation: 'এখন calculator ready! সব operations test করুন।'
            }
        ]
    },
    todo: {
        title: 'Todo List App',
        description: 'একটি Todo List app তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'Todo app-এর HTML structure তৈরি করুন',
                code: `<div class="todo-app">
    <h1>Todo List</h1>
    <input type="text" id="todoInput" placeholder="Add new todo">
    <button onclick="addTodo()">Add</button>
    <ul id="todoList"></ul>
</div>`,
                explanation: 'এই HTML todo app-এর structure তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Array এবং Functions',
                description: 'Todos store করার জন্য array এবং functions তৈরি করুন',
                code: `let todos = [];

function addTodo() {
    let input = document.getElementById('todoInput');
    let text = input.value.trim();
    
    if (text !== '') {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        input.value = '';
        renderTodos();
    }
}

function renderTodos() {
    let list = document.getElementById('todoList');
    list.innerHTML = '';
    
    todos.forEach(todo => {
        let li = document.createElement('li');
        li.innerHTML = \`
            <input type="checkbox" \${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(\${todo.id})">
            <span>\${todo.text}</span>
            <button onclick="deleteTodo(\${todo.id})">Delete</button>
        \`;
        list.appendChild(li);
    });
}`,
                explanation: 'এই functions todos add এবং display করবে।'
            },
            {
                step: 3,
                title: 'Toggle এবং Delete Functions',
                description: 'Todo complete এবং delete করার functions তৈরি করুন',
                code: `function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}`,
                explanation: 'এই functions todo complete এবং delete করবে।'
            },
            {
                step: 4,
                title: 'LocalStorage যোগ করুন',
                description: 'Todos save করার জন্য LocalStorage যোগ করুন',
                code: `function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let saved = localStorage.getItem('todos');
    if (saved) {
        todos = JSON.parse(saved);
        renderTodos();
    }
}

// Page load-এ todos load করুন
loadTodos();

// প্রতিবার change-এ save করুন
function addTodo() {
    let input = document.getElementById('todoInput');
    let text = input.value.trim();
    
    if (text !== '') {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        input.value = '';
        renderTodos();
        saveTodos(); // Save after add
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
    saveTodos(); // Save after toggle
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    saveTodos(); // Save after delete
}`,
                explanation: 'LocalStorage todos permanently save করবে।'
            },
            {
                step: 5,
                title: 'CSS Styling',
                description: 'Todo app-কে সুন্দর করার জন্য CSS যোগ করুন',
                code: `/* CSS */
.todo-app {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
}

#todoInput {
    width: 70%;
    padding: 10px;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    margin: 5px 0;
    background: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.completed {
    text-decoration: line-through;
    opacity: 0.6;
}`,
                explanation: 'CSS todo app-কে সুন্দর এবং organized করবে।'
            }
        ]
    },
    quotes: {
        title: 'Random Quote Generator',
        description: 'Random quote generator তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'Quotes Array তৈরি করুন',
                description: 'Quotes store করার জন্য array তৈরি করুন',
                code: `let quotes = [
    "জ্ঞান হলো শক্তি।",
    "শিখতে কখনো দেরি হয় না।",
    "Practice করলেই দক্ষতা আসে।",
    "Code করা মানে সমস্যা সমাধান করা।",
    "Consistency is the key to success!"
];`,
                explanation: 'এই array-এ quotes store করা হবে।'
            },
            {
                step: 2,
                title: 'HTML Structure',
                description: 'Quote display করার জন্য HTML তৈরি করুন',
                code: `<div class="quote-container">
    <h1>Random Quote Generator</h1>
    <div id="quoteDisplay">Click button to get a quote</div>
    <button onclick="getRandomQuote()">Get Quote</button>
</div>`,
                explanation: 'এই HTML quote display করবে।'
            },
            {
                step: 3,
                title: 'Random Quote Function',
                description: 'Random quote select করার function তৈরি করুন',
                code: `function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').textContent = quote;
}`,
                explanation: 'এই function random quote select এবং display করবে।'
            },
            {
                step: 4,
                title: 'CSS Styling',
                description: 'Quote generator-কে সুন্দর করার জন্য CSS যোগ করুন',
                code: `/* CSS */
.quote-container {
    max-width: 600px;
    margin: 50px auto;
    text-align: center;
    padding: 30px;
}

#quoteDisplay {
    font-size: 24px;
    margin: 30px 0;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    padding: 15px 30px;
    font-size: 18px;
    background: #0056b3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #004494;
}`,
                explanation: 'CSS quote generator-কে attractive করবে।'
            }
        ]
    },
    timer: {
        title: 'Countdown Timer',
        description: 'একটি countdown timer তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'Timer display করার জন্য HTML তৈরি করুন',
                code: `<div class="timer-container">
    <h1>Countdown Timer</h1>
    <input type="number" id="minutes" placeholder="Minutes" min="0">
    <input type="number" id="seconds" placeholder="Seconds" min="0" max="59">
    <div id="display">00:00</div>
    <button onclick="startTimer()">Start</button>
    <button onclick="stopTimer()">Stop</button>
    <button onclick="resetTimer()">Reset</button>
</div>`,
                explanation: 'এই HTML timer-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Timer Variables',
                description: 'Timer control করার জন্য variables তৈরি করুন',
                code: `let timeLeft = 0;
let intervalId = null;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let display = minutes.toString().padStart(2, '0') + ':' + 
                  seconds.toString().padStart(2, '0');
    document.getElementById('display').textContent = display;
}`,
                explanation: 'এই variables timer control করবে।'
            },
            {
                step: 3,
                title: 'Start Timer Function',
                description: 'Timer start করার function তৈরি করুন',
                code: `function startTimer() {
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
    
    if (timeLeft === 0) {
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;
        timeLeft = minutes * 60 + seconds;
    }
    
    if (timeLeft > 0 && !intervalId) {
        intervalId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                stopTimer();
                alert('Time is up!');
            }
        }, 1000);
    }
}`,
                explanation: 'এই function timer start করবে।'
            },
            {
                step: 4,
                title: 'Stop এবং Reset Functions',
                description: 'Timer stop এবং reset করার functions তৈরি করুন',
                code: `function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetTimer() {
    stopTimer();
    timeLeft = 0;
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    updateDisplay();
}`,
                explanation: 'এই functions timer stop এবং reset করবে।'
            },
            {
                step: 5,
                title: 'CSS Styling',
                description: 'Timer-কে সুন্দর করার জন্য CSS যোগ করুন',
                code: `/* CSS */
.timer-container {
    max-width: 400px;
    margin: 50px auto;
    text-align: center;
    padding: 30px;
}

#display {
    font-size: 48px;
    margin: 20px 0;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 10px;
}

input {
    padding: 10px;
    margin: 5px;
    width: 80px;
    font-size: 18px;
}

button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #0056b3;
    color: white;
}

button:hover {
    background: #004494;
}`,
                explanation: 'CSS timer-কে professional look দেবে।'
            },
            {
                step: 6,
                title: 'Test করুন',
                description: 'Timer test করুন',
                code: `// Test cases:
// 1. 1 minute timer set করুন এবং start করুন
// 2. Timer stop করুন
// 3. Timer reset করুন
// 4. Timer complete হলে alert দেখুন

// আপনার timer test করুন!`,
                explanation: 'Timer ready! এখন test করুন।'
            }
        ]
    },
    password: {
        title: 'Password Generator',
        description: 'একটি password generator তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'Characters Array',
                description: 'Password-এর জন্য characters array তৈরি করুন',
                code: `let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';`,
                explanation: 'এই characters password generate করতে ব্যবহার হবে।'
            },
            {
                step: 2,
                title: 'HTML Structure',
                description: 'Password generator-এর HTML তৈরি করুন',
                code: `<div class="password-generator">
    <h1>Password Generator</h1>
    <input type="number" id="length" value="12" min="4" max="32">
    <label><input type="checkbox" id="uppercase" checked> Uppercase</label>
    <label><input type="checkbox" id="lowercase" checked> Lowercase</label>
    <label><input type="checkbox" id="numbers" checked> Numbers</label>
    <label><input type="checkbox" id="symbols"> Symbols</label>
    <button onclick="generatePassword()">Generate</button>
    <input type="text" id="password" readonly>
    <button onclick="copyPassword()">Copy</button>
</div>`,
                explanation: 'এই HTML password generator-এর UI তৈরি করবে।'
            },
            {
                step: 3,
                title: 'Generate Password Function',
                description: 'Password generate করার function তৈরি করুন',
                code: `function generatePassword() {
    let length = parseInt(document.getElementById('length').value);
    let useUppercase = document.getElementById('uppercase').checked;
    let useLowercase = document.getElementById('lowercase').checked;
    let useNumbers = document.getElementById('numbers').checked;
    let useSymbols = document.getElementById('symbols').checked;
    
    let chars = '';
    if (useUppercase) chars += uppercase;
    if (useLowercase) chars += lowercase;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;
    
    if (chars === '') {
        alert('Select at least one option!');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById('password').value = password;
}`,
                explanation: 'এই function random password generate করবে।'
            },
            {
                step: 4,
                title: 'Copy Function',
                description: 'Password copy করার function তৈরি করুন',
                code: `function copyPassword() {
    let passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied!');
}`,
                explanation: 'এই function password clipboard-এ copy করবে।'
            }
        ]
    },
    bmi: {
        title: 'BMI Calculator',
        description: 'BMI (Body Mass Index) calculator তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'BMI calculator-এর HTML তৈরি করুন',
                code: `<div class="bmi-calculator">
    <h1>BMI Calculator</h1>
    <input type="number" id="weight" placeholder="Weight (kg)">
    <input type="number" id="height" placeholder="Height (cm)">
    <button onclick="calculateBMI()">Calculate</button>
    <div id="result"></div>
</div>`,
                explanation: 'এই HTML BMI calculator-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Calculate BMI Function',
                description: 'BMI calculate করার function তৈরি করুন',
                code: `function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    if (!weight || !height) {
        alert('Please enter weight and height!');
        return;
    }
    
    // Convert height from cm to meters
    height = height / 100;
    
    // BMI formula: weight / (height * height)
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    
    document.getElementById('result').innerHTML = \`
        <h3>BMI: \${bmi}</h3>
        <p>Category: \${category}</p>
    \`;
}`,
                explanation: 'এই function BMI calculate এবং category determine করবে।'
            }
        ]
    },
    stopwatch: {
        title: 'Stopwatch',
        description: 'একটি stopwatch তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'Stopwatch-এর HTML তৈরি করুন',
                code: `<div class="stopwatch">
    <h1>Stopwatch</h1>
    <div id="display">00:00:00</div>
    <button onclick="startStopwatch()">Start</button>
    <button onclick="stopStopwatch()">Stop</button>
    <button onclick="resetStopwatch()">Reset</button>
</div>`,
                explanation: 'এই HTML stopwatch-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Stopwatch Variables',
                description: 'Stopwatch control করার জন্য variables তৈরি করুন',
                code: `let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let running = false;`,
                explanation: 'এই variables stopwatch control করবে।'
            },
            {
                step: 3,
                title: 'Start Function',
                description: 'Stopwatch start করার function তৈরি করুন',
                code: `function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateDisplay, 10);
        running = true;
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    let ms = Math.floor(elapsedTime % 1000 / 10);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let min = Math.floor(elapsedTime / 1000 / 60);
    
    document.getElementById('display').textContent = 
        min.toString().padStart(2, '0') + ':' +
        sec.toString().padStart(2, '0') + ':' +
        ms.toString().padStart(2, '0');
}`,
                explanation: 'এই functions stopwatch start এবং display update করবে।'
            },
            {
                step: 4,
                title: 'Stop এবং Reset Functions',
                description: 'Stopwatch stop এবং reset করার functions তৈরি করুন',
                code: `function stopStopwatch() {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(intervalId);
    running = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
}`,
                explanation: 'এই functions stopwatch stop এবং reset করবে।'
            }
        ]
    },
    converter: {
        title: 'Unit Converter',
        description: 'একটি unit converter তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'Unit converter-এর HTML তৈরি করুন',
                code: `<div class="converter">
    <h1>Unit Converter</h1>
    <input type="number" id="value" placeholder="Enter value">
    <select id="fromUnit">
        <option value="km">Kilometers</option>
        <option value="m">Meters</option>
        <option value="cm">Centimeters</option>
    </select>
    <span>to</span>
    <select id="toUnit">
        <option value="km">Kilometers</option>
        <option value="m">Meters</option>
        <option value="cm">Centimeters</option>
    </select>
    <button onclick="convert()">Convert</button>
    <div id="result"></div>
</div>`,
                explanation: 'এই HTML unit converter-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Conversion Function',
                description: 'Unit convert করার function তৈরি করুন',
                code: `function convert() {
    let value = parseFloat(document.getElementById('value').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    
    if (!value) {
        alert('Please enter a value!');
        return;
    }
    
    // Convert to meters first
    let meters = 0;
    if (fromUnit === 'km') meters = value * 1000;
    else if (fromUnit === 'm') meters = value;
    else if (fromUnit === 'cm') meters = value / 100;
    
    // Convert from meters to target unit
    let result = 0;
    if (toUnit === 'km') result = meters / 1000;
    else if (toUnit === 'm') result = meters;
    else if (toUnit === 'cm') result = meters * 100;
    
    document.getElementById('result').textContent = 
        value + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;
}`,
                explanation: 'এই function unit convert করবে।'
            }
        ]
    },
    notes: {
        title: 'Note Taking App',
        description: 'একটি note taking app তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'Notes app-এর HTML তৈরি করুন',
                code: `<div class="notes-app">
    <h1>Notes App</h1>
    <textarea id="noteInput" placeholder="Write your note..."></textarea>
    <button onclick="addNote()">Add Note</button>
    <div id="notesList"></div>
</div>`,
                explanation: 'এই HTML notes app-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Notes Array এবং Functions',
                description: 'Notes store করার জন্য array এবং functions তৈরি করুন',
                code: `let notes = [];

function addNote() {
    let input = document.getElementById('noteInput');
    let text = input.value.trim();
    
    if (text !== '') {
        notes.push({
            id: Date.now(),
            text: text,
            date: new Date().toLocaleString()
        });
        input.value = '';
        renderNotes();
    }
}

function renderNotes() {
    let list = document.getElementById('notesList');
    list.innerHTML = '';
    
    notes.forEach(note => {
        let div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = \`
            <p>\${note.text}</p>
            <small>\${note.date}</small>
            <button onclick="deleteNote(\${note.id})">Delete</button>
        \`;
        list.appendChild(div);
    });
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}`,
                explanation: 'এই functions notes add, display এবং delete করবে।'
            }
        ]
    },
    quiz: {
        title: 'Quiz App',
        description: 'একটি quiz app তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'Questions Array',
                description: 'Quiz questions store করার জন্য array তৈরি করুন',
                code: `let questions = [
    {
        question: "JavaScript-এর full form কী?",
        options: ["Java Script", "Just Script", "JavaScript is a trademark", "None"],
        correct: 2
    },
    {
        question: "কোন keyword variable declare করতে ব্যবহৃত হয়?",
        options: ["var", "let", "const", "সবগুলো"],
        correct: 3
    }
];`,
                explanation: 'এই array-এ quiz questions store করা হবে।'
            },
            {
                step: 2,
                title: 'HTML Structure',
                description: 'Quiz app-এর HTML তৈরি করুন',
                code: `<div class="quiz-app">
    <h1>Quiz App</h1>
    <div id="question"></div>
    <div id="options"></div>
    <button onclick="nextQuestion()">Next</button>
    <div id="score"></div>
</div>`,
                explanation: 'এই HTML quiz app-এর UI তৈরি করবে।'
            },
            {
                step: 3,
                title: 'Quiz Functions',
                description: 'Quiz display এবং check করার functions তৈরি করুন',
                code: `let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('question').textContent = 'Quiz Complete!';
        document.getElementById('score').textContent = 'Score: ' + score + '/' + questions.length;
        return;
    }
    
    let q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    
    let optionsHtml = '';
    q.options.forEach((option, index) => {
        optionsHtml += \`<button onclick="selectAnswer(\${index})">\${option}</button>\`;
    });
    document.getElementById('options').innerHTML = optionsHtml;
}

function selectAnswer(selected) {
    let q = questions[currentQuestion];
    if (selected === q.correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

loadQuestion();`,
                explanation: 'এই functions quiz display এবং answer check করবে।'
            }
        ]
    },
    pomodoro: {
        title: 'Pomodoro Timer',
        description: 'একটি Pomodoro timer তৈরি করুন',
        steps: [
            {
                step: 1,
                title: 'HTML Structure',
                description: 'Pomodoro timer-এর HTML তৈরি করুন',
                code: `<div class="pomodoro">
    <h1>Pomodoro Timer</h1>
    <div id="timer">25:00</div>
    <button onclick="startPomodoro()">Start</button>
    <button onclick="pausePomodoro()">Pause</button>
    <button onclick="resetPomodoro()">Reset</button>
    <div id="session">Session: 1</div>
</div>`,
                explanation: 'এই HTML Pomodoro timer-এর UI তৈরি করবে।'
            },
            {
                step: 2,
                title: 'Pomodoro Variables',
                description: 'Pomodoro control করার জন্য variables তৈরি করুন',
                code: `let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let timeLeft = workTime;
let isBreak = false;
let session = 1;
let intervalId = null;`,
                explanation: 'এই variables Pomodoro timer control করবে।'
            },
            {
                step: 3,
                title: 'Timer Functions',
                description: 'Pomodoro start, pause এবং reset করার functions তৈরি করুন',
                code: `function startPomodoro() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                if (isBreak) {
                    isBreak = false;
                    timeLeft = workTime;
                    session++;
                } else {
                    isBreak = true;
                    timeLeft = breakTime;
                }
                document.getElementById('session').textContent = 'Session: ' + session;
            }
        }, 1000);
    }
}

function pausePomodoro() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetPomodoro() {
    clearInterval(intervalId);
    intervalId = null;
    isBreak = false;
    timeLeft = workTime;
    session = 1;
    updateDisplay();
    document.getElementById('session').textContent = 'Session: 1';
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
}`,
                explanation: 'এই functions Pomodoro timer control করবে।'
            }
        ]
    }
};

// Guided Project State
let currentProject = null;
let currentStepIndex = 0;

// Start Guided Project
function startGuidedProject(projectName) {
    if (guidedProjects[projectName]) {
        currentProject = guidedProjects[projectName];
        currentStepIndex = 0;
        displayProjectStep();
        
        let container = document.getElementById('guidedProjectContainer');
        if (container) {
            container.style.display = 'block';
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        alert('Project not found!');
    }
}

// Display Project Step
function displayProjectStep() {
    if (!currentProject || !currentProject.steps) return;
    
    let step = currentProject.steps[currentStepIndex];
    let titleEl = document.getElementById('projectTitle');
    let stepsEl = document.getElementById('projectSteps');
    
    if (titleEl && step) {
        titleEl.textContent = currentProject.title + ' - Step ' + step.step + ' of ' + currentProject.steps.length;
    }
    
    if (stepsEl && step) {
        // Escape code for display
        let escapedCode = step.code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        
        stepsEl.innerHTML = `
            <h4>${step.title}</h4>
            <p><strong>Description:</strong> ${step.description}</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <strong>Code:</strong>
                <pre style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 5px; overflow-x: auto; position: relative;"><code>${escapedCode}</code></pre>
                <button class="btn btn-success" onclick="copyStepCode()" style="margin-top: 10px;">📋 Copy Code</button>
                <button class="btn btn-primary" onclick="runStepCode()" style="margin-top: 10px; margin-left: 10px;">▶ Run in Playground</button>
            </div>
            <div class="alert alert-info" style="margin-top: 15px;">
                <strong>💡 Explanation:</strong> ${step.explanation}
            </div>
        `;
    }
}

// Next Step
function nextStep() {
    if (currentProject && currentProject.steps) {
        if (currentStepIndex < currentProject.steps.length - 1) {
            currentStepIndex++;
            displayProjectStep();
        } else {
            alert('🎉 Congratulations! Project complete! আপনি এখন নিজে নিজে এই project তৈরি করতে পারবেন!');
        }
    }
}

// Previous Step
function previousStep() {
    if (currentProject && currentStepIndex > 0) {
        currentStepIndex--;
        displayProjectStep();
    }
}

// Close Guided Project
function closeGuidedProject() {
    let container = document.getElementById('guidedProjectContainer');
    if (container) {
        container.style.display = 'none';
    }
    currentProject = null;
    currentStepIndex = 0;
}

// Copy Step Code
function copyStepCode() {
    if (currentProject && currentProject.steps) {
        let step = currentProject.steps[currentStepIndex];
        if (step && step.code) {
            navigator.clipboard.writeText(step.code).then(() => {
                alert('✅ Code copied to clipboard! এখন আপনি এটি আপনার editor-এ paste করতে পারেন।');
            }).catch(err => {
                console.error('Failed to copy:', err);
                // Fallback for older browsers
                let textarea = document.createElement('textarea');
                textarea.value = step.code;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('✅ Code copied to clipboard!');
            });
        }
    }
}

// Run Step Code in Playground
function runStepCode() {
    if (currentProject && currentProject.steps) {
        let step = currentProject.steps[currentStepIndex];
        if (step && step.code) {
            let code = step.code;
            
            // Check if it's HTML, CSS, or JavaScript
            if (code.includes('<!-- HTML -->') || code.includes('<div') || code.includes('<input')) {
                alert('এই কোডটি HTML। এটি playground-এ run করা যায় না। অনুগ্রহ করে HTML file-এ add করুন।');
                return;
            }
            
            if (code.includes('/* CSS */') || code.includes('.calculator') || code.includes('.todo-app')) {
                alert('এই কোডটি CSS। এটি playground-এ run করা যায় না। অনুগ্রহ করে CSS file-এ add করুন।');
                return;
            }
            
            // Extract JavaScript if it's in script tags
            if (code.includes('<script>')) {
                let match = code.match(/<script>([\s\S]*?)<\/script>/);
                if (match) {
                    code = match[1].trim();
                }
            }
            
            // Remove HTML comments
            code = code.replace(/<!--[\s\S]*?-->/g, '');
            
            // Open playground with JavaScript code
            if (typeof openPlayground === 'function') {
                // Escape for playground function call
                let escapedCode = code
                    .replace(/\\/g, '\\\\')
                    .replace(/'/g, "\\'")
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '')
                    .replace(/\`/g, '\\`');
                
                openPlayground(escapedCode);
            } else {
                alert('Playground is not available. Please refresh the page.');
            }
        }
    }
}

