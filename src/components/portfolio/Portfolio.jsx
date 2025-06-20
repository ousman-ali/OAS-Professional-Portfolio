import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { 
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  // designPortfolio,
  // contentPortfolio
} from "../../data"
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
    // {
    //   id: "design",
    //   title: "Design"
    // },
    // {
    //   id: "content",
    //   title: "Branding"
    // },
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
      default:
        setData(featuredPortfolio);
    }
}, [selected])

const handleClick =(project)=> {
    navigate(`/project/${project.id}`, { state: {project} });
}

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title} 
          active={selected === item.id }
          setSelected={setSelected}
          id={item.id}
          key={item.id}
          />
        ))}
      </ul>
        <div className="container" >
          {data.map((d)=>(
            <div className="item" key={d.id} onClick={()=>handleClick(d)} >
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}
