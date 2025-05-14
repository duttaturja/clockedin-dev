# ⏱️ CLockedIn

**Track your coding time effortlessly and commit your work seamlessly.**

<img src="https://raw.githubusercontent.com/duttaturja/clockedin-dev/main/media/logo.png" width="200" alt="CLockedIn Logo" />

CLockedIn is a Visual Studio Code extension designed to help developers monitor their coding sessions and streamline the process of committing and pushing code to GitHub repositories.

---

## 📦 Features

- **Automatic Time Tracking**: Starts timing when you open a file and stops when all files are closed.
- **Real-Time Status Bar Display**: Shows elapsed time in a human-readable format (e.g., `1h 2m 5s`).
- **Interactive Dashboard**: View detailed session statistics within VS Code.
- **GitHub Integration**: Promptly commit and push your code to a specified GitHub repository with a custom commit message.
- **Configurable Settings**: Enable or disable the extension features as per your preference.

---

## 🛠️ Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/duttaturja/clockedin-dev.git
   ```
2. **Navigate to the Directory**:
   ```bash
   cd clockedin-dev
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Compile the Extension**:
   ```bash
   npm run compile
   ```
5. **Launch the Extension**:
   - Press `F5` in VS Code to open a new Extension Development Host window.

---

## ⚙️ Settings

Customize the extension behavior through VS Code settings:

- **Enable/Disable Extension**:
  - Navigate to `Settings` > `Extensions` > `CLockedIn`.
  - Toggle the `Enable CLockedIn` checkbox.

---

## 🚀 Usage

1. **Start Coding**:
   - Open any file in VS Code. The timer starts automatically.
2. **Monitor Time**:
   - View the elapsed time in the status bar.
3. **View Dashboard**:
   - Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and select `CLockedIn: Show Dashboard`.
4. **Commit and Push Code**:
   - Upon closing all files, you will be prompted to:
     - Enter your GitHub repository URL.
     - Provide a commit message.
   - The extension will handle the commit and push operations.

---

## 📸 Screenshots

*Include relevant screenshots here to showcase the extension in action.*

---

## 🧹 Extension Commands

- `CLockedIn: Start Timer` – Manually start the timer.
- `CLockedIn: Show Stats` – Display the current session statistics.
- `CLockedIn: Show Dashboard` – Open the interactive dashboard.

---

## 🧪 Development

To modify or enhance the extension:

1. **Watch for Changes**:
   ```bash
   npm run watch
   ```
2. **Run Tests**:
   ```bash
   npm test
   ```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
