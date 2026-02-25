# IndicVoice Arena

[![CI](https://github.com/shivaacodes/indicvoice-arena/actions/workflows/ci.yml/badge.svg)](https://github.com/shivaacodes/indicvoice-arena/actions/workflows/ci.yml)
[![Deploy](https://github.com/shivaacodes/indicvoice-arena/actions/workflows/deploy.yml/badge.svg)](https://github.com/shivaacodes/indicvoice-arena/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-black.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/shivaacodes/indicvoice-arena?style=social)](https://github.com/shivaacodes/indicvoice-arena)

Open-source voice AI benchmarking for practical release decisions.

IndicVoice Arena helps teams compare model quality, latency, and stability under the same prompts and scoring rules, so launch decisions are based on evidence.

## Live Leaderboard Snapshot
| Model   | Hindi | Tamil | Malayalam | Avg Score | Latency |
|---------|-------|-------|-----------|-----------|---------|
| Sarvam  | 91%   | 88%   | 85%       | 88%       | 210ms   |
| GPT-4o  | 87%   | 79%   | 76%       | 80%       | 340ms   |
| Ollama  | 82%   | 71%   | 68%       | 73%       | 180ms   |

## Current Scope
- Release-focused benchmark UI (`/`)
- Clean operations dashboard (`/dashboard`)
- Open-source contribution paths and issue templates
- CI and deploy workflows in `.github/workflows`

## Tech Stack
- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Run Locally
```bash
cd apps/web
pnpm install
pnpm dev
```

## Repository Structure
```text
apps/web/                Next.js application
.github/workflows/       CI/CD automation
.github/ISSUE_TEMPLATE/  Issue forms
```

## Contributing
- Start here: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Use issue templates in `.github/ISSUE_TEMPLATE`
- Follow PR checklist in `.github/pull_request_template.md`

## Documentation
Core docs are being consolidated and will be expanded in upcoming releases.

## License
This project is licensed under the [MIT License](./LICENSE).
