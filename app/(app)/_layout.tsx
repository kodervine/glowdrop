import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function AppLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="routine-form" options={{ headerShown: false }} />
      <Stack.Screen
        name="professional-detail"
        options={{
          title: "Professional Detail",
          headerShown: false,
        }}
      />
      <Stack.Screen name="product-form" options={{ headerShown: false }} />
      <Stack.Screen name="product-detail" options={{ headerShown: false }} />
    </Stack>
  );
}
