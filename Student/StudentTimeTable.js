import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking, // Importing for download functionality
} from 'react-native';
import {Picker} from '@react-native-picker/picker'; // Correct import for Picker

// Sample image import
import timetable from '../Image/timetable.jpg'; // Replace with actual image URL or path

const {width} = Dimensions.get('window');

const TimeTableImage = () => {
  const [selectedYear, setSelectedYear] = useState('1st Year');

  // Sample image URLs for each year's timetable
  const timeTableImages = {
    '1st Year': timetable,
    '2nd Year': timetable,
    '3rd Year': timetable,
    '4th Year': timetable,
  };

  // Function to handle download (assuming it's from a URL)
  const handleDownload = () => {
    const imageUrl = timeTableImages[selectedYear]; // Get the selected image
    if (imageUrl) {
      Linking.openURL(imageUrl); // Open the image URL in a browser to download
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Time Table</Text>

      {/* Year Selector using Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Select Year:</Text>
        <Picker
          selectedValue={selectedYear}
          onValueChange={itemValue => setSelectedYear(itemValue)}
          style={styles.picker}>
          <Picker.Item label="1st Year" value="1st Year" />
          <Picker.Item label="2nd Year" value="2nd Year" />
          <Picker.Item label="3rd Year" value="3rd Year" />
          <Picker.Item label="4th Year" value="4th Year" />
        </Picker>
      </View>

      {/* Display Time Table Image based on selected year */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={timeTableImages[selectedYear]}
            style={styles.timeTableImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Download Button */}
      <View style={styles.downloadButtonContainer}>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={handleDownload}>
          <Text style={styles.downloadButtonText}>Download Time Table</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  pickerContainer: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Reduced the top margin and added some bottom margin for balance
  },
  timeTableImage: {
    width: width - 32, // Full width minus padding
    height: (width - 32) * 1.5, // Adjust the height based on the width
    borderRadius: 12,
  },
  downloadButtonContainer: {
    alignItems: 'center',
    marginTop: 20, // Space for the button below the image
  },
  downloadButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3, // Slight shadow to give button a lift effect
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TimeTableImage;
