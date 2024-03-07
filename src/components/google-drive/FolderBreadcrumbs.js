import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { ROOT_FOLDER } from '../../hook/useFolder'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function FolderBreadcrumbs({ currentFolder }) {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER]
    if (currentFolder) path = [...path, currentFolder.path]
  return (
    <Breadcrumb 
        className="flex-grow-1"
        listProps={{ className: "bg-white p1-0 m-0" }}
    >
        {path.map((folder, index) => (
            <Breadcrumb.Item
            key={folder.id}
            linkAs={Link}
            linkProps={{
                to: `/folder/${folder.id}`,
            }}
            className="text-truncate d-inline-block"
            style={{ maxWidth: "150px" }}
        >
            { folder.name }
        </Breadcrumb.Item>
        ))}
        {currentFolder && (
            <Breadcrumb.Item 
            className="text-truncate d-inline-block"
            style={{ maxWidth: "200px"}}
            active
        >
            {currentFolder.name}
        </Breadcrumb.Item>
    )}
  </Breadcrumb>
  )
}
