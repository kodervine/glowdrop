import { useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { ThemedText } from "../../components/ThemedText";

const RoutineScreen = () => {
  const [selectedDay, setSelectedDay] = useState(6); // Tuesday selected by default

  const routineSteps = [
    { id: 1, title: "Skin cleanser", completed: false },
    { id: 2, title: "Use antioxidants", completed: false },
    { id: 3, title: "Moisturise face skin", completed: false },
    { id: 4, title: "Eyes area", completed: false },
  ];

  const weekDays = [
    { number: 5, day: "Mon" },
    { number: 6, day: "Tue" },
    { number: 7, day: "Wed" },
    { number: 8, day: "Thu" },
    { number: 9, day: "Fri" },
    { number: 10, day: "Sat" },
    { number: 11, day: "Sun" },
  ];

  const [steps, setSteps] = useState(routineSteps);

  const toggleStep = (id: any) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, completed: !step.completed } : step
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="subtitle" style={styles.headerTitle}>
          Daily routine
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.daysContainer}
        >
          {weekDays.map((item) => (
            <TouchableOpacity
              key={item.number}
              onPress={() => setSelectedDay(item.number)}
              style={[
                styles.dayButton,
                selectedDay === item.number && styles.selectedDay,
              ]}
            >
              <ThemedText style={styles.dayNumber}>{item.number}</ThemedText>
              <ThemedText style={styles.dayText}>{item.day}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.stepsContainer}>
        <ThemedText style={styles.stepsHeader}>Steps</ThemedText>
        <ThemedText style={styles.completion}>
          Completed: {steps.filter((step) => step.completed).length}/
          {steps.length}
        </ThemedText>

        {steps.map((step) => (
          <TouchableOpacity
            key={step.id}
            style={styles.stepItem}
            onPress={() => toggleStep(step.id)}
          >
            <View style={styles.stepContent}>
              <ThemedText
                style={[styles.stepText, step.completed && styles.completed]}
              >
                {step.title}
              </ThemedText>
              <View style={styles.addButton}>
                <ThemedText style={styles.addButtonText}>+</ThemedText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.shareContainer}>
        <View style={styles.shareContent}>
          <View style={styles.shareHeader}>
            <View>
              <ThemedText style={styles.shareTitle}>
                Share your experience.
              </ThemedText>
              <ThemedText style={styles.shareSubtitle}>
                And explore other users' routines
              </ThemedText>
            </View>
            <Image
              source={require("@/assets/images/eyes-amico.png")}
              style={styles.shareImage}
            />
          </View>
          <View style={styles.userCount}>
            <ThemedText style={styles.userCountText}>
              Shared by 1.5k users
            </ThemedText>
            <TouchableOpacity style={styles.exploreButton}>
              <ThemedText style={styles.exploreButtonText}>Explore</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FEF3EC",
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    marginBottom: 10,
  },
  daysContainer: {
    marginBottom: 10,
  },
  dayButton: {
    alignItems: "center",
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  selectedDay: {
    backgroundColor: "#f0f0f0",
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dayText: {
    fontSize: 12,
    color: "#666",
  },
  stepsContainer: {
    padding: 16,
  },
  stepsHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  completion: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  stepItem: {
    marginBottom: 12,
  },
  stepContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
  },
  stepText: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through", // Adds a strikethrough for completed steps
    color: "#888", // Optional: Change color for completed steps
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 18,
    color: "#666",
  },
  shareContainer: {
    margin: 16,
    padding: 20,
    backgroundColor: "#fff5f5",
    borderRadius: 16,
  },
  shareContent: {
    flex: 1,
  },
  shareHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  shareSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  shareImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  userCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userCountText: {
    fontSize: 12,
    color: "#666",
  },
  exploreButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  exploreButtonText: {
    color: "#000",
    fontWeight: "500",
  },
});

export default RoutineScreen;
