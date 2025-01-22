import { Post, User } from "@/api/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

type UserInfoProps = { user: User };

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <ThemedView style={styles.postContainer}>
      <ThemedText type="subtitle">{user.name}</ThemedText>
      <ThemedText>{user.email}</ThemedText>
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
});
