import { useState } from "react";
import "./App.css";
import NewListData from "./components/NewListData";
import List from "./components/List";

import Pagination from "./components/Pagination";


const dummyList = [
  {
    id: 1,
    like: 3,
    dislike: 5,
    text: "This is an existing topic returned from the server (mocked)",
  },
];
function App() {
  const [list, setList] = useState(dummyList);
  const [page, setPage] = useState(1);
  // const [listData, setListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const addListHandler = (list) => {
    console.log(list.text);
    const newText = list.text;
    setList((prevList) => {
      const isFound = prevList.some((element) => {
        if (element.text === newText) {
          return true;
        }

        return false;
      });
      console.log(isFound);
      if (isFound) return [...prevList];
      else return [...prevList, list];
    });
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = list.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <NewListData onAddListData={addListHandler} />
      <List items={currentPosts} />
      <Pagination
                totalPosts= {list.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            
    </>
  );
}

export default App;
