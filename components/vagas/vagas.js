import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Vaga(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      
      <Text style={styles.texto}><b>Descrição da vaga:</b> {props.descricao}</Text>
      <Text style={styles.texto}><b>Salário:</b> {props.salario}</Text>
      <Text style={styles.texto}><b>Contato:</b> {props.contato}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 280,
    height: "auto",
    margin: 8,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#F0F8FF",
    borderRadius: 10
  },
  titulo: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  texto: {
    alignItems: 'left',
    marginTop: 10
  }
});