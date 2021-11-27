import { Container } from '@chakra-ui/layout'
import {FC} from 'react'
import NavBar from './navbar'

/**
 * @description layout for only top page  
 */
const TopLayout: FC = ({children}) =>  {
    return (
        <Container maxW={'5xl'}>
            {children}
        </Container>
    )
}


/**
 * @description layout for the app page  
 */
const PageLayout: FC = ({children}) =>  {
    return (
        <>
            <NavBar />
            <Container pt="70px" maxW={'8xl'} textAlign="center">
                {children}
            </Container>
        </>
    )
}

export {
    TopLayout,
    PageLayout
}
