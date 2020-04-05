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
  font-size:30px;
  text-align:center;
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
