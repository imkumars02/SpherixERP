// import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import StudentDashbord from './Student/StudentDashbord';
import StudentAttendance from './Student/StudentAttendance';
import StudentMark from './Student/StudentMark';
import StudentTimeTable from './Student/StudentTimeTable';
import StudentReport from './Student/StudentReport';
import StudentLeave from './Student/StudentLeave';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Student"
          component={StudentDashbord}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentAttendance"
          component={StudentAttendance}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentMark"
          component={StudentMark}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Student TimeTable"
          component={StudentTimeTable}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Student Report"
          component={StudentReport}
          // options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="Student Leave"
          component={StudentLeave}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
