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
https://private-user-images.githubusercontent.com/169933249/460305997-5605de6f-2aa6-4125-bf4a-c8948a86b57c.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEyMDI2NDQsIm5iZiI6MTc1MTIwMjM0NCwicGF0aCI6Ii8xNjk5MzMyNDkvNDYwMzA1OTk3LTU2MDVkZTZmLTJhYTYtNDEyNS1iZjRhLWM4OTQ4YTg2YjU3Yy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyOVQxMzA1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYTQzYzg2ODVkMGY4YjE3ZTUzYzY3NGYwMzMxY2RmZjdmZDAyYjM1NTk0MjRlYjc4Njc4MjcyZDE0ZDNkMDYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.75aRwTImI7kFORb681lG5l9f3Rl7ca__CQh2YHVVCPA

https://private-user-images.githubusercontent.com/169933249/460306070-dc496c57-a03d-4415-b7cc-1b4bf34bf52c.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEyMDI2NDQsIm5iZiI6MTc1MTIwMjM0NCwicGF0aCI6Ii8xNjk5MzMyNDkvNDYwMzA2MDcwLWRjNDk2YzU3LWEwM2QtNDQxNS1iN2NjLTFiNGJmMzRiZjUyYy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyOVQxMzA1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNjQzOTJkZWM2MDczMDMxNTMyMjIyMTgwZTFhN2MwZjAwNTJmNjMwYjMyNzA5MTgyYWVmMzVjMjAwN2VlNTVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pDFLG2s9gWYDCCjrAjHLdQnUo9TvnxZwLfwq7FsurmE

🚀 Future Improvements
📄 Export to PDF

🔔 Toast Notifications

🎨 Multiple Templates

🤖 Real AI integration (OpenAI API)

Made with 💖 by @Aditibhoir


