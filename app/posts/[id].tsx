import { fetchPostById, fetchUserById } from "@/api/api";
import { Post, User } from "@/api/types";
import { PostItem } from "@/components/PostItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQuery } from "@tanstack/react-query";
import { Stack } from "expo-router";
import {
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from "expo-router/build/hooks";
import { Button } from "react-native";

const PostDetail = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id = params.id as string | undefined;

  if (!id) {
    return (
      <ThemedView>
        <ThemedText>HATA: Post ID bulunamadı!</ThemedText>
      </ThemedView>
    );
  }

  const {
    data: post,
    isLoading: isPostLoading,
    error: postError,
  } = useQuery<Post, Error>({
    queryKey: ["posts", id],
    queryFn: () => fetchPostById(id),
  });

  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useQuery<User, Error>({
    queryKey: ["user", post?.userId],
    queryFn: () => fetchUserById(post?.userId),
    enabled: !!post?.userId,
  });

  if (!post) {
    return (
      <ThemedView>
        <Stack.Screen
          options={{
            headerTitle: `Post Detail of #${id}`,
            headerBackTitle: `Geri`,
          }}
        ></Stack.Screen>
        <ThemedText>Yükleniyor</ThemedText>
        <Button title="Post List" onPress={() => router.push("/")}></Button>
      </ThemedView>
    );
  }

  return (
    <ThemedView>
      <Stack.Screen
        options={{
          headerTitle: `Post Detail of #${id}`,
          headerBackTitle: `Geri`,
        }}
      ></Stack.Screen>
      <PostItem post={post} showDetailBtn={false} />
      <ThemedText>User: {user?.name}</ThemedText>
      <Button title="Post List" onPress={() => router.push("/posts")}></Button>
    </ThemedView>
  );
};

export default PostDetail;
