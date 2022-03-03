import styled,{css} from "styled-components";

const categories = [
    {
        name : 'all',
        text : '전체보기'
    },

    {
        name : 'business',
        text : '비즈니스'
    },

    {
        name : 'entertainment',
        text : '엔터테인먼트'
    },

    {
        name : 'health',
        text : '건강'
    },

    {
        name : 'science',
        text : '과학'
    },

    {
        name : 'sports',
        text : '스포츠'
    },

    {
        name : 'technology',
        text : '기술'
    }


];

const CategoriesBlock = styled.div`

    display : flex;
    padding : 1rem;
    width : 100%;
    marging : 0 auto;
    background : #FFDAB9;
    @media screen and (max-width : 700px){
        width : 100%;
        overflow-x : auto;
    }
`;

const Category = styled.div`
    font-size : 1.2rem;
    cursor : pointer;
    white-space : pre;
    text-decoration : none;
    color : inherit;
    padding-bottom : 0.25rem;
    background : #FFDAB9;
    text-aling : center;
    font-weight : bold;

    
    ${props => props.active && css`
        font-weight : 600;
        border-bottom: 2px solid #22b8cf;
        color : #22b8cf;
        & : hover{
            color : #495057;
        }
    `}

    & + & {
        margin-left : 2.4rem;
    }
    `;

    export default function Categories({onSelect,category}){
        return(
            <CategoriesBlock>
                {categories.map(c=>(
                    <Category key ={c.name}
                              active={category===c.name}
                              onClick={()=>onSelect(c.name)}>{c.text}</Category>
                ))}
            </CategoriesBlock>
        );
    };