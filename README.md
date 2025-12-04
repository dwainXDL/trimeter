# 🌟 TriMeter

**Trimeter** - A web-based UMS (Utility Management System) application for 3 essential household services (electricity, water, gas). Built for our IMR coursework.

![TriMeter Logo](https://trimeterstorage.blob.core.windows.net/images/WhatsApp%20Image%202025-12-01%20at%2013.31.36.jpeg)

## 🚀 Badges

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-F6C915?style=for-the-badge&logo=chart.js&logoColor=black)
![MS SQL](https://img.shields.io/badge/MS%20SQL-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 📌 Features 
- 👥 User role management (Admin, Manager, Cashier, etc.) 
- 🔐 Secure login & session-based authentication 
- 📝 CRUD operations for users & meters 
- 📁 File upload for documents and images
- 📊 Comprehensive reports and analytics 
- 📱 Responsive UI using Tailwind CSS 

## 👨‍💻 Authors

- [@dwainXDL](https://github.com/dwainXDL) - Project Lead / Normalization Lead
- [@PWTMihisara](https://github.com/PWTMihisara) - DB Implementation Lead
- [@drnykteresteinwayne](https://github.com/drnykteresteinwayne) - Database Architect
- [@nisith2003](https://github.com/nisith2003) - Frontend Developer
- TBA - Triggers & Procedures Lead
- [@thiranya123](https://github.com/thiranya123) - Functions & Views Lead
- TBA - Backend Developer
- TBA - Integration Developer
- TBA - Report Lead
- [@kmss-sew](https://github.com/kmss-sew) - Documentation Lead

## 🔑 Environment Variables

To run this project, you will need to add the following **.env file**

```env
# Database Configuration
DB_USERNAME=
DB_PASSWORD=
DB_SERVER=
DB_DATABASE=

# Session Secret
SESSION_SECRET=

# Port
PORT=
```
Contact [@dwainXDL](https://github.com/dwainXDL) for the team `.env` file.

## 🏃 Run Locally

**Clone the project**

```bash
git clone https://github.com/dwainXDL/trimeter.git
```

**Go to the project directory**

```bash
cd project-folder
```

**Install dependencies**

```bash
npm install
```

**Setup environment variables**

Create a `.env` file in the root directory and modify as required.

**Start the dev server / production server**

```bash
npm run dev
```

or

```bash
npm run start
```

## 🛠 Tech Stack
### **Backend**
- Node.js 🟢 - JS Runtime
- Express.js ⚡ - Web Framework 
- mssql 🗄️ - SQL Driver for Node.js
- express-session 🔐 - Session Management 
- bcryptjs 🔑 - Password Hashing
- express-validator ✅ - Input Validation 

### **Frontend**
- HTML/JS 🖥️ - EJS Templates  
- Tailwind CSS 🎨 - CSS Framework
- Chart.js 📊 - Graphs/Reports

### **Database**
- MS SQL Server 2022 🗄️ - Relational Database
- SSMS 💻 - DB Management  

### **File Handling**
- Multer 📁 - File Uploading 
- Sharp 🖼️ - Image Compression  

### **Development Tools**
- VS Code 💻 - Code Editor of Choice
- Nodemon 🔄 - Hot Reload
- Postman 🛠️ - API Testing
- dotenv 🌿 - Env Variables
- Jest 🃏 - JS Testing Framework
- Supertest 🚀 - Test HTTP Servers

## 🗄️ Database Features

- **Normalized to 3NF** - Properly structured relational design
- **ER Diagrams** - Complete entity-relationship modeling
- **Triggers** - Automated actions on data changes
- **UDFs** - Reusable calculation logic
- **Views** - Simplified data access
- **Stored Procedures** - Complex operations and business logic

## 📫 Contact

For questions or access to our env variables, reach out to:

**Project Lead:** [@dwainXDL](https://github.com/dwainXDL)

## 📝 License
This project is developed for academic purposes as part of our IMR courswork at UoP / NSBM