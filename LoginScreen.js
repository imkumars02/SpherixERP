import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';

// Login Screen Component
const LoginScreen = () => {
  const [activeRole, setActiveRole] = useState('Student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (activeRole === 'Student') {
      // Add your login logic here
      Alert.alert('Success', `Logging in as ${activeRole}`);
      navigation.navigate('Student');
    } else if (activeRole === 'Teacher') {
      // Add your login logic here
      Alert.alert('Success', `Logging in as ${activeRole}`);
      navigation.navigate('');
    }
    // if (activeRole === 'Admin') {
    //   if (username === 'admin' && password === 'admin') {
    //     Alert.alert('Success', `Logging in as ${activeRole}`);
    //     navigation.navigate('');
    //   } else {
    //   }
    //   // Add your login logic here
    //   Alert.alert('Success', `Logging in as ${activeRole}`);
    //   navigation.navigate('');
    // }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Forgot Password',
      'Reset password functionality in progress',
    );
  };

  const handleNeedHelp = () => {
    Alert.alert('Need Help?', 'Help functionality in progress');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Educational Portal</Text>
        <Text style={styles.subtitle}>Select your role and log in</Text>

        {/* Role Selection Tabs */}
        <View style={styles.tabContainer}>
          {['Student', 'Teacher'].map(role => (
            <TouchableOpacity
              key={role}
              style={[styles.tab, activeRole === role && styles.activeTab]}
              onPress={() => setActiveRole(role)}>
              <Text
                style={[
                  styles.tabText,
                  activeRole === role && styles.activeTabText,
                ]}>
                {role}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>{activeRole} Login</Text>

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Footer Links */}
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.footerLink}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNeedHelp}>
              <Text style={styles.footerLink}>Need Help?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    paddingTop: 50,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4287f5',
    marginTop: 40,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 4,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#4287f5',
  },
  tabText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color:'#333',
  },
  loginButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#4287f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerLink: {
    color: '#4287f5',
    fontSize: 14,
  },
});

export default LoginScreen;
