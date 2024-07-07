import reactdom from 'react-dom/client'
import Form from './components/component/Form';

const reactroot = reactdom.createRoot(document.getElementById('root'));

reactroot.render(<Form/>)