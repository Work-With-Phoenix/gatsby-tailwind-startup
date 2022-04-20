exports.onCreatePage = async ({page, actions}) => {
    const {createPage, deletePage} = actions

    // check if the page is a localized 404
    if(page.path.match(/^\/[a-z]{2}\/404\/$/)){
        const oldPage = {...page}

        //get the language code from the path, and match all paths
        //starting with this code (apart from other valid paths
        const langCode = page.path.split(`/`)[1]
        page.matchPath = `/${langCode}/*`


        //recreate the modified page
        deletePage(oldPage)
        createPage(page)
    }
}