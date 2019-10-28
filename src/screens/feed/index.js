import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Query } from 'react-apollo'

import gql from 'graphql-tag';

const FEED_QUERY = gql`
{
  feed {
    links {
      postedBy {
        name
      }
      createdAt
      url
      id
      description
      votes {
        user {
          name
        }
      }
    }
    count
  }
}
`

export default function Feed() {

    const [outputText, setOutputText] = useState('My name is Photo-Maps')
    return (
        <View style={styles.container}>
          <Text>{outputText}</Text>
          <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
              console.log('lol',data)
              if (loading) return <Text>Fetching</Text>
              if (error) return <Text>oops</Text>
  
              const linksToRender = data.feed.links 
  
              return (
                  <ScrollView>
                    {linksToRender.map((link, index) => (
                      <View key={link.id} style={styles.post_container}>
                        <Text>{link.postedBy.name}</Text>
                        <Text>{link.url}</Text>
                        <Text>{link.description}</Text>
                      </View>
                    ))}
                  </ScrollView>
                )
            }}
          </Query>
  
  
          <Button title="who" onPress={()=> setOutputText('man o man')}></Button>
        </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    post_container: {
      backgroundColor: 'red',
      width: 200,
      borderRadius: 100,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      margin: 5,
      padding: 10
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
  });
  