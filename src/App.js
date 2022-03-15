import React from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css';
import ChangeColor from './components/ChangeColor';

function App() {

  // const account = useSelector((state) => state.account);
  // const dispatch = useDispatch();

  // const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);


  return (
    <div className="App">
     {/* <h1>{account}</h1>
     <button onClick={() => depositMoney(1000)}> Deposit </button>
     <button onClick={() => withdrawMoney(1000)}> Withdraw </button> */}
     <Profile/>
     <Login/>
     <ChangeColor/>
    </div>
  );
}

export default App;
