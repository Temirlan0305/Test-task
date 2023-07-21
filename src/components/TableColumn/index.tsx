import { FC } from 'react'


interface itemsState {
   id: number,
   title: string,
   body: string,
   userId: number
}

const TableColumn: FC<itemsState> = ({ title, body, id }) => {
   return (
      <>
         <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
         </tr>
      </>
   )
}

export default TableColumn