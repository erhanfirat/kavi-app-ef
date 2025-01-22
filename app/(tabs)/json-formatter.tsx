import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function TabTwoScreen() {
  const updatedData: User[] = data.map((user: UserRaw) => {
    const [day, month, year] = user.birth_date.split(".");

    return {
      fullName: `${user.first_name} ${user.last_name}`,
      username: user.username,
      power: parseInt(user.power),
      birthDate: new Date(`${year}-${month}-${day}`),
    };
  });

  const averagePower =
    updatedData.reduce((sum, user) => sum + user.power, 0) / data.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ThemedView>
          <ThemedText style={styles.average}>
            Power Average: {averagePower}
          </ThemedText>
          <ThemedText style={styles.average}>Formatted Data</ThemedText>
          <Text style={styles.json}>
            {JSON.stringify(updatedData, null, 2)}
          </Text>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  average: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  json: {
    fontSize: 14,
    fontFamily: "Courier",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
});

interface UserRaw {
  first_name: string;
  last_name?: string;
  username: string;
  power: string;
  gender: string;
  birth_date: string;
}
interface User {
  fullName: string;
  username: string;
  power: number;
  birthDate: Date;
}

const data: UserRaw[] = [
  {
    first_name: "Stepha",
    last_name: "Quiddinton",
    username: "squiddinton0",
    power: "481",
    gender: "Female",
    birth_date: "07.10.1996",
  },
  {
    first_name: "Niki",
    last_name: "Benedick",
    username: "nbenedick1",
    power: "578",
    gender: "Female",
    birth_date: "24.09.1996",
  },
  {
    first_name: "Kenneth",
    username: "kbeavers2",
    power: "463",
    gender: "Male",
    birth_date: "18.10.1990",
  },
  {
    first_name: "Nissy",
    last_name: "Juggins",
    username: "njuggins3",
    power: "436",
    gender: "Female",
    birth_date: "09.01.2000",
  },
  {
    first_name: "Jaymee",
    last_name: "Dotterill",
    username: "jdotterill4",
    power: "687",
    gender: "Female",
    birth_date: "13.02.2000",
  },
  {
    first_name: "Shell",
    last_name: "Shawe",
    username: "sshawe5",
    power: "631",
    gender: "Female",
    birth_date: "08.06.1999",
  },
  {
    first_name: "Ham",
    username: "hruslinge6",
    power: "659",
    gender: "Male",
    birth_date: "01.03.1991",
  },
  {
    first_name: "Gabriell",
    last_name: "Lukins",
    username: "glukins7",
    power: "500",
    gender: "Female",
    birth_date: "25.11.1998",
  },
  {
    first_name: "Roddy",
    last_name: "Whates",
    username: "rwhates8",
    power: "609",
    gender: "Male",
    birth_date: "06.03.1993",
  },
  {
    first_name: "Iris",
    username: "ibolens9",
    power: "418",
    gender: "Female",
    birth_date: "13.04.1993",
  },
];
