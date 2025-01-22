import { fetchPostById, fetchUserById } from "@/api/api";
import { Post, User } from "@/api/types";
import { PostItem } from "@/components/PostItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { UserInfo } from "@/components/UserInfo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import {
  useLocalSearchParams,
} from "expo-router/build/hooks";
import { Button } from "react-native";

const PostDetail = () => {
  const queryClient = useQueryClient();
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
    // initialData özelliği ile yeni yükleme yapılana kadar
    // var olan data seti içindeki post datası kullanılır
    initialData: () => {
      const posts = queryClient.getQueryData<Post[]>(["posts"]);
      return posts?.find((p) => p.id === parseInt(id));
    },
  });

  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useQuery<User, Error>({
    queryKey: ["user", post?.userId],
    queryFn: () => fetchUserById(post?.userId),
    // enabled özelliği sayesinde sadece post.userId değeri dolu olduğunda query gerçekleşir
    // bu sayede gereksiz querylerin önüne geçilmiş olur
    enabled: !!post?.userId,
  });

  if (!post) {
    return (
      <ThemedView>
        <Stack.Screen
          options={{
            headerTitle: `Post Detail of #${id}`,
            headerBackTitle: `Back`,
          }}
        ></Stack.Screen>
        <ThemedText>Yükleniyor</ThemedText>
        <Button
          title="Post List"
          onPress={() => router.push("/posts")}
        ></Button>
      </ThemedView>
    );
  }

  return (
    <ThemedView>
      <Stack.Screen
        options={{
          headerTitle: `Post Detail of #${id}`,
          headerBackTitle: `Back`,
        }}
      ></Stack.Screen>
      <PostItem post={post} showDetailBtn={false} />
      {user && <UserInfo user={user} />}
      <Button title="Post List" onPress={() => router.push("/posts")}></Button>
    </ThemedView>
  );
};

export default PostDetail;
