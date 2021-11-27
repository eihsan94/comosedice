import { 
    Container,
    Text,
 } from '@chakra-ui/react'
import React, {FC} from 'react'
import BackButton from './backButton'
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
interface Props {
    title?:string
}
const PageLayout: FC<Props> = ({title, children}) =>  {
    return (
        <>
            <NavBar />
            <Container py="80px" maxW={'8xl'} textAlign="center">
                <BackButton />
                <Text as="h1" fontSize="36px" fontWeight={800} margin="auto" textTransform="capitalize">
                {title}
                </Text>
                {children}
            </Container>
        </>
    )
}

export {
    TopLayout,
    PageLayout
}
