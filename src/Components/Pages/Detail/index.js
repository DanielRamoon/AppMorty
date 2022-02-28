import React from 'react';
import { Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Txt1,
  Txt2,
  Txt3,
  Txt4,
  Txt5,
  Txt6,
  Txt7,
  Image,
  ContainerImg,
  ContainerTxt,
  Btn,
  BtnBack,
} from './Sttyle';

export default function Datail({route, navigation}) {
  const {data: item} = route.params;
  console.log(item);
  function navigateToHome() {
    navigation.goBack('Home');
  }
  return (
    <Container>
      
      <ContainerImg>
        <Image source={{uri: item.image}} />
      </ContainerImg>
      
      <Icon
        style={{left: '80%', top: 10}}
        name="hearto"
        size={25}
        color="#000"
      />
      
      <ContainerTxt>
        <BtnBack onPress={navigateToHome}>
          <Text>
            <Icon name="arrowleft" size={25} color="#000" />
          </Text>
        </BtnBack>

        <Txt1>{item.name}</Txt1>
        <Txt2>species:</Txt2>
        <Txt2> {item.species}</Txt2>
        <Txt3>Gernder:</Txt3>
        <Txt3>{item.gender}</Txt3>
        <Txt4>Location</Txt4>
        <Txt4>{item.location.name}</Txt4>
        <Txt5>Origin:</Txt5>
        <Txt5>{item.origin.name}</Txt5>
        <Txt6>Status:</Txt6>
        <Txt7>{item.status}</Txt7>
      </ContainerTxt>
      <Btn>
        <Button title="BUSCAR NO GOOGLE" color="#191970" />
      </Btn>
    </Container>
  );
}

