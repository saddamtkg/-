// ===== সমস্ত লেসন কন্টেন্ট =====
const lessons = [
    {
        id: 'welcome',
        title: '🎉 স্বাগতম',
        category: 'শুরু করুন'
    },
    {
        id: 'intro',
        title: '🔰 ১. জাভাস্ক্রিপ্ট পরিচিতি',
        category: 'বেসিক',
        content: `
            <h2>🔰 জাভাস্ক্রিপ্ট কী?</h2>
            <p>জাভাস্ক্রিপ্ট হলো একটি <b>প্রোগ্রামিং ল্যাংগুয়েজ</b> যা ওয়েব পেজকে <b>ডাইনামিক ও ইন্টার‌্যাক্টিভ</b> করে তোলে। এটি মূলত HTML ও CSS এর সাথে মিলে ওয়েবের ফ্রন্টএন্ড তৈরি করে।</p>
            
            <h3>ওয়েব ডেভেলপমেন্টে তিনটি স্তর:</h3>
            <ul>
                <li><b>HTML</b> → কাঠামো (Structure)</li>
                <li><b>CSS</b> → ডিজাইন (Style)</li>
                <li><b>JavaScript</b> → কাজ করানো (Behavior/Logic)</li>
            </ul>

            <h3>জাভাস্ক্রিপ্ট কোথায় ব্যবহার হয়?</h3>
            <ul>
                <li>ওয়েবসাইটে ইন্টার‌্যাক্টিভিটি যোগ করা</li>
                <li>ফর্ম ভ্যালিডেশন</li>
                <li>ডায়নামিক কন্টেন্ট তৈরি করা</li>
                <li>API থেকে ডাটা fetch করা</li>
                <li>গেম তৈরি করা</li>
                <li>মোবাইল অ্যাপ (React Native, Ionic)</li>
                <li>ব্যাকএন্ড (Node.js)</li>
            </ul>

            <div class="alert alert-info">
                <strong>💡 টিপ:</strong> জাভাস্ক্রিপ্ট হলো বিশ্বের সবচেয়ে জনপ্রিয় প্রোগ্রামিং ল্যাংগুয়েজগুলোর মধ্যে একটি!
            </div>
        `
    },
    {
        id: 'setup',
        title: '📍 ২. জাভাস্ক্রিপ্ট সেটআপ',
        category: 'বেসিক',
        content: `
            <h2>📍 কোথায় জাভাস্ক্রিপ্ট লিখব?</h2>
            <p>জাভাস্ক্রিপ্ট কোড লেখার তিনটি প্রধান উপায় আছে:</p>

            <h3>১. Inline JavaScript</h3>
            <p>HTML element এর ভিতরে সরাসরি:</p>
            <pre><code>&lt;button onclick="alert('Hello!')"&gt;ক্লিক করুন&lt;/button&gt;</code></pre>

            <h3>২. Internal JavaScript</h3>
            <p>HTML ফাইলের মধ্যে <code>&lt;script&gt;</code> ট্যাগে:</p>
            <pre><code>&lt;script&gt;
  console.log('Hello JavaScript!');
&lt;/script&gt;</code></pre>

            <h3>৩. External JavaScript</h3>
            <p>আলাদা .js ফাইলে রেখে HTML-এ লিংক করা:</p>
            <pre><code>&lt;script src="main.js"&gt;&lt;/script&gt;</code></pre>

            <div class="alert alert-success">
                <strong>✅ Best Practice:</strong> বড় প্রজেক্টের জন্য External JavaScript ব্যবহার করা ভালো।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('console.log(\\'Hello JavaScript!\\');\\nconsole.log(\\'আমি জাভাস্ক্রিপ্ট শিখছি!\\');')">💻 Try It</button>
        `
    },
    {
        id: 'variables',
        title: '💡 ৩. ভ্যারিয়েবল (Variables)',
        category: 'বেসিক',
        content: `
            <h2>💡 ভ্যারিয়েবল কী?</h2>
            <p>ভ্যারিয়েবল হলো এমন একটি <b>নাম দেওয়া স্টোরেজ</b> যেখানে আমরা ডাটা রাখি এবং পরে ব্যবহার করি।</p>

            <h3>ভ্যারিয়েবল ঘোষণার তিনটি উপায়:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>ব্যবহার</th>
                        <th>Scope</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>var</code></td>
                        <td>পুরনো পদ্ধতি (function scoped)</td>
                        <td>Function scope</td>
                    </tr>
                    <tr>
                        <td><code>let</code></td>
                        <td>আধুনিক পদ্ধতি (block scoped)</td>
                        <td>Block scope</td>
                    </tr>
                    <tr>
                        <td><code>const</code></td>
                        <td>স্থায়ী মান (পরিবর্তন করা যায় না)</td>
                        <td>Block scope</td>
                    </tr>
                </tbody>
            </table>

            <h3>উদাহরণ:</h3>
            <pre><code>// var (পুরনো, এখন কম ব্যবহার)
var name = "Saddam";

// let (পরিবর্তনযোগ্য)
let age = 25;
age = 26; // ✅ পরিবর্তন করা যায়

// const (স্থায়ী)
const country = "Bangladesh";
country = "India"; // ❌ Error! পরিবর্তন করা যায় না</code></pre>

            <div class="output-box">
                <strong>আউটপুট:</strong><br>
                <span id="varOutput"></span>
            </div>

            <div class="alert alert-warning">
                <strong>⚠️ মনে রাখুন:</strong> <code>const</code> ব্যবহার করা সবসময় ভালো যদি মান পরিবর্তনের প্রয়োজন না থাকে।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let name = \\'Saddam\\';\\nlet age = 25;\\nconst country = \\'Bangladesh\\';\\n\\nconsole.log(\\'নাম:\\', name);\\nconsole.log(\\'বয়স:\\', age);\\nconsole.log(\\'দেশ:\\', country);\\n\\n// age পরিবর্তন\\nage = 26;\\nconsole.log(\\'নতুন বয়স:\\', age);')">💻 Try It</button>
        `
    },
    {
        id: 'datatypes',
        title: '🧩 ৪. ডেটা টাইপ (Data Types)',
        category: 'বেসিক',
        content: `
            <h2>🧩 ডেটা টাইপ</h2>
            <p>জাভাস্ক্রিপ্টে বিভিন্ন ধরনের ডাটা রয়েছে। প্রতিটি ডাটার আলাদা ধরন আছে যাকে <b>Data Type</b> বলে।</p>

            <h3>Primitive Data Types (মৌলিক ধরন):</h3>
            <ul>
                <li><b>String</b> → টেক্সট ডাটা: <code>"Hello"</code>, <code>'World'</code></li>
                <li><b>Number</b> → সংখ্যা: <code>25</code>, <code>3.14</code></li>
                <li><b>Boolean</b> → সত্য/মিথ্যা: <code>true</code>, <code>false</code></li>
                <li><b>Undefined</b> → মান দেওয়া হয়নি</li>
                <li><b>Null</b> → ফাঁকা মান (ইচ্ছাকৃত)</li>
                <li><b>Symbol</b> → ইউনিক আইডেন্টিফায়ার</li>
                <li><b>BigInt</b> → বড় সংখ্যা</li>
            </ul>

            <h3>Reference Data Types (রেফারেন্স ধরন):</h3>
            <ul>
                <li><b>Object</b> → key-value pairs: <code>{name: "Saddam", age: 25}</code></li>
                <li><b>Array</b> → লিস্ট: <code>["Apple", "Mango", "Banana"]</code></li>
                <li><b>Function</b> → ফাংশন</li>
            </ul>

            <h3>উদাহরণ:</h3>
            <pre><code>// String
let text = "I love JavaScript";
let name = 'Saddam';

// Number
let age = 25;
let price = 99.99;

// Boolean
let isStudent = true;
let isWorking = false;

// Array
let fruits = ["Apple", "Mango", "Banana"];

// Object
let person = {
    name: "Saddam",
    age: 25,
    country: "Bangladesh"
};

// Undefined
let notDefined;

// Null
let emptyValue = null;

// typeof চেক করা
console.log(typeof text);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isStudent);   // "boolean"
console.log(typeof fruits);      // "object"
console.log(typeof person);      // "object"
console.log(typeof notDefined);  // "undefined"
console.log(typeof emptyValue);  // "object"</code></pre>

            <div class="output-box">
                <strong>আউটপুট:</strong><br>
                <span id="typeOutput"></span>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let text = \\'I love JavaScript\\';\\nlet age = 25;\\nlet isStudent = true;\\nlet fruits = [\\'Apple\\', \\'Mango\\', \\'Banana\\'];\\nlet person = { name: \\'Saddam\\', age: 25 };\\n\\nconsole.log(\\'String:\\', typeof text);\\nconsole.log(\\'Number:\\', typeof age);\\nconsole.log(\\'Boolean:\\', typeof isStudent);\\nconsole.log(\\'Array:\\', typeof fruits);\\nconsole.log(\\'Object:\\', typeof person);\\nconsole.log(\\'Fruits:\\', fruits);\\nconsole.log(\\'Person:\\', person);')">💻 Try It</button>
        `
    },
    {
        id: 'operators',
        title: '⚙️ ৫. অপারেটর (Operators)',
        category: 'বেসিক',
        content: `
            <h2>⚙️ অপারেটর</h2>
            <p>অপারেটর হলো এমন চিহ্ন যা দিয়ে আমরা ডাটার উপর বিভিন্ন অপারেশন করি।</p>

            <h3>১. Arithmetic Operators (গাণিতিক):</h3>
            <table>
                <thead>
                    <tr>
                        <th>অপারেটর</th>
                        <th>ব্যবহার</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>+</code></td><td>যোগ</td><td><code>5 + 3 = 8</code></td></tr>
                    <tr><td><code>-</code></td><td>বিয়োগ</td><td><code>5 - 3 = 2</code></td></tr>
                    <tr><td><code>*</code></td><td>গুণ</td><td><code>5 * 3 = 15</code></td></tr>
                    <tr><td><code>/</code></td><td>ভাগ</td><td><code>10 / 2 = 5</code></td></tr>
                    <tr><td><code>%</code></td><td>ভাগশেষ</td><td><code>10 % 3 = 1</code></td></tr>
                    <tr><td><code>**</code></td><td>ক্ষমতা</td><td><code>2 ** 3 = 8</code></td></tr>
                </tbody>
            </table>

            <h3>২. Comparison Operators (তুলনা):</h3>
            <table>
                <thead>
                    <tr>
                        <th>অপারেটর</th>
                        <th>ব্যবহার</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>==</code></td><td>সমান (value)</td><td><code>5 == "5" // true</code></td></tr>
                    <tr><td><code>===</code></td><td>সমান (value + type)</td><td><code>5 === "5" // false</code></td></tr>
                    <tr><td><code>!=</code></td><td>অসমান</td><td><code>5 != 3 // true</code></td></tr>
                    <tr><td><code>!==</code></td><td>অসমান (strict)</td><td><code>5 !== "5" // true</code></td></tr>
                    <tr><td><code>&gt;</code></td><td>বড়</td><td><code>5 > 3 // true</code></td></tr>
                    <tr><td><code>&lt;</code></td><td>ছোট</td><td><code>3 < 5 // true</code></td></tr>
                    <tr><td><code>&gt;=</code></td><td>বড় বা সমান</td><td><code>5 >= 5 // true</code></td></tr>
                    <tr><td><code>&lt;=</code></td><td>ছোট বা সমান</td><td><code>3 <= 5 // true</code></td></tr>
                </tbody>
            </table>

            <div class="alert alert-warning">
                <strong>⚠️ মনে রাখুন:</strong> সবসময় <code>===</code> এবং <code>!==</code> ব্যবহার করুন, <code>==</code> এবং <code>!=</code> নয়!
            </div>

            <h3>৩. Logical Operators (লজিক্যাল):</h3>
            <ul>
                <li><code>&&</code> → AND (এবং) - দুটোই true হলে true</li>
                <li><code>||</code> → OR (অথবা) - যেকোনো একটা true হলে true</li>
                <li><code>!</code> → NOT (না) - true কে false করে, false কে true করে</li>
            </ul>

            <pre><code>let age = 25;
let hasLicense = true;

// AND
if (age >= 18 && hasLicense) {
    console.log("গাড়ি চালাতে পারবেন");
}

// OR
if (age < 18 || !hasLicense) {
    console.log("গাড়ি চালাতে পারবেন না");
}

// NOT
console.log(!true);  // false
console.log(!false); // true</code></pre>

            <h3>৪. Assignment Operators (নির্ধারণ):</h3>
            <pre><code>let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x %= 5;  // x = x % 5 → 1</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let a = 10;\\nlet b = 5;\\n\\nconsole.log(\\'যোগ:\\', a + b);\\nconsole.log(\\'বিয়োগ:\\', a - b);\\nconsole.log(\\'গুণ:\\', a * b);\\nconsole.log(\\'ভাগ:\\', a / b);\\nconsole.log(\\'ভাগশেষ:\\', a % b);\\nconsole.log(\\'ক্ষমতা:\\', a ** 2);\\n\\nconsole.log(\\'\\n--- তুলনা ---\\');\\nconsole.log(\\'a > b:\\', a > b);\\nconsole.log(\\'a === 10:\\', a === 10);\\nconsole.log(\\'a !== b:\\', a !== b);\\n\\nconsole.log(\\'\\n--- লজিক্যাল ---\\');\\nconsole.log(\\'true && false:\\', true && false);\\nconsole.log(\\'true || false:\\', true || false);\\nconsole.log(\\'!true:\\', !true);')">💻 Try It</button>
        `
    },
    {
        id: 'conditionals',
        title: '🧠 ৬. কন্ডিশনাল স্টেটমেন্ট (Conditionals)',
        category: 'বেসিক',
        content: `
            <h2>🧠 কন্ডিশনাল স্টেটমেন্ট</h2>
            <p>কন্ডিশনাল স্টেটমেন্ট দিয়ে আমরা শর্ত অনুযায়ী কোড চালাতে পারি।</p>

            <h3>১. if Statement:</h3>
            <pre><code>let age = 20;

if (age >= 18) {
    console.log("প্রাপ্তবয়স্ক");
}</code></pre>

            <h3>২. if...else Statement:</h3>
            <pre><code>let age = 15;

if (age >= 18) {
    console.log("প্রাপ্তবয়স্ক");
} else {
    console.log("অপ্রাপ্তবয়স্ক");
}</code></pre>

            <h3>৩. if...else if...else Statement:</h3>
            <pre><code>let score = 85;

if (score >= 90) {
    console.log("A+");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else {
    console.log("F");
}</code></pre>

            <h3>৪. Ternary Operator (শর্টহ্যান্ড):</h3>
            <pre><code>let age = 20;
let status = age >= 18 ? "প্রাপ্তবয়স্ক" : "অপ্রাপ্তবয়স্ক";
console.log(status);</code></pre>

            <h3>৫. switch Statement:</h3>
            <pre><code>let day = "Monday";

switch (day) {
    case "Monday":
        console.log("সোমবার");
        break;
    case "Tuesday":
        console.log("মঙ্গলবার");
        break;
    case "Wednesday":
        console.log("বুধবার");
        break;
    default:
        console.log("অন্যান্য দিন");
}</code></pre>

            <div class="interactive-demo">
                <h3>ইন্টার‌্যাক্টিভ উদাহরণ:</h3>
                <input type="number" id="ageInput" placeholder="বয়স লিখুন" style="padding: 8px; margin: 10px 0; width: 200px;">
                <button class="btn btn-primary" onclick="checkAge()">চেক করুন</button>
                <div class="output-box" id="ageOutput"></div>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let age = 20;\\n\\nif (age >= 18) {\\n    console.log(\\'প্রাপ্তবয়স্ক\\');\\n} else {\\n    console.log(\\'অপ্রাপ্তবয়স্ক\\');\\n}\\n\\n// Ternary\\nlet status = age >= 18 ? \\'প্রাপ্তবয়স্ক\\' : \\'অপ্রাপ্তবয়স্ক\\';\\nconsole.log(\\'স্ট্যাটাস:\\', status);\\n\\n// Switch\\nlet day = \\'Monday\\';\\nswitch (day) {\\n    case \\'Monday\\':\\n        console.log(\\'সোমবার\\');\\n        break;\\n    case \\'Tuesday\\':\\n        console.log(\\'মঙ্গলবার\\');\\n        break;\\n    default:\\n        console.log(\\'অন্যান্য\\');\\n}')">💻 Try It</button>
        `
    },
    {
        id: 'loops',
        title: '🔁 ৭. লুপ (Loops)',
        category: 'বেসিক',
        content: `
            <h2>🔁 লুপ</h2>
            <p>লুপ দিয়ে একই কাজ বারবার করতে পারি।</p>

            <h3>১. for Loop:</h3>
            <pre><code>for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// আউটপুট: 1, 2, 3, 4, 5</code></pre>

            <h3>২. while Loop:</h3>
            <pre><code>let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}</code></pre>

            <h3>৩. do...while Loop:</h3>
            <pre><code>let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);</code></pre>

            <h3>৪. for...of Loop (Arrays):</h3>
            <pre><code>let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}</code></pre>

            <h3>৫. for...in Loop (Objects):</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25,
    country: "Bangladesh"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}</code></pre>

            <h3>৬. Array Methods (forEach, map, filter):</h3>
            <pre><code>let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => {
    console.log(num * 2);
});

// map (নতুন array তৈরি করে)
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter (শর্ত অনুযায়ী filter করে)
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]</code></pre>

            <h3>break এবং continue:</h3>
            <pre><code>// break - লুপ থামিয়ে দেয়
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// আউটপুট: 1, 2, 3, 4

// continue - বর্তমান iteration skip করে
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
// আউটপুট: 1, 3, 5, 7, 9 (শুধু বিজোড় সংখ্যা)</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// for loop\\nconsole.log(\\'--- for Loop ---\\');\\nfor (let i = 1; i <= 5; i++) {\\n    console.log(i);\\n}\\n\\n// for...of\\nconsole.log(\\'\\n--- for...of Loop ---\\');\\nlet fruits = [\\'Apple\\', \\'Mango\\', \\'Banana\\'];\\nfor (let fruit of fruits) {\\n    console.log(fruit);\\n}\\n\\n// forEach\\nconsole.log(\\'\\n--- forEach ---\\');\\nlet numbers = [1, 2, 3, 4, 5];\\nnumbers.forEach(num => console.log(num * 2));\\n\\n// map\\nconsole.log(\\'\\n--- map ---\\');\\nlet doubled = numbers.map(num => num * 2);\\nconsole.log(doubled);\\n\\n// filter\\nconsole.log(\\'\\n--- filter ---\\');\\nlet even = numbers.filter(num => num % 2 === 0);\\nconsole.log(even);')">💻 Try It</button>
        `
    },
    {
        id: 'functions',
        title: '🧩 ৮. ফাংশন (Functions)',
        category: 'বেসিক',
        content: `
            <h2>🧩 ফাংশন</h2>
            <p>ফাংশন হলো কোডের একটি ব্লক যা একবার লিখে বারবার ব্যবহার করা যায়।</p>

            <h3>১. Function Declaration:</h3>
            <pre><code>function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Saddam")); // "Hello, Saddam!"</code></pre>

            <h3>২. Function Expression:</h3>
            <pre><code>const greet = function(name) {
    return "Hello, " + name + "!";
};</code></pre>

            <h3>৩. Arrow Function (ES6):</h3>
            <pre><code>// Single line
const greet = (name) => "Hello, " + name + "!";

// Multiple lines
const add = (a, b) => {
    return a + b;
};

// No parameters
const sayHello = () => "Hello!";

// Single parameter (parentheses optional)
const double = x => x * 2;</code></pre>

            <h3>৪. Default Parameters:</h3>
            <pre><code>function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("Saddam")); // "Hello, Saddam!"</code></pre>

            <h3>৫. Rest Parameters:</h3>
            <pre><code>function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(1, 2, 3, 4, 5)); // 15</code></pre>

            <h3>৬. Higher-Order Functions:</h3>
            <pre><code>// Function as parameter
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));       // 8
console.log(calculate(5, 3, multiply));  // 15</code></pre>

            <h3>৭. IIFE (Immediately Invoked Function Expression):</h3>
            <pre><code>(function() {
    console.log("This runs immediately!");
})();</code></pre>

            <div class="alert alert-info">
                <strong>💡 টিপ:</strong> Arrow function-এ <code>this</code> keyword-এর behavior আলাদা। সাধারণ function-এ <code>this</code> caller object-কে নির্দেশ করে, কিন্তু arrow function-এ parent scope-এর <code>this</code> ধারণ করে।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Function Declaration\\nfunction greet(name) {\\n    return \\'Hello, \\' + name + \\'!\\';\\n}\\nconsole.log(greet(\\'Saddam\\'));\\n\\n// Arrow Function\\nconst add = (a, b) => a + b;\\nconsole.log(\\'যোগ:\\', add(5, 3));\\n\\n// Default Parameters\\nfunction multiply(a, b = 1) {\\n    return a * b;\\n}\\nconsole.log(\\'গুণ:\\', multiply(5));\\nconsole.log(\\'গুণ:\\', multiply(5, 3));\\n\\n// Rest Parameters\\nfunction sum(...numbers) {\\n    return numbers.reduce((a, b) => a + b, 0);\\n}\\nconsole.log(\\'যোগফল:\\', sum(1, 2, 3, 4, 5));')">💻 Try It</button>
        `
    },
    {
        id: 'arrays',
        title: '📊 ৯. অ্যারে (Arrays)',
        category: 'বেসিক',
        content: `
            <h2>📊 অ্যারে</h2>
            <p>অ্যারে হলো একাধিক ডাটা রাখার একটি লিস্ট।</p>

            <h3>অ্যারে তৈরি করা:</h3>
            <pre><code>// Method 1: Array Literal
let fruits = ["Apple", "Mango", "Banana"];

// Method 2: Array Constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Empty Array
let empty = [];</code></pre>

            <h3>অ্যারে Access করা:</h3>
            <pre><code>let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // "Apple" (index 0 থেকে শুরু)
console.log(fruits[1]); // "Mango"
console.log(fruits[2]); // "Banana"
console.log(fruits.length); // 3</code></pre>

            <h3>অ্যারে Methods:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>ব্যবহার</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>push()</code></td><td>শেষে যোগ করা</td><td><code>fruits.push("Orange")</code></td></tr>
                    <tr><td><code>pop()</code></td><td>শেষ থেকে সরানো</td><td><code>fruits.pop()</code></td></tr>
                    <tr><td><code>shift()</code></td><td>শুরু থেকে সরানো</td><td><code>fruits.shift()</code></td></tr>
                    <tr><td><code>unshift()</code></td><td>শুরুতে যোগ করা</td><td><code>fruits.unshift("Grape")</code></td></tr>
                    <tr><td><code>slice()</code></td><td>কিছু অংশ নেওয়া</td><td><code>fruits.slice(1, 3)</code></td></tr>
                    <tr><td><code>splice()</code></td><td>যোগ/সরানো</td><td><code>fruits.splice(1, 1, "Kiwi")</code></td></tr>
                    <tr><td><code>indexOf()</code></td><td>ইনডেক্স খুঁজে বের করা</td><td><code>fruits.indexOf("Mango")</code></td></tr>
                    <tr><td><code>includes()</code></td><td>আছে কিনা চেক</td><td><code>fruits.includes("Apple")</code></td></tr>
                </tbody>
            </table>

            <h3>Array Iteration Methods:</h3>
            <pre><code>let numbers = [1, 2, 3, 4, 5];

// forEach - প্রতিটি element-এর জন্য কাজ
numbers.forEach(num => console.log(num));

// map - নতুন array তৈরি
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - শর্ত অনুযায়ী filter
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// find - প্রথম matching element
let found = numbers.find(num => num > 3);
console.log(found); // 4

// findIndex - প্রথম matching index
let index = numbers.findIndex(num => num > 3);
console.log(index); // 3

// reduce - সব element combine করা
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// some - যেকোনো একটা true
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - সব true
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true</code></pre>

            <h3>Spread Operator:</h3>
            <pre><code>let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let fruits = [\\'Apple\\', \\'Mango\\', \\'Banana\\'];\\n\\nconsole.log(\\'অ্যারে:\\', fruits);\\nconsole.log(\\'দৈর্ঘ্য:\\', fruits.length);\\nconsole.log(\\'প্রথম element:\\', fruits[0]);\\n\\n// Methods\\nfruits.push(\\'Orange\\');\\nconsole.log(\\'push পরে:\\', fruits);\\n\\nlet removed = fruits.pop();\\nconsole.log(\\'pop পরে:\\', fruits);\\nconsole.log(\\'সরানো element:\\', removed);\\n\\n// map\\nlet numbers = [1, 2, 3, 4, 5];\\nlet doubled = numbers.map(num => num * 2);\\nconsole.log(\\'দ্বিগুণ:\\', doubled);\\n\\n// filter\\nlet even = numbers.filter(num => num % 2 === 0);\\nconsole.log(\\'জোড় সংখ্যা:\\', even);\\n\\n// reduce\\nlet sum = numbers.reduce((acc, num) => acc + num, 0);\\nconsole.log(\\'যোগফল:\\', sum);')">💻 Try It</button>
        `
    },
    {
        id: 'objects',
        title: '🗂️ ১০. অবজেক্ট (Objects)',
        category: 'বেসিক',
        content: `
            <h2>🗂️ অবজেক্ট</h2>
            <p>অবজেক্ট হলো key-value pairs-এর সংগ্রহ, যা জটিল ডাটা স্টোর করতে ব্যবহৃত হয়।</p>

            <h3>অবজেক্ট তৈরি করা:</h3>
            <pre><code>// Object Literal
let person = {
    name: "Saddam",
    age: 25,
    country: "Bangladesh",
    isStudent: true
};

// Object Constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;</code></pre>

            <h3>অবজেক্ট Access করা:</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25
};

// Dot Notation
console.log(person.name); // "Saddam"
console.log(person.age);  // 25

// Bracket Notation
console.log(person["name"]); // "Saddam"
console.log(person["age"]);  // 25</code></pre>

            <h3>অবজেক্ট Methods:</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25,
    greet: function() {
        return "Hello, " + this.name + "!";
    },
    // ES6 Method Shorthand
    introduce() {
        return \`I am \${this.name}, \${this.age} years old.\`;
    }
};

console.log(person.greet());      // "Hello, Saddam!"
console.log(person.introduce());  // "I am Saddam, 25 years old."</code></pre>

            <h3>Object Methods (Built-in):</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25,
    country: "Bangladesh"
};

// Object.keys() - সব keys
console.log(Object.keys(person)); // ["name", "age", "country"]

// Object.values() - সব values
console.log(Object.values(person)); // ["Saddam", 25, "Bangladesh"]

// Object.entries() - key-value pairs
console.log(Object.entries(person));
// [["name", "Saddam"], ["age", 25], ["country", "Bangladesh"]]

// Object.assign() - copy করা
let copy = Object.assign({}, person);

// Spread Operator
let copy2 = {...person};</code></pre>

            <h3>Destructuring:</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25,
    country: "Bangladesh"
};

// Destructuring
let { name, age } = person;
console.log(name); // "Saddam"
console.log(age);  // 25

// Renaming
let { name: personName, age: personAge } = person;

// Default values
let { name, age, city = "Dhaka" } = person;</code></pre>

            <h3>Nested Objects:</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(person.address.city); // "Dhaka"
console.log(person.address?.zip); // undefined (optional chaining)</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let person = {\\n    name: \\'Saddam\\',\\n    age: 25,\\n    country: \\'Bangladesh\\',\\n    greet() {\\n        return \\'Hello, \\' + this.name + \\'!\\';\\n    }\\n};\\n\\nconsole.log(\\'নাম:\\', person.name);\\nconsole.log(\\'বয়স:\\', person.age);\\nconsole.log(person.greet());\\n\\n// Destructuring\\nlet { name, age } = person;\\nconsole.log(\\'Destructured নাম:\\', name);\\n\\n// Object.keys\\nconsole.log(\\'Keys:\\', Object.keys(person));\\n\\n// Object.values\\nconsole.log(\\'Values:\\', Object.values(person));')">💻 Try It</button>
        `
    },
    {
        id: 'dom',
        title: '🌳 ১১. DOM ম্যানিপুলেশন',
        category: 'DOM & Events',
        content: `
            <h2>🌳 DOM (Document Object Model)</h2>
            <p>DOM হলো HTML document-এর JavaScript representation। এটি দিয়ে আমরা HTML element-গুলো access, modify, create এবং delete করতে পারি।</p>

            <h3>DOM Element Select করা:</h3>
            <pre><code>// getElementById
let element = document.getElementById("myId");

// getElementsByClassName
let elements = document.getElementsByClassName("myClass");

// getElementsByTagName
let paragraphs = document.getElementsByTagName("p");

// querySelector (CSS selector)
let element = document.querySelector("#myId");
let firstElement = document.querySelector(".myClass");

// querySelectorAll (সব matching elements)
let allElements = document.querySelectorAll(".myClass");</code></pre>

            <h3>Content পরিবর্তন করা:</h3>
            <pre><code>let element = document.getElementById("myElement");

// textContent (শুধু text)
element.textContent = "নতুন টেক্সট";

// innerHTML (HTML সহ)
element.innerHTML = "<strong>বোল্ড টেক্সট</strong>";

// innerText (visible text)
element.innerText = "দৃশ্যমান টেক্সট";</code></pre>

            <h3>Attributes পরিবর্তন করা:</h3>
            <pre><code>let img = document.querySelector("img");

// setAttribute
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "নতুন ছবি");

// getAttribute
let src = img.getAttribute("src");

// Direct property access
img.src = "new-image.jpg";
img.alt = "নতুন ছবি";

// classList
let div = document.querySelector("div");
div.classList.add("active");
div.classList.remove("inactive");
div.classList.toggle("hidden");
div.classList.contains("active"); // true/false</code></pre>

            <h3>Style পরিবর্তন করা:</h3>
            <pre><code>let element = document.getElementById("myElement");

// Inline style
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
element.style.display = "none";
element.style.display = "block";</code></pre>

            <h3>নতুন Element তৈরি করা:</h3>
            <pre><code>// Create element
let newDiv = document.createElement("div");
newDiv.textContent = "নতুন div";
newDiv.className = "my-class";

// Append to parent
let parent = document.getElementById("parent");
parent.appendChild(newDiv);

// Insert before
let sibling = document.getElementById("sibling");
parent.insertBefore(newDiv, sibling);

// Remove element
parent.removeChild(newDiv);

// Modern way
newDiv.remove();</code></pre>

            <div class="interactive-demo">
                <h3>ইন্টার‌্যাক্টিভ উদাহরণ:</h3>
                <div id="domDemo" style="padding: 20px; background: #f0f0f0; border-radius: 8px; margin: 10px 0;">
                    এটি একটি demo box
                </div>
                <button class="btn btn-primary" onclick="changeDOMText()">টেক্সট পরিবর্তন করুন</button>
                <button class="btn btn-secondary" onclick="changeDOMColor()">রঙ পরিবর্তন করুন</button>
                <button class="btn btn-success" onclick="resetDOM()">রিসেট করুন</button>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// DOM Element Select\\nlet demo = document.createElement(\\'div\\');\\ndemo.textContent = \\'নতুন element\\';\\ndemo.style.padding = \\'20px\\';\\ndemo.style.background = \\'#e0f0ff\\';\\ndemo.style.borderRadius = \\'8px\\';\\nconsole.log(\\'Element তৈরি হয়েছে:\\', demo.textContent);\\n\\n// Attributes\\nlet img = document.createElement(\\'img\\');\\nimg.setAttribute(\\'src\\', \\'https://via.placeholder.com/150\\');\\nimg.setAttribute(\\'alt\\', \\'Demo Image\\');\\nconsole.log(\\'Image src:\\', img.getAttribute(\\'src\\'));')">💻 Try It</button>
        `
    },
    {
        id: 'events',
        title: '🎯 ১২. ইভেন্ট হ্যান্ডলিং',
        category: 'DOM & Events',
        content: `
            <h2>🎯 ইভেন্ট হ্যান্ডলিং</h2>
            <p>ইভেন্ট হলো user-এর কোনো action (ক্লিক, টাইপ, স্ক্রল ইত্যাদি)। JavaScript দিয়ে আমরা এই ইভেন্টগুলো "ধরে" তাতে কাজ করতে পারি।</p>

            <h3>ইভেন্ট Listener যোগ করা:</h3>
            <pre><code>// addEventListener (Recommended)
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Named function
function handleClick() {
    console.log("Button clicked!");
}
button.addEventListener("click", handleClick);</code></pre>

            <h3>সাধারণ ইভেন্ট Types:</h3>
            <table>
                <thead>
                    <tr>
                        <th>ইভেন্ট</th>
                        <th>ব্যবহার</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>click</code></td><td>ক্লিক করা</td></tr>
                    <tr><td><code>dblclick</code></td><td>ডাবল ক্লিক</td></tr>
                    <tr><td><code>mouseover</code></td><td>মাউস উপর</td></tr>
                    <tr><td><code>mouseout</code></td><td>মাউস বাইরে</td></tr>
                    <tr><td><code>mousedown</code></td><td>মাউস চেপে ধরা</td></tr>
                    <tr><td><code>mouseup</code></td><td>মাউস ছেড়ে দেওয়া</td></tr>
                    <tr><td><code>keydown</code></td><td>কি চেপে ধরা</td></tr>
                    <tr><td><code>keyup</code></td><td>কি ছেড়ে দেওয়া</td></tr>
                    <tr><td><code>keypress</code></td><td>কি প্রেস</td></tr>
                    <tr><td><code>input</code></td><td>ইনপুট পরিবর্তন</td></tr>
                    <tr><td><code>change</code></td><td>মান পরিবর্তন</td></tr>
                    <tr><td><code>submit</code></td><td>ফর্ম সাবমিট</td></tr>
                    <tr><td><code>focus</code></td><td>ফোকাস পাওয়া</td></tr>
                    <tr><td><code>blur</code></td><td>ফোকাস হারানো</td></tr>
                    <tr><td><code>load</code></td><td>লোড হওয়া</td></tr>
                    <tr><td><code>scroll</code></td><td>স্ক্রল করা</td></tr>
                </tbody>
            </table>

            <h3>ইভেন্ট Object:</h3>
            <pre><code>button.addEventListener("click", function(event) {
    console.log(event.type);        // "click"
    console.log(event.target);      // clicked element
    console.log(event.clientX);     // mouse X position
    console.log(event.clientY);     // mouse Y position
});

input.addEventListener("keydown", function(event) {
    console.log(event.key);         // pressed key
    console.log(event.code);        // key code
    console.log(event.ctrlKey);     // Ctrl key pressed?
    console.log(event.shiftKey);    // Shift key pressed?
});</code></pre>

            <h3>preventDefault() - Default Behavior বন্ধ করা:</h3>
            <pre><code>let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Form submit বন্ধ করে
    console.log("Form submitted!");
});</code></pre>

            <h3>stopPropagation() - Event Bubbling বন্ধ করা:</h3>
            <pre><code>let parent = document.getElementById("parent");
let child = document.getElementById("child");

child.addEventListener("click", function(event) {
    event.stopPropagation(); // Parent-এ ইভেন্ট যাবে না
    console.log("Child clicked");
});

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});</code></pre>

            <h3>Event Delegation:</h3>
            <pre><code>// Instead of adding listener to each button
let list = document.getElementById("myList");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log("Button clicked:", event.target.textContent);
    }
});</code></pre>

            <div class="interactive-demo">
                <h3>ইন্টার‌্যাক্টিভ উদাহরণ:</h3>
                <input type="text" id="eventInput" placeholder="এখানে টাইপ করুন" style="padding: 8px; width: 300px; margin: 10px 0;">
                <div class="output-box" id="eventOutput"></div>
                <button class="btn btn-primary" id="eventButton">ক্লিক করুন</button>
                <div class="output-box" id="clickOutput"></div>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Create button\\nlet btn = document.createElement(\\'button\\');\\nbtn.textContent = \\'ক্লিক করুন\\';\\nbtn.addEventListener(\\'click\\', () => {\\n    console.log(\\'Button clicked!\\');\\n});\\nconsole.log(\\'Button তৈরি হয়েছে\\');\\n\\n// Keyboard event\\nlet input = document.createElement(\\'input\\');\\ninput.type = \\'text\\';\\ninput.addEventListener(\\'keydown\\', (e) => {\\n    console.log(\\'Key pressed:\\', e.key);\\n});\\nconsole.log(\\'Input element তৈরি হয়েছে\\');')">💻 Try It</button>
        `
    },
    {
        id: 'forms',
        title: '📝 ১৩. ফর্ম ভ্যালিডেশন',
        category: 'DOM & Events',
        content: `
            <h2>📝 ফর্ম ভ্যালিডেশন</h2>
            <p>ফর্ম সাবমিট করার আগে ডাটার সঠিকতা যাচাই করা খুবই গুরুত্বপূর্ণ।</p>

            <h3>সরল ফর্ম ভ্যালিডেশন:</h3>
            <pre><code>let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    
    // Validation
    if (name === "") {
        alert("নাম লিখুন!");
        return;
    }
    
    if (email === "" || !email.includes("@")) {
        alert("বৈধ ইমেইল দিন!");
        return;
    }
    
    if (password.length < 6) {
        alert("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে!");
        return;
    }
    
    // Form submit
    console.log("Form is valid!");
});</code></pre>

            <h3>Regex Pattern Validation:</h3>
            <pre><code>// Email validation
let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
let email = "test@example.com";
console.log(emailRegex.test(email)); // true

// Phone validation (Bangladesh)
let phoneRegex = /^01[3-9]\\d{8}$/;
let phone = "01712345678";
console.log(phoneRegex.test(phone)); // true

// Password (at least 8 chars, 1 uppercase, 1 lowercase, 1 number)
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}$/;
let password = "MyPass123";
console.log(passwordRegex.test(password)); // true</code></pre>

            <h3>Real-time Validation:</h3>
            <pre><code>let emailInput = document.getElementById("email");
let errorDiv = document.getElementById("error");

emailInput.addEventListener("input", function() {
    let email = this.value;
    let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    
    if (emailRegex.test(email)) {
        errorDiv.textContent = "";
        this.style.borderColor = "green";
    } else {
        errorDiv.textContent = "বৈধ ইমেইল দিন!";
        this.style.borderColor = "red";
    }
});</code></pre>

            <div class="interactive-demo">
                <h3>ফর্ম ভ্যালিডেশন উদাহরণ:</h3>
                <form id="demoForm" style="max-width: 400px;">
                    <div style="margin-bottom: 15px;">
                        <label>নাম:</label><br>
                        <input type="text" id="demoName" placeholder="আপনার নাম" style="padding: 8px; width: 100%; margin-top: 5px;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label>ইমেইল:</label><br>
                        <input type="email" id="demoEmail" placeholder="example@email.com" style="padding: 8px; width: 100%; margin-top: 5px;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label>পাসওয়ার্ড:</label><br>
                        <input type="password" id="demoPassword" placeholder="কমপক্ষে ৬ অক্ষর" style="padding: 8px; width: 100%; margin-top: 5px;">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="output-box" id="formResult"></div>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Email validation\\nlet emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;\\nlet emails = [\\'test@example.com\\', \\'invalid-email\\', \\'user@domain.co.uk\\'];\\n\\nemails.forEach(email => {\\n    let isValid = emailRegex.test(email);\\n    console.log(\`\${email}: \${isValid ? \\'বৈধ\\' : \\'অবৈধ\\'}\`);\\n});\\n\\n// Phone validation\\nlet phoneRegex = /^01[3-9]\\\\d{8}$/;\\nlet phones = [\\'01712345678\\', \\'123456789\\', \\'01987654321\\'];\\n\\nphones.forEach(phone => {\\n    let isValid = phoneRegex.test(phone);\\n    console.log(\`\${phone}: \${isValid ? \\'বৈধ\\' : \\'অবৈধ\\'}\`);\\n});')">💻 Try It</button>
        `
    },
    {
        id: 'modern-js',
        title: '🚀 ১৪. Modern JavaScript (ES6+)',
        category: 'Advanced',
        content: `
            <h2>🚀 Modern JavaScript Features (ES6+)</h2>
            <p>ES6 (ECMAScript 2015) এবং পরবর্তী ভার্শনে অনেক নতুন feature যোগ হয়েছে।</p>

            <h3>১. Template Literals:</h3>
            <pre><code>let name = "Saddam";
let age = 25;

// Old way
let message = "আমি " + name + ", আমার বয়স " + age;

// New way (Template Literals)
let message2 = \`আমি \${name}, আমার বয়স \${age}\`;

// Multi-line
let html = \`
    <div>
        <h1>\${name}</h1>
        <p>Age: \${age}</p>
    </div>
\`;</code></pre>

            <h3>২. Destructuring:</h3>
            <pre><code>// Array Destructuring
let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a, b, c); // 1, 2, 3

// Object Destructuring
let person = { name: "Saddam", age: 25, country: "Bangladesh" };
let { name, age } = person;
console.log(name, age); // "Saddam", 25

// Renaming
let { name: personName, age: personAge } = person;
console.log(personName, personAge); // "Saddam", 25

// Default values
let { name, age, city = "Dhaka" } = person;
console.log(city); // "Dhaka"</code></pre>

            <h3>৩. Spread Operator:</h3>
            <pre><code>// Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Function arguments
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10</code></pre>

            <h3>৪. Rest Parameters:</h3>
            <pre><code>function greet(greeting, ...names) {
    return names.map(name => \`\${greeting}, \${name}!\`).join(' ');
}
console.log(greet("Hello", "Saddam", "Rahim", "Karim"));
// "Hello, Saddam! Hello, Rahim! Hello, Karim!"</code></pre>

            <h3>৫. Classes:</h3>
            <pre><code>class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hello, I'm \${this.name} and I'm \${this.age} years old.\`;
    }
}

let person1 = new Person("Saddam", 25);
console.log(person1.greet());

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        return \`\${this.name} is studying in grade \${this.grade}.\`;
    }
}

let student1 = new Student("Rahim", 20, "A");
console.log(student1.greet());
console.log(student1.study());</code></pre>

            <h3>৬. Modules (Import/Export):</h3>
            <pre><code>// math.js
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// main.js
import { add, multiply } from './math.js';
console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15</code></pre>

            <h3>৭. Optional Chaining (?.):</h3>
            <pre><code>let user = {
    name: "Saddam",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

// Old way
let city = user && user.address && user.address.city;

// New way (Optional Chaining)
let city2 = user?.address?.city;
console.log(city2); // "Dhaka"

// Nullish Coalescing (??)
let name = user?.name ?? "Guest";
console.log(name); // "Saddam"</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Template Literals\\nlet name = \\'Saddam\\';\\nlet age = 25;\\nlet message = \`আমি \${name}, আমার বয়স \${age}\`;\\nconsole.log(message);\\n\\n// Destructuring\\nlet person = { name: \\'Saddam\\', age: 25, country: \\'Bangladesh\\' };\\nlet { name: pName, age: pAge } = person;\\nconsole.log(pName, pAge);\\n\\n// Spread\\nlet arr1 = [1, 2, 3];\\nlet arr2 = [4, 5, 6];\\nlet combined = [...arr1, ...arr2];\\nconsole.log(combined);\\n\\n// Classes\\nclass Person {\\n    constructor(name, age) {\\n        this.name = name;\\n        this.age = age;\\n    }\\n    greet() {\\n        return \`Hello, \${this.name}!\`;\\n    }\\n}\\n\\nlet p = new Person(\\'Saddam\\', 25);\\nconsole.log(p.greet());')">💻 Try It</button>
        `
    },
    {
        id: 'async',
        title: '⏳ ১৭. Async/Await & Promises',
        category: 'Advanced',
        content: `
            <h2>⏳ Asynchronous JavaScript</h2>
            <p>JavaScript-এ asynchronous operations (API calls, file reading ইত্যাদি) handle করার জন্য Promise এবং async/await ব্যবহার করা হয়।</p>

            <h3>১. Callbacks (পুরনো পদ্ধতি):</h3>
            <pre><code>function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData(function(data) {
    console.log(data); // "Data received" (after 1 second)
});</code></pre>

            <h3>২. Promises:</h3>
            <pre><code>// Creating a Promise
let myPromise = new Promise(function(resolve, reject) {
    let success = true;
    
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

// Using Promise
myPromise
    .then(function(result) {
        console.log(result); // "Operation successful!"
    })
    .catch(function(error) {
        console.error(error); // "Operation failed!"
    });

// Fetch API (returns Promise)
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));</code></pre>

            <h3>৩. Async/Await (Modern way):</h3>
            <pre><code>// Async function
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Using async function
fetchData();

// Multiple async operations
async function fetchMultiple() {
    try {
        let [data1, data2] = await Promise.all([
            fetch('https://api.example.com/data1').then(r => r.json()),
            fetch('https://api.example.com/data2').then(r => r.json())
        ]);
        console.log(data1, data2);
    } catch (error) {
        console.error('Error:', error);
    }
}</code></pre>

            <h3>৪. Promise Methods:</h3>
            <pre><code>// Promise.all - সব Promise resolve হলে
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - যেকোনো একটা resolve হলে
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - সব Promise complete হলে (success/fail যাই হোক)
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));</code></pre>

            <div class="interactive-demo">
                <h3>ইন্টার‌্যাক্টিভ উদাহরণ:</h3>
                <button class="btn btn-primary" onclick="simulateAsync()">Async Operation Simulate করুন</button>
                <div class="output-box" id="asyncOutput"></div>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Promise example\\nlet promise = new Promise((resolve, reject) => {\\n    setTimeout(() => {\\n        resolve(\\'Data fetched successfully!\\');\\n    }, 1000);\\n});\\n\\npromise.then(result => {\\n    console.log(result);\\n});\\n\\n// Async/Await simulation\\nasync function fetchData() {\\n    return new Promise(resolve => {\\n        setTimeout(() => resolve(\\'Async data\\'), 500);\\n    });\\n}\\n\\n(async () => {\\n    let data = await fetchData();\\n    console.log(\\'Received:\\', data);\\n})();')">💻 Try It</button>
        `
    },
    {
        id: 'localstorage',
        title: '💾 ১৮. LocalStorage & SessionStorage',
        category: 'Advanced',
        content: `
            <h2>💾 LocalStorage & SessionStorage</h2>
            <p>LocalStorage এবং SessionStorage ব্যবহার করে browser-এ data store করা যায়।</p>

            <h3>LocalStorage (স্থায়ী):</h3>
            <pre><code>// Set data
localStorage.setItem('name', 'Saddam');
localStorage.setItem('age', '25');

// Get data
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

// Remove data
localStorage.removeItem('name');

// Clear all
localStorage.clear();

// Store objects
let person = { name: "Saddam", age: 25 };
localStorage.setItem('person', JSON.stringify(person));
let storedPerson = JSON.parse(localStorage.getItem('person'));</code></pre>

            <h3>SessionStorage (session-এ স্থায়ী):</h3>
            <pre><code>// Same methods as localStorage
sessionStorage.setItem('key', 'value');
let value = sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();</code></pre>

            <h3>Differences:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>LocalStorage</th>
                        <th>SessionStorage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Duration</td>
                        <td>Permanent (until cleared)</td>
                        <td>Session only (tab close হলে মুছে যায়)</td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td>Same origin across tabs</td>
                        <td>Single tab only</td>
                    </tr>
                    <tr>
                        <td>Capacity</td>
                        <td>~5-10MB</td>
                        <td>~5-10MB</td>
                    </tr>
                </tbody>
            </table>

            <div class="interactive-demo">
                <h3>ইন্টার‌্যাক্টিভ উদাহরণ:</h3>
                <input type="text" id="storageInput" placeholder="ডাটা লিখুন" style="padding: 8px; width: 100%; margin: 10px 0;">
                <button class="btn btn-primary" onclick="saveToLocalStorage()">LocalStorage-এ Save করুন</button>
                <button class="btn btn-secondary" onclick="getFromLocalStorage()">LocalStorage থেকে Read করুন</button>
                <button class="btn btn-danger" onclick="clearLocalStorage()">Clear করুন</button>
                <div class="output-box" id="storageOutput"></div>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// LocalStorage simulation\\nlet storage = {};\\n\\n// Set\\nstorage.setItem = function(key, value) {\\n    this[key] = value;\\n    console.log(\`Saved: \${key} = \${value}\`);\\n};\\n\\n// Get\\nstorage.getItem = function(key) {\\n    return this[key] || null;\\n};\\n\\n// Test\\nstorage.setItem(\\'name\\', \\'Saddam\\');\\nconsole.log(\\'Retrieved:\\', storage.getItem(\\'name\\'));\\n\\n// JSON\\nlet person = { name: \\'Saddam\\', age: 25 };\\nlet jsonStr = JSON.stringify(person);\\nconsole.log(\\'JSON string:\\', jsonStr);\\nlet parsed = JSON.parse(jsonStr);\\nconsole.log(\\'Parsed object:\\', parsed);')">💻 Try It</button>
        `
    },
    {
        id: 'projects',
        title: '🎨 ১৯. প্রজেক্ট (Projects)',
        category: 'Projects',
        content: `
            <h2>🎨 প্রজেক্ট তৈরি করুন</h2>
            <p>এখন যা শিখেছেন তা ব্যবহার করে কিছু প্রজেক্ট তৈরি করুন!</p>

            <h3>১. Todo App:</h3>
            <div class="exercise-box">
                <h4>টাস্ক:</h4>
                <ul>
                    <li>Todo যোগ করা</li>
                    <li>Todo সম্পন্ন করা (check/uncheck)</li>
                    <li>Todo মুছে ফেলা</li>
                    <li>LocalStorage-এ save করা</li>
                    <li>Filter (All, Active, Completed)</li>
                </ul>
                <button class="btn btn-primary" onclick="loadProject('todo')">Todo App দেখুন</button>
            </div>

            <h3>২. Calculator:</h3>
            <div class="exercise-box">
                <h4>টাস্ক:</h4>
                <ul>
                    <li>Basic operations (+, -, *, /)</li>
                    <li>Clear function</li>
                    <li>Error handling</li>
                </ul>
                <button class="btn btn-primary" onclick="loadProject('calculator')">Calculator দেখুন</button>
            </div>

            <h3>৩. Weather App:</h3>
            <div class="exercise-box">
                <h4>টাস্ক:</h4>
                <ul>
                    <li>API থেকে weather data fetch করা</li>
                    <li>City search</li>
                    <li>Temperature, humidity display</li>
                </ul>
                <button class="btn btn-primary" onclick="loadProject('weather')">Weather App দেখুন</button>
            </div>

            <h3>৪. Quiz App:</h3>
            <div class="exercise-box">
                <h4>টাস্ক:</h4>
                <ul>
                    <li>Questions display</li>
                    <li>Answer selection</li>
                    <li>Score calculation</li>
                    <li>Result display</li>
                </ul>
                <button class="btn btn-primary" onclick="loadProject('quiz')">Quiz App দেখুন</button>
            </div>

            <div class="alert alert-info">
                <strong>💡 টিপ:</strong> প্রতিটি প্রজেক্ট তৈরি করার সময় step-by-step approach ব্যবহার করুন। প্রথমে basic functionality, তারপর features add করুন।
            </div>
        `
    },
    {
        id: 'strings',
        title: '📝 ২০. Strings & String Methods',
        category: 'বেসিক',
        content: `
            <h2>📝 Strings & String Methods</h2>
            <p>String হলো text data, এবং JavaScript-এ অনেক built-in method আছে string manipulate করার জন্য।</p>

            <h3>String Methods:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>ব্যবহার</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>length</code></td><td>String-এর দৈর্ঘ্য</td><td><code>"Hello".length // 5</code></td></tr>
                    <tr><td><code>toUpperCase()</code></td><td>বড় হাতের অক্ষর</td><td><code>"hello".toUpperCase() // "HELLO"</code></td></tr>
                    <tr><td><code>toLowerCase()</code></td><td>ছোট হাতের অক্ষর</td><td><code>"HELLO".toLowerCase() // "hello"</code></td></tr>
                    <tr><td><code>charAt()</code></td><td>নির্দিষ্ট position-এর character</td><td><code>"Hello".charAt(0) // "H"</code></td></tr>
                    <tr><td><code>indexOf()</code></td><td>Substring-এর position</td><td><code>"Hello".indexOf("e") // 1</code></td></tr>
                    <tr><td><code>substring()</code></td><td>String-এর অংশ নেওয়া</td><td><code>"Hello".substring(1, 3) // "el"</code></td></tr>
                    <tr><td><code>slice()</code></td><td>String-এর অংশ (negative index support)</td><td><code>"Hello".slice(-3) // "llo"</code></td></tr>
                    <tr><td><code>split()</code></td><td>String-কে array-তে convert</td><td><code>"a,b,c".split(",") // ["a", "b", "c"]</code></td></tr>
                    <tr><td><code>replace()</code></td><td>Text replace করা</td><td><code>"Hello".replace("H", "J") // "Jello"</code></td></tr>
                    <tr><td><code>trim()</code></td><td>Space remove করা</td><td><code>" Hello ".trim() // "Hello"</code></td></tr>
                    <tr><td><code>includes()</code></td><td>Substring আছে কিনা</td><td><code>"Hello".includes("ell") // true</code></td></tr>
                    <tr><td><code>startsWith()</code></td><td>শুরুতে আছে কিনা</td><td><code>"Hello".startsWith("He") // true</code></td></tr>
                    <tr><td><code>endsWith()</code></td><td>শেষে আছে কিনা</td><td><code>"Hello".endsWith("lo") // true</code></td></tr>
                </tbody>
            </table>

            <h3>উদাহরণ:</h3>
            <pre><code>let text = "Hello JavaScript";

// Length
console.log(text.length); // 16

// Case conversion
console.log(text.toUpperCase()); // "HELLO JAVASCRIPT"
console.log(text.toLowerCase()); // "hello javascript"

// Character access
console.log(text.charAt(0)); // "H"
console.log(text[0]); // "H" (array-like)

// Searching
console.log(text.indexOf("JavaScript")); // 6
console.log(text.includes("Script")); // true

// Extracting
console.log(text.substring(0, 5)); // "Hello"
console.log(text.slice(6)); // "JavaScript"
console.log(text.slice(-10)); // "JavaScript"

// Splitting
console.log(text.split(" ")); // ["Hello", "JavaScript"]

// Replacing
console.log(text.replace("Hello", "Hi")); // "Hi JavaScript"

// Trimming
let spaced = "   Hello   ";
console.log(spaced.trim()); // "Hello"</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let text = \\'Hello JavaScript\\';\\n\\nconsole.log(\\'Length:\\', text.length);\\nconsole.log(\\'UpperCase:\\', text.toUpperCase());\\nconsole.log(\\'LowerCase:\\', text.toLowerCase());\\nconsole.log(\\'CharAt(0):\\', text.charAt(0));\\nconsole.log(\\'IndexOf(\\'Java\\'):\\', text.indexOf(\\'Java\\'));\\nconsole.log(\\'Includes(\\'Script\\'):\\', text.includes(\\'Script\\'));\\nconsole.log(\\'Substring(0,5):\\', text.substring(0, 5));\\nconsole.log(\\'Split:\\', text.split(\\' \\'));\\nconsole.log(\\'Replace:\\', text.replace(\\'Hello\\', \\'Hi\\'));')">💻 Try It</button>
        `
    },
    {
        id: 'date',
        title: '📅 ২১. Date & Time',
        category: 'বেসিক',
        content: `
            <h2>📅 Date & Time</h2>
            <p>JavaScript-এ Date object ব্যবহার করে date এবং time handle করা যায়।</p>

            <h3>Date তৈরি করা:</h3>
            <pre><code>// Current date and time
let now = new Date();
console.log(now);

// Specific date
let date1 = new Date(2025, 0, 1); // January 1, 2025
let date2 = new Date("2025-01-01");
let date3 = new Date("January 1, 2025");

// Date from timestamp
let date4 = new Date(1735689600000);</code></pre>

            <h3>Date Methods:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>ব্যবহার</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>getFullYear()</code></td><td>Year (4 digits)</td></tr>
                    <tr><td><code>getMonth()</code></td><td>Month (0-11)</td></tr>
                    <tr><td><code>getDate()</code></td><td>Day of month (1-31)</td></tr>
                    <tr><td><code>getDay()</code></td><td>Day of week (0-6)</td></tr>
                    <tr><td><code>getHours()</code></td><td>Hours (0-23)</td></tr>
                    <tr><td><code>getMinutes()</code></td><td>Minutes (0-59)</td></tr>
                    <tr><td><code>getSeconds()</code></td><td>Seconds (0-59)</td></tr>
                    <tr><td><code>getTime()</code></td><td>Timestamp (milliseconds)</td></tr>
                    <tr><td><code>toLocaleString()</code></td><td>Localized string</td></tr>
                    <tr><td><code>toDateString()</code></td><td>Date string</td></tr>
                </tbody>
            </table>

            <h3>উদাহরণ:</h3>
            <pre><code>let now = new Date();

// Get components
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // 1-31
console.log(now.getDay()); // 0-6 (0 = Sunday)
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59

// Formatting
console.log(now.toLocaleString()); // Local format
console.log(now.toDateString()); // "Mon Jan 01 2025"
console.log(now.toISOString()); // ISO format

// Timestamp
console.log(now.getTime()); // Milliseconds since 1970

// Date arithmetic
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow);</code></pre>

            <div class="interactive-demo">
                <h3>বর্তমান তারিখ এবং সময়:</h3>
                <div class="output-box" id="dateOutput"></div>
                <button class="btn btn-primary" onclick="updateDateTime()">আপডেট করুন</button>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('let now = new Date();\\n\\nconsole.log(\\'Current Date:\\', now);\\nconsole.log(\\'Year:\\', now.getFullYear());\\nconsole.log(\\'Month:\\', now.getMonth() + 1);\\nconsole.log(\\'Date:\\', now.getDate());\\nconsole.log(\\'Hours:\\', now.getHours());\\nconsole.log(\\'Minutes:\\', now.getMinutes());\\nconsole.log(\\'Locale String:\\', now.toLocaleString());\\nconsole.log(\\'Date String:\\', now.toDateString());')">💻 Try It</button>
        `
    },
    {
        id: 'math',
        title: '🔢 ২২. Math Object',
        category: 'বেসিক',
        content: `
            <h2>🔢 Math Object</h2>
            <p>Math object JavaScript-এর built-in object যা mathematical operations এবং constants প্রদান করে।</p>

            <h3>Math Constants:</h3>
            <pre><code>Math.PI        // 3.141592653589793
Math.E         // 2.718281828459045
Math.SQRT2     // 1.4142135623730951
Math.SQRT1_2   // 0.7071067811865476</code></pre>

            <h3>Math Methods:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>ব্যবহার</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>Math.abs()</code></td><td>Absolute value</td><td><code>Math.abs(-5) // 5</code></td></tr>
                    <tr><td><code>Math.round()</code></td><td>Nearest integer</td><td><code>Math.round(4.7) // 5</code></td></tr>
                    <tr><td><code>Math.floor()</code></td><td>Round down</td><td><code>Math.floor(4.7) // 4</code></td></tr>
                    <tr><td><code>Math.ceil()</code></td><td>Round up</td><td><code>Math.ceil(4.3) // 5</code></td></tr>
                    <tr><td><code>Math.max()</code></td><td>Maximum value</td><td><code>Math.max(1,2,3) // 3</code></td></tr>
                    <tr><td><code>Math.min()</code></td><td>Minimum value</td><td><code>Math.min(1,2,3) // 1</code></td></tr>
                    <tr><td><code>Math.pow()</code></td><td>Power</td><td><code>Math.pow(2,3) // 8</code></td></tr>
                    <tr><td><code>Math.sqrt()</code></td><td>Square root</td><td><code>Math.sqrt(16) // 4</code></td></tr>
                    <tr><td><code>Math.random()</code></td><td>Random number (0-1)</td><td><code>Math.random() // 0.123...</code></td></tr>
                    <tr><td><code>Math.sin()</code></td><td>Sine</td><td><code>Math.sin(Math.PI/2) // 1</code></td></tr>
                    <tr><td><code>Math.cos()</code></td><td>Cosine</td><td><code>Math.cos(0) // 1</code></td></tr>
                </tbody>
            </table>

            <h3>উদাহরণ:</h3>
            <pre><code>// Constants
console.log(Math.PI); // 3.141592653589793

// Rounding
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.3)); // 5

// Max/Min
console.log(Math.max(1, 5, 3, 9, 2)); // 9
console.log(Math.min(1, 5, 3, 9, 2)); // 1

// Power and Root
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Random numbers
console.log(Math.random()); // 0 to 1
console.log(Math.random() * 10); // 0 to 10
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

// Random integer between min and max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 100)); // 1 to 100</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Math constants\\nconsole.log(\\'PI:\\', Math.PI);\\nconsole.log(\\'E:\\', Math.E);\\n\\n// Rounding\\nconsole.log(\\'Round 4.7:\\', Math.round(4.7));\\nconsole.log(\\'Floor 4.7:\\', Math.floor(4.7));\\nconsole.log(\\'Ceil 4.3:\\', Math.ceil(4.3));\\n\\n// Max/Min\\nconsole.log(\\'Max(1,5,3):\\', Math.max(1, 5, 3));\\nconsole.log(\\'Min(1,5,3):\\', Math.min(1, 5, 3));\\n\\n// Power\\nconsole.log(\\'2^3:\\', Math.pow(2, 3));\\nconsole.log(\\'Sqrt(16):\\', Math.sqrt(16));\\n\\n// Random\\nconsole.log(\\'Random (0-1):\\', Math.random());\\nconsole.log(\\'Random (1-10):\\', Math.floor(Math.random() * 10) + 1);')">💻 Try It</button>
        `
    },
    {
        id: 'json',
        title: '📦 ২৩. JSON',
        category: 'Advanced',
        content: `
            <h2>📦 JSON (JavaScript Object Notation)</h2>
            <p>JSON হলো data format যা JavaScript objects এবং arrays-কে string-এ convert করে এবং vice versa।</p>

            <h3>JSON.stringify() - Object to String:</h3>
            <pre><code>let person = {
    name: "Saddam",
    age: 25,
    city: "Dhaka",
    skills: ["JavaScript", "Python", "React"]
};

// Convert to JSON string
let jsonString = JSON.stringify(person);
console.log(jsonString);
// {"name":"Saddam","age":25,"city":"Dhaka","skills":["JavaScript","Python","React"]}

// With formatting
let formatted = JSON.stringify(person, null, 2);
console.log(formatted);
// {
//   "name": "Saddam",
//   "age": 25,
//   ...
// }</code></pre>

            <h3>JSON.parse() - String to Object:</h3>
            <pre><code>let jsonString = '{"name":"Saddam","age":25,"city":"Dhaka"}';

// Convert to JavaScript object
let person = JSON.parse(jsonString);
console.log(person.name); // "Saddam"
console.log(person.age); // 25</code></pre>

            <h3>ব্যবহার:</h3>
            <ul>
                <li>API-তে data send/receive করা</li>
                <li>LocalStorage-এ data store করা</li>
                <li>Configuration files</li>
                <li>Data exchange between server and client</li>
            </ul>

            <h3>উদাহরণ:</h3>
            <pre><code>// Object to JSON
let user = {
    id: 1,
    name: "Saddam",
    email: "saddam@example.com",
    active: true
};

let json = JSON.stringify(user);
console.log(json);
// {"id":1,"name":"Saddam","email":"saddam@example.com","active":true}

// JSON to Object
let parsed = JSON.parse(json);
console.log(parsed.name); // "Saddam"

// Array of objects
let users = [
    { name: "Saddam", age: 25 },
    { name: "Rahim", age: 30 }
];

let usersJson = JSON.stringify(users);
console.log(usersJson);
// [{"name":"Saddam","age":25},{"name":"Rahim","age":30}]

let usersParsed = JSON.parse(usersJson);
console.log(usersParsed[0].name); // "Saddam"</code></pre>

            <div class="alert alert-warning">
                <strong>⚠️ মনে রাখুন:</strong> JSON.stringify() functions, undefined, এবং symbols-কে ignore করে।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Object to JSON\\nlet person = {\\n    name: \\'Saddam\\',\\n    age: 25,\\n    city: \\'Dhaka\\'\\n};\\n\\nlet json = JSON.stringify(person);\\nconsole.log(\\'JSON String:\\', json);\\n\\n// JSON to Object\\nlet parsed = JSON.parse(json);\\nconsole.log(\\'Parsed Object:\\', parsed);\\nconsole.log(\\'Name:\\', parsed.name);\\n\\n// Array\\nlet arr = [1, 2, 3, {a: 1}];\\nlet arrJson = JSON.stringify(arr);\\nconsole.log(\\'Array JSON:\\', arrJson);\\nlet arrParsed = JSON.parse(arrJson);\\nconsole.log(\\'Parsed Array:\\', arrParsed);')">💻 Try It</button>
        `
    },
    {
        id: 'error-handling',
        title: '⚠️ ২৪. Error Handling',
        category: 'Advanced',
        content: `
            <h2>⚠️ Error Handling (try-catch)</h2>
            <p>Error handling দিয়ে আমরা runtime errors catch করে handle করতে পারি।</p>

            <h3>try-catch Statement:</h3>
            <pre><code>try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("Error occurred:", error.message);
}</code></pre>

            <h3>try-catch-finally:</h3>
            <pre><code>try {
    // Code
    let data = JSON.parse(invalidJson);
} catch (error) {
    // Handle error
    console.error("Error:", error.message);
} finally {
    // Always executes
    console.log("This always runs");
}</code></pre>

            <h3>Throwing Errors:</h3>
            <pre><code>function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (error) {
    console.error(error.message); // "Division by zero is not allowed!"
}</code></pre>

            <h3>Error Types:</h3>
            <ul>
                <li><code>Error</code> - General error</li>
                <li><code>SyntaxError</code> - Syntax error</li>
                <li><code>TypeError</code> - Type error</li>
                <li><code>ReferenceError</code> - Reference error</li>
                <li><code>RangeError</code> - Range error</li>
            </ul>

            <h3>উদাহরণ:</h3>
            <pre><code>// JSON parsing error
try {
    let data = JSON.parse("invalid json");
} catch (error) {
    console.error("JSON Error:", error.message);
}

// Division by zero
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Invalid calculation");
    }
} catch (error) {
    console.error("Calculation Error:", error.message);
}

// Async error handling
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch Error:", error.message);
        return null;
    }
}</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Try-catch example\\ntry {\\n    let result = 10 / 2;\\n    console.log(\\'Result:\\', result);\\n} catch (error) {\\n    console.error(\\'Error:\\', error.message);\\n}\\n\\n// Error throwing\\nfunction divide(a, b) {\\n    if (b === 0) {\\n        throw new Error(\\'Division by zero!\\');\\n    }\\n    return a / b;\\n}\\n\\ntry {\\n    console.log(divide(10, 2));\\n    console.log(divide(10, 0));\\n} catch (error) {\\n    console.error(\\'Caught error:\\', error.message);\\n}')">💻 Try It</button>
        `
    },
    {
        id: 'scope-hoisting',
        title: '📚 ২৫. Scope & Hoisting',
        category: 'Advanced',
        content: `
            <h2>📚 Scope & Hoisting</h2>
            <p>Scope নির্ধারণ করে কোথায় variable access করা যায়, এবং Hoisting হলো variable declarations-কে top-এ move করার behavior।</p>

            <h3>Scope Types:</h3>
            <ul>
                <li><b>Global Scope</b> - সব জায়গায় accessible</li>
                <li><b>Function Scope</b> - Function-এর ভিতরে</li>
                <li><b>Block Scope</b> - Block-এর ভিতরে ({})</li>
            </ul>

            <h3>Scope Examples:</h3>
            <pre><code>// Global scope
let globalVar = "I am global";

function myFunction() {
    // Function scope
    let functionVar = "I am in function";
    console.log(globalVar); // ✅ Accessible
    console.log(functionVar); // ✅ Accessible
}

console.log(globalVar); // ✅ Accessible
console.log(functionVar); // ❌ Error!

// Block scope
if (true) {
    let blockVar = "I am in block";
    console.log(blockVar); // ✅ Accessible
}
console.log(blockVar); // ❌ Error!</code></pre>

            <h3>Hoisting:</h3>
            <pre><code>// var hoisting
console.log(x); // undefined (not error!)
var x = 5;

// let/const hoisting (TDZ - Temporal Dead Zone)
console.log(y); // ❌ Error!
let y = 5;

// Function hoisting
sayHello(); // ✅ Works!
function sayHello() {
    console.log("Hello!");
}

// Function expression hoisting
sayHi(); // ❌ Error!
let sayHi = function() {
    console.log("Hi!");
};</code></pre>

            <h3>উদাহরণ:</h3>
            <pre><code>// Global variable
let global = "Global";

function outer() {
    let outerVar = "Outer";
    
    function inner() {
        let innerVar = "Inner";
        console.log(global); // ✅
        console.log(outerVar); // ✅
        console.log(innerVar); // ✅
    }
    
    inner();
    console.log(global); // ✅
    console.log(outerVar); // ✅
    console.log(innerVar); // ❌ Error!
}

outer();</code></pre>

            <div class="alert alert-info">
                <strong>💡 টিপ:</strong> <code>let</code> এবং <code>const</code> block-scoped, <code>var</code> function-scoped। সবসময় <code>let</code> এবং <code>const</code> ব্যবহার করুন।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Global scope\\nlet global = \\'Global Variable\\';\\n\\nfunction testScope() {\\n    let local = \\'Local Variable\\';\\n    console.log(\\'Inside function:\\', global);\\n    console.log(\\'Inside function:\\', local);\\n}\\n\\ntestScope();\\nconsole.log(\\'Outside function:\\', global);\\n\\n// Block scope\\nif (true) {\\n    let blockVar = \\'Block Variable\\';\\n    console.log(\\'Inside block:\\', blockVar);\\n}\\n\\n// Hoisting with var\\nconsole.log(\\'x before declaration:\\', typeof x);\\nvar x = 5;\\nconsole.log(\\'x after declaration:\\', x);')">💻 Try It</button>
        `
    },
    {
        id: 'this-keyword',
        title: '🎯 ২৬. this Keyword',
        category: 'Advanced',
        content: `
            <h2>🎯 this Keyword</h2>
            <p><code>this</code> keyword JavaScript-এ context-এর উপর নির্ভর করে different values refer করে।</p>

            <h3>this in Different Contexts:</h3>
            <pre><code>// 1. Global context
console.log(this); // Window object (browser)

// 2. Object method
let person = {
    name: "Saddam",
    greet: function() {
        return "Hello, " + this.name;
    }
};
console.log(person.greet()); // "Hello, Saddam"

// 3. Arrow function (lexical this)
let person2 = {
    name: "Saddam",
    greet: () => {
        return "Hello, " + this.name; // this refers to window
    }
};

// 4. Event handler
button.addEventListener('click', function() {
    console.log(this); // button element
});

// 5. Explicit binding
function greet() {
    return "Hello, " + this.name;
}
let person3 = { name: "Saddam" };
console.log(greet.call(person3)); // "Hello, Saddam"</code></pre>

            <h3>this Binding Methods:</h3>
            <ul>
                <li><code>call()</code> - Function call with this context</li>
                <li><code>apply()</code> - Similar to call, but arguments as array</li>
                <li><code>bind()</code> - Create new function with bound this</li>
            </ul>

            <h3>উদাহরণ:</h3>
            <pre><code>// call()
function introduce(greeting, punctuation) {
    return greeting + ", I'm " + this.name + punctuation;
}

let person1 = { name: "Saddam" };
let person2 = { name: "Rahim" };

console.log(introduce.call(person1, "Hello", "!")); // "Hello, I'm Saddam!"
console.log(introduce.call(person2, "Hi", ".")); // "Hi, I'm Rahim."

// apply()
console.log(introduce.apply(person1, ["Hello", "!"])); // Same as call

// bind()
let boundIntro = introduce.bind(person1);
console.log(boundIntro("Hello", "!")); // "Hello, I'm Saddam!"

// Arrow function vs regular function
let obj = {
    name: "Saddam",
    regular: function() {
        return this.name;
    },
    arrow: () => {
        return this.name; // undefined (refers to window)
    }
};

console.log(obj.regular()); // "Saddam"
console.log(obj.arrow()); // undefined</code></pre>

            <div class="alert alert-warning">
                <strong>⚠️ মনে রাখুন:</strong> Arrow functions-এ <code>this</code> lexical scope থেকে আসে, object method-এ নয়।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// this in object method\\nlet person = {\\n    name: \\'Saddam\\',\\n    age: 25,\\n    introduce: function() {\\n        return \\'Hello, I\\'m \\' + this.name + \\', \\' + this.age + \\' years old\\';\\n    }\\n};\\n\\nconsole.log(person.introduce());\\n\\n// call()\\nfunction greet() {\\n    return \\'Hello, \\' + this.name;\\n}\\n\\nlet p1 = { name: \\'Saddam\\' };\\nlet p2 = { name: \\'Rahim\\' };\\n\\nconsole.log(greet.call(p1));\\nconsole.log(greet.call(p2));\\n\\n// bind()\\nlet boundGreet = greet.bind(p1);\\nconsole.log(boundGreet());')">💻 Try It</button>
        `
    },
    {
        id: 'closures',
        title: '🔒 ২৭. Closures',
        category: 'Advanced',
        content: `
            <h2>🔒 Closures</h2>
            <p>Closure হলো একটি function যা তার outer scope-এর variables access করতে পারে, এমনকি outer function execute হওয়ার পরেও।</p>

            <h3>Simple Closure:</h3>
            <pre><code>function outer() {
    let outerVar = "I am outer";
    
    function inner() {
        console.log(outerVar); // Access outer variable
    }
    
    return inner;
}

let closure = outer();
closure(); // "I am outer"</code></pre>

            <h3>Practical Example - Counter:</h3>
            <pre><code>function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3</code></pre>

            <h3>Module Pattern:</h3>
            <pre><code>let calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return result;
        },
        subtract: function(x) {
            result -= x;
            return result;
        },
        getResult: function() {
            return result;
        }
    };
})();

console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.getResult()); // 3</code></pre>

            <h3>Loop with Closures (Common Issue):</h3>
            <pre><code>// Problem
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 3, 3, 3
    }, 1000);
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 0, 1, 2
    }, 1000);
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // Prints 0, 1, 2
        }, 1000);
    })(i);
}</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Simple closure\\nfunction outer() {\\n    let name = \\'Saddam\\';\\n    function inner() {\\n        return \\'Hello, \\' + name;\\n    }\\n    return inner;\\n}\\n\\nlet greet = outer();\\nconsole.log(greet());\\n\\n// Counter closure\\nfunction createCounter() {\\n    let count = 0;\\n    return function() {\\n        count++;\\n        return count;\\n    };\\n}\\n\\nlet counter = createCounter();\\nconsole.log(\\'Count 1:\\', counter());\\nconsole.log(\\'Count 2:\\', counter());\\nconsole.log(\\'Count 3:\\', counter());')">💻 Try It</button>
        `
    },
    {
        id: 'regex',
        title: '🔍 ২৮. Regular Expressions',
        category: 'Advanced',
        content: `
            <h2>🔍 Regular Expressions (Regex)</h2>
            <p>Regular Expressions হলো patterns যা text search, match, এবং replace করতে ব্যবহৃত হয়।</p>

            <h3>Regex তৈরি করা:</h3>
            <pre><code>// Method 1: Literal
let pattern1 = /hello/;

// Method 2: Constructor
let pattern2 = new RegExp("hello");

// Flags
let pattern3 = /hello/gi; // g = global, i = case-insensitive</code></pre>

            <h3>Regex Methods:</h3>
            <ul>
                <li><code>test()</code> - Returns true/false</li>
                <li><code>exec()</code> - Returns match details</li>
                <li><code>match()</code> - String method, returns matches</li>
                <li><code>search()</code> - String method, returns index</li>
                <li><code>replace()</code> - String method, replaces matches</li>
                <li><code>split()</code> - String method, splits by pattern</li>
            </ul>

            <h3>Common Patterns:</h3>
            <pre><code>// Email
/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

// Phone (Bangladesh)
/^01[3-9]\\d{8}$/

// Password (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}$/

// URL
/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/</code></pre>

            <h3>Regex Metacharacters:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>ব্যবহার</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>^</code></td><td>Start of string</td></tr>
                    <tr><td><code>$</code></td><td>End of string</td></tr>
                    <tr><td><code>.</code></td><td>Any character</td></tr>
                    <tr><td><code>*</code></td><td>Zero or more</td></tr>
                    <tr><td><code>+</code></td><td>One or more</td></tr>
                    <tr><td><code>?</code></td><td>Zero or one</td></tr>
                    <tr><td><code>\\d</code></td><td>Digit</td></tr>
                    <tr><td><code>\\w</code></td><td>Word character</td></tr>
                    <tr><td><code>\\s</code></td><td>Whitespace</td></tr>
                    <tr><td><code>[abc]</code></td><td>Any of a, b, or c</td></tr>
                    <tr><td><code>[0-9]</code></td><td>Any digit</td></tr>
                    <tr><td><code>[a-z]</code></td><td>Any lowercase letter</td></tr>
                </tbody>
            </table>

            <h3>উদাহরণ:</h3>
            <pre><code>// Email validation
let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
console.log(emailRegex.test("test@example.com")); // true
console.log(emailRegex.test("invalid-email")); // false

// Phone validation
let phoneRegex = /^01[3-9]\\d{8}$/;
console.log(phoneRegex.test("01712345678")); // true
console.log(phoneRegex.test("123456789")); // false

// Replace
let text = "Hello World";
console.log(text.replace(/world/i, "JavaScript")); // "Hello JavaScript"

// Match
let str = "The rain in Spain";
console.log(str.match(/ain/g)); // ["ain", "ain"]

// Split
let date = "2025-01-15";
console.log(date.split(/[-]/)); // ["2025", "01", "15"]</code></pre>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Email regex\\nlet emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;\\nlet emails = [\\'test@example.com\\', \\'invalid\\', \\'user@domain.co.uk\\'];\\n\\nemails.forEach(email => {\\n    console.log(\`\${email}: \${emailRegex.test(email)}\`);\\n});\\n\\n// Phone regex\\nlet phoneRegex = /^01[3-9]\\\\d{8}$/;\\nlet phones = [\\'01712345678\\', \\'123456\\', \\'01987654321\\'];\\n\\nphones.forEach(phone => {\\n    console.log(\`\${phone}: \${phoneRegex.test(phone)}\`);\\n});\\n\\n// Replace\\nlet text = \\'Hello World Hello\\';\\nconsole.log(text.replace(/hello/gi, \\'Hi\\'));')">💻 Try It</button>
        `
    },
    {
        id: 'fetch-api',
        title: '🌐 ২৯. Fetch API',
        category: 'Advanced',
        content: `
            <h2>🌐 Fetch API</h2>
            <p>Fetch API হলো modern way যা দিয়ে আমরা HTTP requests করতে পারি (GET, POST, PUT, DELETE)।</p>

            <h3>Basic GET Request:</h3>
            <pre><code>fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));</code></pre>

            <h3>GET Request with Async/Await:</h3>
            <pre><code>async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();</code></pre>

            <h3>POST Request:</h3>
            <pre><code>async function postData() {
    try {
        let response = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Saddam',
                age: 25
            })
        });
        
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}</code></pre>

            <h3>Response Methods:</h3>
            <ul>
                <li><code>response.json()</code> - Parse as JSON</li>
                <li><code>response.text()</code> - Get as text</li>
                <li><code>response.blob()</code> - Get as blob</li>
                <li><code>response.arrayBuffer()</code> - Get as array buffer</li>
            </ul>

            <h3>Error Handling:</h3>
            <pre><code>async function fetchWithErrorHandling() {
    try {
        let response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}</code></pre>

            <h3>Headers:</h3>
            <pre><code>fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123',
        'X-Custom-Header': 'value'
    }
});</code></pre>

            <div class="alert alert-info">
                <strong>💡 টিপ:</strong> Fetch API modern browsers-এ available। পুরনো browsers-এর জন্য XMLHttpRequest ব্যবহার করুন।
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// Fetch simulation\\nasync function simulateFetch() {\\n    return new Promise((resolve) => {\\n        setTimeout(() => {\\n            resolve({\\n                json: () => Promise.resolve({ name: \\'Saddam\\', age: 25 })\\n            });\\n        }, 500);\\n    });\\n}\\n\\n// Simulated fetch\\n(async () => {\\n    try {\\n        let response = await simulateFetch();\\n        let data = await response.json();\\n        console.log(\\'Fetched data:\\', data);\\n    } catch (error) {\\n        console.error(\\'Error:\\', error);\\n    }\\n})();')">💻 Try It</button>
        `
    },
    {
        id: 'timers',
        title: '⏰ ৩০. Timers (setTimeout & setInterval)',
        category: 'Advanced',
        content: `
            <h2>⏰ Timers</h2>
            <p>JavaScript-এ <code>setTimeout</code> এবং <code>setInterval</code> ব্যবহার করে delayed execution এবং repeated execution করা যায়।</p>

            <h3>setTimeout - Delay Execution:</h3>
            <pre><code>// Execute once after delay
setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);

// With arrow function
setTimeout(() => {
    console.log("Hello after 1 second");
}, 1000);

// Store timeout ID
let timeoutId = setTimeout(() => {
    console.log("This will be cancelled");
}, 3000);

// Cancel timeout
clearTimeout(timeoutId);</code></pre>

            <h3>setInterval - Repeat Execution:</h3>
            <pre><code>// Execute repeatedly
let intervalId = setInterval(function() {
    console.log("This runs every second");
}, 1000);

// Stop interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000);</code></pre>

            <h3>Practical Examples:</h3>
            <pre><code>// Countdown timer
function countdown(seconds) {
    let intervalId = setInterval(() => {
        console.log(seconds);
        seconds--;
        
        if (seconds < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
}

countdown(5);

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage
let debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
}, 500);

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}</code></pre>

            <h3>Animation Example:</h3>
            <pre><code>let position = 0;
let animationId;

function animate() {
    position += 2;
    console.log("Position:", position);
    
    if (position < 100) {
        animationId = setTimeout(animate, 50);
    } else {
        console.log("Animation complete");
    }
}

animate();</code></pre>

            <div class="interactive-demo">
                <h3>Timer Demo:</h3>
                <div class="output-box" id="timerOutput">0</div>
                <button class="btn btn-primary" onclick="startTimer()">Start Timer</button>
                <button class="btn btn-secondary" onclick="stopTimer()">Stop Timer</button>
                <button class="btn btn-danger" onclick="resetTimer()">Reset Timer</button>
            </div>

            <button class="btn btn-primary playground-btn" onclick="openPlayground('// setTimeout\\nconsole.log(\\'Start\\');\\nsetTimeout(() => {\\n    console.log(\\'After 1 second\\');\\n}, 1000);\\nconsole.log(\\'End\\');\\n\\n// setInterval simulation\\nlet count = 0;\\nlet maxCount = 3;\\n\\nfunction intervalFunc() {\\n    count++;\\n    console.log(\`Count: \${count}\`);\\n    if (count >= maxCount) {\\n        console.log(\\'Interval stopped\\');\\n    }\\n}\\n\\n// Simulate interval\\nintervalFunc();\\nsetTimeout(intervalFunc, 1000);\\nsetTimeout(intervalFunc, 2000);')">💻 Try It</button>
        `
    },
    {
        id: 'exercises',
        title: '📝 ৩১. এক্সারসাইজ (Exercises)',
        category: 'Practice',
        content: `
            <h2>📝 প্র্যাকটিস এক্সারসাইজ</h2>
            <p>নিচের এক্সারসাইজগুলো করে আপনার দক্ষতা পরীক্ষা করুন!</p>

            <h3>Exercise 1: ভ্যারিয়েবল এবং অপারেটর</h3>
            <div class="exercise-box">
                <p><strong>টাস্ক:</strong> দুটি সংখ্যার যোগ, বিয়োগ, গুণ, ভাগ করার একটি program লিখুন।</p>
                <button class="btn btn-primary playground-btn" onclick="openPlayground('// Exercise 1: Calculator\\nlet num1 = 10;\\nlet num2 = 5;\\n\\n// আপনার কোড এখানে লিখুন\\nlet sum = num1 + num2;\\nlet difference = num1 - num2;\\nlet product = num1 * num2;\\nlet quotient = num1 / num2;\\n\\nconsole.log(\\'যোগ:\\', sum);\\nconsole.log(\\'বিয়োগ:\\', difference);\\nconsole.log(\\'গুণ:\\', product);\\nconsole.log(\\'ভাগ:\\', quotient);')">💻 Try It</button>
            </div>

            <h3>Exercise 2: লুপ</h3>
            <div class="exercise-box">
                <p><strong>টাস্ক:</strong> 1 থেকে 100 পর্যন্ত সব জোড় সংখ্যা print করুন।</p>
                <button class="btn btn-primary playground-btn" onclick="openPlayground('// Exercise 2: Even numbers\\n// আপনার কোড এখানে লিখুন\\nfor (let i = 1; i <= 100; i++) {\\n    if (i % 2 === 0) {\\n        console.log(i);\\n    }\\n}')">💻 Try It</button>
            </div>

            <h3>Exercise 3: Array Methods</h3>
            <div class="exercise-box">
                <p><strong>টাস্ক:</strong> একটি array-এর সব সংখ্যার যোগফল বের করুন (reduce ব্যবহার করে)।</p>
                <button class="btn btn-primary playground-btn" onclick="openPlayground('// Exercise 3: Array sum\\nlet numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\\n\\n// আপনার কোড এখানে লিখুন\\nlet sum = numbers.reduce((acc, num) => acc + num, 0);\\nconsole.log(\\'যোগফল:\\', sum);')">💻 Try It</button>
            </div>

            <h3>Exercise 4: Object Manipulation</h3>
            <div class="exercise-box">
                <p><strong>টাস্ক:</strong> একটি object array থেকে শুধু name property গুলো extract করুন।</p>
                <button class="btn btn-primary playground-btn" onclick="openPlayground('// Exercise 4: Extract names\\nlet people = [\\n    { name: \\'Saddam\\', age: 25 },\\n    { name: \\'Rahim\\', age: 30 },\\n    { name: \\'Karim\\', age: 28 }\\n];\\n\\n// আপনার কোড এখানে লিখুন\\nlet names = people.map(person => person.name);\\nconsole.log(\\'নামগুলো:\\', names);')">💻 Try It</button>
            </div>

            <h3>Exercise 5: Function</h3>
            <div class="exercise-box">
                <p><strong>টাস্ক:</strong> একটি function লিখুন যা একটি string-কে reverse করে return করে।</p>
                <button class="btn btn-primary playground-btn" onclick="openPlayground('// Exercise 5: Reverse string\\nfunction reverseString(str) {\\n    // আপনার কোড এখানে লিখুন\\n    return str.split(\\'\\').reverse().join(\\'\\');\\n}\\n\\nconsole.log(reverseString(\\'Hello\\')); // olleH\\nconsole.log(reverseString(\\'JavaScript\\')); // tpircSavaJ')">💻 Try It</button>
            </div>

            <div class="alert alert-success">
                <strong>✅ ভালো কাজ!</strong> এই এক্সারসাইজগুলো complete করার পর আপনি আরো complex problems solve করতে পারবেন!
            </div>
        `
    }
];

// Helper function for interactive demos
function checkAge() {
    let age = parseInt(document.getElementById('ageInput')?.value || 0);
    let output = document.getElementById('ageOutput');
    if (output) {
        if (age >= 18) {
            output.textContent = 'প্রাপ্তবয়স্ক';
            output.style.color = 'green';
        } else if (age > 0) {
            output.textContent = 'অপ্রাপ্তবয়স্ক';
            output.style.color = 'orange';
        } else {
            output.textContent = 'অনুগ্রহ করে বৈধ বয়স লিখুন';
            output.style.color = 'red';
        }
    }
}

function changeDOMContent() {
    let demo = document.getElementById('domDemo');
    if (demo) {
        demo.textContent = 'কন্টেন্ট পরিবর্তন হয়েছে! 🎉';
        demo.style.color = 'green';
    }
}

function changeDOMColor() {
    let demo = document.getElementById('domDemo');
    if (demo) {
        let colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        demo.style.backgroundColor = randomColor;
        demo.style.color = 'white';
    }
}

function resetDOM() {
    let demo = document.getElementById('domDemo');
    if (demo) {
        demo.textContent = 'এটি একটি demo div';
        demo.style.backgroundColor = '#f0f0f0';
        demo.style.color = 'inherit';
    }
}

function simulateAsync() {
    let output = document.getElementById('asyncOutput');
    if (output) {
        output.textContent = 'Loading...';
        setTimeout(() => {
            output.textContent = 'Data fetched successfully! ✅';
        }, 2000);
    }
}

function saveToLocalStorage() {
    let input = document.getElementById('storageInput');
    let output = document.getElementById('storageOutput');
    if (input && output) {
        let value = input.value.trim();
        if (value) {
            localStorage.setItem('demoData', value);
            output.textContent = 'Saved: "' + value + '" to LocalStorage';
            output.style.color = 'green';
        } else {
            output.textContent = 'অনুগ্রহ করে কিছু লিখুন';
            output.style.color = 'red';
        }
    }
}

function getFromLocalStorage() {
    let output = document.getElementById('storageOutput');
    if (output) {
        let value = localStorage.getItem('demoData');
        if (value) {
            output.textContent = 'Retrieved: "' + value + '" from LocalStorage';
            output.style.color = 'blue';
        } else {
            output.textContent = 'LocalStorage-এ কোনো ডাটা নেই';
            output.style.color = 'orange';
        }
    }
}

function clearLocalStorage() {
    let output = document.getElementById('storageOutput');
    if (output) {
        localStorage.removeItem('demoData');
        output.textContent = 'LocalStorage cleared!';
        output.style.color = 'red';
    }
}

function loadProject(projectName) {
    alert(projectName + ' প্রজেক্ট শীঘ্রই আসছে! 💻');
}

// Date helper function
function updateDateTime() {
    let output = document.getElementById('dateOutput');
    if (output) {
        let now = new Date();
        output.innerHTML = `
            <strong>বর্তমান তারিখ ও সময়:</strong><br>
            ${now.toLocaleString('bn-BD')}<br>
            ${now.toDateString()}<br>
            Year: ${now.getFullYear()}, Month: ${now.getMonth() + 1}, Date: ${now.getDate()}<br>
            Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
        `;
    }
}

// Timer helper functions
let timerInterval = null;
let timerCount = 0;

function startTimer() {
    if (timerInterval) return;
    let output = document.getElementById('timerOutput');
    if (output) {
        timerInterval = setInterval(() => {
            timerCount++;
            output.textContent = timerCount;
        }, 1000);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    timerCount = 0;
    let output = document.getElementById('timerOutput');
    if (output) {
        output.textContent = '0';
    }
}