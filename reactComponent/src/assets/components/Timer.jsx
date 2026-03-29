import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`

padding: 20px;
  text-align: center;

`;

const Button =styled.div`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;
export default function Timer() {
    
    const [Time,setTime] = useState(0);
    const [rodando, setRodando] = useState(false);

    useEffect(()=> {
    let interval;

    if(rodando){
    interval= setInterval(()=> {
    setTime((prev)=> prev+1)},1000);}

    return()=> clearInterval(interval);
    }
    ,[rodando])
    

    return (
        <Container>
            <h2>Tempo: {Time}</h2>

            <Button onClick ={()=> setRodando(true)}>
                Iniciar
            </Button>

        
            <Button onClick ={()=> setRodando(false)}>
                Pausar
            </Button>

            
            <Button onClick ={()=> {setRodando(false)
            setTime(0);
            }}>
                Resetar
            </Button>
        </Container>

    );


}