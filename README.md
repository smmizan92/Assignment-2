# Movies Explorer

এই প্রকল্পটি একটি React + Vite ভিত্তিক "Movies Explorer" অ্যাপ্লিকেশন — একটি শিক্ষণীয় অ্যাসাইনমেন্ট (Assignment 2) যেখানে ব্যবহারকারী সিনেমা সার্চ, ব্রাউজ এবং প্রিয় সিনেমা (favorites) হিসেবে মার্ক করতে পারে। এই README-তে প্রকল্পটি চালানো, ডেভেলপ করা এবং ডিপ্লয় করার প্রয়োজনীয় নির্দেশনা দেওয়া আছে।

## প্রধান বৈশিষ্ট্যসমূহ

- সিনেমা সার্চ (Search)
- সিনেমার তালিকা দেখুন ও বিস্তারিত পেজ
- রেসপন্সিভ UI (স্মার্টফোন ও ডেস্কটপ দুইয়ে কাজ করে)
- Vite-তে দ্রুত ডেভ সার্ভার ও HMR

## পূর্বশর্ত

- Node.js (v16 বা নতুন) এবং npm বা Yarn ইন্সটল করা থাকতে হবে
- প্রজেক্ট রুটে কাজ করার অনুমতি (এই রিপোজিটরি কপি)

## দ্রুত শুরু (Development)

1. রিপোজিটরি ক্লোন/কপি করে প্রজেক্ট ফোল্ডারে যান:

   cd "e:\\JS-React\\Assignment 2\\movies-explorer"

2. ডিপেনডেনসি ইনস্টল করুন (npm উদাহরণ):

   npm install

3. ডেভ সার্ভার চালান:

   npm run dev

ডেভ সার্ভার চালু হলে ব্রাউজারে সাধারণত <http://localhost:5173> (বা টার্মিনালে দেখানো ঠিকানা) এ অ্যাপ দেখা যাবে।

## বিল্ড এবং প্রোডাকশন

- প্রোডাকশন-বিল্ড তৈরি করুন:

  npm run build

- লোকাল সার্ভারে বিল্ড টেস্ট করতে:

  npm run preview

## স্ক্রিপ্টসমূহ (package.json)

- npm run dev — ডেভ সার্ভার চালায় (Vite)
- npm run build — প্রোডাকশন-বিল্ড তৈরি করে
- npm run preview — বিল্ড করা প্রোডাকশন ফাইল লোকালি প্রিভিউ করে
- npm run lint — (যদি উপস্থিত থাকে) কোড লিন্ট করবে
- npm test — (যদি টেস্ট কনফিগ করা থাকে) ইউনিট/ইন্টিগ্রেশন টেস্ট চালায়

## ফোল্ডার স্ট্রাকচার

-  .vercel/
-  dist/
-  node_modules/
-  public/
-  src/
  - assets/
  - components/ — Footer.jsx
                — Hero.jsx
                — MovieCard.jsx
                — MovieGrid.jsx
                — MovieModal.jsx
                — Navbar.jsx  
  - pages/ — Home.jsx
           — Movie.jsx 
  - services/ — get-movies.js
  - App.jsx
  - index.css
  - main.jsx
- .gitignore
- eslint.config.js
- index.html
- package-lock.json
- package.json
- README.md
- vercel.json
- vite.config.js

## ডিপেনডেন্সি ও টুলিং

- React (v18+)
- Vite (vX+)
- সাধারণত ESLint / Prettier ব্যবহার করা থাকে — কোড স্টাইল নিশ্চিত করতে
- পরীক্ষার জন্য (যদি থাকে) Jest / React Testing Library

বিষয়ভিত্তিক নির্ভরতা প্রকৃত package.json থেকে নির্ধারণ করুন (npm install চলিয়ে dependencies যাচাই করুন)।

## নিয়মনীতিমালা ও উন্নয়ন পরামর্শ

- নতুন ফিচার যোগ করার আগে একটি ব্রাঞ্চ তৈরি করুন
- কোডে লিন্ট ও ফরম্যাটার চালিয়ে নিন (ESLint/Prettier)
- বড় পরিবর্তন করলে ছোট-ছোট কমিট করে PR তৈরি করুন (যদি গিট ব্যবহার করেন)

## লাইসেন্স

প্রজেক্টে কোন স্পেসিফিক লাইসেন্স নাই। এই প্রজেক্টের লাইসেন্স মালিক নির্ধারণ করবে।
