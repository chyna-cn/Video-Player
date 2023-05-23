import React, {useState} from "react";
import ReactPlayer from "react-player";
const Content = ()=>{
    const videos = {
        'deer' : 'https://player.vimeo.com/external/295060954.sd.mp4?s=8c2b5dae0366de4a7177958ef637be027ec19e6d&profile_id=164&oauth2_token_id=57447761',
        'snail' : 'https://player.vimeo.com/external/198536210.sd.mp4?s=866ab3100ef27bb2e7cc8ed2fe6fa6cbdbe23c43&profile_id=164&oauth2_token_id=57447761',
        'dog' : 'https://player.vimeo.com/external/542264912.sd.mp4?s=58c5edb9db43820f3a884742a010a2b92d590a7d&profile_id=164&oauth2_token_id=57447761',
        'spider' : 'https://player.vimeo.com/external/185191896.sd.mp4?s=5d5be9cde510811d773fd4d914b481681bd716ef&profile_id=164&oauth2_token_id=57447761'
    };
    const [video, setVideo]= useState(videos.spider);

    const select =(event)=>{
        const video=event.target.value;
        setVideo(video);
    }
    return(
        <div>
        
      <h1 className="text-white  text-center font-bold text-2xl mt-8 lg:text-4xl">
        Project 6: Video Player
      </h1>
    
      <div className="flex  justify-center items-center space-x-5 mt-10">
        <div className="space-x-1">
          <input type="radio" name="video" value={videos.deer} onChange={select}  />
          <label className="text-white ">deer</label>
        </div>

        <div className="space-x-1">
          <input type="radio" name="video" value={videos.snail} onChange={select} />
          <label className="text-white ">snail</label>
        </div>

        <div className="space-x-1">
          <input type="radio" name="video" value={videos.dog} onChange={select} />
          <label className="text-white ">dog</label>
        </div>

        <div className="space-x-1">
          <input type="radio" name="video" value={videos.spider} onChange={select} />
          <label className="text-white ">spider</label>
        </div>
      </div>

      <div className="mt-12 px-3 md:flex justify-center lg:mt-20">
        <ReactPlayer url={video} playing={true} controls={true}/>

      </div>
      </div>
    )
}

export default Content