import './App.css';
import Post from './components/Post';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [marsData, setMarsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMarsData = async () => {
      let response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=SWe3EjkM9iflc5FK8yNlaIXmRk5UundUhojsyYGp')
      setMarsData(response.data.photos)
      console.log(response.data.photos)
      if (response.data) {
        setLoading(true)
      }
    }
    fetchMarsData()
  }, [])

  return (
    <>
      {
        loading === true ? marsData.map((data, index) => {
          return (
            <>
            <div className='post' key={index}> 
              <Post data={data} />
            </div>
            <br />
            </>
          )
        }) : (
          <p>Loading...</p>
        )
      }
    </>
  );
}

export default App;
