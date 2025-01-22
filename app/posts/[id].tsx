import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
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

  return (
    <ThemedView>
      <Stack.Screen
        options={{
          headerTitle: `Post Detail of #${id}`,
          headerBackTitle: `Geri`,
        }}
      ></Stack.Screen>
      <Button title="Post List" onPress={() => router.push("/")}></Button>
    </ThemedView>
  );
};

export default PostDetail;
