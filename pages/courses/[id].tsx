import { 
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { FC } from "react";
import { Course, Lesson } from ".";
import BackButton from "../../components/backButton";
import MainCard from "../../components/card";
import { PageLayout } from "../../components/layout";
import { getContentfulClient } from "../../queries/contentfulClient";
import { GET_COURSE, GET_COURSES } from "../../queries/queryUtils";



export async function getStaticPaths() {
  const {data} = await getContentfulClient.query({
    query: GET_COURSES
  })
  const courseSlugs = data.courseCollection.items.map((d: Course) => d.sys.id)
  
  const paths = courseSlugs.map((id: string) => {
    return {
        params: { id },
    }
  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const {data} = await getContentfulClient.query({
    query: GET_COURSE(`${params?.id}`)
  })
  const {course} = data
  return { 
    props: {
      course
    }
  }
}

interface Props {
  course: Course
}

const CoursePage:FC<Props> = ({course}) => {
  const {title, sys, image, lessonsCollection} = course
  return (
    <PageLayout>
        <BackButton />
        <Text as="h1" fontSize="36px" fontWeight={800} margin="auto">
          {title}
        </Text>
        <Flex justifyContent="center" flexWrap="wrap">        
          {lessonsCollection.items.map((l:Lesson, i: number) => <MainCard key={i} title={l.title} slug={`/lessons/${l.sys.id}`} image={l.image?.url} index={i+1} /> )} 
        </Flex>
    </PageLayout>
  )
}

export default CoursePage
