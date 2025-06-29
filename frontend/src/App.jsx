import { useState } from "react";
import "./App.css";

function App() {
  const [resume, setResume] = useState({
    name: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  // ✅ Fake Upload Handler
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileName = file.name;
    const extension = fileName.split(".").pop();

    if (extension === "pdf" || extension === "docx") {
      const dummyData = {
        name: "John Doe",
        summary: "Experienced developer skilled in React and FastAPI.",
        experience: "3+ years at XYZ Corp as Full Stack Developer",
        education: "B.Tech in Computer Science from ABC University",
        skills: "React, FastAPI, Python, JavaScript",
      };
      setResume(dummyData);
      alert("✅ Resume uploaded and parsed successfully (mock)!");
    } else {
      alert("❌ Please upload a .pdf or .docx file.");
    }
  };

  const handleChange = (section, value) => {
    setResume({ ...resume, [section]: value });
  };

  const handleEnhance = async (section) => {
    const res = await fetch("http://localhost:8000/ai-enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, content: resume[section] }),
    });
    const data = await res.json();
    setResume({ ...resume, [section]: data.enhanced });
  };

  const handleSave = async () => {
    await fetch("http://localhost:8000/save-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });
    alert("🎉 Resume saved to backend successfully!");
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
  };

  return (
    <div className="App">
      <h1>📝 Resume Editor</h1>

      {/* ✅ Upload Input */}
      <div>
        <label><strong>Upload .pdf/.docx:</strong></label><br />
        <input type="file" accept=".pdf,.docx" onChange={handleUpload} />
      </div>

      {/* Editable Sections */}
      {Object.entries(resume).map(([section, value]) => (
        <div key={section}>
          <h3>{section.toUpperCase()}</h3>
          <textarea
            rows="4"
            value={value}
            onChange={(e) => handleChange(section, e.target.value)}
          />
          <br />
          <button onClick={() => handleEnhance(section)}>✨ Enhance with AI</button>
        </div>
      ))}

      <br />
      <button onClick={handleSave}>💾 Save Resume</button>
      <button onClick={handleDownload}>⬇️ Download JSON</button>
    </div>
  );
}

export default App;
