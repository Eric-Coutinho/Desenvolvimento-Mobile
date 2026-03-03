import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingHorizontal: 28,
          paddingTop: 40,
          paddingBottom: 20,
        }}
      >
        <View>
          <View style={{ alignItems: 'center', marginBottom: 18 }}>
            <Image
              source={require('./assets/images/img1.jpeg')}
              style={{ width: 180, height: 180, resizeMode: 'contain' }}
            />
          </View>

          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#111',
              marginBottom: 12,
            }}
          >
            Bem-vindo(a) ao aplicativo{'\n'}VilaRica!
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: '#7b7b7b',
              lineHeight: 20,
            }}
          >
            Os estudantes da Unicesumar desenvolveram um aplicativo de gestão de condominio, facilitando e organizando o seu dia a dia!
          </Text>

          <View
            style={{
              marginTop: 36,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 26,
                borderRadius: 24,
                borderWidth: 1.5,
                borderColor: '#8aa0d6',
                backgroundColor: '#fff',
                marginRight: 12,
              }}
            >
              <Text style={{ color: '#2f6bb0', fontWeight: '600' }}>
                Pular
              </Text>
            </View>

            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 28,
                borderRadius: 24,
                backgroundColor: '#2f6bb0',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '700' }}>
                Próximo
              </Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#2f6bb0',
                marginHorizontal: 4,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#d6dbe9',
                marginHorizontal: 4,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#d6dbe9',
                marginHorizontal: 4,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;