import reactdom from 'react-dom/client'

import Here from './components/component/Here'

const reactroot = reactdom.createRoot(document.getElementById('root'));

reactroot.render(<Here/>)