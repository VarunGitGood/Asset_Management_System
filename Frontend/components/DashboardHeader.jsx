import React from 'react'
import { Search,AccountCircle,Settings} from '@mui/icons-material';
import HeaderStyles from './DashboardHeader.module.css';
export default function DashboardHeader() {
  return (
    <div>
        <div className={HeaderStyles.bar}>

          <div className={HeaderStyles.pro}>
            <Search/>
            <Settings/>
            <AccountCircle/>
          </div>
            
        </div>
    </div>
  )
}
