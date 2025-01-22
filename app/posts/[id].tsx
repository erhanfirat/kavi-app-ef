import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { useRouter, useSearchParams } from "expo-router/build/hooks";
import { Button } from "react-native";

const PostDetail = () => {
  const { id } = useSearchParams();
  const router = useRouter();

  return (
    <ThemedView>
      <Stack.Screen options={{}}></Stack.Screen>
      <ThemedText>Post Detail {id}</ThemedText>
      <Button title="Post List" onPress={() => router.push("/")}></Button>
    </ThemedView>
  );
};

export default PostDetail;
