import './App.css'
// import { Counter } from './features/counter/Counter'
import { QueryClientProvider, QueryClient } from 'react-query'
import Layout from './Layouts/Layout';
import {Routes, Route} from 'react-router-dom'
import Login from './features/todo/pages/Login';
import Register from './features/todo/pages/Register';
import PageNotFound from './Layouts/PageNotFound';
import  TestingForm  from './features/todo/Components/TestingForm';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
   {/* <Counter /> */}
   <QueryClientProvider client={queryClient}>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<TestingForm />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </QueryClientProvider>
    </>
  )
}

export default App
