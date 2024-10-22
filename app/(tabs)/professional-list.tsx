import { useState } from "react";
import { TextInput, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const professionals = [
  { name: "Jane Doe", service: "Skincare", rating: 4.8 },
  { name: "John Smith", service: "Manicure", rating: 4.5 },
];

const ProfessionalList = ({ route }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { service } = route?.params || {};

  const filteredProfessionals = professionals.filter(
    (pro) =>
      pro.service
        .toLowerCase()
        .includes(service ? service.toLowerCase() : "") &&
      pro.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView>
      <TextInput
        placeholder="Search professionals..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      {filteredProfessionals.map((pro) => (
        <ThemedView key={pro.name}>
          <Card.Title>{pro.name}</Card.Title>
          <ThemedText>Rating: {pro.rating}</ThemedText>
          <ThemedText>Service: {pro.service}</ThemedText>
        </ThemedView>
      ))}
    </ScrollView>
  );
};

export default ProfessionalList;
