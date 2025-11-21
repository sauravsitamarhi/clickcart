# GitHub Push Guide - What to Include/Exclude

## ✅ **PUSH TO GITHUB** (Safe to push)

### Frontend Files
```
✅ src/                    # All React source code
✅ public/                 # Public assets
✅ index.html             # HTML entry point
✅ package.json           # Frontend dependencies
✅ package-lock.json      # Lock file
✅ vite.config.js         # Vite configuration
✅ postcss.config.mjs     # PostCSS config
✅ eslint.config.js       # ESLint config
✅ tailwind.config.js     # Tailwind config (if exists)
✅ README.md              # Documentation
✅ AUTH_README.md         # Auth documentation
✅ QUICK_START.md         # Quick start guide
✅ .gitignore             # Git ignore rules
```

### Backend Files
```
✅ backend/
   ✅ models/             # MongoDB models
   ✅ routes/             # API routes
   ✅ middleware/         # Middleware files
   ✅ server.js           # Server entry point
   ✅ package.json        # Backend dependencies
   ✅ package-lock.json  # Lock file
   ✅ README.md          # Backend docs
   ✅ .gitignore         # Backend gitignore
```

## ❌ **NEVER PUSH TO GITHUB** (Sensitive/Generated)

### Environment Files
```
❌ .env                   # Contains MongoDB password, JWT secret
❌ .env.local
❌ .env.production
❌ backend/.env           # Contains MongoDB Atlas connection string
```

### Dependencies & Build
```
❌ node_modules/          # Can be reinstalled with npm install
❌ backend/node_modules/  # Can be reinstalled
❌ dist/                  # Build output
❌ dist-ssr/              # SSR build output
```

### Logs & Temporary
```
❌ *.log                  # Log files
❌ .DS_Store              # macOS system file
❌ .vscode/               # Editor settings (except extensions.json)
❌ .idea/                 # IntelliJ settings
```

## 🔐 **IMPORTANT: Your MongoDB Connection String**

Your `.env` file contains:
```
MONGO_URI=mongodb+srv://sauravsitamarhi123_db_user:7i4xQwqUnkiCLp1E@cluster0.fiqzyz6.mongodb.net/...
```

**NEVER push this to GitHub!** It contains your database password.

## 📋 **Quick Checklist Before Pushing**

- [ ] `.env` files are in `.gitignore`
- [ ] `node_modules` folders are excluded
- [ ] No passwords or API keys in code
- [ ] `package.json` files are included
- [ ] Source code files are included
- [ ] README files are included

## 🚀 **Commands to Push to GitHub**

```bash
# 1. Check what will be pushed (review carefully!)
git status

# 2. Add files (only safe files will be added due to .gitignore)
git add .

# 3. Verify what's staged (make sure .env is NOT listed)
git status

# 4. Commit
git commit -m "Add authentication system with MongoDB Atlas"

# 5. Push to GitHub
git push origin main
```

## 📝 **Create .env.example Files**

Create example files (without real credentials) that CAN be pushed:

**backend/.env.example:**
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secret-key-here
```

**Root .env.example (if needed):**
```env
VITE_API_URL=http://localhost:5000/api
```

These example files help others set up the project without exposing your credentials.

## ⚠️ **If You Accidentally Pushed .env**

1. **Immediately change your MongoDB password** in Atlas
2. **Change your JWT_SECRET**
3. **Remove from Git history:**
   ```bash
   git rm --cached backend/.env
   git commit -m "Remove .env file"
   git push
   ```
4. **Update .gitignore** to ensure it's excluded

## ✅ **Safe Project Structure for GitHub**

```
shopmate-main/
├── .gitignore              ✅ Push
├── README.md               ✅ Push
├── AUTH_README.md          ✅ Push
├── QUICK_START.md         ✅ Push
├── package.json           ✅ Push
├── package-lock.json      ✅ Push
├── vite.config.js         ✅ Push
├── index.html             ✅ Push
├── src/                   ✅ Push (all source code)
├── public/                ✅ Push
├── backend/
│   ├── .gitignore         ✅ Push
│   ├── package.json       ✅ Push
│   ├── server.js          ✅ Push
│   ├── models/            ✅ Push
│   ├── routes/            ✅ Push
│   └── middleware/        ✅ Push
├── .env                   ❌ NEVER PUSH
├── backend/.env           ❌ NEVER PUSH
├── node_modules/          ❌ NEVER PUSH
└── backend/node_modules/  ❌ NEVER PUSH
```

