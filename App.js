import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Screens/Chat';
import Login from './Screens/Login';
import SignUp from './Screens/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { auth } from './config/firebase';
import Home from './Screens/Home';

const Stack=createStackNavigator();

const AuthContext= createContext({});
 const AuthContextProvider =({children})=>{
const [user,setUser]= useState(null);
return (
  <AuthContext.Provider value={{user,setUser}}>
    {children}
  </AuthContext.Provider>
)
}
function ChatStack(){
  return(
    <Stack.Navigator initialRouteName="Home"  >
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Signup"  screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={SignUp} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

return (
  <NavigationContainer>
    {user ? <ChatStack /> : <AuthStack />}
  </NavigationContainer>
);
}

export default function App() {
return (
  <AuthContextProvider>
    <RootNavigator />
  </AuthContextProvider>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
