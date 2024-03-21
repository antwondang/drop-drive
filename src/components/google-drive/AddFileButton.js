import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { storage } from '../../firebase'


export default function AddFileButton({ currentFolder }) {
    const { currentUser } = useAuth()

    function handleUpload(e) {
        const file = e.target.files[0]
        if (currentFolder == null || file == null) return

        const filePath = 
        currentFolder.path.length > 0 
            ? `${currentFolder.path.join('/')}/${file.name}` 
            : file.name

        const uploadTask = storage
            .ref(`/files/${currentUser.uid}/${filePath}`)
            .put(file)
    }



  return (
    <label className='btn btn-outline-success btn-sm m-0 mr-2'>
        <FontAwesomeIcon icon={faFileUpload} />
        <input 
            type='file' 
            onChange={handleUpload} 
            style={{ opacity: 0, position: 'absolute', left: '-9999px'}} />
    </label>
  )
}
