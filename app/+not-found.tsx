import React, { useEffect } from "react";
import { Link, router, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/posts"); // Yönlendirmek istediğiniz rota
    }, 5000); // 3000 ms = 3 saniye

    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">
            You will be redirected to Home page in 5 seconds or click here!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
