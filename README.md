# CLockedIn VS Code Extension

<p align="center">
  <img src="https://github.com/duttaturja/clockedin-dev/blob/master/media/logo.png" width="200" alt="CLockedIn Logo" />
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=duttaturja.clockedin-dev">
    <img src="https://img.shields.io/visual-studio-marketplace/v/duttaturja.clockedin-dev?label=VS%20Marketplace&style=for-the-badge" alt="VS Marketplace Version" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=duttaturja.clockedin-dev">
    <img src="https://img.shields.io/visual-studio-marketplace/i/duttaturja.clockedin-dev?label=Installs&style=for-the-badge" alt="VS Marketplace Installs" />
  </a>
  <a href="https://github.com/duttaturja/clockedin-dev/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/duttaturja/clockedin-dev?style=for-the-badge" alt="License: MIT" />
  </a>
</p>

---

CLockedIn is a Visual Studio Code extension designed to help you track time spent on competitive programming, and automatically push your code to a GitHub repository when you're done.

---

## ✨ Features
- ⏱️ Automatically start and stop a timer when editing files.
- 📊 Show time spent in hrs/mins/secs depending on duration.
- 🔢 View stats with the `CLockedIn: Show Stats` command.
- 📋 Open a dashboard with session data.
- 🌀 Auto commit and push changes to your GitHub repo after coding.
- ⚙️ Enable/disable the extension via settings.

---

## 📦 Installation
Search for `CLockedIn` in the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=duttaturja.clockedin-dev) or clone this repo and run:

```bash
npm install
npm run compile
code .
```

---

## ⚙️ Settings
| Setting | Type | Default | Description |
|--------|------|---------|-------------|
| `clockedin.enabled` | boolean | `true` | Enable or disable all CLockedIn features |

---

## 🧪 Commands
- `CLockedIn: Start Timer`
- `CLockedIn: Show Stats`
- `CLockedIn: Show Dashboard`

Use `Ctrl+Shift+P` to find and run these commands.

---

## 📁 Project Structure
```bash
├── src
│   ├── extension.ts    # Main activation logic
│   ├── timer.ts        # Timer implementation
│   ├── git.ts          # Git commit & push logic
│   ├── dashboard.ts    # Webview dashboard
├── media
│   └── logo.png        # Extension icon
├── package.json        # Extension metadata and settings
└── README.md
```

---

## 📄 License
This extension is licensed under the [MIT License](https://github.com/duttaturja/clockedin-dev/blob/main/LICENSE).

---

## 🔗 Links
- [GitHub Repository](https://github.com/duttaturja/clockedin-dev)
- [Developer: duttaturja](https://github.com/duttaturja)
