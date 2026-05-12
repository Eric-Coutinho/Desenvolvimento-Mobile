import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilos } from "../../assets/estilos";

function FestaJunina() {
  const imgTopo = require("../../assets/img/FestaJunina.jpg");
  const imgCorpo = require("../../assets/img/FestaJunina2.jpg");

  const autor = "Luiz Fernando Corcini";
  const data = "dd/mm/aaaa";

  return (
    <View style={estilos.FestaJunina_Fundo}>
      <View style={estilos.FestaJunina_Cabecalho}>
        <Image
          source={imgTopo}
          style={estilos.FestaJunina_Imagem_Topo}
          resizeMode="contain"
        />
        <View style={estilos.FestaJunina_Container_Titulos}>
          <Text style={estilos.FestaJunina_SubTituloTopo}>FESTA JUNINA</Text>
          <Text style={estilos.FestaJunina_Titulo}>Curiosidades</Text>
        </View>
      </View>

      <ScrollView
        style={estilos.FestaJunina_Corpo}
        contentContainerStyle={estilos.FestaJunina_Corpo_Conteudo}
      >
        <Text style={estilos.FestaJunina_SubTitulo}>Introdução:</Text>
        <Text style={estilos.FestaJunina_Texto}>
          Festas juninas no Brasil, também conhecidas como festas de São João
          por celebrarem a natividade de São João Batista, são as comemorações
          anuais brasileiras adaptado do solstício de verão europeu que ocorre
          no meio do inverno do hemisfério sul.
        </Text>

        <Text style={estilos.FestaJunina_SubTitulo}>Origens</Text>
        <Text style={estilos.FestaJunina_Texto}>
          A origem da festa junina é pagã, ou seja, é contrária à doutrina
          cristã, porque as festas que deram origem às festas juninas
          homenageavam os deuses da natureza e da fertilidade e pediam fartura
          nas safras, pois era nessa altura que começava o período da colheita
          de cereais.
        </Text>

        <Text style={estilos.FestaJunina_SubTituloGrande}>
          Qual é o significado da festa de São João?
        </Text>

        <Image
          source={imgCorpo}
          style={estilos.FestaJunina_Imagem_Corpo}
          resizeMode="contain"
        />

        <Text style={estilos.FestaJunina_Texto}>
          As festas do mês de junho fazem referência a três santos: Santo
          Antônio, São João e São Pedro. A festa de São João, no dia 24,
          comemora o nascimento de João Batista. Já o Dia de Santo Antônio, 13
          de junho, e o Dia de São Pedro, 29, marcam a data da morte dos dois
          santos.
        </Text>
      </ScrollView>

      <View style={estilos.FestaJunina_Rodape}>
        <Text style={estilos.FestaJunina_Rodape_Texto}>{autor}</Text>
        <Text style={estilos.FestaJunina_Rodape_Texto}>{data}</Text>
      </View>
    </View>
  );
}

export default FestaJunina;
