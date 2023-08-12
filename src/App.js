import { useEffect, useState } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
//import demoNewsArticles from './demonews.json' 
import NewsCards from './components/NewsCards/NewsCards';

const alankey = '1277661ff13af97d122f7c06c6a39edc2e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {

  const [newsArticles , setNewsArticles] = useState([])
  const [activeArticle,setActiveArticle] = useState(0)

  useEffect(()=>{
    alanBtn({
      key: alankey,
      onCommand:({command ,articles,number})=>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles.articles)
          setActiveArticle(0)
        }
        if(command === 'highlight'){
          setActiveArticle((prev)=>prev+1)
        }
        if(command === 'open'){
          window.open(articles[number-1].url,'_blank')
        }
      }

    })
  },[])

  return (
    <div className="App">
     {/* <Grow in>
     <Grid item xs={12} sm={6} md={4} lg={3} className='infoCard' >
      <img  src='https://static.vecteezy.com/system/resources/previews/012/117/231/original/voice-assistant-app-phone-in-hand-icon-vector.jpg' />
      </Grid>
      </Grow> */}
      <div className='logoContainer'>
       <img src="https://media.istockphoto.com/id/1398249534/vector/what-you-can-do-with-a-smart-speaker-01.jpg?s=612x612&w=0&k=20&c=lLN_G3JDuD-kx_PaV0Hwvlv53cTWD8OndAAkMA9fSRU=" className='alanLogo' alt="logo" />
      </div>
       <NewsCards articles = {newsArticles} activeArticle = {activeArticle}/>
    </div>
  );
}

export default App;
