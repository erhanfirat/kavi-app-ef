import { fetchPosts } from "@/api/api";
import { Post } from "@/api/types";
import { FlashList } from "@shopify/flash-list";
import { useQuery } from "@tanstack/react-query";
import { ThemedText } from "./ThemedText";

export const PostList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Post[], Error>(
    ["posts"],
    fetchPosts
  );

  if (isLoading) {
    return <ThemedText>Veriler yükleniyor...</ThemedText>;
  }

  if (error) {
    return <ThemedText>Bir hata oluştu!</ThemedText>;
  }

  return (
    <FlashList
      data={data}
      renderItem={({ postItem }) => (
        <ThemedText>
          {postItem.title} - {postItem.body}
        </ThemedText>
      )}
      keyExtractor={(item) => postItem.id.toString()}
      estimatedItemSize={50}
    ></FlashList>
  );
};
