import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { PostList } from "@/components/PostList";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={`/posts/2`}>Detay 2</Link>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">KaviApp</ThemedText>
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
    padding: 8,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
