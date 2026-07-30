No design or code changes today - this day is about pushing to GitHub and
going live.

## 1. Push everything
git add .
git commit -m "Day 12: Prepare project for deployment"
git push origin main

## 2. Deploy with GitHub Pages
Since this portfolio is pure HTML/CSS/JS (no backend), GitHub Pages is a
perfect fit - no separate hosting needed.

1. Go to your repository on GitHub.
2. Click Settings -> Pages (left sidebar).
3. Under "Source", choose the "main" branch and the root folder ("/").
4. Click Save.
5. GitHub gives you a live URL, usually:
   https://github.com/ritikagupta-hihi/codomax-internship-.git
6. Wait 1-2 minutes, then open that link to confirm everything loads -
   including navigation between index.html and contact.html.

## 3. Commit
git add .
git commit -m "Day 12: Deployed with GitHub Pages"
git push origin main