import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";
import CartPage from "../Sreens/User/Cart/CartPage";
import AccountPage from "../Sreens/User/Account/AccountPage";
import UsersOrdersPage from "../Sreens/User/UserOrders/UsersOrdersPage";


const Stack = createStackNavigator();

function ScreenNavigator() {

  return (
   <Stack.Navigator>
    
         <Stack.Screen name="HomePage" component={TabNavigator} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="Cart" component={CartPage} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="Account" component={AccountPage} />
          <Stack.Screen name="UserOrders" component={UsersOrdersPage} options={{ headerShown: false,}}/>
      
    </Stack.Navigator>
  );
}

export default ScreenNavigator;