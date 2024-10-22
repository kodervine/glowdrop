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

      {/* Material Top Tabs as a nested navigator within Stack */}
      <Stack.Screen
        name="professional-detail-tabs"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
