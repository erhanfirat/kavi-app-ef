import { fetchPosts } from "@/api/api";
import { Post } from "@/api/types";
import { FlashList } from "@shopify/flash-list";
import { useQuery } from "@tanstack/react-query";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { PostItem } from "./PostItem";

export const PostList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ThemedText>Veriler yükleniyor...</ThemedText>;
  }

  if (error) {
    return <ThemedText>Bir hata oluştu!</ThemedText>;
  }

  return (
    <ThemedView style={styles.listContainer}>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <PostItem post={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={50}
      ></FlashList>
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
  listContainer: {
    gap: 16,
  },
});
