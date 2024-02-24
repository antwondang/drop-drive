import { useReducer } from "react"

function reducer() {

}

export function uesFolder(folderId = null, folder = null){
    const [state, dispatch] = useReducer(reducer, {
        folderId, 
        folder,
        childFolders: [],
        childFiles: []
    })
}