import React, { FC } from 'react';

type Props = {

}

export const Home: FC<Props> = ({ 

    ...props
}) => {
    return(
        <>
            <div {...props}>
                {/* <Button variant={Variant.primary}>label</Button> */}
            </div>  
        </> 
    )
}

export default Home;