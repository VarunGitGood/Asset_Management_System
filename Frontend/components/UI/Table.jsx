import React from "react";
import AssetCard from "./AssetCard";
import TableStyles from "../style/Table.module.css";
import { useParams } from "react-router-dom";
import { FetchData } from "../utils/REST";
import SideBar from "./SideBar";

export default function Table() {
<<<<<<< HEAD
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
    }
    tab=Asst.map((asst)=>{
        return <AssetCard key={asst._id} asst={asst} />
    })
    console.log(Asst);
=======
  const { id } = useParams();
  const [Asst, setAsst] = React.useState([]);
  let tab;
  async function getAsst() {
    try {
      const resu = await FetchData(`/${id}`, false, null);
      console.log(resu.data.data);
      setAsst(resu.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  React.useEffect(() => {
    getAsst();
  }, []);

  tab = Asst.map((asset) => {
    return <AssetCard key={asset.asset_id} asset={asset} />;
  });

  console.log(Asst);
>>>>>>> bddac42f717f083f296570214db294aa8630758d
  return (
    <div className={TableStyles.layout}>
      <SideBar />
      <div className={TableStyles.container}>{tab}</div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> bddac42f717f083f296570214db294aa8630758d
