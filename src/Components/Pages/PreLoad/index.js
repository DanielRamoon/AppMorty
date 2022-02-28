import React from 'react';
import {ContainerBtn, Image1, Container} from './Style';
import {Button} from 'react-native';

export default function PreLoad({navigation}) {
  return (
    <Container>
      <Image1 source={require('../../Image/Img.jpg')} />
      <ContainerBtn>
        <Button
          title="Prosseguir ->"
          onPress={() => navigation.navigate('Home')}
          color="#191970"
        />
      </ContainerBtn>
    </Container>
  );
}
