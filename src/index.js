import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_bar';
import youtubeApiSearch from 'youtube-api-search';
import VideoList from './components/Video_list';
import VideoDetails from './components/video_details';
import _ from 'lodash';

// {
      // // import { Provider } from 'react-redux';
// // import { createStore, applyMiddleware } from 'redux';

// // import App from './components/app';
// // import reducers from './reducers';

// // const createStoreWithMiddleware = applyMiddleware()(createStore);

// // ReactDOM.render(
      // //   <Provider store={createStoreWithMiddleware(reducers)}>
      // //     <App />
      // //   </Provider>
      // //   , document.querySelector('.container'));
      
      // }
      
      
const API_KEY = 'AIzaSyBQIx6b7FXdaS2WPGsTJvQMWG3cyFQACRE'
      class App extends React.Component{

            state={videos: [],
            selectedVideo: null
            }
            constructor(props){
                  super(props)
             this.SearchChange('SurfBoard')
            }
        SearchChange(term){
            youtubeApiSearch({key:API_KEY,term:term},(data) => {
                  this.setState({
                        videos: data,
                        selectedVideo: data[0]
                  })
            })
        }

render(){
      const videoSearch = _.debounce(term =>this.SearchChange(term) , 300)
      if(!this.state.videos[0]){
            return <div>Loading</div>
      }
      else{
            return (
            <div>
                  <SearchBar onSearchChange={videoSearch}/> 
                  <VideoList onVideoSelect = {selectedVideo =>(this.setState({selectedVideo}))} videos={this.state.videos}/>
                  <VideoDetails videos={this.state.selectedVideo}/>
            </div> 
            );
                  }
      }
}

ReactDOM.render(<App/>,document.querySelector('.container'))