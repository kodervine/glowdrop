import { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { Card, Divider, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";

const appointments = [
  {
    id: 1,
    service: "Facial Treatment",
    date: "2024-10-22",
    time: "2:00 PM",
    provider: "Beauty Salon XYZ",
    status: "Confirmed",
  },
  {
    id: 2,
    service: "Pedicure",
    date: "2024-10-25",
    time: "10:00 AM",
    provider: "Nail Studio",
    status: "Pending",
  },
];

const AppointmentScreen = () => {
  const navigation = useNavigation();
  const [appointmentList, setAppointmentList] = useState(appointments);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredAppointments = appointmentList.filter((appointment) =>
    appointment.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReschedule = (appointmentId: number) => {
    Alert.alert("Reschedule", `Rescheduling appointment ${appointmentId}`);
    // Navigate to a Reschedule screen or show a date picker
  };

  const handleCancel = (appointmentId: number) => {
    Alert.alert("Cancel", `Cancelling appointment ${appointmentId}`);
    // Remove the appointment from the list or update its status
    setAppointmentList((prev) =>
      prev.filter((item) => item.id !== appointmentId)
    );
  };

  const handleSetReminder = (appointmentId: number) => {
    Alert.alert("Reminder", `Reminder set for appointment ${appointmentId}`);
    // Integrate notification logic here
  };

  return (
    <ScrollView>
      <Searchbar
        placeholder="Search Appointments"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <ThemedText style={{ fontSize: 24, marginVertical: 10 }}>
        Your Appointments
      </ThemedText>
      {appointmentList.length === 0 ? (
        <ThemedText>No upcoming appointments.</ThemedText>
      ) : (
        appointmentList.map((appointment) => (
          <View key={appointment.id}>
            <Card style={{ marginVertical: 10 }}>
              <Card.Content>
                <ThemedText>{appointment.service}</ThemedText>
                <ThemedText>{appointment.provider}</ThemedText>
                <ThemedText>
                  {appointment.date} at {appointment.time}
                </ThemedText>
                <ThemedText>Status: {appointment.status}</ThemedText>
                <Divider />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}
                >
                  <ThemedButton
                    onPress={() => handleReschedule(appointment.id)}
                  >
                    Reschedule
                  </ThemedButton>
                  <ThemedButton onPress={() => handleCancel(appointment.id)}>
                    Reschedule
                  </ThemedButton>
                  <ThemedButton
                    onPress={() => handleSetReminder(appointment.id)}
                  >
                    Reschedule
                  </ThemedButton>
                </View>
              </Card.Content>
            </Card>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default AppointmentScreen;
