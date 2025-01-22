import { Post } from "@/api/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Button, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import IconButton from "./IconButton";

type PostItemProps = { post: Post; showDetailBtn?: boolean };

export const PostItem: React.FC<PostItemProps> = ({
  post,
  showDetailBtn = true,
}) => {
  return (
    <ThemedView style={styles.postContainer}>
      <ThemedText type="subtitle">{post.title}</ThemedText>
      <ThemedText>{post.body}</ThemedText>
      {showDetailBtn && (
        <IconButton
          title="Detail"
          icon="magnifyingglass"
          onPress={() => router.push(`/posts/${post.id}`)}
        />
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    padding: 8,
    paddingBottom: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
  },
});
