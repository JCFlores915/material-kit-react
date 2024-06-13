
import SvgColor from '../../components/svg-color';
import LocationCityIcon from '@mui/icons-material/LocationCity';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Company',
    path: '/company',
    icon: <LocationCityIcon />,
  }
];

export default navConfig;
