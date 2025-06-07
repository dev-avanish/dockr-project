# Simple-Python-Web (Docker-based Web Server)

## Overview
### 🔹 Project Purpose
This project creates a **minimal web server** inside a Docker container using **Python's built-in HTTP server**. It serves a **static HTML page**, adding basic **styling (CSS)** and **interactivity (JavaScript)**—without requiring external dependencies.

### 🔹 Key Features
- ✅ No additional installations required—uses Python’s built-in HTTP server.
- ✅ Runs inside Docker for easy deployment across environments.
- ✅ Static HTML page with CSS styling for a polished look.
- ✅ JavaScript for dynamic message rendering to enhance user experience.

---

## Project Setup
### 📁 Required Files & Directory Structure
```bash
Simple-Python-Web/
│── index.html      # Static HTML page
│── style.css       # CSS for styling
│── script.js       # JavaScript for interactivity
│── Dockerfile      # Docker setup
```

### 🔹 Installation & Running Commands
#### ✅ Step 1: Build the Docker Image
```bash
docker build -t <custom-image name> .
