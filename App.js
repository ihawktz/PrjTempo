import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
    const [depois, setDepois] = useState("");
    const [atuais, setAtuais] = useState("");
    const [dados, setDados] = useState("");
    const [cidade, setCidade] = useState("");

    async function carregaDados(){
      const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description&key=d04c52a3&city_name=${cidade},SP`)
      setAtuais(response.data.forecast[0]);
      setDepois(response.data.forecast[1]);
      setDados(response.data)
    }

  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.titulo}> Previsão do Clima</Text>
      </View>
      <View>
          <Text style={styles.label}> Cidade: </Text>
          <TextInput placeholder= 'Cidade'
          style={styles.input}
          onChangeText = {(value) => setCidade(value)}
          />
          </View>
        <View style={styles.bloco}>
          <TouchableOpacity style={styles.botao} onPress={carregaDados}>
            <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>
    
    <View style={styles.bloco}>
        <Tempo atuais={atuais}
        depois={depois}
        dados={dados}/>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#01497c",
  },

  container: {
    flex: 1,
    paddingTop: '20%',
    backgroundColor: "#161a1d",
  },

  titulo: {
    fontSize: 30,
    marginTop: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },

  label: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },

  bloco: {
    marginTop: 30,
    alignItems: 'center',
    display: 'flex',
  },

  input: {
    borderBottomWidth: 2,
    borderColor: '#a4161a',
    width: '80%',
    marginLeft: '8%',
    marginTop: 20,
    fontSize: 20,
    color: '#fff'
  },

  botao: {
    width: '80%',
    backgroundColor: '#a4161a',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 35,
    borderRadius: 5,
  },

  textoBotao: {
    fontSize: 20,
    color: '#161a1d'
  }
});
