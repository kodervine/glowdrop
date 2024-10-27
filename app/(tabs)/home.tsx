import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TextInput } from "react-native-paper";

const services = [
  { name: "Facial", image: require("@/assets/images/service-2.png") },
  { name: "Makeup", image: require("@/assets/images/service-1.png") },
  { name: "Manicures", image: require("@/assets/images/service-3.png") },
  { name: "Haircut", image: require("@/assets/images/service-4.png") },
  { name: "Waxing", image: require("@/assets/images/service-5.png") },
];

const topArtists = [
  {
    name: "Alaina Tisha",
    imageUrl: require("@/assets/images/artist-1.jpg"),
    rating: 4.8,
    reviews: 44,
    role: "Beauty Artist",
    price: "$39.00/hr",
    bookmarked: true,
    status: "Most Rated",
  },
  {
    name: "Nonny James",
    imageUrl: require("@/assets/images/artist-2.jpg"),
    rating: 4.1,
    price: "$27.00/hr",
    role: "Makeup Artist",
    reviews: 20,
    bookmarked: false,
    status: "Top Rated",
  },
  {
    name: "Amber Grace",
    imageUrl: require("@/assets/images/artist-3.jpg"),
    rating: 4.3,
    price: "$20.00/hr",
    role: "Masseuse",
    reviews: 12,
    bookmarked: false,
    status: "Top Rated",
  },
];

const recommendedProducts = [
  { id: "1", name: "Cleansing Foam", price: "$15.00", image: "" },
  { id: "2", name: "Moisturizer", price: "$20.00" },
  { id: "3", name: "Toner", price: "$12.00" },
  { id: "4", name: "Serum", price: "$30.00" },
  { id: "5", name: "Face Mask", price: "$10.00" },
];

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* Header */}
      <ThemedView style={styles.header}>
        {/* Greeting with Icon */}
        <View style={styles.greetingContainer}>
          <View>
            <ThemedText type="title" style={styles.greetingText}>
              Hi Nenye,
            </ThemedText>
            <ThemedText type="subtitle">
              Let's take care of your skin
            </ThemedText>
          </View>
          <Image
            source={require("@/assets/images/eyes-amico.png")}
            style={styles.serviceIcon}
          />
        </View>

        {/* Search */}

        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="grey"
              style={styles.searchIcon}
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Search artists..."
              // value={searchQuery}
              // onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.searchFilterButton}>
            <Ionicons name="filter" size={20} color="white" />
          </View>
        </View>
      </ThemedView>

      <View style={styles.container}>
        {/* Top Services */}
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Top Services
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {services.map((service) => (
            <View key={service.name} style={styles.serviceCard}>
              <Image source={service.image} style={styles.serviceIcon} />
              <ThemedText style={styles.serviceName}>{service.name}</ThemedText>
            </View>
          ))}
        </ScrollView>

        {/* Top Artists */}
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Top Artists
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {topArtists.map((artist) => (
            <View style={styles.artistCard} key={artist.name}>
              {/* Image with Bookmark Icon */}
              <View style={styles.imageContainer}>
                <Image source={artist.imageUrl} style={styles.artistImage} />
                <TouchableOpacity style={styles.bookmarkIcon}>
                  <Ionicons
                    name={artist.bookmarked ? "bookmark" : "bookmark-outline"}
                    size={20}
                    color="#48201A"
                  />
                </TouchableOpacity>
              </View>

              {/* Artist Details */}
              <View style={styles.artistInfo}>
                {/* Name and Rating */}
                <View style={styles.nameRow}>
                  <ThemedText style={styles.artistName}>
                    {artist.name}
                  </ThemedText>
                  <ThemedText style={styles.artistRating}>
                    ⭐ {artist.rating} ({artist.reviews})
                  </ThemedText>
                </View>

                {/* Artist Role */}
                <ThemedText style={styles.artistRole}>{artist.role}</ThemedText>

                {/* Price and Ranking */}
                <View style={styles.priceRow}>
                  <ThemedText style={styles.artistPrice}>
                    {artist.price}
                  </ThemedText>
                  <ThemedText style={styles.artistRanking}>
                    Top Rated
                  </ThemedText>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Log Beauty Routine or Products */}
        {/* <ThemedText type="subtitle" style={styles.sectionTitle}>
          Track Your Beauty
        </ThemedText>
        <View style={styles.buttonContainer}>
          <ThemedButton onPress={() => router.navigate("/(tabs)/routine")}>
            Log Skincare Routine
          </ThemedButton>
          <ThemedButton onPress={() => router.navigate("/(tabs)/appointments")}>
            Log Beauty Products
          </ThemedButton>
        </View> */}

        {/* Recommended Products */}
        <View style={styles.productHeader}>
          <ThemedText type="subtitle">Recommended Products</ThemedText>
          <TouchableOpacity style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>View All</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        {recommendedProducts.map((product) => (
          <View style={styles.productContainer}>
            <View style={styles.productInfo}>
              <View style={styles.productIcon}>
                <MaterialIcons name="shopping-bag" size={16} color="#333" />
              </View>
              <ThemedText style={styles.productName}>{product.name}</ThemedText>
            </View>
            <ThemedText style={styles.productPrice}>{product.price}</ThemedText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#FEF3EC",
    padding: 20,
    paddingTop: 40,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  greetingIcon: {
    marginRight: 8,
  },
  greetingText: {
    fontSize: 24,
    marginBottom: 4,
  },

  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0E3DB",
    borderRadius: 8,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: "#424242",
    backgroundColor: "#F0E3DB",
    padding: 0,
    height: 40,
    borderWidth: 0,
  },
  searchText: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  searchFilterButton: {
    borderRadius: 12,
    backgroundColor: "#48201A",
    padding: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    marginVertical: 8,
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  serviceCard: {
    alignItems: "center",
    width: 80,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  artistContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-around",
    padding: 16,
  },
  artistCard: {
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 8,
    marginRight: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
  },
  artistImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bookmarkIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 4,
  },
  artistInfo: {
    padding: 12,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  artistName: {
    fontSize: 16,
    color: "#333",
  },
  artistRating: {
    fontSize: 14,
    color: "#777",
  },
  artistRole: {
    fontSize: 14,
    color: "#818589",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  artistPrice: {
    fontSize: 16,
    color: "#333",
  },
  artistRanking: {
    fontSize: 14,
    color: "#f39c12",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  viewAllButton: {
    backgroundColor: "#48201A",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  viewAllText: {
    color: "#FFF",
    fontSize: 12,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E9E4DA", // Slightly darker beige for product cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  productIcon: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 4,
  },
  productName: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  productsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productCard: {
    alignItems: "center",
    width: 100,
    marginVertical: 8,
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  productLink: {
    color: "#007bff",
    fontSize: 12,
  },
});
