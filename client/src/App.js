// import { Box } from '@mui/material';
// import Headers from './components/headers/Headers';
// import Home from './components/home/Home';
// import DataProvider from './context/DataProvider';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import DetailView from './components/details/DetailsView';
// import Cart from "./components/cart/Cart";
// import PageNotFound from "./components/home/PageNotFound";

// function App() {


//   return (
//     <DataProvider>
//       <BrowserRouter>
//         <Headers />
//         <Box style={{ marginTop: 54 }}>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/product/:id' element={<DetailView />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='*' element={<PageNotFound />} />
//           </Routes>
//         </Box>
//       </BrowserRouter>
//     </DataProvider>
//   );
// }

// export default App;



import { Box } from '@mui/material';
import Headers from './components/headers/Headers';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/details/DetailsView';
import Cart from './components/cart/Cart';
import PageNotFound from './components/home/PageNotFound';
import ProductList from './components/home/ProductList';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Headers />
              <Box style={{ marginTop: 54 }}>
                <Home />
              </Box>
            </>
          }
          />
          <Route
            path="/products/category/:category"
            element={
              <>
                <Headers />
                <Box style={{ marginTop: 54 }}>
                  <ProductList />
                </Box>
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Headers />
                <Box style={{ marginTop: 54 }}>
                  <DetailView />
                </Box>
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Headers />
                <Box style={{ marginTop: 54 }}>
                  <Cart />
                </Box>
              </>
            }
          />
          <Route
            path="*"
          element={
              <Box style={{ marginTop: 54 }}>
                <PageNotFound />
              </Box>
            }
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
