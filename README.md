# _Simple-Python-Web (Docker-based Web Server)_


## Overview
### 🔹 Project Purpose
- _This project creates a **minimal web server** inside a Docker container using **Python's built-in HTTP server**. It serves a **static HTML page**, adding basic **styling (CSS)** and **interactivity (JavaScript)**—without requiring external dependencies._

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

### 🚀 Installation & Running

#### ✅ Step 1: Build the Docker Image & run container
```bash
docker build -t <custom-image> .
docker run -d -p 8080:8080 <image-name>

```
### 🔹 Access the webpage 

```bash
http://localhost:8080
```

> `You’ll see a styled web page served directly from Docker!` 🚀


## 📜 Code Explanations for Each File

### 📝 1️⃣ index.html (Static Web Page)

```html
<!DOCTYPE html>
<!-- Declares this document as an HTML5 page -->
<html lang="en">
<!-- Specifies the document language as English -->

<head>
    <meta charset="UTF-8">
    <!-- Defines character encoding for universal text compatibility -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Ensures the page is responsive and adapts to different screen sizes -->

    <title>Docker Welcome Page</title>
    <!-- Sets the browser tab title -->

    <link rel="stylesheet" href="style.css">
    <!-- Links to an external CSS file for styling -->
</head>

<body>
    <div class="container">
        <!-- Main container holding the welcome message -->
        <h1 id="welcome-message"></h1>
        <!-- Empty heading, will be dynamically updated via JavaScript -->
        
        <p>Welcome to a lightweight web server running inside Docker!</p>
        <!-- Simple description displayed under the main heading -->
    </div>

    <script src="script.js"></script>
    <!-- Links an external JavaScript file for dynamic interaction -->
</body>
</html>

```

#### 🔹 Code Breakdown
```python
 <!DOCTYPE html> → Defines the document as HTML5.

 <head> → Contains metadata, the page title, and links external CSS.

 <meta charset="UTF-8"> → Ensures universal character compatibility.

 <meta name="viewport" → Makes the page responsive on all screen sizes.

 <body> → Holds visible page content.

 <h1 id="welcome-message"> → Displays a dynamic welcome message (updated via JavaScript).

 <script src="script.js"> → Loads JavaScript for interactivity.
```
### 🎨 2️⃣ style.css (CSS Styling)
```css
/* Set global styles for the page */
body {
    font-family: Arial, sans-serif; /* Uses a readable font */
    text-align: center; /* Centers all text */
    background-color: #f4f4f4; /* Light gray background */
    color: #333; /* Dark gray text */
    padding: 50px; /* Adds space around the content */
}

/* Style the container holding the message */
.container {
    background: white; /* White background for contrast */
    padding: 20px; /* Adds space inside the box */
    border-radius: 10px; /* Smooth rounded corners */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Adds subtle shadow */
    display: inline-block; /* Prevents full width stretching */
    animation: fadeIn 2s ease-in-out; /* Applies animation effect */
}

/* Define a fade-in animation */
@keyframes fadeIn {
    from { opacity: 0; } /* Start invisible */
    to { opacity: 1; } /* Gradually appear */
}


```
#### 🔹 Explanation of Each Property
```css
background: white;

Sets the .container background to white, creating a neat contrast against the light gray body.

padding: 20px;

Adds inner spacing between content inside .container.

Prevents text from touching the container’s edges.

border-radius: 10px;

Rounds the corners of the container by 10 pixels.

Gives the box a softer, smoother look.

box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

Adds a shadow effect to the .container.
The shadow spreads outward by 10px and has 20% opacity (0.2).

Creates a subtle depth effect, making it look slightly lifted.

display: inline-block;

Ensures the container only takes up the necessary width, instead of stretching across the entire page.

Helps maintain layout without breaking to a new line.

animation: fadeIn 2s ease-in-out;

Applies a fade-in effect when the container loads.

The animation duration is 2 seconds, and follows a smooth transition (ease-in-out).

@keyframes fadeIn

Defines a custom CSS animation named "fadeIn".

from { opacity: 0; }

Starting point: Container is fully invisible at the beginning.

to { opacity: 1; }

Ending point: Container becomes fully visible.

🔹 How It Works: When .container loads, it gradually fades from invisible (opacity: 0) to fully visible (opacity: 1) over 2 seconds.
```



### 🎭 3️⃣ script.js (JavaScript for Dynamic Message)
```script.js
// Define a fixed welcome message
const message = "Welcome to Docker!";

// Set the fixed message inside the HTML element
document.getElementById("welcome-message").textContent = message;
```

#### 🔹 Explanation of Each Property
```script.js
🔹 const message → Creates a constant variable named message. 🔹 "Welcome to Docker!" → Stores a static welcome message inside the variable. 🔹 Since const is used, the value cannot be changed later in the script.

🔹 document.getElementById("welcome-message") →

Finds the HTML element with the id="welcome-message".

This refers to the <h1 id="welcome-message"></h1> tag in your HTML file.

🔹 .textContent = message; →

Updates the text inside the <h1> element using the value stored in message.

Since message = "Welcome to Docker!", the heading becomes:

```
###  🐳 4️⃣ Dockerfile (Container Configuration)
```python
# Use Python from Docker host
# Using a lightweight official Python image to reduce container size
FROM python:3.9-slim

# Set working directory inside the container
# This keeps all application-related files organized
WORKDIR /app

# Copy static files into the container
# These files will be served by Python’s built-in HTTP server
COPY index.html style.css script.js /app/

# Start Python’s built-in HTTP server on port 8080
# This makes the files accessible via a browser
CMD ["python", "-m", "http.server", "8080"]

```
### #🔹 Explanation of Each Property
```css
🔹 FROM → This command defines the base image for the container.
🔹 python:3.9-slim → Uses an official Python 3.9 image, but a slim version to keep it lightweight.

Why use python:3.9-slim?
The "slim" variant contains only the minimal required packages, reducing image size and startup time.

Since Python is pre-installed, there’s no need to manually install it inside the container.

🔹 WORKDIR /app → Creates and sets /app as the working directory inside the container.

What happens here?
All subsequent commands execute within /app instead of / (the default root directory).

Helps in maintaining structured files inside the container.

Prevents accidental overwrites or messy paths

🔹 COPY → Transfers files from host machine (your computer) into the Docker image.
🔹 index.html style.css script.js /app/ → Moves the website files (HTML, CSS, and JavaScript) into the /app/ directory inside the container.

How does this work?
The container does not have access to files from your local machine unless explicitly copied into it.

After this step, your static website files exist inside the container under /app/.

🚀 Benefit:
✅ Ensures the container has all necessary files at runtime.
✅ Keeps the application self-contained with all dependencies.

🔹 CMD → Specifies the default command that runs when the container starts.
🔹 python -m http.server 8080 →

Starts an HTTP server using Python’s built-in web server (http.server).

Serves files from /app without requiring additional web frameworks like Flask or Django.

```
## 🛠️ Additional Docker Commands & Troubleshooting

###  ✅ View Running Containers

```bash
docker ps
```
🔹 Lists active containers.

### ✅ View Logs Inside a Container
```bash
docker logs <container_id>
```
🔹 Displays logs from a running container.

###  ✅ Login Inside a Running Container
```bash
docker exec -it <container_id> sh
```
🔹 Opens a shell session inside the container.

### ✅ Stop & Remove a Container
```bash
docker stop <container-name / id>
docker rm <container-name / id>
```
🔹 Stops and deletes a running container.

### ✅ Remove Docker Image
```bash
docker rmi <image-name / id>
```
🔹 Deletes the built Docker image.


## 🏁 Final Overview

### 🔹 What Does This Project Achieve?

`Runs a fully containerized web server inside Docker.`

`Loads an HTML page with styling and interactivity using CSS & JavaScript.`

`Ensures efficient deployment using Python’s built-in capabilities.`

### 🔹 Key Benefits

✅ No Flask, no frameworks—just pure HTML, CSS, and JS inside Docker!

✅ Fast deployment—no need for package installations!

✅ Lightweight setup—works anywhere Docker runs!

