import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PostList } from "@/components/PostList";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Posts</ThemedText>
        </ThemedView>
        <PostList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
