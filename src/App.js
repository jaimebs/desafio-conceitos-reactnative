import React, { useState, useEffect } from 'react';
import api from './services/api';

import { SafeAreaView, View, FlatList, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  async function getRepositories() {
    const response = await api.get('/repositories');
    setRepositories(response.data);
  }

  useEffect(() => {
    getRepositories();
  }, []);

  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={(respository) => respository.id}
          renderItem={({ item }) => (
            <View style={styles.repositoryContainer}>
              <Text style={styles.repository}>{item.title}</Text>

              <View style={styles.techsContainer}>
                {item.techs.map((tec) => (
                  <Text style={styles.tech} key={tec}>
                    {tec}
                  </Text>
                ))}
              </View>

              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                  testID={`repository-likes-1`}
                >
                  3 curtidas
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(1)}
                // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
                testID={`like-button-1`}
              >
                <Text style={styles.buttonText}>Curtir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  techsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: '#04d361',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
  },
});
