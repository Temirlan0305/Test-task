import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

type PaginationProps = {
   value: number;
   onChangePagination: (e: number) => void;
}

const Pagination: FC<PaginationProps> = ({ value, onChangePagination }) => {
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel="..."
         nextLabel="Далее"
         onPageChange={elem => { onChangePagination(elem.selected + 1) }}
         pageRangeDisplayed={4}
         pageCount={10}
         forcePage={value - 1}
         previousLabel="Назад"
      />
   );
};

export default Pagination;