import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import { ThemeProvider } from './context/ThemeProvider';
import Home from './pages/home/home.page'
import Post from './pages/post/post.page'

import "./App.css"
import { Layout } from './components/Layout/Layout.template';
import { ThemeProvider as ThemeProvider_new } from './context/ThemeProvider_new';
import UpdatePost from './components/UpdatePost/UpdatePost.template';

const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <>  
        <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <ThemeProvider_new>
              <Layout>
                <Routes>
                
                  <Route path='/' element = {<Home/>}/>
                  <Route path="/posts">
                    <Route index element={<Home />} />
                    <Route path=":id" element={<Post />} />
                    <Route path=":id/update" element={<UpdatePost />} />
                  </Route>

                  
                </Routes>
              </Layout>
            </ThemeProvider_new>
          </ThemeProvider>

          </QueryClientProvider>
        </BrowserRouter>
    </>
  )
}

export default App
