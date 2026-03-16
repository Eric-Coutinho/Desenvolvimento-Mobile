import React from "react";
import { View, Text } from "react-native";

function App() {
  let elementos = null;

  for (let i = 0; i < 3; i++) {
    elementos = (
      <>
        {elementos}
        <View style={{ backgroundColor: "lightblue", margin: 10, padding: 10 }}>
          <Text>Item {i + 1}</Text>
        </View>
      </>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {elementos}
    </View>
  );
}
export default App;
