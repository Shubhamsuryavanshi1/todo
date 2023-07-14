import ListForm from "./ListForm";


const NewListData = (props) => {
    const saveListDataHandler = enteredData =>{
        const listData = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onAddListData(listData);
    };
    return(
        <>
        <ListForm saveListData={saveListDataHandler}/>
        </>
    )
}
export default NewListData;