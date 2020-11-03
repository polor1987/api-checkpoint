import React,{useState,useEffect} from "react"
import axios from "axios"
import './App.css';
import {UserList} from "./UserList";

function App() {
  const [listOfUSer,setListOfUSer] = useState([])
  const FetchData = async () =>{
    const Api = "https://jsonplaceholder.typicode.com/users"
    const response = await axios.get(Api)
    setListOfUSer(response.data)
  }
  useEffect(()=>{
    FetchData()
  },[])
  return (
    <div className="App">
      <nav>USER-NAME</nav>
      <div className={"user-list"}>
      {listOfUSer.map((elem) => <UserList key={elem.id} email={elem.email} name={elem.name} phone={elem.phone} user={elem.username} />)}
      </div>
    </div>
  );
}

export default App;
