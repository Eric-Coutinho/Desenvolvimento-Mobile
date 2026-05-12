import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilos } from "../../assets/estilos";

function Halloween() {
  const imgTopo = require("../../assets/img/halloween1.jpg");
  const imgCorpo = require("../../assets/img/halloween2.jpg");

  const autor = "Luiz Fernando Corcini";
  const data = "dd/mm/aaaa";

  return (
    <View style={estilos.Halloween_Fundo}>
      <View style={estilos.Halloween_Cabecalho}>
        <Image
          source={imgTopo}
          style={estilos.Halloween_Imagem_Topo}
          resizeMode="contain"
        />

        <View style={estilos.Halloween_Container_Titulos}>
          <Text style={estilos.Halloween_SubTituloTopo}>HALLOWEEN</Text>
          <Text style={estilos.Halloween_Titulo}>Curiosidades</Text>
        </View>
      </View>

      <ScrollView
        style={estilos.Halloween_Corpo}
        contentContainerStyle={estilos.Halloween_Corpo_Conteudo}
      >
        <Text style={estilos.Halloween_SubTitulo}>Introdução:</Text>

        <Text style={estilos.Halloween_Texto}>
          O significado de "Halloween" está relacionado ao sentido da própria
          data em si. De acordo com Tupã Guerra, o nome teria vindo da expressão
          "All Hallows Eve" — que, em tradução direta, significa "a véspera de
          todas as almas". Isso porque a data antecede o Dia de Todos os Santos.
        </Text>

        <Text style={estilos.Halloween_SubTitulo}>Origens</Text>

        <Image
          source={imgCorpo}
          style={estilos.Halloween_Imagem_Corpo}
          resizeMode="contain"
        />

        <Text style={estilos.Halloween_Texto}>
          Os historiadores apontam que a provável origem do Halloween tenha sido
          um festival praticado pelos celtas chamado Samhain. Esse festival era
          uma das comemorações mais importantes do calendário celta e era
          realizado como um marco do fim do verão.
        </Text>

        <Text style={estilos.Halloween_SubTituloGrande}>
          Curiosidades: Bruxas
        </Text>

        <Text style={estilos.Halloween_Texto}>
          Bruxas sempre aparecem como símbolo do Halloween. Pesquisas mostram
          que, antigamente, nos Estados Unidos, algumas mulheres com aparência
          estranha e assustadora eram chamadas de bruxas. Essas personagens
          faziam festas para homenagear o diabo.
        </Text>
      </ScrollView>

      <View style={estilos.Halloween_Rodape}>
        <Text style={estilos.Halloween_Rodape_Texto}>{autor}</Text>
        <Text style={estilos.Halloween_Rodape_Texto}>{data}</Text>
      </View>
    </View>
  );
}

export default Halloween;
