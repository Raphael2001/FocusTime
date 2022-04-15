import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return <Text style={styles.title}>We have'nt focused on anything yet</Text>;
  }
  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    paddingTop: spacing.sm,
    color: colors.white,
    fontSize: fontSizes.md,
  },
});
