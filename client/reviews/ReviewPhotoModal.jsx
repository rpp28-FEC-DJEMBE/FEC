import React, {useState} from 'react';

const ReviewPhotoModal = (props) => {
  const [show, setShow] = useState(false);

  let modal = (!show) ? null :
    <div className='review-modal' onClick={() => setShow(false)}>
      <img className='picture-modal' src={props.url} alt={props.id} onClick={e => e.stopPropagation()}/>
    </div>

  return (
    <li>
      <img src={props.url} alt={props.id} className='review-photo pointer' onClick={() => setShow(true)}/>
      {modal}
    </li>
  )

}

export default ReviewPhotoModal;