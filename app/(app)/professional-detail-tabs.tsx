import { MaterialTopTabs } from "@/layouts/material-top-tabs";

export function TopTabsComponent() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff", // Customize tab style
        },
        tabBarIndicatorStyle: {
          backgroundColor: "blue", // Customize the indicator
        },
      }}
    >
      {/* Add your swipeable screens */}
      <MaterialTopTabs.Screen
        name="professional-about"
        options={{ tabBarLabel: "About" }}
      />
      <MaterialTopTabs.Screen
        name="professional-reviews"
        options={{ tabBarLabel: "Reviews" }}
      />
      <MaterialTopTabs.Screen
        name="professional-services"
        options={{ tabBarLabel: "Services" }}
      />
    </MaterialTopTabs>
  );
}
