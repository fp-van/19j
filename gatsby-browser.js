/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

 const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }

// You can delete this file if you're not using it
export const onClientEntry = () => {
    window.onload = () => {
      addScript("redirect.js")
    }
  }