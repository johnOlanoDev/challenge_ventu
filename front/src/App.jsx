import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import MainLayout from './layout/MainLayout'
import Receivables from './pages/receivables/Receivables'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="receivables" element={<Receivables />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App