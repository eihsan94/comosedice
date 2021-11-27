import React, { FC } from 'react'
import {
    Box, 
    Spinner,
    Flex,
} from '@chakra-ui/react'
import { PageLayout } from '../components/layout'

interface Props {
}

const Dashboard:FC<Props> =  () => {
    return (
        <PageLayout>
            dashboard
        </PageLayout>
    )
}

export default Dashboard
