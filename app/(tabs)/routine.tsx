import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";
import { ThemedText } from "../../components/ThemedText";

const RoutineScreen = () => {
  const skincareEntries = [
    {
      id: "1",
      date: "2024-10-20",
      product: "Hydrating Serum",
      reaction: "No irritation",
      notes: "Great for daily use",
    },
    {
      id: "2",
      date: "2024-10-19",
      product: "Vitamin C Serum",
      reaction: "Slight redness",
      notes: "Might need to reduce use",
    },
  ];

  const renderLogItem = ({ item }: any) => (
    <TouchableOpacity style={styles.logItem}>
      <ThemedText style={styles.date}>{item.date}</ThemedText>
      <ThemedText style={styles.product}>Product: {item.product}</ThemedText>
      <ThemedText style={styles.reaction}>Reaction: {item.reaction}</ThemedText>
      <ThemedText style={styles.notes}>Notes: {item.notes}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Your Skincare Log</ThemedText>
      <ThemedButton onPress={() => router.navigate("/(app)\routine-form")}>
        Add Entry
      </ThemedButton>

      <FlatList
        data={skincareEntries}
        renderItem={renderLogItem}
        keyExtractor={(item) => item.id}
        style={styles.logList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  logList: { marginTop: 16 },
  logItem: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 10,
  },
  date: { fontSize: 16, fontWeight: "bold" },
  product: { fontSize: 16 },
  reaction: { fontSize: 16, color: "green" },
  notes: { fontSize: 14, fontStyle: "italic" },
});

export default RoutineScreen;
