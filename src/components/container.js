import React from "react"
// import * as containerStyles from "./container.module.css"
import styled from "styled-components"

const Section = styled.section`
  margin: 3rem auto;
  max-width: 600px;
`
export default function Container({ children }) {
  return <Section className={`container`}>{children}</Section>
}