import React, {useState} from 'react';

const ReviewPhotoModal = (props) => {
  const [show, setShow] = useState(false);

  let modal = (!show) ? null :
    <div className='review-modal' onClick={() => setShow(false)}>
      <img className='picture-modal' src={props.url} alt={null} onError={(e)=>{e.target.onerror = null; e.target.src=`https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`}}/>
    </div>

  return (
    <li>
      <img src={props.url} alt={null} className='review-photo pointer' onClick={() => setShow(true)} onError={(e)=>{e.target.onerror = null; e.target.src=`https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`}}/>
      {modal}
    </li>
  )

}

export default ReviewPhotoModal;