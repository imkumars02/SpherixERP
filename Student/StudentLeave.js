import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const StudentLeave = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [days, setDays] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  const handleSubmit = () => {
    const newApplication = {
      id: Date.now(),
      days: parseInt(days),
      fromDate: fromDate.toDateString(),
      toDate: toDate.toDateString(),
      reason,
      status: 'Pending',
    };
    setLeaveApplications([...leaveApplications, newApplication]);
    setModalVisible(false);
    resetForm();
  };

  const resetForm = () => {
    setDays('');
    setFromDate(new Date());
    setToDate(new Date());
    setReason('');
  };

  const onFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDatePicker(false);
    setFromDate(currentDate);
  };

  const onToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDatePicker(false);
    setToDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.applyButtonText}>Apply Leave</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Apply for Leave</Text>

            <TextInput
              style={styles.input}
              placeholder="Number of Days"
              keyboardType="numeric"
              value={days}
              onChangeText={setDays}
            />

            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowFromDatePicker(true)}>
              <Text>From Date: {fromDate.toDateString()}</Text>
            </TouchableOpacity>
            {showFromDatePicker && (
              <DateTimePicker
                value={fromDate}
                mode="date"
                display="default"
                onChange={onFromDateChange}
              />
            )}

            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowToDatePicker(true)}>
              <Text>To Date: {toDate.toDateString()}</Text>
            </TouchableOpacity>
            {showToDatePicker && (
              <DateTimePicker
                value={toDate}
                mode="date"
                display="default"
                onChange={onToDateChange}
              />
            )}

            <TextInput
              style={[styles.input, styles.reasonInput]}
              placeholder="Reason"
              multiline
              numberOfLines={4}
              value={reason}
              onChangeText={setReason}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, {flex: 1}]}>Days</Text>
          <Text style={[styles.headerCell, {flex: 2}]}>From</Text>
          <Text style={[styles.headerCell, {flex: 2}]}>To</Text>
          <Text style={[styles.headerCell, {flex: 3}]}>Reason</Text>
          <Text style={[styles.headerCell, {flex: 2}]}>Status</Text>
        </View>
        {leaveApplications.map(application => (
          <View key={application.id} style={styles.tableRow}>
            <Text style={[styles.cell, {flex: 1}]}>{application.days}</Text>
            <Text style={[styles.cell, {flex: 2}]}>{application.fromDate}</Text>
            <Text style={[styles.cell, {flex: 2}]}>{application.toDate}</Text>
            <Text style={[styles.cell, {flex: 3}]}>{application.reason}</Text>
            <Text
              style={[
                styles.cell,
                {flex: 2},
                application.status === 'Pending'
                  ? styles.pendingStatus
                  : styles.acceptedStatus,
              ]}>
              {application.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  reasonInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateButton: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableContainer: {
    flex: 1,
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 5,
  },
  headerCell: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  cell: {
    fontSize: 14,
  },
  pendingStatus: {
    color: '#FFA500',
  },
  acceptedStatus: {
    color: '#4CAF50',
  },
});

export default StudentLeave;
