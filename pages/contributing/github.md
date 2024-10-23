# GitHub Setup

This next part is crucial to start off your journey to develop Catenary. GitHub! For those unfamiliar with it, GitHub is a code-sharing platform that uses the Git version control protocol to keep track of a software project's code. We use it so that all of our team members can work together on the project at any time.

1. Make a GitHub account if you don't already have one: Sign Up for [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
    
2. Download [Git](https://git-scm.com/downloads) to your device. Make sure you're signed in, either through VSCode integration, SSH key, GitHub Desktop App, etc. 

3. Open up Git Bash and enter the following commands with "name" and "email@domain" replaged with your name and your email you used to sign up to GitHub with. This helps git identify who you are.
    
    git config --global user.name "name"
    
    git config --global user.email "email@domain"
    
4. Clone the repository (repo, for short) that you want to work on by checking our [GitHub repositiories list](https://github.com/orgs/catenarytransit/repositories). Key repos include:

- catenary-frontend: Home of our frontend code! This encompasses the user-facing aspects of our project—the user interface and visuals of the map itself.

- catenary-backend: The behind-the-scenes code that keeps Catenary running! Houses the data ingestion machine that processes the dozens of terabytes of data we cycle through

- catenary-routing-engine: Catenary's custom comprehensive trip planner tailored for public transit! Currently in development, alpha stage not released yet. 

- catenary-mobile: We're working on making a Catenary mobile app; many users are looking forward to this greatly!

5. Start working on the code! Check other parts of the docs to see how you can help, but once you're done making edits, make sure you make a pull request... More on that in the next section! 

    