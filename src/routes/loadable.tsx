import Loadable from 'react-loadable';
import Loading from '@/components/baseUI/Loading';

 // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
 const lazyLoad  = (loader: any): any =>{
    return  Loadable({loader,loading: Loading});
  }
  export default lazyLoad