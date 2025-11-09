# 📖 Step-by-Step Setup Guide (বাংলায়)

এই গাইড আপনাকে step-by-step সাহায্য করবে কিভাবে এই প্রজেক্টটি GitHub-এ upload করতে হয় এবং লাইভ URL তৈরি করতে হয়।

## 🎯 Step 1: GitHub Repository তৈরি করুন

### 1.1 GitHub Account তৈরি করুন (যদি না থাকে)
- [GitHub.com](https://github.com) এ যান
- "Sign up" ক্লিক করুন
- Account তৈরি করুন

### 1.2 নতুন Repository তৈরি করুন
1. GitHub-এ login করুন
2. ডানদিকের উপরে **"+"** icon → **"New repository"** ক্লিক করুন
3. Repository details:
   - **Repository name**: `Learn-Javascript-in-Bengali` (বা আপনার পছন্দমতো নাম)
   - **Description**: "বাংলায় জাভাস্ক্রিপ্ট শেখার ইন্টার‌্যাক্টিভ প্ল্যাটফর্ম"
   - **Public** select করুন (GitHub Pages free-এর জন্য Public প্রয়োজন)
   - **README.md** check করবেন না (আমরা ইতিমধ্যে তৈরি করেছি)
4. **"Create repository"** ক্লিক করুন

## 🎯 Step 2: Code GitHub-এ Push করুন

### 2.1 Git Initialize করুন (যদি আগে থেকে না থাকে)

**Windows PowerShell বা Command Prompt-এ:**

```bash
# আপনার project folder-এ যান
cd C:\Users\sadda\Desktop\Some_New\interactive-js-learning

# Git initialize করুন
git init

# সব files add করুন
git add .

# Commit করুন
git commit -m "Initial commit: Interactive JavaScript Learning Platform"

# GitHub repository-এর URL add করুন (আপনার username দিয়ে replace করুন)
git remote add origin https://github.com/saddamtkg/Learn-Javascript-in-Bengali.git

# Main branch-এ push করুন
git branch -M main
git push -u origin main
```

**Note:** প্রথমবার push করার সময় GitHub username এবং password/token চাইবে।

### 2.2 GitHub Personal Access Token তৈরি করুন (যদি password কাজ না করে)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" → "Generate new token (classic)"
3. Note: "Deploy token"
4. Expiration: আপনার পছন্দমতো
5. Scopes: `repo` check করুন
6. "Generate token" → Token copy করুন (একবারই দেখাবে!)
7. Password-এর পরিবর্তে এই token ব্যবহার করুন

## 🎯 Step 3: GitHub Pages Enable করুন

1. আপনার GitHub repository-তে যান
2. **Settings** tab-এ ক্লিক করুন (repository-এর উপরে)
3. বাম sidebar-এ scroll করে **Pages** option খুঁজুন
4. **Source** dropdown থেকে:
   - **Branch**: `main` select করুন
   - **Folder**: `/ (root)` select করুন
5. **Save** ক্লিক করুন

## 🎯 Step 4: Live URL পান

কয়েক মিনিট অপেক্ষা করুন (সাধারণত 1-2 মিনিট)।

তারপর আপনার site live হবে:
```
https://saddamtkg.github.io/Learn-Javascript-in-Bengali
```

**Example:**
যদি আপনার username `saddam` হয়, তাহলে URL হবে:
```
https://saddamtkg.github.io/Learn-Javascript-in-Bengali
```

## ✅ Verification

1. Browser-এ আপনার live URL open করুন
2. সব features test করুন:
   - Navigation কাজ করছে কিনা
   - Code playground কাজ করছে কিনা
   - Dark/Light mode কাজ করছে কিনা
   - সব লেসন load হচ্ছে কিনা

## 🔄 Future Updates

যদি আপনি code update করতে চান:

```bash
# Changes add করুন
git add .

# Commit করুন
git commit -m "Update: description of changes"

# Push করুন
git push
```

GitHub Pages automatically update হবে কয়েক মিনিটের মধ্যে।

## 🌐 Alternative: Netlify (আরো সহজ)

যদি GitHub Pages-এ সমস্যা হয়, Netlify ব্যবহার করতে পারেন:

1. [Netlify.com](https://www.netlify.com/) এ যান
2. "Sign up" → GitHub দিয়ে sign up করুন
3. "Add new site" → "Import an existing project"
4. GitHub repository select করুন
5. Build settings:
   - Build command: (খালি রাখুন)
   - Publish directory: `/`
6. "Deploy site" ক্লিক করুন
7. Instant live URL পাবেন!

## 📝 Important Notes

- ✅ Repository **Public** হতে হবে GitHub Pages free-এর জন্য
- ✅ `index.html` root folder-এ থাকতে হবে
- ✅ কোনো build process নেই - সরাসরি static files
- ✅ HTTPS automatically enable হবে

## 🆘 Help Needed?

যদি কোনো সমস্যা হয়:
1. GitHub Issues-এ প্রশ্ন করুন
2. Error messages screenshot নিয়ে share করুন
3. Step-by-step যা করেছেন তা describe করুন

---

**Good Luck! 🚀**

