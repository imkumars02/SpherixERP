import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity, 
//   Picker,
} from 'react-native';


const StudentReport = () => {
  const [selectedYear, setSelectedYear] = useState('1st Year');

  const reportData = {
    '1st Year': {
      attendance: [
        {
          subject: 'Mathematics',
          teacher: 'Mr. Ram',
          totalLectures: 30,
          attendedLectures: 22,
        },
        {
          subject: 'Science',
          teacher: 'Ms. Ayesha',
          totalLectures: 30,
          attendedLectures: 27,
        },
        {
          subject: 'History',
          teacher: 'Mr. John',
          totalLectures: 30,
          attendedLectures: 25,
        },
      ],
      marks: [
        {
          subject: 'Mathematics',
          teacher: 'Mr. Ram',
          totalMarks: 20,
          obtainedMarks: 15,
        },
        {
          subject: 'Science',
          teacher: 'Ms. Ayesha',
          totalMarks: 20,
          obtainedMarks: 18,
        },
        {
          subject: 'History',
          teacher: 'Mr. John',
          totalMarks: 20,
          obtainedMarks: 16,
        },
      ],
    },
    // Add data for other years similarly
  };

  const calculatePercentage = (attended, total) => {
    return Math.round((attended / total) * 100);
  };

  const getStatus = marks => {
    return marks >= 10 ? 'Pass' : 'Fail';
  };

  const getPercentageColor = percentage => {
    if (percentage >= 90) return '#22C55E';
    if (percentage >= 75) return '#EAB308';
    return '#EF4444';
  };

  const renderAttendanceTable = data => (
    <View style={styles.tableContainer}>
      <Text style={styles.sectionTitle}>Attendance Report</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, {flex: 2}]}>Subject</Text>
          <Text style={[styles.headerCell, {flex: 2}]}>Teacher</Text>
          <Text style={[styles.headerCell, {flex: 1.5}]}>Total Lectures</Text>
          <Text style={[styles.headerCell, {flex: 1.5}]}>Attended</Text>
          <Text style={[styles.headerCell, {flex: 1}]}>%</Text>
        </View>
        {data.map((item, index) => {
          const percentage = calculatePercentage(
            item.attendedLectures,
            item.totalLectures,
          );
          return (
            <View
              key={index}
              style={[styles.row, index % 2 === 0 && styles.evenRow]}>
              <Text style={[styles.cell, {flex: 2}]}>{item.subject}</Text>
              <Text style={[styles.cell, {flex: 2}]}>{item.teacher}</Text>
              <Text style={[styles.cell, {flex: 1.5}]}>
                {item.totalLectures}
              </Text>
              <Text style={[styles.cell, {flex: 1.5}]}>
                {item.attendedLectures}
              </Text>
              <Text
                style={[
                  styles.cell,
                  {flex: 1, color: getPercentageColor(percentage)},
                ]}>
                {percentage}%
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );

  const renderMarksTable = data => (
    <View style={styles.tableContainer}>
      <Text style={styles.sectionTitle}>Marks Report</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, {flex: 2}]}>Subject</Text>
          <Text style={[styles.headerCell, {flex: 2}]}>Teacher</Text>
          <Text style={[styles.headerCell, {flex: 1.5}]}>Total Marks</Text>
          <Text style={[styles.headerCell, {flex: 1.5}]}>Obtained</Text>
          <Text style={[styles.headerCell, {flex: 1}]}>Status</Text>
        </View>
        {data.map((item, index) => (
          <View
            key={index}
            style={[styles.row, index % 2 === 0 && styles.evenRow]}>
            <Text style={[styles.cell, {flex: 2}]}>{item.subject}</Text>
            <Text style={[styles.cell, {flex: 2}]}>{item.teacher}</Text>
            <Text style={[styles.cell, {flex: 1.5}]}>{item.totalMarks}</Text>
            <Text style={[styles.cell, {flex: 1.5}]}>{item.obtainedMarks}</Text>
            <Text
              style={[
                styles.cell,
                {
                  flex: 1,
                  color:
                    getStatus(item.obtainedMarks) === 'Pass'
                      ? '#22C55E'
                      : '#EF4444',
                },
              ]}>
              {getStatus(item.obtainedMarks)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Student Report</Text>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Year:</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedYear}
            onValueChange={itemValue => setSelectedYear(itemValue)}
            style={{height: 40}}>
            <Picker.Item label="1st Year" value="1st Year" />
            <Picker.Item label="2nd Year" value="2nd Year" />
            <Picker.Item label="3rd Year" value="3rd Year" />
            <Picker.Item label="4th Year" value="4th Year" />
          </Picker>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {renderAttendanceTable(reportData[selectedYear].attendance)}
        {renderMarksTable(reportData[selectedYear].marks)}

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Report</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  picker: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  tableContainer: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2D3748',
  },
  table: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4169E1',
    padding: 12,
  },
  headerCell: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  evenRow: {
    backgroundColor: '#F8FAFC',
  },
  cell: {
    fontSize: 14,
    color: '#2D3748',
  },
  downloadButton: {
    backgroundColor: '#4169E1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 16,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StudentReport;
