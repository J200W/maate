const handleRedirection = (page, route, navigation) => {
    if (navigation === undefined) console.log("Navigation is undefined");
    else {
        if (page === "back") navigation.goBack();
        else {
            navigation.navigate(page, route);
            // console.log("Navigate to " + page);
        }
    }
};

export default handleRedirection;
