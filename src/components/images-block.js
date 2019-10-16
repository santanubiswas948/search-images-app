import React from 'react';
import Axios from 'axios';
import PopUp from './popup';
import Header from './header';
import {ACCESS_KEY} from '../config';
class ImagesBlock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            curr_page: 0,
            images: [],
            total_pages: 0,
            loading: false,
            keyValue: '',
            showPopup : false,
            popupPhoto: null
        }
    }
    fetchImages =(page,query)=>{
        const client_id = ACCESS_KEY;
        const per_page = 9;
        Axios.get('https://api.unsplash.com/search/photos',{
            params :{
                client_id : client_id,
                query: query,
                page : page,
                per_page: per_page
            }
        })
        .then(res=>{
            let images = [...this.state.images,...res.data.results];
            this.setState({
                curr_page:page,
                images:images,
                total_pages:res.data.total_pages,
                loading:false
            });
            this.props.onChangeBackgroundImage();
        })
        .catch(err=>console.log(err))
    }
    shouldComponentUpdate(nextProps,nextState){
    if(nextProps.changedFlag != this.props.changedFlag) return false;
        else return true;
    }
    ImagesGrid = ()=>{
        if(this.state.images.length == 0 && this.state.curr_page!=0 && !this.state.loading) return <div>No Images Found!!</div>;
        return this.state.images.map((photo,i)=>{
            return (
            <div key={i} className="grid__item card" onClick={()=>{this.togglePopUp(photo)}}>
                <div className="card__body">
                  <img src={photo.urls.small} alt="" />
                  <div className="card__footer">
                    <img src={photo.user.profile_image.small} alt="user profile" />
                    <span style={{color:'#fff'}}>&nbsp;&nbsp;Image&nbsp;by&nbsp;</span><span style={{color:'#00d1b6'}}>{photo.user.name}</span>
                  </div>
                </div>
                
            </div>
            )
        })
    }
    togglePopUp = (photo)=>{
        this.setState({popupPhoto:photo,showPopup:!this.state.showPopup});
    }
    onSearch = (e)=>{
        if(this.state.loading) return;
        let keyword= this.state.keyValue;
        this.setState({loading:true,images:[],total_pages: 0,curr_page:0},()=>{this.fetchImages(1,keyword);});
    }
    onSearchByTag = (e)=>{
        if(this.state.loading) return;
        let keyword = e.target.innerHTML;
        this.setState({loading:true,keyValue:keyword,images:[],total_pages: 0,curr_page:0},()=>{this.fetchImages(1,keyword);});
    }
    onKeyValueChange = (e)=>{
        this.setState({keyValue:e.target.value});
    }
    loadMore = (e)=>{
        let curr_page = this.state.curr_page;
        let keyword = this.state.keyValue;
        this.setState({loading:true},()=>{this.fetchImages(curr_page+1,keyword);});
    }
    render(){
        return ( 
                <div className="ImagesBlock"  >
                        <Header onSearchByTag={this.onSearchByTag} searchVal={this.state.keyValue} 
                        onKeyValueChange={this.onKeyValueChange} onSearch={this.onSearch}/>

                        {/*--------Item List----------*/}
                        <div className="grid">
                            {this.ImagesGrid()}
                        </div>

                        {/*----Loader start loading..--*/}
                        {(this.state.loading) ? <div className="loader"></div> : null }

                        {/*------------Load More part-------*/}
                        {(this.state.curr_page<this.state.total_pages && !this.state.loading) ?  <div className="loadmore">
                            <button onClick={this.loadMore}>Load more</button>
                        </div> : null
                        }

                        {/*-------------show PopUp-----*/}
                        {
                            this.state.showPopup ? <PopUp photo={this.state.popupPhoto} closePopup={()=>{this.setState({showPopup:!this.state.showPopup})}}/> : null
                        }
                </div>
             )
    }
}
export default ImagesBlock;