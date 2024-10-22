import { View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";

type ProfessionalDetailParams = {
  ProfessionalDetail: {
    id: string;
    name: string;
    service: string;
    description: string;
    price: string;
    contact: string;
  };
};

const ProfessionalDetailScreen = () => {
  const route =
    useRoute<RouteProp<ProfessionalDetailParams, "ProfessionalDetail">>();
  const { name, service, description, price, contact } = route.params;

  return (
    <View>
      <ThemedText>
        {name} - {service}
      </ThemedText>
      <ThemedText>{description}</ThemedText>
      <ThemedText>Price: {price}</ThemedText>
      <ThemedText>Contact: {contact}</ThemedText>
      <ThemedButton>Contact Now</ThemedButton>
    </View>
  );
};

export default ProfessionalDetailScreen;
