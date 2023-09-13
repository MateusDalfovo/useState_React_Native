import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [Nome, setNome] = useState('');
  const [Usuario, setUsuario] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [ConfirmarEmail, setConfirmarEmail] = useState('');
  const [Genero, setGenero] = useState('');
  const [data, setData] = useState('');
  const [CPF, setCPF] = useState('');
  const [Idioma, setIdioma] = useState('');

  return (

    <ScrollView>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setGenero}
          placeholder="Gênero"
        />

        <TextInput
          style={styles.input}
          onChangeText={setData}
          placeholder="Data Nascimento"
        />

        <TextInput
          style={styles.input}
          onChangeText={setUsuario}
          placeholder="Usuário"
        />

        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          onChangeText={setConfirmarEmail}
          placeholder="Confirmar Email"
          secureTextEntry={false}
        />

        <TextInput
          style={styles.input}
          onChangeText={setCPF}
          placeholder="CPF"
          secureTextEntry={false}
        />

        <TextInput
          style={styles.input}
          onChangeText={setIdioma}
          placeholder="Currículo Idioma"
          secureTextEntry={false}
        />

        <TouchableOpacity style={styles.botao} onPress={() => Nome}>
        
          
          <Text style={styles.textBotao} onPress={() => Nome}>Cadastrar</Text>
        </TouchableOpacity>

        
      </View >
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    marginTop: '15%',
    padding: '4%',
    width: 350,
    backgroundColor: '#ebebeb',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },

  botao: {
    marginTop: 50,
    marginBottom: 175,
    width: 210,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
  },

  textBotao: {
    fontSize: 15,
    color: 'white',
  },
});
