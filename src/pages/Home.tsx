import react from 'react';
import { Button } from '../components/button/button';
import { Variant } from '../common/components.props';

export const Home = () => {

    return(
       <Button variant={Variant.primary}>label</Button>
    )
}

export default Home;