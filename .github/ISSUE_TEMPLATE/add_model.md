---
name: Add Model
about: Propose integrating a new voice/LLM provider
title: "[MODEL] Add "
labels: ["enhancement", "model"]
assignees: []
---

## Model Details
- Provider:
- Model name:
- API/docs link:
- Supports streaming: Yes/No

## Why add this model?
State why this model matters for benchmark comparisons.

## Integration Scope
- [ ] Request/response adapter
- [ ] Auth/env setup
- [ ] Error handling + retries
- [ ] Latency instrumentation
- [ ] Score normalization

## Benchmark Readiness Checklist
- [ ] Works in local run
- [ ] Included in comparison UI
- [ ] Included in leaderboard aggregation
- [ ] Documented in README/docs

## Example Config
```json
{
  "provider": "example",
  "model": "example-model",
  "region": "auto"
}
```

## Additional Context
Notes about limits, pricing, or quirks.
