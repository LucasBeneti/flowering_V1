import { View, Text, StyleSheet } from "react-native";

import SensorData from "../../components/SensorData";

const DataScreen = () => {
  // mocked data coming from device
  const testData = [
    { dataName: "temp", value: "25" },
    { dataName: "hum", value: "58" },
    { dataName: "co2", value: "500" },
    { dataName: "light", value: "680" },
  ];
  // TODO seria interessante ter um mini gráfico pra cara medida
  // pra que o usuário consiga ver caso tenha alguma alteração muito brusca
  // e caso deseje, vá pra tela de maior detalhe dos dados fornecidos.

  //TODO: não sei como será a parte de armazenar os dados, talvez teremos que
  // ter um banco local com eles e manter atualizado com o DB remoto
  return (
    <View style={styles.container}>
      <Text style={styles.pageDescription}>
        Here you’ll be able to see the data available from your device. Click on
        any of them to see a more detailed view.
      </Text>
      <View style={styles.sensorDataContainer}>
        {testData.map(({ dataName, value }) => (
          <SensorData value={value} dataName={dataName} key={dataName} />
        ))}
      </View>
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pageDescription: {
    fontSize: 16,
    fontWeight: "600",
    margin: 20,
  },
  sensorDataContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "#ddd",
    justifyContent: "center",
    paddingTop: 20,
  },
});
