import React, { Component } from 'react'
import NewsLetter from './NewsLetter';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
  }

constructor(){
  super();
this.state={
  articles:[],
  loading :false,
  page:1
}
}
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c96b4ccad3ce41daa3bc0200fe997278&page=1&pageSize=${this.props.pageSize}`;
  this.setState.loading={loading:true};
  let data = await fetch(url);
  let parsedData= await data.json();
  this.setState({articles:parsedData.articles,loading:false,
    totalResults:parsedData.totalResults
  })
}
prevClick= async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c96b4ccad3ce41daa3bc0200fe997278&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState.loading={loading:true};
  let data = await fetch(url);
  let parsedData= await data.json();
  this.setState({articles:parsedData.articles,loading:false,
    page:this.state.page-1})


}
nextClick=async()=>{
  if(!(this.state.page +1 > Math.ceil(this.state.totalResults/`${this.props.pageSize}`))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c96b4ccad3ce41daa3bc0200fe997278&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; this.setState.loading={loading:true};
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles,loading:false,
      page:this.state.page+1})
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <br/>
      <h2><u><b>Morning-task </b></u> :  Top headlines </h2>
      
      <br/>
      {this.state.loading && <Spinner/>}
      <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
       return  <div className="container col-md-4 " key={element.url} >
        <NewsLetter title={element.title?element.title.slice(0,30):""} description={element.description?element.description:""} imageUrl={element.urlToImage}   newsUrl={element.url} />
        </div>
      })}
      
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/`${this.props.pageSize}`)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>

        </div> 
        </div>
    )
  }
}

export default News