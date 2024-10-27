import { Text, type TextProps, StyleSheet, Platform } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "OutfitRegular",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "OutfitSemiBold",
  },
  title: {
    fontSize: 32,
    // no fontweight if custom font - https://stackoverflow.com/a/55717885/18892335
    // fontWeight: "bold",
    lineHeight: 32,
    fontFamily: "OutfitBold",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "OutfitMedium",
  },
  bold:
    Platform.OS === "ios"
      ? {
          fontFamily: "OutfitRegular",
          fontWeight: "bold",
        }
      : {
          fontFamily: "OutfitBold",
        },
});
