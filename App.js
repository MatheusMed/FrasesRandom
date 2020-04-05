import React , {useState} from 'react';
import styled from 'styled-components/native';


const Pagina = styled.View`
flex:1;
`;


const AreaDeTexto = styled.View`
  background-color:#ddd;
  height: 500px;
  margin-bottom:30px;
`;

const MudarFraseBTN = styled.TouchableOpacity`
  background-color:green;
  height: 60px;
  border:0.5px solid #000
  align-items: center;
  justify-content:center;
  border-radius: 15px;
`;
const TextButton = styled.Text`
  font-size:20px;
`;

const Frase = styled.Text`
  color:#000;
  font-size:20px;
`;

export default () => {
  const [frase, setFrase]= useState('Ela é como um livro misterioso que muitos leem mas poucos conseguem entender o seu sentido.')
  return(
      <Pagina>
          <AreaDeTexto>
            <Frase>{frase}</Frase>
          </AreaDeTexto>

            <MudarFraseBTN>

              <TextButton>
                Mudar Frase
              </TextButton>

            </MudarFraseBTN>


      </Pagina>
    );
}
