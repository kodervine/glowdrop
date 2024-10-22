import { ColorSchemeName, Image, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { ThemedButton } from "@/components/ThemedButton";
import { Dimensions } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";

// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { auth } from "@/firebaseconfig";

// GoogleSignin.configure({
//   webClientId: "YOUR_GOOGLE_WEB_CLIENT_ID",
// });
const { height } = Dimensions.get("window");
const AuthHomeScreen = () => {
  const colorScheme = (useColorScheme() as ColorSchemeName) ?? "light";
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(
  //       userInfo.type
  //     );
  //     await auth().signInWithCredential(googleCredential);
  //     navigation.replace("Home");
  //   } catch (error: any) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log("Sign in cancelled");
  //     }
  //   }
  // };

  return (
    <ThemedView style={styles.container}>
      {/* Top Section (Image Background with Text) */}
      <ThemedView style={styles.topSection}>
        <Image
          source={require("@/assets/images/auth-banner.jpg")}
          style={styles.headerImage}
        />
      </ThemedView>

      {/* Bottom Section */}
      <ThemedView
        style={{
          ...styles.bottomSection,
          backgroundColor: Colors[colorScheme ?? "light"].brandPink,
        }}
      >
        {/* Card Form */}
        <ThemedView style={styles.formCard}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={styles.formCardImage}
          />
          <ThemedText type="title">Welcome to Glowdrop!</ThemedText>
          <ThemedText type="subtitle">Let's log you in</ThemedText>
          <ThemedButton onPress={() => router.navigate("/(tabs)/home")}>
            Sign in with Google
          </ThemedButton>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: height * 0.6,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bottomSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formCard: {
    width: "85%",
    padding: 20,
    borderRadius: 10,
    minHeight: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    position: "absolute",
    top: -60, // Adjust the card to overlap the bottom section
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  formCardImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
