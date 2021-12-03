import React, { FC } from 'react'
import {
    Spinner,
    Flex,
    Text,
} from '@chakra-ui/react'
import MainCard from '../../components/card'
import { PageLayout } from '../../components/layout'
import { useCourses } from '../../queries/queryUtils'

export interface Module {
    question: string
	answer: string
    sys: {
        id: string
    }
}

export interface Lesson {
    title:string
    sys: {
        id: string
    }
    image: {
        url: string
    }
    slug: string
    modulesCollection: {
        items:Module[]
    }
}

export interface Course {
    sys: {
        id: string
    }
    title: string
    slug: string
    image?: {
        url: string
    }
    lessonsCollection: {
        items: Lesson[]
    }
}

const Index:FC =  () => {
    const {loading, error, courses} = useCourses()
    console.log(courses);
    
    return (
        <PageLayout title="Courses">
            {loading && <Spinner />}
            {error && JSON.stringify(error)}
            <Flex justifyContent="center" flexWrap="wrap">
                {courses.map((l:Course,i:number) => <MainCard key={i} title={l.title} slug={`courses/${l.sys.id}`} image={l.image?.url} index={i+1} />)}
            </Flex>

        </PageLayout>
    )
}

export default Index
