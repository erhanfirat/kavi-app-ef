import { Post } from "@/api/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

type PostItemProps = { post: Post; showDetailBtn?: boolean };

export const PostItem = ({ post, showDetailBtn = true }: PostItemProps) => {
  return (
    <ThemedView style={styles.postContainer}>
      <ThemedText type="subtitle" style={styles.postTitle}>
        {post.title}
      </ThemedText>
      <ThemedText>{post.body}</ThemedText>
      {showDetailBtn && <Link href={`/posts/${post.id}`}>Detay</Link>}
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
