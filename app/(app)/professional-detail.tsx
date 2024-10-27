import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { IProfessional, IReview, IService } from "@/constants/types/artists";
import { ThemedText } from "@/components/ThemedText";
import { beautyProviders } from "@/constants/data/artists";

const { height } = Dimensions.get("window");

const AboutRoute = ({ professional }: { professional: IProfessional }) => (
  <ScrollView>
    <ThemedText style={styles.sectionTitle}>About Me</ThemedText>
    <ThemedText style={styles.aboutText}>{professional?.about}</ThemedText>

    <ThemedText style={styles.sectionTitle}>Working Hours</ThemedText>
    <View style={styles.availabilityContainer}>
      {Object.entries(professional.availability).map(([day, hours]) => (
        <View key={day} style={styles.availabilityRow}>
          <ThemedText style={styles.dayText}>
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </ThemedText>
          <ThemedText style={styles.hoursText}>
            {typeof hours === "string"
              ? hours
              : `${hours.start} - ${hours.end}`}
          </ThemedText>
        </View>
      ))}
    </View>

    <ThemedText style={styles.sectionTitle}>Contact Information</ThemedText>
    <View style={styles.contactContainer}>
      <View style={styles.contactItem}>
        <Ionicons name="call-outline" size={20} color="#666" />
        <ThemedText style={styles.contactText}>
          {professional.phoneNumber}
        </ThemedText>
      </View>
      <View style={styles.contactItem}>
        <Ionicons name="mail-outline" size={20} color="#666" />
        <ThemedText style={styles.contactText}>{professional.email}</ThemedText>
      </View>
      <View style={styles.contactItem}>
        <Ionicons name="location-outline" size={20} color="#666" />
        <ThemedText style={styles.contactText}>
          {professional.address}
        </ThemedText>
      </View>
    </View>
  </ScrollView>
);

const ServicesRoute = ({ services }: { services: IService[] }) => {
  if (services.length === 0) {
    return <ThemedText>No Service</ThemedText>;
  }

  return (
    <View>
      {services.map((item, index: number) => (
        <View style={styles.serviceCard} key={index}>
          <View style={styles.serviceHeader}>
            <ThemedText style={styles.serviceName}>{item.name}</ThemedText>
            <ThemedText style={styles.servicePrice}>{item.price}</ThemedText>
          </View>
          <ThemedText style={styles.serviceDuration}>
            <Ionicons name="time-outline" size={16} color="#666" />{" "}
            {item.duration}
          </ThemedText>
          <ThemedText style={styles.serviceDescription}>
            {item.description}
          </ThemedText>
        </View>
      ))}
    </View>
  );
};

const ReviewRoute = ({ reviews }: { reviews: IReview[] }) => (
  <View>
    {reviews.map((item) => {
      return (
        <View style={styles.reviewCard} key={item.reviewerName}>
          <View style={styles.reviewHeader}>
            <View>
              <ThemedText style={styles.reviewerName}>
                {item.reviewerName}
              </ThemedText>
              <ThemedText style={styles.reviewDate}>
                {new Date(item.date).toLocaleDateString()}
              </ThemedText>
            </View>
            <View style={styles.ratingContainer}>
              <ThemedText style={styles.ratingText}>{item.rating}</ThemedText>
              <Ionicons name="star" size={16} color="#FFB800" />
            </View>
          </View>
          <ThemedText style={styles.reviewComment}>{item.comment}</ThemedText>
          {item.verified && (
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={14} color="#4CAF50" />
              <ThemedText style={styles.verifiedText}>
                Verified Visit
              </ThemedText>
            </View>
          )}
        </View>
      );
    })}
  </View>
);

const ProfessionalDetailScreen = () => {
  const route = useRoute<RouteProp<{ params: { id: number } }>>();
  const professionalId = route.params?.id;

  // Assuming you have `beautyProviders` available in context or props:
  const professional = beautyProviders.find((p) => {
    return p.id.toString() === professionalId.toString();
  });
  const [activeTab, setActiveTab] = useState("about");

  const actions = [
    { icon: "call", label: "Call" },
    { icon: "chatbubble", label: "Message" },
    { icon: "navigate", label: "Direction" },
    { icon: "share-social", label: "Share" },
  ];
  console.log(professional?.reviewsData);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return professional && <AboutRoute professional={professional} />;
      case "services":
        return (
          professional?.services && (
            <ServicesRoute services={professional?.services ?? []} />
          )
        );
      case "reviews":
        return (
          professional?.reviewsData && (
            <ReviewRoute reviews={professional?.reviewsData ?? []} />
          )
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <View>
              <ThemedText type="title">{professional?.name}</ThemedText>
              <ThemedText style={styles.profession}>
                {professional?.role}
              </ThemedText>
              <View style={styles.ratingContainer}>
                <ThemedText style={styles.rating}>
                  {professional?.rating}
                </ThemedText>
                <Ionicons name="star" size={16} color="#FFB800" />
              </View>
              <ThemedText style={styles.price}>
                {professional?.price}
              </ThemedText>
            </View>
            <Image
              source={professional?.imageUrl}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>
      <View style={styles.actionButtons}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <Ionicons name={action.icon as any} size={24} color="#4A4A4A" />
            <ThemedText style={styles.actionLabel}>{action.label}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("about")}
          style={[styles.tab, activeTab === "about" && styles.activeTab]}
        >
          <ThemedText>About</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("services")}
          style={[styles.tab, activeTab === "services" && styles.activeTab]}
        >
          <ThemedText>Services</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("reviews")}
          style={[styles.tab, activeTab === "reviews" && styles.activeTab]}
        >
          <ThemedText>Reviews</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>{renderContent()}</View>

      <TouchableOpacity style={styles.bookButton}>
        <ThemedText style={styles.bookButtonText}>Book Appointment</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    height: height * 0.5,
    backgroundColor: "#FEF3EC",
  },
  header: {
    paddingTop: 44,
    paddingHorizontal: 16,
    height: 88,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  profileSection: {
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profession: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666",
    marginTop: 8,
  },
  profileImage: {
    width: 180,
    height: height * 0.3,
    borderRadius: 40,
    backgroundColor: "#F0F0F0",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  actionButton: {
    alignItems: "center",
  },
  actionLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#48201A",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#48201A",
  },
  tabText: {
    color: "gray",
    fontSize: 16,
  },
  activeText: {
    color: "#48201A",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20, // Add padding for content below the tabs
  },
  recentWorksSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#666",
    marginBottom: 20,
  },
  availabilityContainer: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  availabilityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  dayText: {
    fontSize: 14,
    color: "#444",
    textTransform: "capitalize",
  },
  hoursText: {
    fontSize: 14,
    color: "#666",
  },
  contactContainer: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 12,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  serviceCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  serviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4A2828",
  },
  serviceDuration: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },

  reviewCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  reviewDate: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  // ratingContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  ratingText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
  },
  reviewComment: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  verifiedText: {
    fontSize: 12,
    color: "#4CAF50",
    marginLeft: 4,
  },
  reviewsList: {
    padding: 16,
  },
  workImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#F0F0F0",
  },
  bookButton: {
    margin: 16,
    position: "static",
    bottom: 0,
    backgroundColor: "#4A2828",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfessionalDetailScreen;
