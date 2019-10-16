import React from 'react';

const PopUp = (props)=>{
    let {photo,closePopup}=props;
    return (
        <div className='popup'>
                <button onClick={closePopup} className="close_btn">X</button>
                <div className='popup_inner'>
                    <div className="popup_user">
                      <img src={photo.user.profile_image.small} alt="user profile" />
                      <div className="user_des">
                            <span className='user_fullname'><b>{photo.user.name}</b></span>
                            <span className='user_name'>@{photo.user.username}</span>
                      </div>
                    </div>
                    <div className="pop_up_image">
                        {photo ? <img src={photo.urls.small} alt="" /> : null }
                    </div>
                    <a className="download" target='_blank'  download href={photo.links.download}  >Download</a>
                </div>
              </div>
    )
}


export default PopUp;