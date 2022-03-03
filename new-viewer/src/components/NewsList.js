import Newsitem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const NewsListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom : 3rem;
    width : 768px;
    margin 0 auto;
    margin-top: : 2rem;
    @media screen and (max-width : 78px){
        width : 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
`;

export default function NewsList(){
    const [articles,setArticles] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);

        try{
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=1a76bbed90e44526bc279d6fc0048d4e',);
                setArticles(response.data.articles);
            }catch(e){
                console.log(e.message);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    if(loading)                     // 로딩되는 중간에 사용자에게 가시화
    {
        return <NewsListBlock>Loading....</NewsListBlock>
    }

    if(!articles)                   // 기사값이 미설정시 반환
    {
        return null;
    }

    return(
       <NewsListBlock>
           {articles.map(articles=>(
               <Newsitem key={articles.url} article={articles}></Newsitem>
           ))}
           <hr></hr>
       </NewsListBlock>
    );
};