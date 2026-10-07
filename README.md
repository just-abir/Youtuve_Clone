# YouTuve Clone 🎬

A YouTube-inspired video streaming web app built with React and the YouTube Data API v3.

---

## 🛠 Tech Stack

- **React 19** — UI framework
- **Tailwind CSS v4** — Styling
- **React Router DOM** — Client-side routing
- **YouTube Data API v3** — Fetching videos & comments
- **Lucide React** — Icons
- **Vite** — Build tool

---

## ✨ Features

- 🏠 Home feed with real YouTube videos
- ▶️ Video player page with details, likes & description
- 💬 Dynamic comments fetched from YouTube API
- 📋 Related videos on video play page
- 📱 Responsive sidebar (drawer on mobile, mini on tablet, full on desktop)
- ☰ Hamburger menu toggle — works on all pages including video page
- 🔍 Category filter bar (horizontal scroll)

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/youtuve.git
cd youtuve

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)

# 4. Start development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

> Get your API key from [Google Cloud Console](https://console.cloud.google.com/) → Enable **YouTube Data API v3**.

---

## 📁 Project Structure

```
src/
├── assets/           # Icons, images
├── Components/       # Header, Sidebar, Body
├── VideoPages/       # VideoPlayPage, VideoLeftSide, VideoRightSide
├── Pages/            # Data.js (API key), FeedData.js, SidebarData.js
├── BodyNabvarPages/  # Category route pages
└── SidebarPages/     # History, Subscriptions pages
```

---

## 🌐 Live Demo

> Coming soon...
