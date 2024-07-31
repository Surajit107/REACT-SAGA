// App.tsx
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDataRequest } from './services/slices/slice';
import { AppDispatch, Data, RootState } from './types/types';

const App = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.productSlice);
  const [respData, setRespData] = useState<Array<Data>>([]);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    setRespData(data);
  }, [data]);

  return (
    <>
      <div className="App">
        {
          respData?.map((item, index) => (
            <ul key={index}>
              <li>{item?.message}</li>
            </ul>
          ))
        }
      </div>
    </>
  );
};

export default App;