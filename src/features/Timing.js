import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({ onChangeTime, time }) => {
  return (
  
      <View style={styles.timingButton}>
        <RoundedButton
          title={time}
          size={75}
          onPress={() => {
            onChangeTime(time);
          }}
        />
      </View>
      
  );
};

const styles = StyleSheet.create({
  timingButton: { flex: 1, alignItems: 'center' },
});
