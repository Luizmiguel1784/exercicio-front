import { useState } from "react"

export default function Timer() {
    
    const [Time,setTime] = useState(0);

    return (
        <Container>
            <h2>Tempo: {Time}</h2>

            <Button onClick ={()=> setTime(Time+1)}>
                Aumentar tempo
            </Button>


        </Container>

    )

}