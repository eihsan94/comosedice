import { Button } from '@chakra-ui/button'
import { ArrowBackIcon, ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/layout'
import React, { FC, useEffect, useState } from 'react'
// @ts-ignore
import {Fade} from 'react-reveal'
import ProgressBar from './progressBar'
import { 
    Text,
  } from "@chakra-ui/react"

export interface StepConfigProps  {
    label?: JSX.Element | string
    content: JSX.Element | string
}


interface Props {
    steps: StepConfigProps[]
}

const Stepper:FC<Props> = ({steps}) => {
    const [currStep, setCurrStep]= useState(0)
    const [isNext, setIsNext]= useState(true)
    return (
        <Box>
            <Box textAlign="center" mb="30px">
                <Button variant="outline" px="40px" fontWeight="normal" mb={{base:"0px",md:"20px"}}>
                    {currStep + 1} of {steps.length}
                </Button>
                <ProgressBar display={{base: "none", md:"inherit"}} progressValue={currStep/(steps.length - 1) * 100} color="#EB6860" />
            </Box>

            {steps.map((s,i) => 
                i === currStep && 
                    <Step key={i} isNext={isNext}>
                        <Box
                            borderRadius="10px"
                            px={{base:"40px", md:"42px"}}
                            shadow="xl"
                            pt={"44px"}
                            pb={{base:"80px", md:"80px"}}
                            textAlign={{base:"start", md:"center"}}
                        >
                            <Text fontSize="30px" fontWeight="bold" >{s.label}</Text>
                            <Text fontSize="30px" fontWeight="bold" color="orange">
                                {s.content}
                            </Text>
                            <Flex position="absolute" bottom="0"  left ="0px" w="100%" pb="30px" px="40px">
                                {currStep !== 0 && 
                                    <Button variant="primary" mr="10px" borderRadius="full" onClick={() => {
                                        setCurrStep(currStep-1)
                                        setIsNext(false)
                                    }}>
                                        <ArrowBackIcon /> 前へ
                                    </Button>
                                }
                                {currStep !== steps.length -1 &&
                                    <Button ml="auto" variant="primary" borderRadius="full" onClick={() => {
                                        setCurrStep(currStep+1)
                                        setIsNext(true)
                                    }}>
                                        次へ <ArrowForwardIcon />
                                    </Button>
                                }
                                {currStep === steps.length -1 &&
                                    <Button ml="auto" variant="primary" borderRadius="full" onClick={() => {
                                        console.log("add product to cart");
                                    }}>
                                        カートに追加する 
                                    </Button>
                                }
                            </Flex>
                        </Box>
                    </Step>
            )}
        </Box>
    )
}

export default Stepper

interface StepProps {
    isNext: boolean
}
  
const Step:FC<StepProps> = ({isNext, children}) => {
    const distance = "600px"
    return (
      isNext 
        ? <Fade right distance={distance} duration={400}>
            {children}
          </Fade>
        : <Fade left distance={distance} duration={400}>
            {children}
          </Fade>
    )
}
  