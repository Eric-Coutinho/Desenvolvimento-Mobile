import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "green",
        textWrap: "wrap",
        padding: 20,
        maxWidth: "100%",
        overflow: "scroll",
      }}
    >
      <View style={{ backgroundColor: "white", padding: 20, borderColor: "black", borderWidth: 4 }}>
        <Text style={{ color: "pink", fontSize: 32 }}>Título do texto!</Text>
        <Text style={{ color: "blue", fontSize: 24, fontWeight: 800 }}>
          Esse é um texto que será usado como sub-título desse desafio, ele tem
          por volta de 1 parágrafo e terá uma cor diferenciada!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          padding: 20,
          marginTop: 20,
          borderColor: "purple",
          borderWidth: 6,
        }}
      >
        <Text
          style={{ color: "red", fontSize: 18, fontFamily: "Comic Sans MS" }}
        >
          Esse é um texto que está dentro de uma caixa amarela, ele tem uma cor
          vermelha e um tamanho de fonte menor do que os outros textos, ele tem
          por volta de 1 parágrafo e tem a função de ser um texto complementar
          para o desafio!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "gray",
          padding: 20,
          marginTop: 20,
          borderColor: "black",
          borderWidth: 12,
        }}
      >
        <Text
          style={{
            color: "rgb(154, 17, 17)",
            fontSize: 40,
            fontFamily: "Arial",
            fontWeight: 300,
          }}
        >
          Esse texto está dentro da terceira view! Ele também estará com uma cor
          diferenciada e com um fundo diferente dos outros!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          padding: 20,
          marginBottom: 20,
          borderColor: "red",
          borderWidth: 4,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontFamily: "Arial" }}>
          Esse é um texto que está dentro de uma caixa laranja, ele tem uma cor
          branca e um tamanho de fonte menor do que os outros textos, ele tem
          por volta de 1 parágrafo e tem a função de ser um texto complementar
          para o desafio!
        </Text>
      </View>
    </View>
  );
}
