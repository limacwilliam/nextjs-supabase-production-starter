# Runbook

| Symptom | Verify | Action |
|---|---|---|
| Users cannot save notes | Auth session and RLS policy | Re-authenticate; check policy deployment |
| Build fails | Required environment variables | Use `.env.example` names; never paste secrets in CI logs |
| Integration test blocked | Target URL | Use localhost or a dedicated non-production project |
