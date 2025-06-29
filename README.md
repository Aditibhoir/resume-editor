# 💼 Resume Editor

A modern, web-based Resume Editor built with **React + FastAPI**  
✨ Enhance sections with mock AI  
📄 Upload + Edit your resume  
💾 Save and ⬇ Download as JSON  
🚀 Styled beautifully with Roboto + Clean UI

---

## 📁 Folder Structure

resume-editor/
├── backend/ # FastAPI app
│ └── main.py
├── frontend/ # React app (Vite)
│ └── src/
│ ├── App.jsx
│ └── App.css
└── README.md

---

## ⚙️ How to Run

### ✅ Backend (FastAPI)

```bash
cd backend/backend
pip install -r requirements.txt
uvicorn main:app --reload
# Runs at: http://localhost:8000

✅ Frontend (React + Vite)

cd frontend
npm install
npm run dev
# Runs at: http://localhost:5173 

✨ Features
📄 Upload fake .pdf or .docx and parse content (mocked)

📝 Edit resume fields (name, summary, experience, etc.)

🧠 Enhance sections using mock AI (via FastAPI)

💾 Save resume JSON to backend

⬇ Download final resume as .json

🎨 Clean and responsive design

📸 Screenshots
![Image](https://github.com/user-attachments/assets/71484dd3-a603-4a29-b734-1811c5f63b46)

![Image](https://github.com/user-attachments/assets/ffbb31b0-337e-4b96-b429-ae143c78c430)




🚀 Future Improvements
📄 Export to PDF

🔔 Toast Notifications

🎨 Multiple Templates

🤖 Real AI integration (OpenAI API)

Made with 💖 by @Aditibhoir


