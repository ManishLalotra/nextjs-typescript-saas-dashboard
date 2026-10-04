# Deployment Guide

## Production VPS / Container Deployment
1. Build the standalone Docker image:
   ```bash
   docker build -t nextjs-saas-dashboard:latest .
   ```
2. Run with Docker Compose:
   ```bash
   docker compose up -d
   ```
3. Verify `/api/health`:
   ```bash
   curl http://localhost:3000/api/health
   ```
