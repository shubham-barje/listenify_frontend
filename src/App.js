import './output.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home'
import { useCookies } from 'react-cookie';
import LoggedInHome from './routes/LoggedInHome';
import UploadAudiobook from './routes/UploadAudiobook';
import MyMusic from './routes/MyMusic';
import audiobookContext from './contexts/audiobookContext';
import { useState } from 'react';
import SearchPage from './routes/SearchPage';
import Library from './routes/Library';
import HeroSection from './routes/HeroSection';

{/* // if token is dose't exist means signup is not done by user so dirct to them at here */ }
function App() {
  const [currentAudiobook, setCurrentAudiobook] = useState(null);
  // we use token to redirect the old user and new user via cookie
  const [cookie, setCookie] = useCookies(["token"])
  const [soundPlayed, setSoundPlayed] = useState(null)
  // default music is off so its true
  const [isPaused, setIsPaused] = useState(true)
  return (

    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {/* we fetch currentaudiobook and setCurrentaudiobook from audiobookContext.Provide we wrap currentaudiobook and setCurrentaudiobook in audiobookContext.Provider beacuse when we want to move from mymusic to home we want to play audiobook so we use currentaudiobook and setCurrentaudiobook to play audiobook .so basically our audiobook is stop it play continously.also we can set or configure the current audiobook */}
        {cookie.token ? (
          <audiobookContext.Provider value={{
            currentAudiobook,
            setCurrentAudiobook,
            soundPlayed,
            setSoundPlayed,
            isPaused,
            setIsPaused
          }}>
            <Routes>
              <Route path='/' element={<HeroSection />} />
              <Route path='/home' element={<LoggedInHome />} />
              <Route path='/uploadAudiobook' element={<UploadAudiobook />} />
              <Route path='/myMusic' element={<MyMusic />} />
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/library' element={<Library/>} />
              <Route path='/*' element={<Navigate to="/home" />} />
            </Routes>
          </audiobookContext.Provider>
        ) : (
          // loged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />

          </Routes>
        )}

      </BrowserRouter>
    </div >

  );
}



export default App;
