const mapping: Record<string, string> = {
  clients: 'client',
  designs: 'design',
  experiments: 'experiment',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
