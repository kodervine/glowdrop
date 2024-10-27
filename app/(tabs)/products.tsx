import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const ProductsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Hydrating Serum",
      skinType: "Dry",
      image: require("@/assets/images/product-1.jpg"),
      price: 89.99,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Oil Control Moisturizer",
      skinType: "Oily",
      image: require("@/assets/images/product-2.jpg"),
      price: 75.0,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Gentle Cleanser",
      skinType: "Sensitive",
      image: require("@/assets/images/product-3.jpg"),
      price: 45.0,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Balancing Toner",
      skinType: "Combination",
      image: require("@/assets/images/product-1.jpg"),
      price: 55.0,
      rating: 4.7,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity>
            <FontAwesome name="microphone" color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.grid}>
        {products.map((product) => (
          <Link
            key={product.id}
            style={styles.productCard}
            href={{
              pathname: "/(app)/product-detail",
              params: product,
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                source={product.image}
                style={styles.productImage}
                resizeMode="contain"
              />
              <View style={styles.checkmark}>
                <Text style={styles.checkmarkText}>✓</Text>
              </View>
            </View>
            <Text style={styles.skinType}>For {product.skinType} Skin</Text>
            <Text style={styles.productName}>{product.name}</Text>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  productCard: {
    width: "48%",
    margin: "1%",
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#f8f8f8",
  },
  imageContainer: {
    position: "relative",
    aspectRatio: 1,
    marginBottom: 8,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  checkmark: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  checkmarkText: {
    color: "#4CAF50",
    fontSize: 16,
  },
  skinType: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ProductsScreen;
