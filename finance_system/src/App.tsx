import { useState, useEffect } from 'react';
import * as C from './app.style';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories'; 
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';



const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list,currentMonth))
  }, [list, currentMonth]);


  return (
      <C.Container>

        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>

        <C.Body>
          
          {/*Area de informaçoes */}

          {/*Area de inserção */}

          {/*Tabelas de itens */}

        </C.Body>
      </C.Container>
  );
}

export default App;