import './App.css'
import { BlockInfo } from './components/BlockInfo'
import { Links } from './components/Links'
import { NewsBlock } from './components/NewsBlock'
import { Promo } from './components/Promo'
import { Quotes } from './components/Quotes'
import { SearchForm } from './components/SearchForm'
import { ShowInfo } from './components/ShowInfo'
import { TopLinks } from './components/TopLinks'
import { IMockData } from './components/Type'

const mockData: IMockData = {
  items: [
    {
      id: 1,
      url: '#',
      title: 'Lorem one'
    },
    {
      id: 2,
      url: '#',
      title: 'Lorem two'
    }
  ],
  date: '11.11.2011',
  news: [
    {
      id: 1,
      url: '#',
      icon: 'icon.png',
      title: 'news one'
    }, 
    {
      id: 2,
      url: '#',
      icon: 'icon.png',
      title: 'news two'
    }
  ], 
  quotes: [
    {
      id: 1,
      name: 'USD',
      price: 67.4,
      correction: 0.19
    },
    {
      id: 1,
      name: 'USD',
      price: 67.4,
      correction: 0.19
    }
  ],
  services: [
    {
      id: 1,
      title: 'Video',
      url: '#' 
    },
    {
      id: 1,
      title: 'Images',
      url: '#' 
    }
  ],
  promo: [
    {
      id: 1,
      img: '#'
    },
    {
      id: 2,
      img: '#'
    }
  ]
}

function App() {

  return (
    <>
      <header>
        <TopLinks items={mockData.items} date={mockData.date}/>
        <NewsBlock items={mockData.news}/>
        <Quotes quotes={mockData.quotes}/>
        <Links items={mockData.services}/>
        <SearchForm/>
      </header> 
      <aside>
        <Promo img={mockData.promo[0].img}/> {/* передача изображения через useState */}
        <BlockInfo title={'Title'} >
          <ShowInfo before={'2:00'} text={'Наедине со всеми'} after={'Первый'}/>
        </BlockInfo> {/* таких блоков может быть много, с разным содержимым*/}
      </aside>
    </>
  )
}

export default App
