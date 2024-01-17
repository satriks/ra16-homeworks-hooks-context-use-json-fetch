

import './App.css'
import { useJsonFetch } from './HOC/useJsonFetch';



export function App() {
    const [data , loading, error] = useJsonFetch('http://localhost:7070/data');
    

    if (loading) return (<p>Загрузка</p>) 
    if (!loading && error) return (<div>{error}</div>)
    
    return (<div>{data}</div>)
  }


export default App
