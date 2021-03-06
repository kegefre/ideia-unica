import { useStat, useState } from 'react';

function Home() {
    return <div>
            <h2>Home</h2>
            <Contador />
        </div>
}

function Contador(){
    const[contador, setContador] = useState(3);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{ contador }</div>
            <button onClick={ adicionarContador }>Adicionar 1</button>
        </div>
    )
}

export default Home