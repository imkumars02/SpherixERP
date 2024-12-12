import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const StudentAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [attendanceFilter, setAttendanceFilter] = useState('both');
  const [selectedYear, setSelectedYear] = useState('1st Year');

  // Sample attendance data (unchanged)
  const attendanceData = {
    '1st Year': {
      January: {
        Mathematics: {
          theory: {present: 15, total: 20},
          practical: {present: 12, total: 15},
        },
        Science: {
          theory: {present: 18, total: 20},
          practical: {present: 14, total: 15},
        },
        English: {
          theory: {present: 16, total: 20},
          practical: {present: 14, total: 15},
        },
        History: {
          theory: {present: 19, total: 20},
          practical: {present: 17, total: 15},
        },
      },
      // ... (other months)
    },
    // ... (other years)
    '2nd Year': {
      January: {
        Mathematics: {
          theory: {
            present: 10,
            total: 20,
          },
          practical: {
            present: 9,
            total: 15,
          },
        },
        Science: {
          theory: {
            present: 12,
            total: 20,
          },
          practical: {
            present: 10,
            total: 15,
          },
        },
        English: {
          theory: {
            present: 11,
            total: 20,
          },
          practical: {
            present: 9,
            total: 15,
          },
        },
        History: {
          theory: {
            present: 13,
            total: 20,
          },
          practical: {
            present: 12,
            total: 15,
          },
        },
      },
      February: {
        Mathematics: {
          theory: {
            present: 14,
            total: 20,
          },
          practical: {
            present: 11,
            total: 15,
          },
        },
        Science: {
          theory: {
            present: 15,
            total: 20,
          },
          practical: {
            present: 12,
            total: 15,
          },
        },
        English: {
          theory: {
            present: 12,
            total: 20,
          },
          practical: {
            present: 10,
            total: 15,
          },
        },
        History: {
          theory: {
            present: 14,
            total: 20,
          },
          practical: {
            present: 13,
            total: 15,
          },
        },
      },

      // Continue with months till December...
    },
    '3rd Year': {
      January: {
        Mathematics: {
          theory: {
            present: 10,
            total: 20,
          },
          practical: {
            present: 9,
            total: 15,
          },
        },
        Science: {
          theory: {
            present: 12,
            total: 20,
          },
          practical: {
            present: 10,
            total: 15,
          },
        },
        English: {
          theory: {
            present: 11,
            total: 20,
          },
          practical: {
            present: 9,
            total: 15,
          },
        },
        History: {
          theory: {
            present: 13,
            total: 20,
          },
          practical: {
            present: 12,
            total: 15,
          },
        },
      },
      February: {
        Mathematics: {
          theory: {
            present: 14,
            total: 20,
          },
          practical: {
            present: 11,
            total: 15,
          },
        },
        Science: {
          theory: {
            present: 15,
            total: 20,
          },
          practical: {
            present: 12,
            total: 15,
          },
        },
        English: {
          theory: {
            present: 12,
            total: 20,
          },
          practical: {
            present: 10,
            total: 15,
          },
        },
        History: {
          theory: {
            present: 14,
            total: 20,
          },
          practical: {
            present: 13,
            total: 15,
          },
        },
      },

      // Continue with months till December...
    },
    // Similarly, add data for '3rd Year' and '4th Year' for each month...
  };

  const months = Object.keys(attendanceData[selectedYear]);

  const calculatePercentage = (present, total) => {
    return ((present / total) * 100).toFixed(1);
  };

  const getStatusColor = percentage => {
    if (percentage >= 90) return '#4CAF50';
    if (percentage >= 75) return '#FFA726';
    return '#EF5350';
  };

  const renderSelector = (
    items,
    selectedItem,
    setSelectedItem,
    itemStyle,
    selectedItemStyle,
  ) => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.selector}>
      {items.map(item => (
        <TouchableOpacity
          key={item}
          style={[
            styles.selectorButton,
            selectedItem === item && styles.selectedSelectorButton, 
            itemStyle,
          ]}
          onPress={() => setSelectedItem(item)}>
          <Text
            style={[
              styles.selectorText,
              selectedItem === item && styles.selectedSelectorText,
              selectedItemStyle,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Attendance Record</Text>

      {renderSelector(
        ['1st Year', '2nd Year', '3rd Year', '4th Year'],
        selectedYear,
        setSelectedYear,
      )}
      {renderSelector(months, selectedMonth, setSelectedMonth)}

      <View style={styles.filterContainer}>
        {['theory', 'practical', 'both'].map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              attendanceFilter === filter && styles.selectedFilterButton,
            ]}
            onPress={() => setAttendanceFilter(filter)}>
            <Text
              style={[
                styles.filterText,
                attendanceFilter === filter && styles.selectedFilterText,
              ]}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.cardContainer}>
        {Object.entries(attendanceData[selectedYear][selectedMonth]).map(
          ([subject, data]) => {
            const theoryPercentage = calculatePercentage(
              data.theory.present,
              data.theory.total,
            );
            const practicalPercentage = calculatePercentage(
              data.practical.present,
              data.practical.total,
            );

            return (
              <View key={subject} style={styles.card}>
                <Text style={styles.subjectName}>{subject}</Text>
                {(attendanceFilter === 'both' ||
                  attendanceFilter === 'theory') && (
                  <View style={styles.attendanceRow}>
                    <Text style={styles.attendanceText}>
                      Theory: {data.theory.present} / {data.theory.total}
                    </Text>
                    <Text
                      style={[
                        styles.percentage,
                        {color: getStatusColor(theoryPercentage)},
                      ]}>
                      {theoryPercentage}%
                    </Text>
                  </View>
                )}
                {(attendanceFilter === 'both' ||
                  attendanceFilter === 'practical') && (
                  <View style={styles.attendanceRow}>
                    <Text style={styles.attendanceText}>
                      Practical: {data.practical.present} /{' '}
                      {data.practical.total}
                    </Text>
                    <Text
                      style={[
                        styles.percentage,
                        {color: getStatusColor(practicalPercentage)},
                      ]}>
                      {practicalPercentage}%
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    padding: width * 0.05,
    color: '#2D3748',
    textAlign: 'center',
  },
  selector: {
    paddingHorizontal: width * 0.03,
    marginBottom: width * 0.03,
  },
  selectorButton: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    marginHorizontal: width * 0.01,
    borderRadius: width * 0.05,
    backgroundColor: '#fff',
    elevation: 2,
  },
  selectedSelectorButton: {
    backgroundColor: '#4169E1',
  },
  selectorText: {
    color: '#4169E1',
    fontWeight: '600',
    fontSize: width * 0.035,
  },
  selectedSelectorText: {
    color: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: width * 0.02,
  },
  filterButton: {
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.05,
    backgroundColor: '#fff',
    elevation: 2,
    marginHorizontal: width * 0.01,
  },
  selectedFilterButton: {
    backgroundColor: '#4169E1',
  },
  filterText: {
    color: '#4169E1',
    fontWeight: '600',
    fontSize: width * 0.035,
  },
  selectedFilterText: {
    color: '#fff',
  },
  cardContainer: {
    padding: width * 0.03,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: width * 0.03,
    padding: width * 0.04,
    marginBottom: width * 0.03,
    elevation: 3,
  },
  subjectName: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: width * 0.02,
  },
  attendanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  attendanceText: {
    color: '#718096',
    fontSize: width * 0.035,
  },
  percentage: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default StudentAttendance;
