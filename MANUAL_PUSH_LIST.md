# Manual GitHub Push - File List

## ✅ **FILES TO PUSH** (Select these manually)

### 📁 Root Level Files
```
✅ .gitignore
✅ package.json
✅ package-lock.json
✅ index.html
✅ vite.config.js
✅ postcss.config.mjs
✅ eslint.config.js
✅ README.md
✅ AUTH_README.md
✅ QUICK_START.md
✅ GITHUB_PUSH_GUIDE.md
✅ MANUAL_PUSH_LIST.md
```

### 📁 Frontend Source Code (src/)
```
✅ src/
   ✅ App.jsx
   ✅ main.jsx
   ✅ index.css
   ✅ assets/
      ✅ react.svg
   ✅ components/
      ✅ Navbar.jsx
      ✅ Footer.jsx
      ✅ Hero.jsx
      ✅ Categories.jsx
      ✅ FeaturedProducts.jsx
      ✅ ProductCard.jsx
      ✅ ProtectedRoute.jsx
   ✅ context/
      ✅ authContext.jsx
      ✅ cartContext.jsx
      ✅ filterContext.jsx
   ✅ data/
      ✅ products.js
   ✅ pages/
      ✅ Home.jsx
      ✅ Products.jsx
      ✅ ProductDetails.jsx
      ✅ Cart.jsx
      ✅ Login.jsx
      ✅ Register.jsx
      ✅ Dashboard.jsx
```

### 📁 Public Folder
```
✅ public/
   ✅ vite.svg
```

### 📁 Backend (backend/)
```
✅ backend/
   ✅ .gitignore
   ✅ package.json
   ✅ package-lock.json
   ✅ server.js
   ✅ README.md
   ✅ models/
      ✅ User.js
   ✅ routes/
      ✅ authRoutes.js
   ✅ middleware/
      ✅ authMiddleware.js
```

---

## ❌ **NEVER PUSH THESE** (Exclude from selection)

### Environment & Secrets
```
❌ .env
❌ .env.local
❌ .env.production
❌ backend/.env
```

### Dependencies (Auto-generated)
```
❌ node_modules/
❌ backend/node_modules/
```

### Build Output
```
❌ dist/
❌ dist-ssr/
```

### Logs & System Files
```
❌ *.log
❌ .DS_Store
❌ .vscode/
❌ .idea/
```

---

## 📋 **Quick Checklist**

### Step 1: Root Files
- [ ] `.gitignore`
- [ ] `package.json`
- [ ] `package-lock.json`
- [ ] `index.html`
- [ ] `vite.config.js`
- [ ] `postcss.config.mjs`
- [ ] `eslint.config.js`
- [ ] All `.md` files (README, AUTH_README, etc.)

### Step 2: Frontend Source
- [ ] `src/` folder (all files inside)
- [ ] `public/` folder

### Step 3: Backend Source
- [ ] `backend/.gitignore`
- [ ] `backend/package.json`
- [ ] `backend/package-lock.json`
- [ ] `backend/server.js`
- [ ] `backend/README.md`
- [ ] `backend/models/` folder
- [ ] `backend/routes/` folder
- [ ] `backend/middleware/` folder

### Step 4: Verify Exclusions
- [ ] NO `.env` files selected
- [ ] NO `node_modules/` folders selected
- [ ] NO `dist/` folders selected

---

## 🎯 **Simplified List (Copy-Paste Friendly)**

### Files to Include:
```
.gitignore
package.json
package-lock.json
index.html
vite.config.js
postcss.config.mjs
eslint.config.js
README.md
AUTH_README.md
QUICK_START.md
GITHUB_PUSH_GUIDE.md
MANUAL_PUSH_LIST.md
src/
public/
backend/.gitignore
backend/package.json
backend/package-lock.json
backend/server.js
backend/README.md
backend/models/
backend/routes/
backend/middleware/
```

### Files to Exclude:
```
.env
.env.local
.env.production
backend/.env
node_modules/
backend/node_modules/
dist/
dist-ssr/
*.log
```

---

## ⚠️ **CRITICAL: Double-Check Before Pushing**

1. **Check for `.env` files** - Make sure NONE are selected
2. **Check for `node_modules`** - Should NOT be pushed
3. **Verify MongoDB connection string** - Should NOT be in any file

---

## 📝 **GitHub Desktop / VS Code Git Instructions**

### Using GitHub Desktop:
1. Open GitHub Desktop
2. Click "Changes" tab
3. **Uncheck** any `.env` files
4. **Uncheck** `node_modules/` folders
5. **Check** all source code files
6. Write commit message
7. Click "Commit to main"
8. Click "Push origin"

### Using VS Code Git:
1. Open Source Control panel (Ctrl+Shift+G)
2. Review changes
3. **Unstage** `.env` files if shown
4. **Unstage** `node_modules/` if shown
5. Stage all other files
6. Commit with message
7. Push to GitHub

---

## 🔒 **Security Reminder**

Your `backend/.env` contains:
```
MONGO_URI=mongodb+srv://sauravsitamarhi123_db_user:7i4xQwqUnkiCLp1E@...
```

**If you accidentally push this:**
1. Change MongoDB password immediately in Atlas
2. Change JWT_SECRET
3. Remove from Git history

---

## ✅ **Final Verification**

Before clicking "Push", verify:
- ✅ Source code files are included
- ✅ Configuration files are included
- ✅ Documentation files are included
- ❌ `.env` files are NOT included
- ❌ `node_modules/` are NOT included
- ❌ No passwords visible in code

