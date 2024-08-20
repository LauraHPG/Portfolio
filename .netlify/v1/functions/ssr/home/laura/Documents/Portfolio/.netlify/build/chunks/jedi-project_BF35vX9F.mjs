const id = "jedi-project.md";
						const collection = "project";
						const slug = "jedi-project";
						const body = "The JEDI Academy at UPC offered a course in HTML, CSS and JavaScript, in which I took part in July 2021 and developed this website as the final project.\n\nBesides the three basic tools for web development, some other ones that I got to learn and use were:\n\n* **Heroku**: A web in which you can store and modify JSON public files in order to make accessible from any computer.\n* **Netlify**: A platform that enabled me to deploy the website to the internet.\n* **Bootstrap**: A simple framework to get to know how frameworks work.\n\nThe aim of the website was to have a log in and sign up page with users and passwords stored in the Heroku platform (a simple way to start to understand how APIs work, but not really suitable for a real project in which passwords must be well secured). And also a bookshelves place in which the user could store the books that they own, which were also stored in the public JSON file.\n\nOne thing to note is that Heroku deleted my account due to lack of activity, so the database call does not work, which disables the log in and sign up step and also the book information retrieval.\n\n\n![1722417156856](image/jedi-project/1722417156856.png)\n\n![1722417168375](image/jedi-project/1722417168375.png)\n\n![1722417144974](image/jedi-project/1722417144974.png)\n\n[Github repo](https://github.com/LauraHPG/web-jedi) | [Website](https://jovial-jepsen-82e02f.netlify.app)\n";
						const data = {title:"BookShelves",description:"The Jedi Academy at UPC had a course in HTML, CSS and JavaScript in which I developed the following project",pubDate:new Date(1626300000000),heroImage:"/jedi-final-project.png"};
						const _internal = {
							type: 'content',
							filePath: "/home/laura/Documents/Portfolio/src/content/project/jedi-project.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
