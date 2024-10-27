import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { beautyProviders } from "@/constants/data/artists";
import { IProfessional } from "@/constants/types/artists";

const ProfessionalsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtists, setFilteredArtists] = useState<any>([]);

  const categories = ["All", "Hairstyle", "Beauty & Spa", "Makeup"];

  const topArtists = beautyProviders.filter(
    (artist) => artist.status === "Top Rated" || artist.status === "Most Rated"
  );

  useEffect(() => {
    filterArtists();
  }, [selectedCategory, searchQuery]);

  const filterArtists = () => {
    let filtered = [...beautyProviders];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((artist) =>
        artist.tags.includes(selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(query) ||
          artist.role.toLowerCase().includes(query)
      );
    }

    setFilteredArtists(filtered);
  };

  const PopularArtistCard = ({ artist }: any) => (
    <TouchableOpacity style={styles.popularArtistCard}>
      <Image source={artist.imageUrl} style={styles.popularArtistImage} />
      <ThemedText style={styles.popularArtistName} numberOfLines={1}>
        {artist.name}
      </ThemedText>
      <View style={styles.statusBadge}>
        <ThemedText style={styles.statusText}>{artist.status}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  const ArtistResultCard = ({ artist }: { artist: IProfessional }) => (
    <TouchableOpacity style={styles.resultCard}>
      <Image source={artist.imageUrl} style={styles.resultImage} />
      <View style={styles.resultInfo}>
        <View style={styles.resultHeader}>
          <ThemedText style={styles.resultName}>{artist.name}</ThemedText>
          <View style={styles.ratingContainer}>
            <ThemedText style={styles.ratingText}>⭐{artist.rating}</ThemedText>
          </View>
        </View>
        <ThemedText style={styles.roleText}>{artist.role}</ThemedText>
        <View style={styles.priceContainer}>
          <ThemedText style={styles.priceText}>{artist.price}</ThemedText>
          <TouchableOpacity style={styles.bookButton}>
            <Link
              href={{
                pathname: "/(app)/professional-detail",
                params: {
                  id: artist.id,
                },
              }}
            >
              <ThemedText style={styles.bookButtonText}>Book</ThemedText>{" "}
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

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
            placeholder="Search artists..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity>
            <FontAwesome name="microphone" color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
          >
            <ThemedText
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {/* Popular Artists */}
        <ThemedText style={styles.sectionTitle}>Popular Artists</ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popularArtistsContainer}
        >
          {topArtists.map((artist, index) => (
            <PopularArtistCard key={index} artist={artist} />
          ))}
        </ScrollView>

        {/* Results */}
        <View style={styles.resultsSection}>
          <ThemedText style={styles.sectionTitle}>
            Results Found ({filteredArtists.length})
          </ThemedText>
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist: IProfessional, index: number) => (
              <ArtistResultCard key={index} artist={artist} />
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <ThemedText style={styles.noResultsText}>
                No artists found
              </ThemedText>
              <ThemedText style={styles.noResultsSubtext}>
                Try adjusting your search or filters
              </ThemedText>
            </View>
          )}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
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
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },
  selectedCategory: {
    backgroundColor: "#48201A",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 12,
  },
  popularArtistsContainer: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  popularArtistCard: {
    marginRight: 16,
    alignItems: "center",
    width: 80,
  },
  popularArtistImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 8,
  },
  popularArtistName: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4,
  },
  statusBadge: {
    backgroundColor: "#FFE4B5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    color: "#B8860B",
  },
  resultsSection: {
    paddingHorizontal: 16,
  },
  resultCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#48201A",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  resultInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  resultName: {
    fontSize: 16,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
  roleText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "600",
  },
  bookButton: {
    backgroundColor: "#48201A",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: "#666",
  },
  noResultsContainer: {
    alignItems: "center",
    padding: 32,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default ProfessionalsScreen;
