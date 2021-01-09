import { useState, useEffect } from "react"
import { projectStorage } from "../firebase/config"

const useStorage = (file) => {
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name)
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        })
    }, [file])

    return { url, error, progress }

}

export default useStorage;