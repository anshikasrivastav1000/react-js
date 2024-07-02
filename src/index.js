import reactdom from 'react-dom/client'
import BasicRouting from './components/reactRouterV6/BasicRouting'

const reactroot = reactdom.createRoot(document.getElementById('root'));
reactroot.render(<BasicRouting/>)