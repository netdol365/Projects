import Newsitem from "./NewsItem";
import styled from "styled-components";

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

const sampleArticle={
    title : 'TITLE',
    description : 'NewsLetters...',
    url : 'https://google.com',
    urlToImage : 'https://via.placeholder.com/160',         // 임시 이미지, 제목, 내용 설정
}

export default function NewsList(){
    return(
        <NewsListBlock>
            <Newsitem article={sampleArticle}></Newsitem>
            <Newsitem article={sampleArticle}></Newsitem>
            <Newsitem article={sampleArticle}></Newsitem>
            <Newsitem article={sampleArticle}></Newsitem>
            <Newsitem article={sampleArticle}></Newsitem>
        </NewsListBlock>
    );
};