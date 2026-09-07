# skilllab-project
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
