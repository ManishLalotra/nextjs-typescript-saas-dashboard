# nextjs-typescript-saas-dashboard

> Production Next.js 14 SaaS dashboard with App Router, TypeScript, Tailwind CSS, Stripe subscription architecture, and Docker standalone containerization.

## Overview
An enterprise SaaS platform dashboard demonstrating modern frontend and full-stack capabilities with Next.js 14. Designed with clean component architecture, role separation, responsive multi-tenant controls, and production-ready container optimization.

## Technology Stack
- **Framework**: Next.js 14 (App Router, Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Lucide React
- **DevOps**: Docker standalone build, Docker Compose, GitHub Actions CI

## Features
- Next.js 14 App Router with optimized server components
- Health check API route (`/api/health`)
- Responsive dark-mode dashboard with resource utilization telemetry
- Stripe subscription integration patterns & webhook listener architecture
- Multi-stage Dockerfile utilizing Next.js `standalone` mode

## Getting Started
```bash
git clone https://github.com/manish-lalotra/nextjs-typescript-saas-dashboard.git
cd nextjs-typescript-saas-dashboard
npm install
npm run dev
```

## Docker Deployment
```bash
docker compose up -d --build
```

## Author
**Manish Lalotra**  
Full Stack Developer & DevOps Engineer  
*Full Stack Developer | DevOps Engineer | Cloud & Infrastructure Engineer*

## License
MIT License. See [LICENSE](LICENSE) for details.
