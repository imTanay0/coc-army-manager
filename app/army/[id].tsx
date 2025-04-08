import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ArmyDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Army details {id}</Text>
    </View>
  );
};

export default ArmyDetails;

const styles = StyleSheet.create({});
