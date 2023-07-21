import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import TableColumn from '../TableColumn';
import TableTitle from '../TableTitle';

const TableBlock: FC = () => {
   const { items } = useSelector((state: RootState) => state.posts)
   const titles = [
      { id: 1, name: 'ID', element: 'id' },
      { id: 2, name: 'Заголовок', element: 'title' },
      { id: 3, name: 'Описание', element: 'body' }
   ]

   return (
      <div className='table-block'>
         <table>
            <tr>
               {titles.map(obj => (
                  <TableTitle {...obj} key={obj.id}/>
               ))}
            </tr>
            {items.map(obj => <TableColumn {...obj} key={obj.id} />)}
         </table>
      </div>
   )
}

export default TableBlock;