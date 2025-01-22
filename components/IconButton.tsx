import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

type IconButtonProps = {
  title?: string;
  icon?: import("expo-symbols").SymbolViewProps["name"];
  onPress: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon && <IconSymbol size={28} name={icon} color={styles.text.color} />}
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 16,
  },
});

export default IconButton;
