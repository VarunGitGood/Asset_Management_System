import React from 'react'
import AssetCard from './AssetCard'
import TableStyles from '../style/Table.module.css'
import { useParams, Link } from "react-router-dom";
import { FetchData } from '../utils/REST';
export default function Table() {
  const params=useParams();
  const id=params.id;
  const [Asst,setAsst]=React.useState([]);
  var tab;
    async function getAsst()
    {
        try {
            const resu = await FetchData(`/${id}`,false,null);
            setAsst(resu.data.data);
        } catch (error) {
            
        }
    }
    React.useEffect(() => {
        getAsst();
    }, [])
    
    if(id==="assets")
    {
        tab=Asst.map((asst)=>{
            return <AssetCard key={asst._id} asst={asst} />
        })
    }
    else if(id==="")
    {
      
    tab=Asst.map((asst)=>{
        return <AssetCard key={asst._id} asst={asst} />
    })
    console.log(Asst);
  return (
    <div className={TableStyles.container}>
        {tab}
    </div>
  )
}}