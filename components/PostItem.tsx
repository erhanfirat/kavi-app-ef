import { Post } from "@/api/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export const PostItem = ({ post }: { post: Post }) => {
  return (
    <ThemedView style={styles.postContainer}>
      <ThemedText type="subtitle" style={styles.postTitle}>
        {post.title}
      </ThemedText>
      <ThemedText>{post.body}</ThemedText>
      <Link href={`/posts/${post.id}`}>Detail</Link>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  postTitle: {
    flex: 1,
  },
});
