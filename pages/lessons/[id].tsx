import { 
  Flex,
  Text,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { FC, useState } from "react";
import BackButton from "../../components/backButton";
import { PageLayout } from "../../components/layout";
import { getContentfulClient } from "../../queries/contentfulClient";
import { GET_LESSONS, GET_LESSON } from "../../queries/queryUtils";
import { Lesson, Module } from "../courses";
import Stepper, { StepConfigProps } from "../../components/stepper";




export async function getStaticPaths() {
  const {data} = await getContentfulClient.query({
    query: GET_LESSONS
  })
  
  const slugs = data.lessonCollection.items.map((d: Lesson) => d.sys.id)
  console.log(slugs);
  
  const paths = slugs.map((id: string) => {
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
    query: GET_LESSON(`${params?.id}`)
  })
  const {lesson} = data
  return { 
    props: {
      lesson
    }
  }
}

interface Props {
  lesson: Lesson
}

const LessonPage:FC<Props> = ({lesson}) => {
  const {title, sys, image, modulesCollection} = lesson
  const [show, setShow] = useState('')
  const steps = modulesCollection.items.map((l:Module, i: number) =>  ({
    label:<Text>{l.question}</Text>,
    content: 
      <Box key={i}>
        {show === l.sys.id && <Text>{l.answer}</Text>}
      <Button my="20px" onClick={() => setShow(l.sys.id)} borderRadius="full" variant="accentTop">
          show answer
        </Button>
      </Box>
  }))
  return (
    <PageLayout title={title}>
      <Container textAlign="center">
        <Stepper steps={steps} />
      </Container>
    </PageLayout>
  )
}

export default LessonPage
