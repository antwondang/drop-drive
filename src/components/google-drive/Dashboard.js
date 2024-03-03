import React from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'

export default function Dashboard() {
    const { folder, childFolder } = useFolder()

  return (
    <>
    <Navbar/>
    <Container fluid>
        <AddFolderButton currentFolder={folder}/>
        {childFolder.length > 0 && (
            <div className="d-flex flex-wrap">
                {childFolder.map(folder => {
                    <div key={folder.id} style={{ maxWidth: '250px' }}
                    className="p-2">

                    <Folder folder={childFolder}/>
                    </div>
                })}
            </div>
        )}
    </Container>
  </>
  )
}
