import { useEffect } from "react";
import Search from './components/Search'
import TableBlock from './components/TableBlock';
import Pagination from './components/Pagination'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { setPageNumber } from "./redux/slices/filterSlice";
import { fetchPosts } from "./redux/slices/postSlice";

function App() {
  const dispatch = useDispatch()
  const { pageNumber, searchValue, sortType, order } = useSelector((state: RootState) => state.filter)
  const onChangePagination = (ev: number) => {
    dispatch(setPageNumber(ev))
  }
  const getPosts = async () => {
    const sort = sortType.element;
    const orderBy = order ? 'asc' : 'desc';
    const search = searchValue ? `&q=${searchValue}` : '';
    //@ts-ignore
    dispatch(fetchPosts({
      sort,
      orderBy,
      search,
      pageNumber,
    }))
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPosts()
  }, [searchValue, pageNumber, sortType])

  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Search />
          <TableBlock />
          <Pagination value={pageNumber} onChangePagination={onChangePagination} />
        </div>
      </div>
    </div>
  );
}

export default App;
