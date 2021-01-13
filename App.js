import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenu from './src/component/drawer/sideMenu';
import Main from './src/screens/main';
import Category from './src/screens/category';
import Off from './src/screens/off';
import Product from './src/screens/product';
import Shop_cart from './src/screens/shop_cart';
import Login_sc from './src/screens/login_sc';
import SignUp from './src/screens/signup';
import Forget_sc from './src/screens/forget_sc';
import Search_sc from './src/screens/search_sc';
import CategoryTab_sc from './src/screens/categoryTab_sc';

const Stack = createStackNavigator(
  {
    Main: Main,
    Category: Category,
    Off: Off,
    Product: Product,
    Shop_cart: Shop_cart,
    Login_sc: Login_sc,
    SignUp: SignUp,
    Forget_sc: Forget_sc,
    Search_sc: Search_sc,
    CategoryTab_sc: CategoryTab_sc,
  },
  {initialRouteName: 'Main', headerMode: 'none'},
);

const Drawer = createDrawerNavigator(
  {
    Stack: Stack,
  },
  {
    drawerPosition: 'right',
    drawerWidth: '60%',
    contentComponent: SideMenu,
  },
);

export default createAppContainer(Drawer);
