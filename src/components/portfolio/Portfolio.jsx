import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { 
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from "../../data"

export default function Portfolio({ clicked, setClicked}) {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "content",
      title: "Branding"
    },
  ]

  useEffect(()=>{
    switch(selected){
      case "featured":
      setData(featuredPortfolio);
      break;
      case "web":
      setData(webPortfolio);
      break;
      case "mobile":
      setData(mobilePortfolio);
      break;
      case "design":
      setData(designPortfolio);
      break;
      case "content":
      setData(contentPortfolio);
      break;
      default:
        setData(featuredPortfolio);
    }
}, [selected])

// useEffect(()=>{
//     getProject () {
//       try {
//         const res = 
//       } catch (error) {
//         console.log(error)
//       }
//     }
// }, [clicked])

console.log(data);
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title} 
          active={selected === item.id }
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      
        <div className="container">
          {data.map((d)=>(
            <div className="item" onClick={()=>setClicked(true)}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}
