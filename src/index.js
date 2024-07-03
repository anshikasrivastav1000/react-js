import reactdom from 'react-dom/client'

import App from './components/component/App'
const reactroot = reactdom.createRoot(document.getElementById('root'));
reactroot.render(<App/>)