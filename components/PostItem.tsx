import { Post } from "@/api/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";

export const PostItem = ({ post }: { post: Post }) => {
  return (
    <ThemedView style={styles.postContainer}>
      <ThemedText>
        {post.title} - {post.body}
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
});
