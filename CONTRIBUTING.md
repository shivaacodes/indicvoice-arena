# Contributing to IndicVoice Arena

Thanks for contributing. This project is open-source and release-focused: prefer practical improvements that increase reliability, clarity, and reproducibility.

## Before You Start
- Check existing issues before opening a new one.
- Use the provided issue templates.
- For larger changes, open an issue first and propose your approach.

## Local Setup
```bash
cd apps/web
pnpm install
pnpm dev
```

## Quality Bar
Before opening a PR:
```bash
cd apps/web
pnpm lint
pnpm build
```

## Branch and Commit Conventions
- Branches: `feature/*`, `fix/*`, `chore/*`, `docs/*`
- Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`

Examples:
- `feat: add benchmark run filter`
- `fix: correct latency bar color contrast`
- `docs: update local setup instructions`

## Pull Requests
- Keep PRs focused and reasonably small.
- Link related issue(s) using `Closes #<issue-number>`.
- Include screenshots for UI changes.
- Use `.github/pull_request_template.md` and complete its checklist.

## Review Expectations
- Be respectful and specific in review comments.
- Explain tradeoffs for non-obvious design/architecture decisions.
- Do not force-resolve review threads without addressing feedback.

## Security
Do not commit secrets, keys, or tokens. Use environment variables and GitHub repository secrets.

## Code of Conduct
All contributors must follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Questions
Open an issue or discussion in the repository:
- https://github.com/shivaacodes/indicvoice-arena
