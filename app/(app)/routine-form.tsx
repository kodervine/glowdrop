import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";

const RoutineForm = () => {
  const [concerns, setConcerns] = useState("");
  const [skinType, setSkinType] = useState("");
  const [goals, setGoals] = useState("");
  const [preferredProducts, setPreferredProducts] = useState("");

  const handleSubmit = () => {
    console.log({ concerns, skinType, goals, preferredProducts });
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>Skin Concerns</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter your skin concerns"
        value={concerns}
        onChangeText={setConcerns}
      />

      <ThemedText style={styles.label}>Skin Type</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter your skin type"
        value={skinType}
        onChangeText={setSkinType}
      />

      <ThemedText style={styles.label}>Skincare Goals</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter your skincare goals"
        value={goals}
        onChangeText={setGoals}
      />

      <ThemedText style={styles.label}>Preferred Products</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter any preferred products"
        value={preferredProducts}
        onChangeText={setPreferredProducts}
      />
      <ThemedButton onPress={handleSubmit}>Submit</ThemedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, marginBottom: 8 },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RoutineForm;
