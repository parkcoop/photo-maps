import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const sampleQuery = gql`
 query {
  links {
    postedBy {
      name
    }
  }
}
`;

// const DogComponent = graphql(dogQuery)(props => {
//   const { links } = props.data;
//   console.log('lol',links)
//   return (
//     <View>
//       {links.map((link)=>{
//         return <Text></Text>
//       })}
//     </View>
//   )
//   // if (error) {
//   //   return <Text>{error}</Text>;
//   // }
//   // if (dogs) {
//   //   return <Text>{dogs[0].name}</Text>;
//   // }

//   // return <Text>Loading...</Text>;
// });


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://eu1.prisma.sh/parker-cooper-88b08c/tutorial/tutorialdev',
    headers: {
      authorization: ''
    }
  }),
  cache: new InMemoryCache()
});



export default function App() {

  const [outputText, setOutputText] = useState('My name is Photo-Maps')
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>{outputText}</Text>
        {/* <DogComponent /> */}

        <Button title="who" onPress={()=> setOutputText('man o man')}></Button>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});
