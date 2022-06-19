import React from 'React';

const VideoDetails = (props) => {
// if(!props) {
//     console.log(props.state.id)
//     return <div>Loading</div>
// }
// else{
    const videoId = props.videos.id.videoId
    // console.log(videoId)
    const url = `http://www.youtube.com/embed/${videoId}`
    return(
    <div className='video-details col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='"embed-responsive-item' src={url}></iframe>
         </div>
         <div className='details'>
             <div>{props.videos.snippet.title}</div>
             <div>{props.videos.snippet.description}</div>
         </div>
    </div>
)
    // }
}

export default VideoDetails