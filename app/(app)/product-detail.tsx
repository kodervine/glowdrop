import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";

type ProductDetailParams = {
  ProductDetail: {
    id: number;
    name: string;
    skinType: string;
    image: any;
    price: number;
    rating: number;
  };
};

const ProductDetailScreen = () => {
  const route = useRoute<RouteProp<ProductDetailParams, "ProductDetail">>();
  const product = route.params;
  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      date: "Mar 15, 2024",
      rating: 5,
      comment: "Amazing product! Really helped with my skin concerns.",
    },
    {
      id: 2,
      user: "Michael K.",
      date: "Mar 12, 2024",
      rating: 4,
      comment: "Good results after 2 weeks of use.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={product.image}
          style={styles.productImage}
          resizeMode="contain"
        />
        <ThemedText type="title">{product.name}</ThemedText>
        <View style={styles.headerInfo}>
          <ThemedText style={styles.price}>${product.price}</ThemedText>
          <View style={styles.ratingContainer}>
            <ThemedText style={styles.rating}>{product.rating} ⭐</ThemedText>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <ThemedText style={styles.title}>About Product</ThemedText>
        <ThemedText style={styles.description}>
          This premium skincare product is specifically formulated for{" "}
          {product.skinType.toLowerCase()} skin types. Our advanced formula
          helps maintain optimal skin health while addressing specific concerns.
        </ThemedText>

        <ThemedText style={styles.title}>Key Benefits</ThemedText>
        <View style={styles.benefitsList}>
          <ThemedText style={styles.benefit}>
            • Specially formulated for {product.skinType.toLowerCase()} skin
          </ThemedText>
          <ThemedText style={styles.benefit}>• Dermatologist tested</ThemedText>
          <ThemedText style={styles.benefit}>• Non-comedogenic</ThemedText>
          <ThemedText style={styles.benefit}>• Fragrance-free</ThemedText>
        </View>

        <ThemedText style={styles.title}>Reviews</ThemedText>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <ThemedText style={styles.reviewUser}>{review.user}</ThemedText>
              <ThemedText style={styles.reviewDate}>{review.date}</ThemedText>
            </View>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                // <StarIcon
                //   key={i}
                //   size={16}
                //   color={i < review.rating ? '#FFD700' : '#E0E0E0'}
                // />
                <ThemedText> ⭐</ThemedText>
              ))}
            </View>
            <ThemedText style={styles.reviewComment}>
              {review.comment}
            </ThemedText>
          </View>
        ))}

        <View style={styles.buttonContainer}>
          <ThemedButton style={styles.button}>
            <ThemedText style={styles.buttonText}>Add to Cart</ThemedText>
          </ThemedButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    padding: 16,
    paddingTop: 40,
  },
  productImage: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
  benefitsList: {
    marginTop: 8,
  },
  benefit: {
    fontSize: 14,
    lineHeight: 24,
    color: "#666",
  },
  reviewCard: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  reviewUser: {
    fontWeight: "500",
  },
  reviewDate: {
    color: "#666",
    fontSize: 12,
  },
  reviewComment: {
    marginTop: 8,
    color: "#444",
  },
  buttonContainer: {
    // position: "absolute",
    // bottom: 0,
    // left: 10,
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProductDetailScreen;
