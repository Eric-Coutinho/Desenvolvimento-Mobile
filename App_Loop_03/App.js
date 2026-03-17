import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

function App() {
  const AUTORES = "Eric, Mohannad, Paloma";
  const DATA = "03/2026";

  const nomes = ["Cristiano", "Vinicius", "Marta", "Junior", "Memphis", "Jose"];
  const cursos = ["ADS", "ESOFT", "ESOFT", "ADS", "DIR", "ADM"];
  const periodos = [5, 3, 3, 4, 8, 2];
  const fotos = [
    require("./assets/Images/pessoa.jpg"),
    require("./assets/Images/pessoa1.png"),
    require("./assets/Images/pessoa2.png"),
    require("./assets/Images/pessoa4.jpg"),
    require("./assets/Images/pessoa5.jpg"),
    require("./assets/Images/pessoa.jpg"),
  ];

  let i = 0;
  let elemento = null;
  while (i < nomes.length) {
    elemento = (
      <>
        {elemento}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#8de2ff",
            height: 100,
            marginTop: 5,
            borderRadius: 10,
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={fotos[i]}
            style={{ width: 60, height: 60, borderRadius: 10, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 20 }}>
              Nome: <Text style={{ fontWeight: "bold" }}>{nomes[i]}</Text>
            </Text>
            <Text>Curso: {cursos[i]}</Text>
            <Text>PerÃ­odo: {periodos[i]}</Text>
          </View>
        </View>
      </>
    );
    i++;
  }

  return (
    <View style={{ backgroundColor: "lightgray", flex: 1, padding: 10 }}>
      {}
      <View
        style={{
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: "grey",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Faculdade
        </Text>
        <Image
          source={require("./assets/Images/download.png")}
          style={{ width: 150, height: 10, borderRadius: 25 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Arial Rounded MT Bold",
          }}
        >
          DSV MOBILE
        </Text>
      </View>

      {}
      <ScrollView style={{ backgroundColor: "white", flex: 5 }}>
        {elemento}
      </ScrollView>

      {}
      <View
        style={{
          backgroundColor: "grey",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "yellow" }}>{AUTORES}</Text>
        <Text style={{ fontSize: 20, color: "yellow" }}>{DATA}</Text>
      </View>
    </View>
  );
}

export default App;
