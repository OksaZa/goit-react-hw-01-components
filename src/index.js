import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(<Profile/>)
// import data from './data.json'
// const Head = ({clas, id}) => {
//   return <p className={clas} id={id}>
//     HEAD HEAD
//   </p>
// }

// const Card = () => {
//   return data.map(info => {
//     return (
//     <div key={info.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//       <img src="..." className="card-img-top" alt="..."/>
//       <div className="card-body">
//           <h5 className="card-title">Card title {info.percentage}</h5>
//         <Head clas='text-class' id='145'/>
//         <a href="http" className="btn btn-primary">{info.label}</a>
//       </div>
//     </div>
//     )
//   })
// }



// const p = <p class='text'>TEXT</p>
// const div = (
//   <div>
//     {p}
//   </div>)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
