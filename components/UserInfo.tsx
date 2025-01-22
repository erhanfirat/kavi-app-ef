import { Post, User } from "@/api/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

type UserInfoProps = { user: User };

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <ThemedView style={styles.postContainer}>
      <ThemedText type="subtitle">User Info:</ThemedText>
      <ThemedText>{user.username}</ThemedText>
      <ThemedText>{user.name}</ThemedText>
      <ThemedText>{user.email}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    padding: 8,
  },
});
