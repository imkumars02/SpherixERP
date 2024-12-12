import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const StudentDashboard = () => {
  const navigation = useNavigation();
  const menuItems = [
    {
      title: 'Attendance',
      icon: 'check-circle',
      onPress: () => navigation.navigate('StudentAttendance'),
    },
    {
      title: 'Subject Marks',
      icon: 'file-text',
      onPress: () => navigation.navigate('StudentMark'),
    },
    {
      title: 'Time Table',
      icon: 'calendar',
      onPress: () => navigation.navigate('Student TimeTable'),
    },
    {
      title: 'Reports',
      icon: 'bar-chart-2',
      onPress: () => navigation.navigate('Student Report'),
    },
    {
      title: 'Leave',
      icon: 'clock',
      onPress: () => navigation.navigate('Student Leave'),
    },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };
  const handleLogout = (e)=>{
    e.preventDefault();
    Alert.alert('Logout Successfully !!');
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.gradientBackground}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.studentName}>Rohit Sharma</Text>
            <Text style={styles.greetingText}>{getGreeting()}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}>
          <Icon name="log-out" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={item.onPress}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={32} color="#4287f5" />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  gradientBackground: {
    backgroundColor: '#6a11cb',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding:20,
    paddingLeft: 20,
    paddingRight: 25, 
    borderRadius: 25,
    // borderBottomRightRadius: 25,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  headerTextContainer: {
    marginBottom: 15,
  },
  studentName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  greetingText: {
    fontSize: 16,
    color: '#fff',
  },
  logoutButton: {
    position: 'absolute',
    top: 30,
    right: 30,
    padding: 12,
    backgroundColor: '#f44336',
    borderRadius: 50,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default StudentDashboard ;