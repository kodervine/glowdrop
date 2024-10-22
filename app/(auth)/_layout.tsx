import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
