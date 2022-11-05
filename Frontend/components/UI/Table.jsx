import React from 'react'
import AssetCard from './AssetCard'
import TableStyles from '../style/Table.module.css'
import { FetchData } from '../utils/REST';
export default function Table() {
  const [Asst,setAsst]=React.useState([]);
  var tab;
    async function getAsst()
    {
        try {
            const resu = await FetchData("/assets",false,null);
            setAsst(resu.data.data);
        } catch (error) {
            
        }
    }
    React.useEffect(() => {
        getAsst();
    }, [])
  
    tab=Asst.map((asst)=>{
        return <AssetCard key={asst._id} asst={asst} />
    })
    console.log(Asst);
  return (
    <div className={TableStyles.container}>
        {tab}
    </div>
  )
}
