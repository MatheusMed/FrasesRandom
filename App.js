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
const [a]= useState('Ela é como um livro misterioso que muitos leem mas poucos conseguem entender o seu sentido.')
const [b]= useState('A verdadeira alegria não é aquela que seu rosto mostra, mas sim a que vive no seu coração e faz você contagiar todo mundo à sua volta.')
const [c]= useState('Apaga com um sorriso toda a tristeza que te invade a alma. Assim não darás aos que te odeiam a alegria de te verem chorando, mas darás aos que te amam a alegria de te verem sorrindo.')
const [d]= useState('Beleza sem conteúdo é como uma caixa de joias vazia, entusiasma para logo depois desanimar profundamente.')




  return(
      <Pagina>
          <AreaDeTexto>
            <Frase>{a}</Frase>
          </AreaDeTexto>

            <MudarFraseBTN>

              <TextButton>
                Mudar Frase
              </TextButton>

            </MudarFraseBTN>


      </Pagina>
    );
}
