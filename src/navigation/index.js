import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Start from '../screens/Start';
import  Welcome  from '../screens/Welcome';
import Kimono from '../screens/Kimono';
import Gender from '../screens/Gender';
import KimDetail from '../screens/KimDetail';
import PickDate from '../screens/PickDate';
import Payment from '../screens/Payment';

const Stack = createNativeStackNavigator();

function MyHomeStack({ navigation }) {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Kimono"component={Kimono}/>
            <Stack.Screen name="Gender"component={Gender}/>
            <Stack.Screen name="Detail"component={KimDetail}/>
            <Stack.Screen  name='PickDate' component={PickDate}/>
            <Stack.Screen name="Payment" component={Payment}/>
    
        </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MyHomeStack;