interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Owner'],
  customerRoles: [],
  tenantRoles: ['Project Manager', 'Design Engineer', 'Organization Owner'],
  tenantName: 'Client',
  applicationName: 'robot painting',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Client profiles.',
    'Invite Project Managers and Design Engineers to a project.',
    'View all experiment designs.',
  ],
};
