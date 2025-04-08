import { Text, View } from "react-native";

import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
      <Link href="/army/123" className="mt-4">Army 123</Link>
    </View>
  );
}
