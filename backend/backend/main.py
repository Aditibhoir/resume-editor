from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

resume_storage = {}

class EnhanceRequest(BaseModel):
    section: str
    content: str

class ResumeRequest(BaseModel):
    resume: dict

@app.post("/ai-enhance")
async def enhance_section(req: EnhanceRequest):
    improved = f"✨ Improved version of {req.section}: {req.content.upper()} ✨"
    return {"enhanced": improved}

@app.post("/save-resume")
async def save_resume(req: ResumeRequest):
    resume_storage["resume"] = req.resume
    return {"message": "Resume saved successfully!"}

@app.get("/get-resume")
async def get_resume():
    return resume_storage.get("resume", {})
