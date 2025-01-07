```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>Home</div>
  );
}

function About(){
  const location = useLocation();
  //Force re-render
  //Other solutions are possible, such as using keys.
  console.log(location);
  return(
    <div>About {location.pathname}</div>
  );
}

export default App;
```