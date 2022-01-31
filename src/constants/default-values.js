/*
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const defaultISOCountryCode = 'lk';
export const localeOptions = [
  { id: 'en', name: 'English', direction: 'ltr' },
  { id: 'tw', name: '國語', direction: 'ltr' },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg',
  authDomain: 'gogo-react-login.firebaseapp.com',
  databaseURL: 'https://gogo-react-login.firebaseio.com',
  projectId: 'gogo-react-login',
  storageBucket: 'gogo-react-login.appspot.com',
  messagingSenderId: '216495999563',
};

export const adminRoot = '/app';
export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/#`;
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = false;
export const defaultColor = 'light.purplemonster';
export const isDarkSwitchActive = false;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
  'bluenavy',
  'blueyale',
  'blueolympic',
  'greenmoss',
  'greenlime',
  'purplemonster',
  'orangecarrot',
  'redruby',
  'yellowgranola',
  'greysteel',
];

// Post content upload limitations
export const pageSize = 10;
export const maxImageCount = 15;
export const maxImageSize = 5; // in MB
export const maxVideoCount = 5;
export const maxVideoSize = 50; // in MB
export const maxStoryCount = 5;

export const minFollowerSize = 0;
export const maxFollowerSize = 15000;
export const minSuggestedRate = 0;
export const maxSuggestedRate = 5000;

export const acceptedVideoMimetypes = ['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-flv'];
export const acceptedImageMimetypes = ['image/jpeg', 'image/png'];

// export const currentUser = {
//   id: 1,
//   title: 'Sarah Kortney',
//   img: '/assets/img/profiles/l-1.jpg',
//   date: 'Last seen today 15:24',
//   role: UserRole.Admin
// }
