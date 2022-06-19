import React from "React";
import VideoListItem from "./video_list_Item";


const Videolist = (props) =>{
    // console.log(props)
    const videolist = props.videos.map((video)=>
    <VideoListItem 
    onVideoSelect={props.onVideoSelect}
    key={video.etag} 
    video={video}/>
    )
    return (
    <ul className="col-md-4 list-group">
     {videolist}
    </ul>
    )
}
export default Videolist