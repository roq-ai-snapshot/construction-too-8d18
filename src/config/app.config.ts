interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Sales Associate'],
  customerRoles: [],
  tenantRoles: [
    'Business Owner',
    'Outlet Manager',
    'Sales Associate',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage sales records', 'View product details', 'View user information', 'View company information'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/0bc89224-3ee9-4dd3-a9ff-b3096ac5bfdb',
};
