import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Vaga from './components/vagas/vagas';

export default function App() {
  const [vagas] = useState([
    {
      titulo: "Dev. Pleno PHP",
      salario: "5.000",
      descricao: "será responsável por desenvolver implementar ferramentas internas externas. Criará sistemas para atender as necessidades do grupo Ter conhecimento em Desenvolvimento web ou programação PHP",
      contato: "php@vagala.com"
    },
    {
      titulo: "Desenvolvedor React Nat e JavaScript",
      salario: "6.000",
      descricao: "Auxiliar no desenvolvimento de produtos e serviços com objetivo de atender as demandas de nossos clientes com as melhores tecnologias web do mercado. Conhecimentos em JavaScript, em Git e GitHub e TypeScript. Ensino Superior em Ciências da Computação, Engenharia, Sistemas da Informação, Tecnologia da informação e áreas afins..",
      contato: "mrvaga@mrcia.com"
    },
    {
      titulo: "Desenvolvedor C - Hiring Urgently",
      salario: "12400,00",
      descricao: "Desenvolvedor C++ em multinacional Essa vaga é para profissional em busca de uma carreira em empresa de grande porte, com projetos de relevância internacional. Profissionais que busquem uma empresa com valores, rh estruturado e espaço para se desenvolver e ter contato com times internacionais ,com possibilidades de intercâmbio Experiência com C++.",
      contato: "vagagrab@grab.com"
    },
    {
      titulo: "Desenvolvedor .NET",
      salario: "4.500",
      descricao: "Atuar junto a uma equipe de desenvolvimento na plataforma .NET utilizando Metodologias Ágeis. Projetos novos e manutenção de Projetos existentes.Conhecimentos Necessários: POO. C# .NET e .NET CORE, HTML 5, CSS3, Razor MVC, EntityFrameWork e Core, Bootstrap, JQuery, JavaScript, EQL",
      contato: "ansatajob@ansata.com"
    },
    {
      titulo: "Programador web mobile",
      salario: "A combinar",
      descricao: "Para criação de aplicativos Android, Conhecimentos na plataforma Flutter e Linguagem Dart. Ingles: Fluente",
      contato: "jobsacls@acls.com"
    }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas de Emprego:</Text>
      <ScrollView>
        {vagas.map((vaga, index) => (
          <View key={index}>
            <Vaga 
              titulo={vaga.titulo} 
              salario={vaga.salario} 
              descricao={vaga.descricao} 
              contato={vaga.contato}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26ade4',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
