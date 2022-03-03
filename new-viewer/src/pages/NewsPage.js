import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

// 메인 페이지를 대체하는 사실상의 메인 페이지...

export default function NewsPage({match}){
    const category = match.params.category || 'all';
    // 지정된 카테고리가 없을시 전체보기를 기본값으로 설정

    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    )
}