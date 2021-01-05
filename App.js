import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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

const App = createStackNavigator(
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
  {initialRouteName: 'Product', headerMode: 'none'},
);

export default createAppContainer(App);
