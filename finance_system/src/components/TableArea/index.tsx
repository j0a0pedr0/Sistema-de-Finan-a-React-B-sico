import * as C from './styles';
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'




type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    console.log();
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((Item, index)=>(
                    <TableItem key={index} item={Item}></TableItem>

                ))}
            </tbody>
        </C.Table>
    );
}