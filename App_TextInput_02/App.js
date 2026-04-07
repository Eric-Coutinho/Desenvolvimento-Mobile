import React from "react";
import { Text, TextInput, View } from "react-native";
import estilos from "./assets/estilos";

function verificaTexto(tipo, texto) {
  switch (tipo) {
    case "nome":
      return texto.toUpperCase().slice(0, 30);

    case "idade":
      return texto.replace(/[^0-9]/g, "").slice(0, 2);

    case "observacao":
      return texto.slice(0, 200);

    case "senha":
      return texto.slice(0, 5);

    default:
      return texto;
  }
}

function CxTx({
  placeholder,
  tipo,
  valor,
  setValor,
  ...props
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={estilos.input}
      value={valor}
      onChangeText={(texto) => setValor(verificaTexto(tipo, texto))}
      {...props}
    />
  );
}

export default function App() {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [cpf] = React.useState("123.456.789-00");
  const [email, setEmail] = React.useState("");
  const [celular, setCelular] = React.useState("");
  const [observacao, setObservacao] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const campos = [
    {
      placeholder: "Digite seu nome",
      tipo: "nome",
      valor: nome,
      setValor: setNome,
      maxLength: 30,
      autoCapitalize: "characters",
    },
    {
      placeholder: "Qual sua idade?",
      tipo: "idade",
      valor: idade,
      setValor: setIdade,
      keyboardType: "numeric",
      maxLength: 2,
    },
    {
      placeholder: "CPF: 999.999.999-99",
      tipo: "cpf",
      valor: cpf,
      editable: false,
    },
    {
      placeholder: "Digite seu email",
      tipo: "email",
      valor: email,
      setValor: setEmail,
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
    {
      placeholder: "Digite seu número de celular",
      tipo: "celular",
      valor: celular,
      setValor: setCelular,
      keyboardType: "phone-pad",
    },
    {
      placeholder: "Observações",
      tipo: "observacao",
      valor: observacao,
      setValor: setObservacao,
      multiline: true,
      maxLength: 200,
    },
    {
      placeholder: "Digite sua senha",
      tipo: "senha",
      valor: senha,
      setValor: setSenha,
      secureTextEntry: true,
      maxLength: 5,
    },
  ];

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.titulo}>Aula 06 - Desafio 02</Text>
        <Text style={estilos.texto}>Componente InputText</Text>
      </View>

      <View style={estilos.formulario}>
        <Text>Verifique o Formulário abaixo:</Text>

        <View style={estilos.inputs}>
          {campos.map((campo, index) => (
            <CxTx
              key={index}
              placeholder={campo.placeholder}
              tipo={campo.tipo}
              valor={campo.valor}
              setValor={campo.setValor}
              keyboardType={campo.keyboardType}
              editable={campo.editable}
              secureTextEntry={campo.secureTextEntry}
              multiline={campo.multiline}
              maxLength={campo.maxLength}
              autoCapitalize={campo.autoCapitalize}
            />
          ))}
        </View>
      </View>
    </View>
  );
}