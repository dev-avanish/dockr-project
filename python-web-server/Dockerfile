# Use Python from Docker host
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy static files into container
COPY index.html style.css script.js /app/

# Start Python’s built-in HTTP server
CMD ["python", "-m", "http.server", "8080"]

