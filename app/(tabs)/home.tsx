import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { ThemedButton } from "@/components/ThemedButton";

const services = ["Skincare", "Manicure", "Pedicure"];

const recommendedProducts = [
  { name: "Cleansing Foam", imageUrl: "..." },
  { name: "Moisturizer", imageUrl: "..." },
];
export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedText>Services</ThemedText>
      <ThemedView style={{ flexDirection: "row" }}>
        {services.map((service) => (
          <ThemedView key={service}>
            <Card.Title>{service}</Card.Title>
            <ThemedButton
              onPress={() => router.navigate("/(app)/professional-detail")}
            >
              Explore ${service}
            </ThemedButton>
          </ThemedView>
        ))}
      </ThemedView>

      <ThemedText type="subtitle">Recommended Products</ThemedText>
      <ThemedView>
        {recommendedProducts.map((product) => (
          <ThemedView key={product.name}>
            <Card.Image source={{ uri: product.imageUrl }} />
            <Card.Title>{product.name}</Card.Title>
            <Link href="/(app)/professional-detail">
              <ThemedText type="link">View details</ThemedText>
            </Link>
          </ThemedView>
        ))}
      </ThemedView>
      <ThemedButton onPress={() => router.navigate("/(tabs)/routine")}>
        Log Skincare Routine
      </ThemedButton>
    </ScrollView>
  );
}
