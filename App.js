import React , {useState} from 'react';
import styled from 'styled-components/native';


const Pagina = styled.View`
flex:1;
background-color:#7C4DFF;
`;
const StatusBar = styled.StatusBar`

`;

const Title = styled.Text`
  color:#212121;
  font-size:40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  margin-top:40px;
`;

const AreaDeTexto = styled.View`
  background-color:#C5CAE9;
  height: 50%;
  margin-bottom:30px;
  border-radius: 10px;
`;

const MudarFraseBTN = styled.TouchableOpacity`
  background-color:#C5CAE9;
  height: 60px;
  border:0.5px solid #000
  align-items: center;
  justify-content:center;
  border-radius: 15px;
  margin-bottom: 10px;
`;
const TextButton = styled.Text`
  font-size:20px;
`;

const Frase = styled.Text`
  color:#212121;
  font-size:35px;
  text-align:center;
  padding:5px;
  margin:5px;
`;

export default () => {
const [frase,setFrase] = useState('')

function mudar(){
  let numRandm = Math.random();
  numRandm = Math.floor(numRandm*5);

  let frases = [];
  frases[0] = 'A felicida so e real quando compartilhada';
  frases[1] = 'O senhor é meu pastor e nada faltara';
  frases[2] = 'Amigo de todos, Amigo de ninguem';
  frases[3] ='A verdadeira alegria não é aquela que seu rosto mostra, mas sim a que vive no seu coração e faz você contagiar todo mundo à sua volta.'
  frases[4] = 'Apaga com um sorriso toda a tristeza que te invade a alma. Assim não darás aos que te odeiam a alegria de te verem chorando, mas darás aos que te amam a alegria de te verem sorrindo.'



  let fraseEscolhida = frases[numRandm];

    setFrase(fraseEscolhida);

  }



  return( 
      <Pagina>
        <Title>FRASES RANDOM</Title>
          <AreaDeTexto>
            <Frase>{frase}</Frase>
          </AreaDeTexto>

            <MudarFraseBTN onPress={mudar}>

              <TextButton>
                Mudar Frase
              </TextButton>

            </MudarFraseBTN>


      </Pagina>
    );
}
