import './App.css';
import Profile from './profile/component';

function App() {

      const fullename ='LYES'
      const bio = 'BIO'
      const profession = 'DEVELOPPEUR'
      const sayhello = ()=>{
        alert(fullename)
      }
  return (
      <>
        <Profile  
                  sayhello={sayhello}
                 fullename={fullename}
                 bio={bio}       
                 profession={profession}/>
      </>

  );
} 

export default App;
