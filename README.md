## The assignment was

**https://www.figma.com/file/XfBJaCIEzMdQTWINKNUgX8/Test_PM?node-id=142%3A20814**

We need to layout the provided page, connect the receipt of resumes via API and one filter “Only with photo”. 
The rest of the filters do not need to be connected to the API, only the layout.

It is necessary to use Redux and you can use any additional libraries, the only thing is that you do not need to overload the project with unnecessary things.

The result of the work should be provided as a link to the git repository.

### API:
**(GET):** 
http://135.181.30.244:27007/api/summaries/


## Comments
I used MUI, stylized with makeStyles, also there is a setting for Redux DevTools Extension in the browser.
in the post update status as a value I used post id, the number of full years including the current year was obtained with the help of date-fns library (not hardcoded)
In the endpoint I didn't find the field with the city so I hardcoded it as on the layout.

 