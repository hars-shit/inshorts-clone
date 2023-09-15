import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getNews } from '../service/api'
import Article from './Article';

const Articles = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        dailyNews();
    },[])

    const dailyNews=async()=>{
        let response=await getNews();
        // console.log("data",response.data)
        setNews(response.data);
    }
  return (
    <Box>
        {
            news.map(article=>(
                <Article article={article}/>
            ))
        }

    </Box>
  )
}

export default Articles