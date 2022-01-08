
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const Homepage= path.resolve(`src/pages/index.js`)
    createPage({
        path: `Home`,
        component: Homepage,
    })
} 
