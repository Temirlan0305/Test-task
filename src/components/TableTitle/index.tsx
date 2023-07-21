import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SortTypeState, { setSortType } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store';

interface TableTitleState {
   name: string
   element: string
}

const TableTitle: FC<TableTitleState> = ({ name, element }) => {
   const dispatch = useDispatch();
   const { sortType } = useSelector((state: RootState) => state.filter)
   const onClickTableTitle = (element: TableTitleState) => {
      dispatch(setSortType(element))
   }
   return (
      <th>
         <span onClick={() => onClickTableTitle({ name, element })}>
            <span>{name}</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
               <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
            </svg>
         </span>
      </th>
   )
}

export default TableTitle;