export function assertSafeIntegrationTarget(url = process.env.NEXT_PUBLIC_SUPABASE_URL): void {
  if (!url) throw new Error('Missing test URL');
  const target = new URL(url);
  if (!['localhost', '127.0.0.1', '[::1]'].includes(target.hostname) || !['http:', 'https:'].includes(target.protocol) || target.username || target.password) {
    throw new Error('Integration tests are blocked outside local environments');
  }
}
