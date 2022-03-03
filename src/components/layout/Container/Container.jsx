import React from "react"
import styles from "./Container.module.scss"
export const Container = ({children, className, as, ...otherProps}) => {
  const containerTags = {
    div: "div", 
    p: "p", 
    ul: "ul", 
    li: "li",
    h1: "h1", 
    h2: "h2", 
    h3: "h3", 
    h4: "h4",
    ol: "ol", 
    span: "span", 
    strong: "strong",
    header: "header", 
    footer: "footer", 
    main: "main",
    section: "section", 
    article: "article"
  }

  const component = containerTags[as] || "div"

  return (
    React.createElement(component, { 
      ...otherProps,
      className: `${styles.Container} ${className ? className : ""}` 
    }, children)
  )
}