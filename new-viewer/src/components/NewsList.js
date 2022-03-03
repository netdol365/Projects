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

export default function NewsList({category}){
    const [articles,setArticles] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);

        try{
            const query = category === 'all' ? '' : `&category=${category}`;        // 전체보기일 경우를 제외하고 쿼리를 추가
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1a76bbed90e44526bc279d6fc0048d4e`,);
                // 해당하는 카테고리를 쿼리에 추가하여 주소창에 추가
                setArticles(response.data.articles);
            }catch(e){
                console.log(e.message);
            }
            setLoading(false);
        };
        fetchData();
    },[category]);                  // category를 확인하며 변경될때 마다 반영

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