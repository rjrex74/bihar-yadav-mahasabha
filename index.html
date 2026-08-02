```react
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Shield, Users, MapPin, Bell, LogIn, 
  LogOut, PlusCircle, Trash2, Home, 
  Info, FileText, Menu, X, ChevronRight,
  MessageSquare, UserCircle, Settings, Send
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc } from 'firebase/firestore';

// ==========================================
// 1. FIREBASE CONFIGURATION
// ==========================================
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'mss-connect-app';

// ==========================================
// 2. ENTERPRISE DATA & CONSTANTS
// ==========================================
const CORE_COMMITTEE = [
  { id: 1, name: 'श्री आनंद नारायण', role: 'मुख्य संयोजक', desc: 'संगठनात्मक संरचना एवं विस्तार' },
  { id: 2, name: 'डॉ. विद्यासागर', role: 'मार्गदर्शक', desc: 'नीति निर्माण एवं दिशा-निर्देश' },
  { id: 3, name: 'श्री राकेश सिंह', role: 'महासचिव', desc: 'प्रशासनिक एवं प्रबंधकीय कार्य' },
  { id: 4, name: 'श्रीमती अनीता यादव', role: 'महिला प्रभाग प्रमुख', desc: 'महिला सशक्तिकरण एवं विकास' }
];

const OFFICE_ADDRESS = "यादव बैठकी ( MSS माधव शक्ति संगठन ): 📍 पटना , कुम्हरार , दाऊदबिगहा  (महावीर स्थान ) near Mahavir Asthan, Daud Bigha, Mahatma Gandhi Nagar, Kumhrar, Patna, Bihar 800026";

// ==========================================
// 3. MAIN APPLICATION ROUTER
// ==========================================
export default function App() {
  const [user, setUser] = useState(null);
  const [authRole, setAuthRole] = useState(null); // 'admin' or 'user'
  const [route, setRoute] = useState('landing'); // 'landing', 'login', 'app'
  const [appTab, setAppTab] = useState('feed'); // 'feed', 'committee', 'profile'
  const [isLoading, setIsLoading] = useState(true);

  // Authentication Initialization
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Auth Error:", error);
      }
    };
    initAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (role) => {
    setAuthRole(role);
    setRoute('app');
    setAppTab('feed');
  };

  const handleLogout = () => {
    setAuthRole(null);
    setRoute('landing');
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-50">
        <Shield className="w-12 h-12 text-orange-500 animate-pulse mb-4" />
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 animate-pulse w-1/2 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Route: App Shell (Authenticated)
  if (route === 'app' && authRole) {
    return (
      <AppShell 
        authRole={authRole} 
        handleLogout={handleLogout} 
        appTab={appTab} 
        setAppTab={setAppTab}
        user={user}
      />
    );
  }

  // Route: Login
  if (route === 'login') {
    return <LoginScreen setRoute={setRoute} handleLogin={handleLogin} />;
  }

  // Route: Landing (Default Public)
  return <LandingScreen setRoute={setRoute} />;
}

// ==========================================
// 4. AUTHENTICATED APP SHELL (NATIVE APP FEEL)
// ==========================================
const AppShell = ({ authRole, handleLogout, appTab, setAppTab, user }) => {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden text-slate-800 font-sans">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-slate-300 shadow-2xl z-20">
        <div className="p-6 bg-slate-950 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">MSS Connect</h1>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Enterprise Portal</p>
          </div>
        </div>
        
        <div className="flex flex-col p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <UserCircle className="w-12 h-12 text-slate-400" />
            <div>
              <p className="font-bold text-white">{authRole === 'admin' ? 'कमेटी सदस्य (Admin)' : 'स्वयंसेवक (User)'}</p>
              <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> सक्रिय (Online)</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <SidebarItem icon={<MessageSquare />} label="सूचना पट्ट (Feed)" active={appTab === 'feed'} onClick={() => setAppTab('feed')} />
          <SidebarItem icon={<Users />} label="कोर समिति (Committee)" active={appTab === 'committee'} onClick={() => setAppTab('committee')} />
          <SidebarItem icon={<MapPin />} label="कार्यालय (Location)" active={appTab === 'location'} onClick={() => setAppTab('location')} />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 w-full p-3 rounded-xl transition-all font-medium">
            <LogOut className="w-5 h-5" /> सुरक्षित लॉग आउट
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* MOBILE TOP APP BAR */}
        <header className="md:hidden bg-slate-900 text-white h-16 flex items-center justify-between px-4 shadow-md z-20 shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-500" />
            <h1 className="font-bold text-lg">MSS Connect</h1>
          </div>
          <button onClick={handleLogout} className="p-2 text-slate-300 hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </header>

        {/* SCROLLABLE VIEW AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 bg-slate-50 relative z-10 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {appTab === 'feed' && <FeedView authRole={authRole} user={user} />}
            {appTab === 'committee' && <CommitteeView />}
            {appTab === 'location' && <LocationView />}
          </div>
        </main>

        {/* MOBILE BOTTOM NAVIGATION */}
        <nav className="md:hidden bg-white border-t border-slate-200 flex justify-around items-center h-16 absolute bottom-0 w-full z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-safe">
          <BottomNavItem icon={<MessageSquare />} label="Feed" active={appTab === 'feed'} onClick={() => setAppTab('feed')} />
          <BottomNavItem icon={<Users />} label="Committee" active={appTab === 'committee'} onClick={() => setAppTab('committee')} />
          <BottomNavItem icon={<MapPin />} label="Location" active={appTab === 'location'} onClick={() => setAppTab('location')} />
        </nav>

      </div>
    </div>
  );
};

// Nav Components
const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all font-medium ${
      active ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    {React.cloneElement(icon, { className: 'w-5 h-5' })}
    {label}
  </button>
);

const BottomNavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active ? 'text-orange-500' : 'text-slate-400'}`}>
    {React.cloneElement(icon, { className: `w-6 h-6 ${active ? 'animate-bounce-short' : ''}` })}
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

// ==========================================
// 5. APP VIEWS (Tabs inside the App Shell)
// ==========================================

// VIEW: FEED & ANNOUNCEMENTS (Firebase Connected)
const FeedView = ({ authRole, user }) => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    if (!user) return;
    const postsRef = collection(db, 'artifacts', appId, 'public', 'data', 'mss_posts');
    const q = query(postsRef);
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      fetchedPosts.sort((a, b) => b.timestamp - a.timestamp);
      setPosts(fetchedPosts);
    });
    return () => unsubscribe();
  }, [user]);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !user) return;
    setIsPosting(true);
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'mss_posts'), {
        title: title.trim(),
        content: content.trim(),
        author: 'कोर समिति (Core Committee)',
        timestamp: Date.now()
      });
      setTitle(''); setContent('');
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setIsPosting(false);
    }
  };

  const handleDelete = async (id) => {
    if (authRole !== 'admin') return;
    await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'mss_posts', id));
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">सूचना पट्ट</h2>
        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Live</span>
      </div>

      {authRole === 'admin' && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2"><PlusCircle className="w-4 h-4 text-orange-500"/> नया अपडेट पोस्ट करें</h3>
          <form onSubmit={handlePost} className="space-y-3">
            <input 
              type="text" placeholder="शीर्षक (Title)" value={title} onChange={e => setTitle(e.target.value)} required
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none font-bold"
            />
            <textarea 
              placeholder="विस्तृत जानकारी लिखें..." value={content} onChange={e => setContent(e.target.value)} required rows="3"
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none"
            />
            <div className="flex justify-end">
              <button disabled={isPosting} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2">
                {isPosting ? <span className="animate-spin"><PlusCircle className="w-4 h-4"/></span> : <Send className="w-4 h-4" />}
                प्रकाशित करें
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">कोई नई सूचना नहीं है।</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group">
              <div className="p-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700"><Shield className="w-5 h-5"/></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{post.author}</p>
                    <p className="text-xs text-slate-500">{new Date(post.timestamp).toLocaleString('hi-IN')}</p>
                  </div>
                </div>
                {authRole === 'admin' && (
                  <button onClick={() => handleDelete(post.id)} className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{post.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// VIEW: CORE COMMITTEE
const CommitteeView = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div>
      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">केंद्रीय कोर समिति</h2>
      <p className="text-sm text-slate-500 mt-1">संगठन के मार्गदर्शक एवं संचालक</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {CORE_COMMITTEE.map(member => (
        <div key={member.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-orange-100">
            {/* Using Initials as fallback if image fails, but using provided robust unsplash links */}
            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{member.name}</h4>
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">{member.role}</p>
            <p className="text-xs text-slate-500 mt-1">{member.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// VIEW: LOCATION
const LocationView = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div>
      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">केंद्रीय कार्यालय</h2>
      <p className="text-sm text-slate-500 mt-1">यादव बैठकी (MSS माधव शक्ति संगठन)</p>
    </div>
    
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
      <div className="aspect-video w-full bg-slate-200 relative">
        <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80" alt="Office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
          <div className="text-white">
            <h3 className="font-bold text-xl drop-shadow-md">MSS मुख्यालय</h3>
            <p className="text-sm opacity-90 drop-shadow-md">पटना, बिहार</p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 bg-white">
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 p-3 rounded-2xl shrink-0"><MapPin className="w-6 h-6 text-orange-600" /></div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">पूर्ण पता:</h4>
            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              📍 पटना, कुम्हरार, दाऊदबिगहा (महावीर स्थान)<br/>
              near Mahavir Asthan, Daud Bigha, Mahatma Gandhi Nagar, <br/>
              Kumhrar, Patna, Bihar 800026
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 6. LOGIN SCREEN
// ==========================================
const LoginScreen = ({ setRoute, handleLogin }) => {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');

  const submitAuth = (e) => {
    e.preventDefault();
    if (passkey === 'ADMIN123') handleLogin('admin');
    else if (passkey === 'USER123') handleLogin('user');
    else setError('अमान्य पासकी। कृपया पुनः प्रयास करें।');
  };

  return (
    <div className="h-screen w-full flex bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-900 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] bg-orange-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="m-auto w-full max-w-md px-4 relative z-10 animate-in slide-in-from-bottom-8 duration-500">
        <button onClick={() => setRoute('landing')} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm w-fit border border-slate-200 shadow-sm">
          <ChevronRight className="w-4 h-4 rotate-180" /> मुख्य पृष्ठ पर लौटें
        </button>

        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-orange-500/30 mb-5">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">एंटरप्राइज एक्सेस</h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">MSS Connect में सुरक्षित प्रवेश</p>
          </div>

          {error && <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold text-center">{error}</div>}

          <form onSubmit={submitAuth} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">एक्सेस पासकी (Passkey)</label>
              <input 
                type="password" value={passkey} onChange={e => {setPasskey(e.target.value); setError('');}} required placeholder="••••••••"
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-mono tracking-widest shadow-sm"
              />
            </div>
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" /> सिस्टम में प्रवेश करें
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">डेमो क्रेडेंशियल्स</p>
            <div className```react
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Shield, Users, MapPin, Bell, LogIn, 
  LogOut, PlusCircle, Trash2, Home, 
  Info, FileText, Menu, X, ChevronRight,
  MessageSquare, UserCircle, Settings, Send
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc } from 'firebase/firestore';

// ==========================================
// 1. FIREBASE CONFIGURATION
// ==========================================
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'mss-connect-app';

// ==========================================
// 2. ENTERPRISE DATA & CONSTANTS
// ==========================================
const CORE_COMMITTEE = [
  { id: 1, name: 'श्री आनंद नारायण', role: 'मुख्य संयोजक', desc: 'संगठनात्मक संरचना एवं विस्तार' },
  { id: 2, name: 'डॉ. विद्यासागर', role: 'मार्गदर्शक', desc: 'नीति निर्माण एवं दिशा-निर्देश' },
  { id: 3, name: 'श्री राकेश सिंह', role: 'महासचिव', desc: 'प्रशासनिक एवं प्रबंधकीय कार्य' },
  { id: 4, name: 'श्रीमती अनीता यादव', role: 'महिला प्रभाग प्रमुख', desc: 'महिला सशक्तिकरण एवं विकास' }
];

const OFFICE_ADDRESS = "यादव बैठकी ( MSS माधव शक्ति संगठन ): 📍 पटना , कुम्हरार , दाऊदबिगहा  (महावीर स्थान ) near Mahavir Asthan, Daud Bigha, Mahatma Gandhi Nagar, Kumhrar, Patna, Bihar 800026";

// ==========================================
// 3. MAIN APPLICATION ROUTER
// ==========================================
export default function App() {
  const [user, setUser] = useState(null);
  const [authRole, setAuthRole] = useState(null); // 'admin' or 'user'
  const [route, setRoute] = useState('landing'); // 'landing', 'login', 'app'
  const [appTab, setAppTab] = useState('feed'); // 'feed', 'committee', 'profile'
  const [isLoading, setIsLoading] = useState(true);

  // Authentication Initialization
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Auth Error:", error);
      }
    };
    initAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (role) => {
    setAuthRole(role);
    setRoute('app');
    setAppTab('feed');
  };

  const handleLogout = () => {
    setAuthRole(null);
    setRoute('landing');
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-50">
        <Shield className="w-12 h-12 text-orange-500 animate-pulse mb-4" />
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 animate-pulse w-1/2 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Route: App Shell (Authenticated)
  if (route === 'app' && authRole) {
    return (
      <AppShell 
        authRole={authRole} 
        handleLogout={handleLogout} 
        appTab={appTab} 
        setAppTab={setAppTab}
        user={user}
      />
    );
  }

  // Route: Login
  if (route === 'login') {
    return <LoginScreen setRoute={setRoute} handleLogin={handleLogin} />;
  }

  // Route: Landing (Default Public)
  return <LandingScreen setRoute={setRoute} />;
}

// ==========================================
// 4. AUTHENTICATED APP SHELL (NATIVE APP FEEL)
// ==========================================
const AppShell = ({ authRole, handleLogout, appTab, setAppTab, user }) => {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden text-slate-800 font-sans">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-slate-300 shadow-2xl z-20">
        <div className="p-6 bg-slate-950 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">MSS Connect</h1>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Enterprise Portal</p>
          </div>
        </div>
        
        <div className="flex flex-col p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <UserCircle className="w-12 h-12 text-slate-400" />
            <div>
              <p className="font-bold text-white">{authRole === 'admin' ? 'कमेटी सदस्य (Admin)' : 'स्वयंसेवक (User)'}</p>
              <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> सक्रिय (Online)</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <SidebarItem icon={<MessageSquare />} label="सूचना पट्ट (Feed)" active={appTab === 'feed'} onClick={() => setAppTab('feed')} />
          <SidebarItem icon={<Users />} label="कोर समिति (Committee)" active={appTab === 'committee'} onClick={() => setAppTab('committee')} />
          <SidebarItem icon={<MapPin />} label="कार्यालय (Location)" active={appTab === 'location'} onClick={() => setAppTab('location')} />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 w-full p-3 rounded-xl transition-all font-medium">
            <LogOut className="w-5 h-5" /> सुरक्षित लॉग आउट
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* MOBILE TOP APP BAR */}
        <header className="md:hidden bg-slate-900 text-white h-16 flex items-center justify-between px-4 shadow-md z-20 shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-500" />
            <h1 className="font-bold text-lg">MSS Connect</h1>
          </div>
          <button onClick={handleLogout} className="p-2 text-slate-300 hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </header>

        {/* SCROLLABLE VIEW AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 bg-slate-50 relative z-10 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {appTab === 'feed' && <FeedView authRole={authRole} user={user} />}
            {appTab === 'committee' && <CommitteeView />}
            {appTab === 'location' && <LocationView />}
          </div>
        </main>

        {/* MOBILE BOTTOM NAVIGATION */}
        <nav className="md:hidden bg-white border-t border-slate-200 flex justify-around items-center h-16 absolute bottom-0 w-full z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-safe">
          <BottomNavItem icon={<MessageSquare />} label="Feed" active={appTab === 'feed'} onClick={() => setAppTab('feed')} />
          <BottomNavItem icon={<Users />} label="Committee" active={appTab === 'committee'} onClick={() => setAppTab('committee')} />
          <BottomNavItem icon={<MapPin />} label="Location" active={appTab === 'location'} onClick={() => setAppTab('location')} />
        </nav>

      </div>
    </div>
  );
};

// Nav Components
const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all font-medium ${
      active ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    {React.cloneElement(icon, { className: 'w-5 h-5' })}
    {label}
  </button>
);

const BottomNavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active ? 'text-orange-500' : 'text-slate-400'}`}>
    {React.cloneElement(icon, { className: `w-6 h-6 ${active ? 'animate-bounce-short' : ''}` })}
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

// ==========================================
// 5. APP VIEWS (Tabs inside the App Shell)
// ==========================================

// VIEW: FEED & ANNOUNCEMENTS (Firebase Connected)
const FeedView = ({ authRole, user }) => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    if (!user) return;
    const postsRef = collection(db, 'artifacts', appId, 'public', 'data', 'mss_posts');
    const q = query(postsRef);
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      fetchedPosts.sort((a, b) => b.timestamp - a.timestamp);
      setPosts(fetchedPosts);
    });
    return () => unsubscribe();
  }, [user]);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !user) return;
    setIsPosting(true);
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'mss_posts'), {
        title: title.trim(),
        content: content.trim(),
        author: 'कोर समिति (Core Committee)',
        timestamp: Date.now()
      });
      setTitle(''); setContent('');
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setIsPosting(false);
    }
  };

  const handleDelete = async (id) => {
    if (authRole !== 'admin') return;
    await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'mss_posts', id));
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">सूचना पट्ट</h2>
        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Live</span>
      </div>

      {authRole === 'admin' && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2"><PlusCircle className="w-4 h-4 text-orange-500"/> नया अपडेट पोस्ट करें</h3>
          <form onSubmit={handlePost} className="space-y-3">
            <input 
              type="text" placeholder="शीर्षक (Title)" value={title} onChange={e => setTitle(e.target.value)} required
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none font-bold"
            />
            <textarea 
              placeholder="विस्तृत जानकारी लिखें..." value={content} onChange={e => setContent(e.target.value)} required rows="3"
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none"
            />
            <div className="flex justify-end">
              <button disabled={isPosting} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2">
                {isPosting ? <span className="animate-spin"><PlusCircle className="w-4 h-4"/></span> : <Send className="w-4 h-4" />}
                प्रकाशित करें
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">कोई नई सूचना नहीं है।</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group">
              <div className="p-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700"><Shield className="w-5 h-5"/></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{post.author}</p>
                    <p className="text-xs text-slate-500">{new Date(post.timestamp).toLocaleString('hi-IN')}</p>
                  </div>
                </div>
                {authRole === 'admin' && (
                  <button onClick={() => handleDelete(post.id)} className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{post.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// VIEW: CORE COMMITTEE
const CommitteeView = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div>
      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">केंद्रीय कोर समिति</h2>
      <p className="text-sm text-slate-500 mt-1">संगठन के मार्गदर्शक एवं संचालक</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {CORE_COMMITTEE.map(member => (
        <div key={member.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-orange-100">
            {/* Using Initials as fallback if image fails, but using provided robust unsplash links */}
            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{member.name}</h4>
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">{member.role}</p>
            <p className="text-xs text-slate-500 mt-1">{member.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// VIEW: LOCATION
const LocationView = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div>
      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">केंद्रीय कार्यालय</h2>
      <p className="text-sm text-slate-500 mt-1">यादव बैठकी (MSS माधव शक्ति संगठन)</p>
    </div>
    
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
      <div className="aspect-video w-full bg-slate-200 relative">
        <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80" alt="Office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
          <div className="text-white">
            <h3 className="font-bold text-xl drop-shadow-md">MSS मुख्यालय</h3>
            <p className="text-sm opacity-90 drop-shadow-md">पटना, बिहार</p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 bg-white">
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 p-3 rounded-2xl shrink-0"><MapPin className="w-6 h-6 text-orange-600" /></div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">पूर्ण पता:</h4>
            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              📍 पटना, कुम्हरार, दाऊदबिगहा (महावीर स्थान)<br/>
              near Mahavir Asthan, Daud Bigha, Mahatma Gandhi Nagar, <br/>
              Kumhrar, Patna, Bihar 800026
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 6. LOGIN SCREEN
// ==========================================
const LoginScreen = ({ setRoute, handleLogin }) => {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');

  const submitAuth = (e) => {
    e.preventDefault();
    if (passkey === 'ADMIN123') handleLogin('admin');
    else if (passkey === 'USER123') handleLogin('user');
    else setError('अमान्य पासकी। कृपया पुनः प्रयास करें।');
  };

  return (
    <div className="h-screen w-full flex bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-900 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] bg-orange-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="m-auto w-full max-w-md px-4 relative z-10 animate-in slide-in-from-bottom-8 duration-500">
        <button onClick={() => setRoute('landing')} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm w-fit border border-slate-200 shadow-sm">
          <ChevronRight className="w-4 h-4 rotate-180" /> मुख्य पृष्ठ पर लौटें
        </button>

        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-orange-500/30 mb-5">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">एंटरप्राइज एक्सेस</h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">MSS Connect में सुरक्षित प्रवेश</p>
          </div>

          {error && <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold text-center">{error}</div>}

          <form onSubmit={submitAuth} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">एक्सेस पासकी (Passkey)</label>
              <input 
                type="password" value={passkey} onChange={e => {setPasskey(e.target.value); setError('');}} required placeholder="••••••••"
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-mono tracking-widest shadow-sm"
              />
            </div>
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" /> सिस्टम में प्रवेश करें
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">डेमो क्रेडेंशियल्स</p>
            <div classNa                <div class="hidden lg:flex items-center space-x-5 xl:space-x-8 text-lg">
                    <a href="#home" class="text-gray-700 hover:text-saffron-600 font-medium transition">होम</a>
                    <a href="#about" class="text-gray-700 hover:text-saffron-600 font-medium transition">परिचय</a>
                    <a href="#leadership" class="text-gray-700 hover:text-saffron-600 font-medium transition">अध्यक्ष</a>
                    <a href="#news-events" class="text-gray-700 hover:text-saffron-600 font-medium transition">समाचार व कार्यक्रम</a>
                    <a href="#gallery" class="text-gray-700 hover:text-saffron-600 font-medium transition">गैलरी</a>
                    <a href="#tools" class="text-saffron-600 font-bold hover:text-saffron-700 transition flex items-center gap-1">✨ AI सहायता</a>
                    <a href="#contact" class="bg-saffron-500 text-white px-5 py-2 rounded-md hover:bg-saffron-600 font-medium shadow-md transition transform hover:-translate-y-0.5">संपर्क करें</a>
                </div>

                <!-- Mobile menu button -->
                <div class="lg:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-gray-700 hover:text-saffron-600 focus:outline-none p-2">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t absolute w-full left-0 shadow-lg">
            <div class="px-4 pt-2 pb-4 space-y-2 text-lg">
                <a href="#home" class="block px-3 py-2 text-gray-700 hover:text-saffron-600 font-medium hover:bg-gray-50 rounded-md">होम</a>
                <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-saffron-600 font-medium hover:bg-gray-50 rounded-md">परिचय</a>
                <a href="#leadership" class="block px-3 py-2 text-gray-700 hover:text-saffron-600 font-medium hover:bg-gray-50 rounded-md">अध्यक्ष</a>
                <a href="#objectives" class="block px-3 py-2 text-gray-700 hover:text-saffron-600 font-medium hover:bg-gray-50 rounded-md">हमारे लक्ष्य</a>
                <a href="#news-events" class="block px-3 py-2 text-gray-700 hover:text-saffron-600 font-medium hover:bg-gray-50 rounded-md">समाचार व कार्यक्रम</a>
                <a href="#gallery" class="block px-3 py-2 text-gray-700 hover:text-saffron-600 font-medium hover:bg-gray-50 rounded-md">गैलरी</a>
                <a href="#tools" class="block px-3 py-2 text-saffron-600 font-bold hover:bg-gray-50 rounded-md">✨ AI सहायता</a>
                <a href="#contact" class="block px-3 py-2 text-white bg-saffron-500 font-bold rounded-md text-center mt-4">संपर्क करें</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-pattern min-h-[500px] md:h-[600px] flex items-center py-12 md:py-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                अखिल बिहार यादव महासभा <br><span class="text-3xl sm:text-4xl md:text-5xl text-saffron-400 mt-2 block">में आपका हार्दिक स्वागत है</span>
            </h1>
            <p class="text-xl sm:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto font-medium drop-shadow-md leading-relaxed">
                प्रगति, एकता और सामाजिक न्याय के लिए समर्पित। आइए मिलकर एक सशक्त, शिक्षित और समृद्ध समाज का निर्माण करें।
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a href="#about" class="bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
                    अधिक जानें
                </a>
                <a href="#contact" class="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-navyBlue font-bold text-lg py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
                    हमसे जुड़ें
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/2 w-full">
                    <img src="https://images.unsplash.com/photo-1525026198548-4baa0d2c3d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="सामुदायिक बैठक" class="rounded-xl shadow-xl w-full border-b-4 border-indiaGreen object-cover h-[300px] md:h-[400px]">
                </div>
                <div class="lg:w-1/2 w-full">
                    <h4 class="text-saffron-600 font-bold text-lg tracking-wider mb-2">संगठन के बारे में</h4>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">यदुवंशियों के सर्वांगीण विकास का प्रतीक</h2>
                    <p class="text-gray-700 mb-5 text-lg leading-relaxed">
                        <strong>अखिल बिहार यादव महासभा</strong> बिहार भर में यादव समाज के समग्र विकास, उत्थान और एकता के लिए समर्पित एक प्रमुख सामाजिक संगठन है। भगवान श्रीकृष्ण की शिक्षाओं पर आधारित, हम धर्म, साहस और मानवता की सेवा में विश्वास करते हैं।
                    </p>
                    <p class="text-gray-700 mb-8 text-lg leading-relaxed">
                        हमारा उद्देश्य एक ऐसा समाज बनाना है जो शैक्षिक रूप से उन्नत, आर्थिक रूप से आत्मनिर्भर और सामाजिक रूप से जागरूक हो। हम हर पेशे और क्षेत्र में अपने युवाओं और परिवारों के सशक्तिकरण के लिए कार्य कर रहे हैं।
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex items-center text-gray-800 font-medium text-lg bg-gray-50 p-3 rounded-lg border-l-4 border-saffron-500">
                            <i class="fas fa-check-circle text-indiaGreen mr-3 text-xl"></i> सामाजिक समानता
                        </div>
                        <div class="flex items-center text-gray-800 font-medium text-lg bg-gray-50 p-3 rounded-lg border-l-4 border-saffron-500">
                            <i class="fas fa-check-circle text-indiaGreen mr-3 text-xl"></i> शैक्षिक सहयोग
                        </div>
                        <div class="flex items-center text-gray-800 font-medium text-lg bg-gray-50 p-3 rounded-lg border-l-4 border-saffron-500">
                            <i class="fas fa-check-circle text-indiaGreen mr-3 text-xl"></i> रोजगार सृजन
                        </div>
                        <div class="flex items-center text-gray-800 font-medium text-lg bg-gray-50 p-3 rounded-lg border-l-4 border-saffron-500">
                            <i class="fas fa-check-circle text-indiaGreen mr-3 text-xl"></i> सांस्कृतिक संरक्षण
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership Section -->
    <section id="leadership" class="py-16 md:py-24 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h4 class="text-indiaGreen font-bold text-lg tracking-wider mb-2">नेतृत्व</h4>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">अध्यक्ष महोदय का संदेश</h2>
                <div class="w-24 h-1 bg-saffron-500 mx-auto mt-4 rounded"></div>
            </div>

            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                <!-- Image -->
                <div class="md:w-2/5 bg-gray-200 relative h-64 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="श्री बाल्मीकि यादव" class="h-full w-full object-cover object-top">
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white">
                        <h3 class="text-2xl md:text-3xl font-bold">श्री बाल्मीकि यादव</h3>
                        <p class="text-lg md:text-xl text-saffron-400 font-medium mt-1">अध्यक्ष</p>
                    </div>
                </div>
                
                <!-- Message -->
                <div class="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                    <i class="fas fa-quote-left text-5xl md:text-6xl text-gray-100 absolute top-6 left-6 md:top-8 md:left-8 -z-10"></i>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">"संगठन और शिक्षा ही हमारी असली शक्ति है"</h3>
                    <p class="text-gray-700 mb-6 italic leading-relaxed text-lg">
                        "अखिल बिहार यादव महासभा में मैं आप सभी का स्वागत करता हूँ। हमारा प्राथमिक लक्ष्य हमारे लोगों की शैक्षिक, आर्थिक और सामाजिक उन्नति है। हमें भेदभाव के खिलाफ लड़ने, अपने युवाओं को सही दिशा देने और व्यापार तथा रोजगार के नए अवसर पैदा करने के लिए एकजुट होना होगा।
                        <br><br>
                        महासभा के झंडे तले, हम मिलकर एक मजबूत, समृद्ध और सशक्त बिहार का निर्माण करेंगे। आइए सत्य और कर्म के आदर्शों के साथ आगे बढ़ें।"
                    </p>
                    <div class="mt-2 border-t pt-4 border-gray-100">
                        <p class="font-bold text-navyBlue text-xl">बाल्मीकि यादव</p>
                        <p class="text-base text-gray-500">अध्यक्ष, अखिल बिहार यादव महासभा</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Objectives Section -->
    <section id="objectives" class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h4 class="text-saffron-600 font-bold text-lg tracking-wider mb-2">हमारा मिशन</h4>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">संगठन के मुख्य लक्ष्य</h2>
                <div class="w-24 h-1 bg-indiaGreen mx-auto mt-4 rounded"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-gray-50 p-8 rounded-xl text-center border-b-4 border-saffron-500 shadow-md hover:shadow-xl transition duration-300">
                    <div class="w-16 h-16 mx-auto bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center text-3xl mb-6">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">शिक्षा एवं छात्रवृत्ति</h3>
                    <p class="text-gray-600 text-base">समाज के मेधावी और जरूरतमंद छात्रों के लिए शिक्षा के अवसर और छात्रवृत्ति प्रदान करना।</p>
                </div>
                
                <div class="bg-gray-50 p-8 rounded-xl text-center border-b-4 border-indiaGreen shadow-md hover:shadow-xl transition duration-300">
                    <div class="w-16 h-16 mx-auto bg-green-100 text-indiaGreen rounded-full flex items-center justify-center text-3xl mb-6">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">रोजगार एवं व्यापार</h3>
                    <p class="text-gray-600 text-base">युवाओं को करियर मार्गदर्शन देना और समाज में उद्यमिता (Business) को बढ़ावा देना।</p>
                </div>

                <div class="bg-gray-50 p-8 rounded-xl text-center border-b-4 border-navyBlue shadow-md hover:shadow-xl transition duration-300">
                    <div class="w-16 h-16 mx-auto bg-blue-100 text-navyBlue rounded-full flex items-center justify-center text-3xl mb-6">
                        <i class="fas fa-hands-helping"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">सामाजिक कल्याण</h3>
                    <p class="text-gray-600 text-base">दहेज प्रथा जैसी सामाजिक कुरीतियों को समाप्त करना और आपसी भाईचारे को मजबूत करना।</p>
                </div>

                <div class="bg-gray-50 p-8 rounded-xl text-center border-b-4 border-saffron-500 shadow-md hover:shadow-xl transition duration-300">
                    <div class="w-16 h-16 mx-auto bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center text-3xl mb-6">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">राजनीतिक भागीदारी</h3>
                    <p class="text-gray-600 text-base">समाज को राजनीतिक रूप से जागरूक करना और लोकतांत्रिक प्रक्रियाओं में उचित प्रतिनिधित्व सुनिश्चित करना।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- News & Events Section -->
    <section id="news-events" class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <!-- Latest News -->
                <div>
                    <div class="flex items-center gap-3 mb-8">
                        <i class="fas fa-newspaper text-3xl text-saffron-500"></i>
                        <h2 class="text-3xl font-bold text-gray-900">नवीनतम समाचार</h2>
                    </div>
                    <div class="space-y-6 h-[450px] overflow-y-auto no-scrollbar pr-2">
                        <!-- News Item 1 -->
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">15 मार्च, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">पटना में युवा कौशल विकास शिविर का सफल आयोजन</h3>
                            <p class="text-gray-600">महासभा द्वारा आयोजित शिविर में 500 से अधिक युवाओं ने भाग लिया। तकनीकी और व्यापारिक कौशल पर विशेषज्ञों ने मार्गदर्शन दिया।</p>
                        </div>
                        <!-- News Item 2 -->
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">10 मार्च, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">मेधावी छात्रों के लिए छात्रवृत्ति योजना की घोषणा</h3>
                            <p class="text-gray-600">अध्यक्ष बाल्मीकि यादव ने 10वीं और 12वीं में उत्कृष्ट प्रदर्शन करने वाले समाज के छात्रों के लिए नई छात्रवृत्ति योजना की घोषणा की है।</p>
                        </div>
                        <!-- News Item 3 -->
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">28 फ़रवरी, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">सामूहिक विवाह सम्मेलन की रूपरेखा तैयार</h3>
                            <p class="text-gray-600">दहेज प्रथा को रोकने के उद्देश्य से महासभा जल्द ही एक भव्य सामूहिक विवाह समारोह आयोजित करेगी।</p>
                        </div>
                          <div class="bg-gray-50 p-8 rounded-xl text-center border-b-4 border-saffron-500 shadow-md hover:shadow-xl transition duration-300">
                    <div class="w-16 h-16 mx-auto bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center text-3xl mb-6">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">राजनीतिक भागीदारी</h3>
                    <p class="text-gray-600 text-base">समाज को राजनीतिक रूप से जागरूक करना और लोकतांत्रिक प्रक्रियाओं में उचित प्रतिनिधित्व सुनिश्चित करना।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- News & Events Section -->
    <section id="news-events" class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <!-- Latest News -->
                <div>
                    <div class="flex items-center gap-3 mb-8">
                        <i class="fas fa-newspaper text-3xl text-saffron-500"></i>
                        <h2 class="text-3xl font-bold text-gray-900">नवीनतम समाचार</h2>
                    </div>
                    <div class="space-y-6 h-[450px] overflow-y-auto no-scrollbar pr-2">
                        <!-- News Item 1 -->
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">15 मार्च, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">पटना में युवा कौशल विकास शिविर का सफल आयोजन</h3>
                            <p class="text-gray-600">महासभा द्वारा आयोजित शिविर में 500 से अधिक युवाओं ने भाग लिया। तकनीकी और व्यापारिक कौशल पर विशेषज्ञों ने मार्गदर्शन दिया।</p>
                        </div>
                        <!-- News Item 2 -->
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">10 मार्च, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">मेधावी छात्रों के लिए छात्रवृत्ति योजना की घोषणा</h3>
                            <p class="text-gray-600">अध्यक्ष बाल्मीकि यादव ने 10वीं और 12वीं में उत्कृष्ट प्रदर्शन करने वाले समाज के छात्रों के लिए नई छात्रवृत्ति योजना की घोषणा की है।</p>
                        </div>
                        <!-- News Item 3 -->
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">28 फ़रवरी, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">सामूहिक विवाह सम्मेलन की रूपरेखा तैयार</h3>
                            <p class="text-gray-600">दहेज प्रथा को रोकने के उद्देश्य से महासभा जल्द ही एक भव्य सामूहिक विवाह समारोह आयोजित करेगी।</p>
                        </div>
                         <!-- News Item 4 -->
                         <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <span class="text-sm font-bold text-indiaGreen mb-2 block">15 फ़रवरी, 2026</span>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">सदस्यता अभियान की शुरुआत</h3>
                            <p class="text-gray-600">राज्य भर में महासभा से जुड़ने के लिए नए सदस्यता अभियान की शुरुआत की गई है। ऑनलाइन पंजीकरण भी उपलब्ध है।</p>
                        </div>
                    </div>
                </div>
                
 <!-- Upcoming Events -->
                <div>
                    <div class="flex items-center gap-3 mb-8">
                        <i class="far fa-calendar-alt text-3xl text-navyBlue"></i>
                        <h2 class="text-3xl font-bold text-gray-900">आगामी कार्यक्रम</h2>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg border-t-4 border-navyBlue overflow-hidden">
                        <ul class="divide-y divide-gray-100">
                            <!-- Event 1 -->
                            <li class="p-6 flex flex-col sm:flex-row gap-4 hover:bg-gray-50 transition">
                                <div class="bg-blue-50 text-navyBlue min-w-[80px] h-[80px] rounded-lg flex flex-col items-center justify-center font-bold shadow-inner">
                                    <span class="text-2xl">25</span>
                                    <span class="text-sm">अप्रैल</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900">कैरियर मार्गदर्शन सेमिनार</h3>
                                    <p class="text-gray-600 mt-1 text-sm"><i class="fas fa-map-marker-alt text-saffron-500 mr-1"></i> राधे कृष्ण लाइब्रेरी, पटना</p>
                                    <p class="text-gray-600 mt-2 text-sm">सिविल सेवाओं और कॉर्पोरेट सेक्टर की तैयारी के लिए मार्गदर्शन।</p>
                                </div>
                            </li>
                            <!-- Event 2 -->
                            <li class="p-6 flex flex-col sm:flex-row gap-4 hover:bg-gray-50 transition">
                                <div class="bg-blue-50 text-navyBlue min-w-[80px] h-[80px] rounded-lg flex flex-col items-center justify-center font-bold shadow-inner">
                                    <span class="text-2xl">10</span>
                                    <span class="text-sm">मई</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900">यादव व्यापार एवं उद्यमिता मंच</h3>
                                    <p class="text-gray-600 mt-1 text-sm"><i class="fas fa-map-marker-alt text-saffron-500 mr-1"></i> बापू सभागार, पटना</p>
                                    <p class="text-gray-600 mt-2 text-sm">समाज के व्यापारियों और नए स्टार्टअप्स के लिए नेटवर्किंग इवेंट।</p>
                                </div>
                            </li>
                            <!-- Event 3 -->
                            <li class="p-6 flex flex-col sm:flex-row gap-4 hover:bg-gray-50 transition">
                                <div class="bg-blue-50 text-navyBlue min-w-[80px] h-[80px] rounded-lg flex flex-col items-center justify-center font-bold shadow-inner">
                                    <span class="text-2xl">05</span>
                                    <span class="text-sm">जून</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900">सांस्कृतिक संध्या एवं सम्मान समारोह</h3>
                                    <p class="text-gray-600 mt-1 text-sm"><i class="fas fa-map-marker-alt text-saffron-500 mr-1"></i> श्रीकृष्ण मेमोरियल हॉल, पटना</p>
                                    <p class="text-gray-600 mt-2 text-sm">विभिन्न क्षेत्रों में उत्कृष्ट कार्य करने वाले समाज के लोगों का सम्मान।</p>
                                </div>
                            </li>
                        </ul>
                        <div class="bg-gray-50 p-4 text-center border-t">
                            <a href="#" class="text-navyBlue font-bold hover:text-blue-800 transition">सभी कार्यक्रम देखें <i class="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h4 class="text-saffron-600 font-bold text-lg tracking-wider mb-2">स्मृतियाँ</h4>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">फोटो गैलरी</h2>
                <div class="w-24 h-1 bg-indiaGreen mx-auto mt-4 rounded"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Gallery Item 1 -->
                <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="युवा सम्मलेन" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold text-center px-4">युवा सशक्तिकरण सम्मलेन</h3>
                    </div>
                </div>
                <!-- Gallery Item 2 -->
                <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="व्यापारिक बैठक" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold text-center px-4">व्यापारिक रणनीति बैठक</h3>
                    </div>
                </div>
                <!-- Gallery Item 3 -->
                <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img src="https://images.unsplash.com/photo-1523580494112-071d16940d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="सम्मान समारोह" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold text-center px-4">मेधावी छात्र सम्मान समारोह</h3>
                    </div>
                </div>
                <!-- Gallery Item 4 -->
                <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="महिला सशक्तिकरण" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold text-center px-4">महिला सशक्तिकरण शिविर</h3>
                        </div>
                </div>
                <!-- Gallery Item 5 -->
                <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="रक्तदान शिविर" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold text-center px-4">सामुदायिक रक्तदान शिविर</h3>
                    </div>
                </div>
                <!-- Gallery Item 6 -->
                <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="अध्यक्ष महोदय का संबोधन" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold text-center px-4">अध्यक्ष महोदय का जन-संबोधन</h3>
                    </div>
                </div>
            </div>
            <div class="text-center mt-10">
                <a href="#" class="inline-block border-2 border-saffron-500 text-saffron-600 font-bold py-2 px-6 rounded-full hover:bg-saffron-500 hover:text-white transition">पूरी गैलरी देखें</a>
            </div>
        </div>
    </section>

    <!-- AI Tools Section (Powered by Gemini API) -->
    <section id="tools" class="py-16 md:py-24 bg-saffron-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h4 class="text-indiaGreen font-bold text-lg tracking-wider mb-2">तकनीकी सशक्तिकरण</h4>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                    स्मार्ट AI सहायता <i class="fas fa-sparkles text-saffron-500 text-2xl md:text-3xl"></i>
                </h2>
                <div class="w-24 h-1 bg-navyBlue mx-auto mt-4 rounded"></div>
                <p class="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">युवाओं के उज्ज्वल भविष्य और विचारों को मजबूत करने के लिए कृत्रिम बुद्धिमत्ता (AI) का उपयोग।</p>
            </div>

            <!-- API Error Message Box -->
            <div id="api-error" class="hidden max-w-4xl mx-auto mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-sm" role="alert">
                <p class="font-bold">असिस्टेंट से जुड़ने में त्रुटि</p>
                <p id="api-error-msg">कृपया बाद में पुनः प्रयास करें। अपना इंटरनेट कनेक्शन जांच लें।</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                
                <!-- Tool 1: Career Advisor -->
                <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                    <div class="bg-indiaGreen text-white p-6 border-b border-green-700">
                        <h3 class="text-2xl font-bold flex items-center gap-3">
                            <i class="fas fa-user-graduate text-green-200"></i> करियर और शिक्षा सलाहकार
                        </h3>
                        <p class="text-green-100 mt-2 text-base">अपनी शिक्षा, परीक्षा की तैयारी, या व्यापार शुरू करने से संबंधित कोई भी प्रश्न पूछें।</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <label class="block text-base font-medium text-gray-700 mb-2">अपना प्रश्न पूछें:</label>
                        <textarea id="career-input" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indiaGreen focus:border-indiaGreen outline-none transition mb-4 text-lg" placeholder="उदाहरण: मैं 12वीं के बाद अपना खुद का व्यापार शुरू करना चाहता हूँ, मुझे क्या करना चाहिए?"></textarea>
                        
                        <button id="career-btn" onclick="askCareerAdvisor()" class="w-full bg-indiaGreen hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center gap-2 text-lg">
                            ✨ सलाह प्राप्त करें
                            <div id="career-loader" class="loader hidden"></div>
                        </button>

                        <div id="career-result-container" class="hidden mt-6 flex-grow">
                            <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 border-b pb-1">विशेषज्ञ की सलाह</h4>
                            <div id="career-result" class="text-gray-800 bg-green-50 p-4 rounded-lg border border-green-100 text-base md:text-lg leading-relaxed max-h-60 overflow-y-auto"></div>
                        </div>
                    </div>
                </div>

                <!-- Tool 2: Speech & Thought Generator -->
                <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                    <div class="bg-navyBlue text-white p-6 border-b border-blue-900">
                        <h3 class="text-2xl font-bold flex items-center gap-3">
                            <i class="fas fa-microphone-alt text-blue-200"></i> भाषण एवं विचार जनरेटर
                        </h3>
                        <p class="text-blue-100 mt-2 text-base">सामाजिक बैठकों या कार्यक्रमों के लिए किसी भी विषय पर एक प्रभावी भाषण या विचार तैयार करें।</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <div class="mb-4">
                            <label class="block text-base font-medium text-gray-700 mb-2">भाषण का विषय (Topic):</label>
                            <input type="text" id="speech-topic" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navyBlue focus:border-navyBlue outline-none transition text-lg" placeholder="उदाहरण: समाज में युवाओं की जिम्मेदारी">
                        </div>
                        
                        <button id="speech-btn" onclick="draftSpeech()" class="w-full bg-navyBlue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center gap-2 text-lg mt-auto">
                            ✨ भाषण तैयार करें
                            <div id="speech-loader" class="loader hidden"></div>
                        </button>

                        <div id="speech-result-container" class="hidden mt-6 flex-grow">
                            <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 border-b pb-1">तैयार किया गया भाषण</h4>
                            <div id="speech-result" class="text-gray-800 bg-blue-50 p-4 rounded-lg border border-blue-100 text-base md:text-lg leading-relaxed max-h-48 overflow-y-auto"></div>
                            <button onclick="copySpeech()" class="mt-3 text-sm font-bold text-navyBlue hover:text-blue-700 border border-navyBlue px-3 py-1 rounded transition"><i class="fas fa-copy mr-1"></i> कॉपी करें (Copy)</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
     <!-- Contact Section -->
    <section id="contact" class="py-16 md:py-24 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12">
                
                <!-- Contact Info -->
                <div class="lg:w-1/3">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-saffron-500">संपर्क करें</h2>
                    <p class="text-gray-400 mb-8 text-lg">सदस्यता लेने, किसी भी जानकारी के लिए या हमारे आगामी कार्यक्रमों में भाग लेने के लिए हमसे संपर्क करें।</p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0 mt-1">
                                <i class="fas fa-map-marker-alt text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-white">मुख्य कार्यालय</h4>
                                <p class="text-gray-400 mt-1 text-lg">
                                    राधे कृष्ण लाइब्रेरी,<br>
                                    पटना, बिहार<br>
                                    भारत
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0 mt-1">
                                <i class="fas fa-phone-alt text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-white">फोन नंबर</h4>
                                <p class="text-gray-400 mt-1 text-lg">+91 98765 43210</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0 mt-1">
                                <i class="fas fa-envelope text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-white">ईमेल</h4>
                                <p class="text-gray-400 mt-1 text-lg">info@biharyadavmahasabha.org</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:w-2/3 bg-white text-gray-800 rounded-xl p-6 md:p-10 shadow-2xl">
                    <h3 class="text-2xl font-bold mb-6 border-b pb-4">हमें संदेश भेजें</h3>
                    <form onsubmit="event.preventDefault(); showMessage();">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label class="block text-base font-medium text-gray-700 mb-2">पूरा नाम</label>
                                <input type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition text-lg">
                            </div>
                            <div>
                                <label class="block text-base font-medium text-gray-700 mb-2">फोन नंबर</label>
                                <input type="tel" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition text-lg">
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block text-base font-medium text-gray-700 mb-2">ईमेल आईडी</label>
                            <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition text-lg">
                        </div>
                        <div class="mb-6">
                            <label class="block text-base font-medium text-gray-700 mb-2">आपका संदेश</label>
                            <textarea rows="4" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition text-lg"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center text-lg">
                            संदेश भेजें <i class="fas fa-paper-plane ml-2"></i>
                        </button>
                        
                        <!-- Success Message Box -->
                        <div id="form-success" class="hidden mt-6 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative text-lg" role="alert">
                            <strong class="font-bold">धन्यवाद!</strong>
                            <span class="block sm:inline"> आपका संदेश प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।</span>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>

                <!-- Footer -->
    <footer class="bg-black text-gray-400 py-10 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-center md:text-left">
                <h4 class="text-2xl font-bold text-white mb-2">अखिल बिहार यादव महासभा</h4>
                <p class="text-base">&copy; 2026 सर्वाधिकार सुरक्षित (All rights reserved).</p>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-500 hover:text-white transition text-xl"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-500 hover:text-white transition text-xl"><i class="fab fa-twitter"></i></a>
                <a href="#" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-500 hover:text-white transition text-xl"><i class="fab fa-instagram"></i></a>
                <a href="#" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-500 hover:text-white transition text-xl"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </footer>

    <!-- Interactive & Gemini API Scripts -->
    <script>
        // Mobile Menu Toggle Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Contact Form Submission Msg
        function showMessage() {
            const msgBox = document.getElementById('form-success');
            msgBox.classList.remove('hidden');
            setTimeout(() => { msgBox.classList.add('hidden'); }, 6000);
        }

        // --- GEMINI API INTEGRATION ---
        
        const apiKey = ""; // API key will be injected by the environment

        // API Call with Exponential Backoff
        async function fetchWithRetry(url, options, retries = 5) {
            const delays = [1000, 2000, 4000, 8000, 16000];
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    return await response.json();
                } catch (error) {
                    if (i === retries - 1) throw error;
                    console.warn(`Attempt ${i + 1} failed. Retrying in ${delays[i]}ms...`);
                    await new Promise(res => setTimeout(res, delays[i]));
                }
            }
        }

        async function generateContent(prompt, systemPrompt) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            
            const payload = {
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] }
            };

            const result = await fetchWithRetry(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            return result.candidates?.[0]?.content?.parts?.[0]?.text;
        }

        // Markdown to HTML formatter
        function formatMarkdown(text) {
            if (!text) return "";
            return text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br>');
        }

        function showError(message) {
            const errorBox = document.getElementById('api-error');
            const errorMsg = document.getElementById('api-error-msg');
            errorMsg.innerText = message;
            errorBox.classList.remove('hidden');
            setTimeout(() => { errorBox.classList.add('hidden'); }, 7000);
        }

        // Feature 1: Career Advisor
        async function askCareerAdvisor() {
            const input = document.getElementById('career-input').value.trim();
            if (!input) return;

            const btn = document.getElementById('career-btn');
            const loader = document.getElementById('career-loader');
            const resultContainer = document.getElementById('career-result-container');
            const resultDiv = document.getElementById('career-result');

            btn.disabled = true;
            loader.classList.remove('hidden');
            resultContainer.classList.add('hidden');

            const systemPrompt = "आप 'अखिल बिहार यादव महासभा' के एक विशेषज्ञ करियर और शिक्षा सलाहकार हैं। आपका काम युवाओं को शिक्षा, नौकरी (सरकारी/निजी), प्रतियोगी परीक्षाओं, या व्यापार शुरू करने के संबंध में व्यावहारिक और उत्साहवर्धक सलाह देना है। कृपया हिंदी में उत्तर दें और उत्तर संक्षिप्त (लगभग 150 शब्दों में) और बिंदुवार रखें।";

            try {
                const responseText = await generateContent(`मेरा प्रश्न: ${input}`, systemPrompt);
                if(responseText) {
                    resultDiv.innerHTML = formatMarkdown(responseText);
                    resultContainer.classList.remove('hidden');
                } else {
                    throw new Error("Empty response");
                }
            } catch (error) {
                showError("सलाह प्राप्त करने में विफल। कृपया अपना इंटरनेट कनेक्शन जांच लें।");
            } finally {
                btn.disabled = false;
                loader.classList.add('hidden');
            }
        }

        // Feature 2: Speech & Thought Generator
        async function draftSpeech() {
            const topic = document.getElementById('speech-topic').value.trim();
            if (!topic) return;

            const btn = document.getElementById('speech-btn');
            const loader = document.getElementById('speech-loader');
            const resultContainer = document.getElementById('speech-result-container');
            const resultDiv = document.getElementById('speech-result');

            btn.disabled = true;
            loader.classList.remove('hidden');
            resultContainer.classList.add('hidden');

            const systemPrompt = "आप 'अखिल बिहार यादव महासभा' के लिए एक उत्कृष्ट भाषण लेखक हैं। उपयोगकर्ता द्वारा दिए गए विषय पर एक प्रेरक, सम्मानजनक और सामाजिक न्याय/एकता पर केंद्रित भाषण या विचार तैयार करें। भाषा शुद्ध हिंदी होनी चाहिए। 2-3 छोटे पैराग्राफ में उत्तर दें।";

            const prompt = `इस विषय पर एक भाषण तैयार करें: "${topic}"। शुरुआत समाज के लोगों को सादर प्रणाम करते हुए करें।`;

            try {
                const responseText = await generateContent(prompt, systemPrompt);
                if(responseText) {
                    resultDiv.innerHTML = formatMarkdown(responseText);
                    resultContainer.classList.remove('hidden');
                } else {
                    throw new Error("Empty response");
                }
            } catch (error) {
                showError("भाषण तैयार करने में विफल। कृपया पुनः प्रयास करें।");
            } finally {
                btn.disabled = false;
                loader.classList.add('hidden');
            }
        }

        // Utility to copy text
        function copySpeech() {
            const textToCopy = document.getElementById('speech-result').innerText;
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                const copyBtn = document.querySelector('#speech-result-container button');
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check text-green-600 mr-1"></i> कॉपी हो गया!';
                setTimeout(() => { copyBtn.innerHTML = originalText; }, 2000);
            } catch (err) {
                console.error('Copy failed', err);
            }
            document.body.removeChild(textArea);
        }
    </script>
</body>
            </html>
