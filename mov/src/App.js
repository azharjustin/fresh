
import './App.css';

function App() {
  const datas=[ {
    name:"azhar" ,
  profile:"https://a10.gaanacdn.com/gn_img/artists/a7LWBzWzXA/7LWBLgNKzX/size_xl_1631801811.webp"
  },
  {
    name:"azhar" ,
  profile:"https://a10.gaanacdn.com/gn_img/artists/a7LWBzWzXA/7LWBLgNKzX/size_xl_1631801811.webp"
  },
  {
    name:"azhar" ,
  profile:"https://a10.gaanacdn.com/gn_img/artists/a7LWBzWzXA/7LWBLgNKzX/size_xl_1631801811.webp"
  },
  ];
  return (
    <div className="App">
     {datas.map((dt)=> <Welcome  name={dt.name}profile={dt.profile}/>)}
      
    </div>
  );
}
function Welcome({name,profile}){
  // const name="azhar";
  return(
    <div className="welcome">
     <img className="profile" src={profile} alt="pic"/>
      <h1 >hello {name}</h1>
    </div>
  );
}
export default App;
// ?pdwdt5uhh
