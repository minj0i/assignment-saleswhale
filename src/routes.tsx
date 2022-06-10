import {Routes, Route} from 'react-router-dom';
import { TeamsLayout } from './layout/TeamsLayout';
import { Teams } from './pages/teams';

export default function BaseRouter() {
  return (
    <Routes>
        <Route path="/" element ={<TeamsLayout />} >
          <Route  path="/" element ={<Teams />} />
        </Route>
    </Routes>
  )
}