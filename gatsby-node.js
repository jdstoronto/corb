
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const Homepage= path.resolve(`src/pages/index.js`)
    createPage({
        path: `Home`,
        component: Homepage,
    })
} 

//redirect not working
/* exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;	
    const Homepage= path.resolve(`src/pages/index.js`)
	createRedirect({ fromPath: `/Home`,toPath: Homepage});
} */