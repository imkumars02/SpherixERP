import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Correct import for Picker

const StudentMarks = () => {
  const [selectedYear, setSelectedYear] = useState('1st Year');

  const marksData = {
    '1st Year': {
      internal1: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 15 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 14 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 16 },
      ],
      internal2: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 17 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 16 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 18 },
      ],
    },
    '2nd Year': {
      internal1: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 16 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 15 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 17 },
      ],
      internal2: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 18 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 17 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 19 },
      ],
    },
    '3rd Year': {
      internal1: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 17 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 16 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 18 },
      ],
      internal2: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 19 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 18 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 20 },
      ],
    },
    '4th Year': {
      internal1: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 18 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 17 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 19 },
      ],
      internal2: [
        { subject: 'Mathematics', teacher: 'Mr. Chaudhari', marks: 20 },
        { subject: 'Physics', teacher: 'Ms. Ahirrao', marks: 19 },
        { subject: 'Chemistry', teacher: 'Mr. Deshmukh', marks: 20 },
      ],
    },
  };

  const renderTable = (data, title) => (
    <View style={styles.tableContainer}>
      <Text style={styles.internalTitle}>{title}</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, { flex: 2 }]}>Subject</Text>
          <Text style={[styles.headerCell, { flex: 2 }]}>Teacher</Text>
          <Text style={[styles.headerCell, { flex: 1 }]}>Marks</Text>
        </View>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              index % 2 === 0 ? styles.evenRow : styles.oddRow,
            ]}>
            <Text style={[styles.cell, { flex: 2 }]}>{item.subject}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{item.teacher}</Text>
            <Text
              style={[
                styles.cell,
                { flex: 1 },
                item.marks > 20 && styles.invalidMarks,
              ]}>
              {item.marks}/20
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.yearSelector}>
        <Text style={styles.label}>Select Year:</Text>
        <View style={styles.pickerContainer}>
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
      </View>

      <Text style={styles.yearTitle}>{selectedYear} Marks</Text>

      <ScrollView style={styles.scrollView}>
        {renderTable(marksData[selectedYear].internal1, 'Internal 1')}
        {renderTable(marksData[selectedYear].internal2, 'Internal 2')}
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
  yearSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  picker: {
    height: 40,
  },
  yearTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2D3748',
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  internalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#4169E1',
  },
  table: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4169E1',
    padding: 12,
  },
  headerCell: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  evenRow: {
    backgroundColor: '#fff',
  },
  oddRow: {
    backgroundColor: '#f8f9fa',
  },
  cell: {
    fontSize: 14,
    color: '#2D3748',
  },
  invalidMarks: {
    color: 'red',
  },
});

export default StudentMarks;
