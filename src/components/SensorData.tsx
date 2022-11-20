import { View, Text, StyleSheet } from "react-native";

// TODO implementar algo pra selecionar a unidade da temperatura em uso
export type PossibleUnits = {
  temp: string;
  hum: string;
  co2: string;
  light: string;
};

type SensorDataProps = {
  value: string;
  dataName: string;
};

const DATA: Record<string, Record<string, string>> = {
  temp: { name: "Temperature", unit: "*C" },
  hum: { name: "Humidity", unit: "%" },
  co2: { name: "CO2", unit: "ppm" },
  light: { name: "Lux", unit: "lux" },
};

const SensorData = ({ value, dataName }: SensorDataProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{DATA[dataName]["name"]}</Text>
      <Text style={styles.value}>{`${value} ${DATA[dataName]["unit"]}`}</Text>
    </View>
  );
};

export default SensorData;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "45%",
    minHeight: "15%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  value: {
    fontSize: 20,
  },
});
