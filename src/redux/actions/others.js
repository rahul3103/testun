import { drawerTypes } from '../constants';

export const openDrawer = () => ({
  type: drawerTypes.OPEN_DRAWER
});

export const closeDrawer = () => ({
  type: drawerTypes.CLOSE_DRAWER
});
