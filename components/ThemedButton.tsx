import { Button, ButtonProps } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";
import { ColorSchemeName } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export function ThemedButton({ style, children, ...rest }: ButtonProps) {
  const colorScheme = (useColorScheme() as ColorSchemeName) ?? "light";

  return (
    <Button
      buttonColor={Colors[colorScheme ?? "light"].brandBrown}
      textColor={Colors[colorScheme ?? "light"].buttonText}
      style={style}
      {...rest}
    >
      <ThemedText>{children}</ThemedText>
    </Button>
  );
}
