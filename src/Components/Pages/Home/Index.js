import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  Txt,
  Txt2,
  TextInput,
  Container1,
  ContainerInput,
  ContainerFlat,
  ContainerFlatList,
  Image,
  TxtInfo,
  Touchh,
  TouchImag,
  Touchh2,
  Txxt,  
  View1,
  Icon1
} from './Style';
import {
  ActivityIndicator,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';



export default function Home({navigation}) {
  const [Carrying, SetCarrying] = useState(true);
  const [Loading, SetLoading] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(Loading); 

  const [page, Setpage] = useState(1)


  const loadMore = ()=>{
    console.log('page',page)
    
    const url = searchText? `https://rickandmortyapi.com/api/character?page=${page+1}&name=${searchText}`:`https://rickandmortyapi.com/api/character?page=${page+1}`; 
    Setpage(page+1);
      console.log('url', url)
      console.log('searchText',searchText)
      fetch(url)
  
        .then(resp => resp.json())
        .then(json => {
          console.log('loading', Loading)
          console.log('joson',json.results)
          
          let array =  [...Loading, ...json.results]
          SetLoading(array) 
        })
        .catch(() => alert('Erro ao carregar'))
        .finally(() => SetCarrying(false));
    
  }
  
  function navigateToDatail() {
    navigation.navigate('Detail');
  }


  
  // Consumindo API
  useEffect(() => {
    const url = searchText? `https://rickandmortyapi.com/api/character?page=${page}&name=${searchText}`:`https://rickandmortyapi.com/api/character?page=${page}`; 
    fetch(url)

      .then(resp => resp.json())
      .then(json => SetLoading(json.results))
      .catch(() => alert('Erro ao carregar'))
      .finally(() => SetCarrying(false));
  }, [searchText]);
  // filtragem Input
  

  useEffect(() => {
    if (searchText === '') {
      setList(Loading);
    } else {
      const url = searchText? `https://rickandmortyapi.com/api/character?page=${page}&name=${searchText}`:`https://rickandmortyapi.com/api/character?page=${page}`; 
      fetch(url)
  
        .then(resp => resp.json())
        .then(json => SetLoading(json.results))
        .catch(() => alert('Erro ao carregar'))
        .finally(() => SetCarrying(false));
      setList(
        Loading.filter(item =>{
          if(item.name.indexOf(searchText)> -1){
            return true;
          }else{
            return false;
          }
        })
      )
    }
  }, [searchText]);




  return (
    <Container>
      <Header>
        <Txt>Listagem</Txt>
        <Txt2>20 Personagens</Txt2>
      </Header>

      <ContainerInput>
        <TextInput
          placeholder="Busque por um personagem"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={t => setSearchText(t)}
        />
        <Icon1  >
        <Icon  name="search1" size={25} color="#ccc" />
        </Icon1>

      </ContainerInput>
      <Container1>
        {
          //Carregar entes de aparecer a lista

          Carrying ? (
            <ActivityIndicator color={'#000'} />
          ) : (
            <ContainerFlat>
              <FlatList
                data={Loading}
                keyExtractor={({id}, index) => id}
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
                renderItem={({item}) => (
                  <ContainerFlatList>
                    
                    <Touchh
                      onPress={() =>
                        navigation.navigate('Detail', {
                          data: item,
                        })
                      }>
                      <TouchImag>
                        <Image source={{uri: item.image}} />
                      </TouchImag>
                    </Touchh>

                    <Touchh2>
                    <Txxt><Icon name="hearto" size={18} color="#000" /></Txxt>
                    </Touchh2>
                     
                    <View1>
                      <TxtInfo>{item.name}</TxtInfo>
                      <TxtInfo>{item.species}</TxtInfo>
                      <TxtInfo>{item.origin.name}</TxtInfo>
                    </View1>
                  </ContainerFlatList>
                  
                )}
              />
            </ContainerFlat>
          )
        }
      </Container1>
    </Container>
  );
}

