import React, { useState } from 'react'; // Make sure to import React
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import preto from '../assets/preto.jpg';
import normal from '../assets/normal.jpg';

const Questao1 = ({ nome, cidade, curso, semestre }) => {
  const [imgVersion, setImgVersion] = useState(1);
  const [imgSRC, setImgSRC] = useState(normal);

  const trocaURL = () => {
    if (imgVersion === 1) {
      setImgSRC(preto);
      setImgVersion(2);
    } else if (imgVersion === 2) {
      setImgSRC(normal);
      setImgVersion(1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Use the Image component */}
      <Image source={imgSRC} accessibilityLabel="Homem-Aranha" style={{ maxWidth: 300, height: 300 }} />
      <Text>
        Oi, meu nome é <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{nome}</Text>!
      </Text>
      <Text>Eu venho da cidade de {cidade}.</Text>
      <Text>
        Estou cursando{' '}
        <Text style={{ fontWeight: 'bold', color: 'darkred' }}>{curso}</Text> e estou no semestre de número {semestre}.
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Clica em mim" onPress={trocaURL} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0C0C0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Questao1;