import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { estilos } from "../../assets/estilos";

function Carnaval() {
  let imgCarnaval = require("../../assets/img/carnaval.jpg");
  let imgEgito = require("../../assets/img/egito.jpg");

  let autor = "Luiz Fernando Corcini";
  let data = "dd/mm/aaaa";

  return (
    <View style={estilos.Carnaval_Fundo}>
      <View style={estilos.Carnaval_Cabecalho}>
        <Image
          source={imgCarnaval}
          style={estilos.Carnaval_Imagem_Topo}
          resizeMode="contain"
        />

        <View>
          <Text style={estilos.Carnaval_SubTitulo}>CARNAVAL</Text>

          <Text style={estilos.Carnaval_Titulo}>Curiosidades</Text>
        </View>
      </View>

      <ScrollView style={estilos.Carnaval_Corpo}>
        <Text style={estilos.Carnaval_Texto_Titulo}>Introdução:</Text>

        <Text style={estilos.Carnaval_Texto}>
          O carnaval brasileiro é muito mais do que uma simples festa; é uma
          expressão cultural que impulsiona a economia e o turismo do país. Com
          seu poder de atrair turistas de todo o mundo e gerar empregos e
          receita, o carnaval se tornou uma peça fundamental no cenário
          econômico brasileiro.
        </Text>

        <Text style={estilos.Carnaval_Texto_Destaque}>
          Mas, engana-se quem pensa que o carnaval é uma festa que teve origem
          no Brasil.
        </Text>

        <Text style={estilos.Carnaval_Texto_Titulo}>Origens</Text>

        <Text style={estilos.Carnaval_Texto}>
          Para dar início às controvérsias, encontramos relatos de especialistas
          que associam os ritos carnavalescos a dez mil anos antes de Cristo.
          Conforme alguns estudiosos, a grande celebração era relacionada aos
          louvores dos antigos para boas colheitas agrárias.
        </Text>

        <Text style={estilos.Carnaval_Texto_Titulo}>Curiosidades: Egito</Text>

        <Image
          source={imgEgito}
          style={estilos.Carnaval_Imagem_Corpo}
          resizeMode="contain"
        />

        <Text style={estilos.Carnaval_Texto}>
          Entre pirâmides e esfinges, a origem do Carnaval pode vir dos
          egípcios. Vestidos com máscaras, em suntuosas festas repletas de
          danças, a intenção do povo era celebrar as colheitas e homenagear seus
          deuses.
        </Text>
      </ScrollView>

      <View style={estilos.Carnaval_Rodape}>
        <Text style={estilos.Carnaval_Rodape_Texto}>{autor}</Text>

        <Text style={estilos.Carnaval_Rodape_Texto}>{data}</Text>
      </View>
    </View>
  );
}

export default Carnaval;
