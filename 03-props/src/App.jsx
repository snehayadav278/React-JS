import Card from "./components/Card";

const App = () => { 
  return ( 
    <div className="parent"> 
      <Card user="Sneha" age={18} img='https://images.unsplash.com/photo-1786517899271-8d8443b07bcb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
      <Card user="Rahul" age={19} img = 'https://images.unsplash.com/photo-1776693836244-28ef222d8a98?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
      <Card user="Sarthak" age={18} img ='https://images.unsplash.com/photo-1786599141873-542e677c25c1?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
    </div> 
  ); 
}; 

export default App;
