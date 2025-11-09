# 🚀 Deployment Guide

এই গাইড আপনাকে সাহায্য করবে কিভাবে এই প্রজেক্টটি লাইভ URL-এ deploy করতে হয়।

## 📋 Prerequisites

- GitHub account
- Git installed on your computer

## 🌐 Option 1: GitHub Pages (Free & Easy)

### Step 1: GitHub Repository তৈরি করুন

1. GitHub-এ login করুন
2. "New repository" ক্লিক করুন
3. Repository name দিন: `interactive-js-learning`
4. Public select করুন
5. "Create repository" ক্লিক করুন

### Step 2: Code Push করুন

```bash
# Initialize git (যদি আগে থেকে না থাকে)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Interactive JavaScript Learning Platform"

# Add remote repository
git remote add origin https://github.com/your-username/interactive-js-learning.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: GitHub Pages Enable করুন

1. GitHub repository-তে যান
2. **Settings** tab-এ ক্লিক করুন
3. বাম sidebar-এ **Pages** option খুঁজুন
4. **Source** dropdown থেকে **main** branch select করুন
5. **/ (root)** folder select করুন
6. **Save** ক্লিক করুন

### Step 4: Live URL পান

কয়েক মিনিট পরে আপনার site live হবে:
```
https://your-username.github.io/interactive-js-learning
```

## 🌐 Option 2: Netlify (Free & Fast)

### Step 1: Netlify Account তৈরি করুন

1. [Netlify](https://www.netlify.com/) এ যান
2. "Sign up" → GitHub দিয়ে sign up করুন

### Step 2: Deploy করুন

1. Dashboard-এ "Add new site" → "Import an existing project" ক্লিক করুন
2. GitHub authorize করুন
3. আপনার repository select করুন
4. Build settings:
   - **Build command**: (খালি রাখুন - কোনো build নেই)
   - **Publish directory**: `/` (root folder)
5. "Deploy site" ক্লিক করুন

### Step 3: Custom Domain (Optional)

1. Site settings → Domain management
2. Custom domain add করতে পারেন

## 🌐 Option 3: Vercel (Free & Modern)

### Step 1: Vercel Account তৈরি করুন

1. [Vercel](https://vercel.com/) এ যান
2. GitHub দিয়ে sign up করুন

### Step 2: Deploy করুন

1. Dashboard-এ "New Project" ক্লিক করুন
2. GitHub repository import করুন
3. Framework Preset: **Other** select করুন
4. Build settings:
   - Build Command: (খালি)
   - Output Directory: `/`
5. "Deploy" ক্লিক করুন

## 🔄 Auto Deployment

### GitHub Pages
- প্রতিবার `main` branch-এ push করলে automatically update হবে

### Netlify/Vercel
- প্রতিবার `main` branch-এ push করলে automatically redeploy হবে

## 📝 Important Notes

1. **Repository Name**: যদি repository name change করেন, তাহলে GitHub Pages URL-ও change হবে
2. **Custom Domain**: Netlify/Vercel-এ custom domain add করতে পারেন
3. **HTTPS**: সব platforms automatically HTTPS provide করে
4. **No Build Required**: এই প্রজেক্ট static HTML/CSS/JS, তাই কোনো build process নেই

## 🐛 Troubleshooting

### GitHub Pages কাজ করছে না?
- Settings → Pages-এ check করুন source সঠিক আছে কিনা
- কয়েক মিনিট অপেক্ষা করুন (deployment সময় লাগতে পারে)
- Repository public আছে কিনা check করুন

### Netlify/Vercel Error?
- Build command খালি আছে কিনা check করুন
- Publish directory `/` আছে কিনা verify করুন

## ✅ Deployment Checklist

- [ ] GitHub repository তৈরি হয়েছে
- [ ] Code push করা হয়েছে
- [ ] GitHub Pages enable করা হয়েছে (বা Netlify/Vercel setup করা হয়েছে)
- [ ] Live URL কাজ করছে
- [ ] সব features test করা হয়েছে

## 🎉 Success!

এখন আপনার JavaScript learning platform live! Share করুন আপনার বন্ধুদের সাথে!

---

**Need Help?** GitHub Issues-এ প্রশ্ন করুন।

