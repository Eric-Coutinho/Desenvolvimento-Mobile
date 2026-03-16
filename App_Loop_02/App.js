import React from "react";
import { View, Text } from "react-native";

function App() {
  let Txt = null;
  let i = 0;
  let retorno = "Numero";
  while (i < 3) {
    Txt = (
      <>
        {Txt}
        <View style={{ backgroundColor: "gray", margin: 10, width: "95%" }}>
          <Text>
            {retorno} {i + 1}
          </Text>
        </View>
      </>
    );
    i++;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>{Txt}</Text>
    </View>
  );
}
export default App;
