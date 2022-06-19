import React from "React";

const VideoListItem = (props) => {
    const video = props.video.snippet.thumbnails.default.url;
    // console.log(video)
    // console.log(props.video)
    return(
        <li onClick={()=> props.onVideoSelect(props.video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={video}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                    </div>
                </div>
            </div>
        </li>
    )
}
export default VideoListItem