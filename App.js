import React , {useState} from 'react';
import styled from 'styled-components/native';


const Pagina = styled.View`
`;
const AreaDeTexto = styled.View`

  background-color:#ddd;
  height: 500px;
`;
const AreaDoBotao = styled.View`

  background-color:#eee;
  height: 500px;
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
  return(
      <Pagina>
          <AreaDeTexto>
            <Frase>...</Frase>
          </AreaDeTexto>

          <AreaDoBotao>

            <MudarFraseBTN>

              <TextButton>
                Clique Aqui
              </TextButton>

            </MudarFraseBTN>

          </AreaDoBotao>

      </Pagina>
    );
}
