skilllab-project
Jia.Jithesh-1CD25CS091

Project: Cyber Incident Management System
Organizations often lack a simple and centralized way to record, track, and manage cybersecurity incidents. Security incidents such as phishing attempts, unauthorized access, malware detection, and suspicious activities may be reported through different channels, making it difficult to monitor their status and response. 
To solve this issue, we are developing a web-based Cyber Incident Management System that allows users to report incidents, categorize and prioritize them based on severity, assign incidents to responsible personnel, track their resolution status, and maintain a record of past incidents.


Version 1.0 has the following features:
1. Login page 
2. Reporting an incident, that includes the following details:
  •	Incident type 
  •	Description 
  •	Date 
  •	Severity 
3. Dashboard, with the following statistics:
  •	Total incidents 
  •	Open incidents 
  •	Resolved incidents 
4. Incident management:
  •	Assign 
  •	Change status
  •	Change severity 
5.  Incident history


Tech requirements:
•	Python — main programming language 
•	Flask — backend/web framework 
•	HTML + CSS — website structure & design 
•	JavaScript — small interactive features 
•	SQLite — database 
•	VS Code — development 
•	Git + GitHub — version control 
 Basic database tables:
•	Users — username, password, role 
•	Incidents — type, description, severity, status, date, assigned person 
•	Incident History — status changes/actions 

Cybersecurity concepts used:
•	Authentication 
•	Authorization / role-based access 
•	Password hashing 
•	Input validation 
•	Session management 
•	Audit logs 
•	Incident severity & prioritization

Pipe line:

1. User views the log in page
        ↓
2. Dashboard is visible
        ↓
3. User can report a cybersecurity incident
        ↓
4. Incident gets stored in the database
        ↓
5. Admin/authorized person reviews it
        ↓
6. Incident is assigned to someone
        ↓
7. Person investigates and updates it
        ↓
8. Status changes until it's resolved
        ↓
9. Every action is recorded
        ↓
10. Dashboard shows the overall security situation



Preview of the UI (made by me)

<img width="1365" height="594" alt="image" src="https://github.com/user-attachments/assets/50499e49-83d7-43b2-9361-abf76d4ba154" />

https://www.figma.com/proto/E4VR1jUdWg2qLhkUVjKjNS/Untitled?node-id=2-3&p=f&t=UCnXniZTIDXR1kEq-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3

^^ click login --> click report

Preview of the UI (made by AI)

<img width="570" height="414" alt="image" src="https://github.com/user-attachments/assets/c972123c-5a24-4f31-b197-b00dc6db1a86" />
https://stitch.withgoogle.com/projects/17363277845261764396?pli=1

This is the live working website: https://jia-jithesh03.github.io/skilllab-project/

