import {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [category, setCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=01519d5dcfb64bbaa2a727e6c48f9d71`;
      const answer = await fetch(url);
      const news = await answer.json();

      saveNews(news.articles);
    }
    consultAPI();
  }, [category]);

  return (
    <>
    <Header
      title='News Search Engine'
    />

    <div className="container white">
      <Form
        setCategory={setCategory}
      />

      <List
        news={news}
      />
    </div>
    </>
  );
}

export default App;
