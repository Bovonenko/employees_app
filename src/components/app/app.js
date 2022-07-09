// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployeesList from '../employees-list/employees-list';
// import EmployeesAddForm from '../employees-add-form/employees-add-form';

// import './app.css';

// function App() {
//     return(
//         <div className="app">
//             <AppInfo/>

//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>

//             <EmployeesList/>
//             <EmployeesAddForm/>
//         </div>
//     )
// }

// export default App;

import './app.css';

function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return(
        <div className="App">
            <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
            <WhoAmI name={() => {return 'Alex'}} surname="Sadzc" link="vk.com"/>
        </div>
    )
}

export default App;