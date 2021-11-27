import { useQuery } from "@apollo/client";
import gql from "graphql-tag"

export const GET_LESSONS = gql`
  query {
    lessonCollection {
        items {
          sys {
            id
          }
          title 
          slug
          image {
            url
          }
        }
    }
  }
`
export const useLessons = () => {
  const { loading, error, data }  = useQuery(GET_LESSONS)
  let lessons = []
  if(!loading) {
    lessons = data.lessonCollection.items 
  }

  return {
    loading, 
    error,
    lessons ,
  }
}

export const GET_COURSES = gql`
  query {
    courseCollection {
      items {
        title
        sys {
          id
        }
        image {
          url
        }
        lessonsCollection{
          items {
            title
            slug
          }
        }
      }
    }
  }
`
export const useCourses = () => {
  const { loading, error, data }  = useQuery(GET_COURSES)
  let courses = []
  if(!loading) {
    courses = data.courseCollection.items 
  }
  console.log(courses);
  
  return {
    loading, 
    error,
    courses ,
  }
}


export const GET_COURSE = (id:string) => gql`
  query {
    course(id:"${id}") {
      title
      sys {
        id
      }
      lessonsCollection {
        items {
          title
          sys {
            id
          }
          image {
            url
          }
        }
      }
    }
  }
`

export const GET_LESSON = (id:string) => gql`
  query {
    lesson(id:"${id}") {
      title
      sys {
        id
      }
      modulesCollection {
        items {
          sys {
            id
          }
          question
          answer
        }
      }
    }
  }
`
