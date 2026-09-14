import { Text, View } from "react-native";

type HeaderProps = {
  title: string;
  description: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
