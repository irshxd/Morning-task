import React, { Component } from 'react'


export class NewsLetter extends Component {

  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
                <div className='my-3'>
              <div className="card" style={{width: "20rem"}}>
                <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2018/01/BSE_Sensex_Budget_2017_red1-770x433.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}.</p>
                  <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read more</a>
                </div>
           </div>
           </div>
    )
  }
}
export default NewsLetter