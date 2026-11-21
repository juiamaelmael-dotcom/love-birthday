# A Birthday Surprise for Love 💗
Static site (HTML + CSS + vanilla JS). No backend, no paid services, no API keys.

## Run locally (VS Code)
1. Open this folder in VS Code and install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

## Music
Put a royalty-free or personally provided MP3 at `assets/audio/birthday-music.mp3`.
Without it, everything still works and the music button shows a friendly note. The page attempts to start music automatically; if the browser blocks autoplay, it starts on the first click or key press.

## Deploy free with GitHub Pages
1. Create a free account at github.com, then click **New repository** (e.g. `love-birthday`). Set it Public and create it.
2. Upload the files: **Add file → Upload files** (drag in everything, including `.nojekyll`), then **Commit changes**.
   Or with Git: `git init && git add . && git commit -m "Birthday surprise" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`
3. Open the repository **Settings**.
4. Click **Pages** in the left sidebar.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/ (root)**.
7. Click **Save**.
8. Wait 1–2 minutes, then open `https://<your-username>.github.io/<repo-name>/`.

All paths are relative, so it works from a repository subdirectory over HTTPS.
