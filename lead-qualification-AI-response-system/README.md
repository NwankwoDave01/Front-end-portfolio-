# lead-qualification-ai-response-system
Automated lead qualification and AI-powered response system built with n8n and Gemini API.

# Lead Qualification & AI Response System

### Client: Sarah Chen — Business Coach  
**Project Type:** Workflow Automation + AI Response Generation  
**Tool Stack:** n8n, Gemini API, Webhooks, Conditional Routing

---

### Project Brief
I was assigned by Sarah Chen to automate her lead qualification and email response process. Her website form submissions were manually reviewed daily, taking 2+ hours. The goal was to build a real-time system that:

- Receives lead submissions instantly via webhook  
- Parses revenue strings into usable numeric values  
- Qualifies leads using conditional logic  
- Generates personalized email responses using AI  
- Handles AI/API failures with fallback routing  
- Captures both qualified and unqualified leads for future nurturing  

---

### Workflow Overview
Lead Form Webhook → Parse Lead Data → Check Lead Qualification
├ Qualified → Generate Sarah’s Email (AI) → Validate AI Response
│ ├ Empty → AI Fallback Message
│ └ Success → Store Qualified Lead Result
└ Unqualified → Store Unqualified Lead Result


---

### Deliverables
✔ Working webhook receiver  
✔ Conditional lead qualification  
✔ AI-generated personalized email responses  
✔ Fallback error handling to prevent workflow crashes  
✔ JSON export matching live workflow  

---

### Results
This system reduced lead handling from hours to seconds and ensured no loss of data during AI failures.

---

### Notes
This project simulates a real client environment and demonstrates architectural clarity, debugging process, and AI prompt design.

---

**Author:** Nwankwo Dave


