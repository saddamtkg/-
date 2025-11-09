# 💻 Advanced Code Editor ব্যবহার গাইড

## 📋 সুচিপত্র
1. [কিভাবে ব্যবহার করবেন](#কিভাবে-ব্যবহার-করবেন)
2. [কোড উদাহরণ](#কোড-উদাহরণ)
3. [Preview এবং Console](#preview-এবং-console)
4. [Features](#features)

## 🚀 কিভাবে ব্যবহার করবেন

### 1. Editor খোলা
- নিচ-ডান কোণে **💻 Floating Button**-এ ক্লিক করুন
- অথবা keyboard shortcut ব্যবহার করুন

### 2. কোড লিখুন
- Editor-এ আপনার JavaScript কোড লিখুন
- Line numbers automatically দেখাবে
- Tab key দিয়ে 4 spaces indent হবে

### 3. কোড Run করুন
- **▶ Run** button-এ ক্লিক করুন
- অথবা `Ctrl + Enter` (soon)

### 4. Output দেখুন
- **Preview Panel**: HTML/DOM output দেখাবে
- **Console Panel**: console.log, error, warn output দেখাবে

## 💡 কোড উদাহরণ

### উদাহরণ 1: Basic Console Log
```javascript
console.log('Hello, World!');
console.log('আমি JavaScript শিখছি!');
```

**Output:**
- Console: `Hello, World!`, `আমি JavaScript শিখছি!`

### উদাহরণ 2: Variables এবং Calculations
```javascript
let name = 'Saddam';
let age = 25;
let sum = 10 + 20;

console.log('নাম:', name);
console.log('বয়স:', age);
console.log('যোগফল:', sum);
```

**Output:**
- Console: `নাম: Saddam`, `বয়স: 25`, `যোগফল: 30`

### উদাহরণ 3: DOM Manipulation (Preview-এ দেখাবে)
```javascript
// Preview-এ HTML দেখাবে
document.body.innerHTML = '<h1 style="color: blue;">Welcome!</h1>';

// Element তৈরি
let div = document.createElement('div');
div.textContent = 'Hello from JavaScript!';
div.style.padding = '20px';
div.style.backgroundColor = '#f0f0f0';
document.body.appendChild(div);
```

**Output:**
- Preview: Heading এবং styled div দেখাবে
- Console: কোন output নেই (DOM change only)

### উদাহরণ 4: Arrays এবং Objects
```javascript
let fruits = ['আপেল', 'কলা', 'আম'];
console.log('ফল:', fruits);

let person = {
    name: 'Saddam',
    age: 25
};
console.log('ব্যক্তি:', person);
```

**Output:**
- Console: Array এবং Object দেখাবে

### উদাহরণ 5: Functions
```javascript
function greet(name) {
    return 'Hello, ' + name + '!';
}

let message = greet('Saddam');
console.log(message);
```

**Output:**
- Console: `Hello, Saddam!`

### উদাহরণ 6: Array Methods
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let even = numbers.filter(n => n % 2 === 0);

console.log('দ্বিগুণ:', doubled);
console.log('জোড় সংখ্যা:', even);
```

**Output:**
- Console: `দ্বিগুণ: [2, 4, 6, 8, 10]`, `জোড় সংখ্যা: [2, 4]`

### উদাহরণ 7: Complete Example (Preview + Console)
```javascript
// Console output
console.log('Starting...');

// Variables
let name = 'Saddam';
let age = 25;

// DOM Manipulation - Preview-এ দেখাবে
document.body.innerHTML = '<h1>Welcome, ' + name + '!</h1>';

// Create card
let card = document.createElement('div');
card.style.padding = '20px';
card.style.backgroundColor = '#e3f2fd';
card.style.borderRadius = '10px';
card.innerHTML = '<p>Name: ' + name + '</p><p>Age: ' + age + '</p>';
document.body.appendChild(card);

// Console output
console.log('Name:', name);
console.log('Age:', age);
console.log('Done!');
```

**Output:**
- Preview: Heading এবং styled card দেখাবে
- Console: সব console.log messages দেখাবে

## 📊 Preview এবং Console

### Preview Panel
- **HTML Output**: DOM manipulation এর result দেখাবে
- **Real-time Updates**: DOM change হলে automatically update হবে
- **Styling Support**: CSS styles apply হবে

### Console Panel
- **console.log()**: Normal messages
- **console.error()**: Error messages (red)
- **console.warn()**: Warning messages (yellow)
- **console.info()**: Info messages (blue)

### Console Output Types
```javascript
console.log('Normal message');      // White
console.error('Error message');     // Red
console.warn('Warning message');    // Yellow
console.info('Info message');       // Blue
```

## 🎯 Features

### 1. Line Numbers
- প্রতিটি line এর number automatically দেখাবে
- Scroll করলে line numbers scroll হবে

### 2. Auto-indent
- Enter press করলে automatically indent হবে
- `{` পরে Enter press করলে extra indent হবে

### 3. Tab Support
- Tab key press করলে 4 spaces add হবে
- Multi-line selection support

### 4. Auto-save
- কোড automatically localStorage-এ save হবে
- Page refresh করলে কোড restore হবে

### 5. Format Code
- **📝 Format** button-এ ক্লিক করলে কোড format হবে
- Spaces এবং indentation fix হবে

### 6. Clear Editor
- **🗑️ Clear** button-এ ক্লিক করলে editor clear হবে
- Confirmation dialog দেখাবে

### 7. Toggle Preview
- **👁️ Preview** button-এ ক্লিক করলে preview panel hide/show হবে
- More space for editor

## 🔥 Advanced Examples

### Example 1: Interactive Button
```javascript
// Preview-এ button তৈরি
let button = document.createElement('button');
button.textContent = 'Click Me!';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#0056b3';
button.style.color = 'white';
button.onclick = function() {
    alert('Button clicked!');
    console.log('Button clicked!');
};
document.body.appendChild(button);
```

### Example 2: Dynamic List
```javascript
let items = ['Item 1', 'Item 2', 'Item 3'];
let list = document.createElement('ul');

items.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});

document.body.appendChild(list);
console.log('List created with', items.length, 'items');
```

### Example 3: Form Elements
```javascript
// Form তৈরি
let form = document.createElement('form');
form.innerHTML = `
    <input type="text" placeholder="Name" id="nameInput">
    <button type="submit">Submit</button>
`;
form.onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById('nameInput').value;
    console.log('Form submitted with name:', name);
    alert('Hello, ' + name + '!');
};
document.body.appendChild(form);
```

### Example 4: Error Handling
```javascript
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error('Division by zero');
    }
    console.log('Result:', result);
} catch (error) {
    console.error('Error:', error.message);
}
```

### Example 5: Date এবং Time
```javascript
let now = new Date();
console.log('বর্তমান তারিখ:', now.toLocaleDateString('bn-BD'));
console.log('বর্তমান সময়:', now.toLocaleTimeString('bn-BD'));

// Preview-এ date দেখান
let dateDiv = document.createElement('div');
dateDiv.innerHTML = '<p>Date: ' + now.toLocaleDateString() + '</p>';
dateDiv.innerHTML += '<p>Time: ' + now.toLocaleTimeString() + '</p>';
document.body.appendChild(dateDiv);
```

## 🎨 Styling Tips

### CSS in JavaScript
```javascript
let div = document.createElement('div');
div.style.padding = '20px';
div.style.backgroundColor = '#f0f0f0';
div.style.borderRadius = '10px';
div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
document.body.appendChild(div);
```

### Inline Styles
```javascript
document.body.innerHTML = '<h1 style="color: blue; font-size: 24px;">Hello</h1>';
```

## 📝 Tips

1. **Console ব্যবহার**: Debugging এর জন্য console.log() ব্যবহার করুন
2. **Preview দেখুন**: DOM manipulation এর result preview-এ দেখবেন
3. **Error Handling**: try-catch ব্যবহার করুন errors handle করতে
4. **Auto-save**: কোড automatically save হবে, worry করবেন না
5. **Format Code**: কোড messy হলে Format button ব্যবহার করুন

## 🚨 Common Issues

### Issue 1: Preview দেখাচ্ছে না
**Solution**: কোড run করুন এবং DOM manipulation check করুন

### Issue 2: Console output দেখাচ্ছে না
**Solution**: console.log(), console.error() etc. ব্যবহার করুন

### Issue 3: Code save হচ্ছে না
**Solution**: Auto-save 1 second পরে হয়, wait করুন

## 🎓 Learning Path

1. **Start with**: Basic console.log
2. **Then**: Variables এবং calculations
3. **Then**: DOM manipulation
4. **Then**: Functions এবং arrays
5. **Then**: Advanced topics

## 📚 Resources

- JavaScript MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/

---

**Happy Coding! 🎉**

