import { useState, useEffect } from '@wordpress/element';
import { useContext } from 'react';
import { dataContext } from './datacontext';

const ArMediaUploader = ({name}) => {
  
  const [dashOptions, setDashoptions] = useContext(dataContext)
  const [selectedAttachment, setSelectedAttachment] = useState(dashOptions[name]);

  useEffect(() => {
    setSelectedAttachment(dashOptions[name]);
  })
  //----------- Delete 
  const deleteMedia = (e) => {
      e.preventDefault()
      setDashoptions ({
        ...dashOptions,
        [name] : ""
    }),
    setSelectedAttachment("");
  }

  //------ Open media Library -
  const openMediaUploader = () => {
      const mediaUploader = wp.media({
        frame: 'select',
        title: 'Upload or Select Media',
        button: { text: 'Use this media' }
      })
    
      mediaUploader.on('select', () => {
        const attachment = mediaUploader.state().get('selection').first().toJSON()
        // TODO: whatever you want with the media
       
        setDashoptions ({
          ...dashOptions,
          [name] : [ attachment.id, attachment.sizes.thumbnail.url ]
      }),
        setSelectedAttachment(
          attachment.sizes.thumbnail.url
          );
      })
    
    

    mediaUploader.open()
    
  }


  return  <>
    { selectedAttachment != "" && <img src={ Array.isArray(selectedAttachment) ? selectedAttachment[1] : selectedAttachment } alt="Selected Attachment" /> }
    <div>
      <button onClick={openMediaUploader} className='button primary'>Select Image</button>
      { selectedAttachment != "" &&  <button className='button primary' onClick={deleteMedia}>Delete</button> }
    </div>
    
  </>

 
}

export default ArMediaUploader

