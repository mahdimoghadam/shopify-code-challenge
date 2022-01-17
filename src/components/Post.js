import React, {useState} from 'react'
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({data}) => {

    const [like, setLike] = useState(0)
    const [unLike, setUnLike] = useState(0)

    return (
        <>
            <img src={data.img_src} alt="Nasa Photo"/>
            <p><b>Full Name:</b> {data.camera.full_name}/ <b>Abbreviation:</b> {data.camera.name}</p>
            <div className='date'><b>Date:</b> {data.earth_date}</div>
            <div className='like'><b>{like}</b></div>
            <div className='unLike'><b>{unLike}</b></div>
            <FontAwesomeIcon icon={faHeart} color='red' size='2x' style={{left: "0px"}} onClick={() => {setLike(like+1)}}/>
            <FontAwesomeIcon icon={faHeartBroken} color='red'size='2x' style={{left: "63px"}} onClick={() => {setUnLike(unLike+1)}}/>
        </>
    )
}

export default Post