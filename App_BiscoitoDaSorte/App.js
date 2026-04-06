import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { estilos } from "./assets/estilos";

export default function App() {
  let ArrayFrases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  ];

  const [textoBotao, setTextoBotao] = React.useState("Quebrar Biscoito...");
  const [textoFrase, setTextoFrase] = React.useState("Alguma frase aqui...");
  const [imgBiscoito, setImgBiscoito] = React.useState(
    require("./assets/img/biscoito.png"),
  );

  function alteraStatusBiscoito() {
    let numFrase;
    if (textoBotao === "Quebrar Biscoito...") {
      numFrase = Math.floor(Math.random() * ArrayFrases.length);
      setTextoFrase(ArrayFrases[numFrase]);
      setTextoBotao("Nova Tentativa...");
      setImgBiscoito(require("./assets/img/biscoitoAberto.png"));
    } else {
      setTextoFrase("Alguma frase aqui...");
      setTextoBotao("Quebrar Biscoito...");
      setImgBiscoito(require("./assets/img/biscoito.png"));
    }
  }

  return (
    <View style={estilos.areaFundo}>
      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
      </View>
      <View style={estilos.areaImg}>
        <Image source={imgBiscoito} style={estilos.img} />
      </View>
      <View>
        <Text style={estilos.textoFrase}>"{textoFrase}"</Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={estilos.botao}
            onPress={alteraStatusBiscoito}
          >
            <View style={estilos.areaBotao}>
              <Image
                source={require("./assets/img/Btn_icone_01.png")}
                style={{ marginRight: 20, width: 40, height: 40 }}
              />
              <Text style={estilos.textoBotao}>{textoBotao}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
