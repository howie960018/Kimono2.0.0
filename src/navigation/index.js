import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { useColorMode } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { Ionicons, MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import { Box } from 'native-base';

import AccountScreen from '../screens/AccountScreen';
import Start from '../screens/Start';
import Welcome from '../screens/Welcome';
import Kimono from '../screens/Kimono';
import Gender from '../screens/Gender';
import KimDetail from '../screens/KimDetail';
import PickDate from '../screens/PickDate';
import Payment from '../screens/Payment';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StripeApp from '../StripeApp';
import Others from '../screens/others';
import OtherDetail from '../screens/OtherDetail'
import WelcomeScreen from '../screens/WelcomeScreen';
import ThankScreen from '../screens/ThankScreen';
import Fav from '../screens/Fav';

import AuthContextProvider, { AuthContext } from '../../store/auth-context';
import FavoritesContextProvider from '../components/context/FavContext';
import IconButton from '../components/ui/IconButton';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFAAAA" },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: "E0FDFF" },
      }}
    >
      <Stack.Screen name="帳號登入" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFAAAA" },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: "E0FDFF" },
      }}
    >
      <Stack.Screen name="歡迎" component={WelcomeScreen} 
      options={{
        title: '歡迎' ,
      }
      }/>
      <Stack.Screen name="Welcome" component={Welcome}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
          title:"",}
        } />
      <Stack.Screen name="Kimono" component={Kimono} />
      <Stack.Screen name="Gender" component={Gender}
      options={{
        title: '' ,
      }
      } />
      <Stack.Screen name="Detail" component={KimDetail}
      options={{
        title: '' ,
      }
      } />
      <Stack.Screen name='PickDate' component={PickDate}
      options={{
        title: '預約' ,
      }
      } />
      <Stack.Screen name="Payment" component={Payment}
      options={{
        title: '確認預約資訊' ,
      }
      } />
      <Stack.Screen name='StripeApp' component={StripeApp}
      options={{
        title: '付款資訊' ,
      }
      }  />
      <Stack.Screen name='謝謝' component={ThankScreen}
      options={{
        title: '' ,
      }
      } />
      <Stack.Screen name="others" component={Others}
      options={{
        title: '' ,
      }
      }  />
      <Stack.Screen name="OtherDetail" component={OtherDetail} 
      options={{
        title: '' ,
      }
      } />




    </Stack.Navigator>
  );
}


function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
<FavoritesContextProvider>
    <NavigationContainer >
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <MyTab />}

    </NavigationContainer>
    </FavoritesContextProvider>
  );
}

function MyTab() {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  return (

    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colorMode == 'light' ? '#F88C8C' : '#FFF',
        tabBarInactiveTintColor: colorMode == 'light' ? 'gray' : '#979797',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : '#575757' },
        tabBarIcon: ({ color, focused }) => {
          let iconName
          if (route.name == 'Home') {
            iconName = focused ? 'ios-home' : 'home-outline'
            return <Ionicons name={iconName} size={25} color={color} />
          } else if (route.name == 'favorite') {
            iconName = focused ? 'favorite' : 'favorite-outline'
            return <MaterialIcons name={iconName} size={25} color={color} />
          } else if (route.name == '個人設定') {
            iconName = focused ? 'settings' : 'settings-outline'
            return <Ionicons name={iconName} size={25} color={color} />
          }

        }
      })}



    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home" component={AuthenticatedStack} />
      <Tab.Screen name="favorite" component={Fav}
        options={{
          headerStyle: {
            backgroundColor: '#FFAAAA'
          },
          title: '我的最愛' ,
          headerTintColor: 'white'

        }}
      />
      <Tab.Screen name="個人設定" component={SettingStack} options={{ headerShown: false }} />
    </Tab.Navigator>

  );
}



function SettingStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen

        options={{
          headerStyle: {
            backgroundColor: '#FFAAAA'
          },
           title: '個人設定',
           headerTintColor: 'white'

        }} name='個人設定' component={SettingsScreen} />
      
    </Stack.Navigator>

  )
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

 

  return <Navigation />;
}


export default Root;


const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imagestyle: {
    width: 188,
    height: 201,
    marginTop: 129,
    marginBottom: 40,
  },
  kimstyle: {
    width: 310,
    height: 149,
    backgroundColor: "#8EEBFF",
    borderRadius: 23,
    marginTop: 20
  },
  kimstyle2: {
    width: 310,
    height: 149,
    backgroundColor: "#FFE4E4",
    borderRadius: 23,
    marginTop: 20
  },

  text: {
    marginTop: 10,
    marginBottom: 40,
    fontSize: 24

  },
  buttontxt: {
    color: '#fff',
    fontSize: 20,
    color: "#fff",
    marginLeft: 140,
    marginTop: 10
  },
  start: {
    fontSize: 16,
    width: 311,
    height: 47,
    backgroundColor: '#FFAAAA',
    borderRadius: 30

  },
  foxstyle: {
    width: 112,
    height: 120,
    marginBottom: 20
  },
  cartitle: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',


  },
  cartxt: {
    fontSize: 30,
    color: 'pink'

  }

});