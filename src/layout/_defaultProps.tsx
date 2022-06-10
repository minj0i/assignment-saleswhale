import iconCompanies from '../components/icons/icon companies.svg';
import iconCampaign from '../components/icons/icon-campaign.svg';
import iconLeads from '../components/icons/icon-leads.svg';
import iconReports from '../components/icons/icon-reports.svg';

const _defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/campaign',
        name: 'Campaign',
        icon: iconCampaign,
        component: './Welcome',
      },
      {
        path: '/teams',
        name: 'Teams',
        icon: iconCompanies,
        component: './Teams',
      },
      {
        path: '/leads',
        name: 'Leads',
        icon: iconLeads,
        component: './Welcome',
      },
      {
        path: '/reports',
        name: 'Reports',
        icon: iconReports,
        component: './Welcome',
      },
    ],
  },
  // location: {
  //   pathname: '/',
  // },
  collapsedButtonRender: false,
  collapseWidth: '100'
};

export default _defaultProps;