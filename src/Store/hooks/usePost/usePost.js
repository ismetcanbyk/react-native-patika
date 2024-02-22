import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const usePost = () => {
    const [error, setError] = useState(null)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const postData = async (url, data) => {
        try {
            setLoading(true)
            const response = await axios.post(url, data)
            setLoading(false)
            setData(response.data)
        } catch (error) {
            console.log(error.data)
            setLoading(false)
            setError(error.data)
        } finally {
            setLoading(false);
        }
    }



    return { error, data, loading, postData }
}



export default usePost