import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    paddingVertical: 8,
    fontSize: 14,
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 16,
  },
  filterContainer: {
    alignItems: "center",
    width: 80,
    height: 60,
    justifyContent: "center",
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
