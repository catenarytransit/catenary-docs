# Map Features Overview
For the casual user!

Feel free to open up the map and follow along! This means going to our website, over [here](https://maps.catenarymaps.org). (We're working on a downloadable version.)

## Layers Menu

<img src="../../examples/top_right_toggle.png" align="right" width="50">
We know that having all the layers open can be very overwhelming for some, while others enjoy the hubbub of seeing everything we have to offer at once. So, we let you decide what you want to see!

To toggle our layers, go to the top

<br clear="left"/>
 
## The Sidebar

This is how to adjust settings and view detailed information on routes and vehicles!

2. Make sure you have location services on and that Catenary has permission to view your location. This way, the map will automatically open up near where you are. Don't worry, we don't collect any user data; we can't track our users' locations!</br></br> 

3. ![Top of the sidebar](../../examples/top_sidebar1.png)

4. Make sure you're caught up with all of the details about GitHub and Workflow

## Picking your project(s)

Now comes a big decision: What part of the backend do you want to start with? There are many components that we're working on, and they all play different roles in the operation of Catenary Maps. Here's a quick overview of the main components: 

### Database and Ingestion

This is the process by which Catenary aquires, cleans, sorts, and then displays our data. On a normal day, this is dozens of terabytes for hundreds of agencies across the globe. From *Ciudad de México* (Mexico City, Mexico) to *横浜市* (Yokohama, Japan), we got you covered!

Basically the process looks something like this:

From [Transitland](https://www.transit.land/), we download each agency's transit information into our system using a bunch of API connections. We read all of this data, and then search through it and then we re-match each feed with their operator. Then, we ingest (translation: extract data and then move it in batches) the real-time information and dynamically send it to our frontend.

This is a lot of information for our system to process, so we have to use algorithms to optimize the process. In addition, some requested agencies don't have their data formatted to the industry standard (**GTFS**, General Transit Feed Specification) which means we have to clean it up before we can throw it into our system!


### Routing Engine

> Hey Catenary, when will you have a route planning thing?

> Hey Catenary, it would be so cool if we could plan trips!

> Hey Catenary, when can we plan a journey on your website?

We're working on it we swear (>_<) !!!

Truth be told, it's pretty difficult. There's a lot of moving parts—literally, the buses and trains run on a schedule and you need to know when you can board each vehicle and account for wait times and transfer stations, in addition to regular routing ideas such as shortest paths and travel speeds. Our algorithm set is based on this [paper](https://ad.informatik.uni-freiburg.de/files/transferpatterns.pdf) by Dr. Hannah Bast from the University of Freiburg, Germany. Unfortunatly, there is no code provided—but there is a lecture series she recorded based on this process! You can find it on this [website](https://ad-wiki.informatik.uni-freiburg.de/teaching/EfficientRoutePlanningSS2012). We highly recommend it (because we wouldn't have been able to get this far otherwise)!


### Route Generation
This is a planned project that will fix the route displays for many different agencies—the ones where instead of showing proper lines, the map just draws a straight line in between two stations, resulting in this kind of mess:

(show picture)

This is because the agency did not give us the actual "shape" of the route: a list of coordinate points that dictate where the vehicle passes through each second or so. Our engine currently cannot predict where this route exactly is, so it extrapolates by just drawing an ugly, messy line right across the map... and no one wants that! 

There's other problems too—sometimes agencies have the same station under two similar, yet different names (for example, "Union Station" versus "LA Union Station"). Other times, they might give us the route of a train but it doesn't match the location of the actual train tracks.

As such, we plan on integrating map-matching, route-generation algorithms to fix these displays when the agency doesn't give us the correct route shape. This is based on the work of Dr. Patrick Brosi (from Universit of Freiburg, Germany) in this [paper](https://drive.google.com/file/d/1DZFIB4Inwl_sK8B1oPQyl6cP7X2GP2Qs/view). Don't worry, we don't know what half of it means either. We'll get there... together!


### Distributed Systems
Thanks to an amazing donor from the Rust Conference 2024, Catenary has a server now! An actual server!

Our userbase continues to grow (which is excellent!) but this means that our computing power needs to grow as well. But how do we do that with the limited funding we have? The answer to this question is to build a distributed system: We split our computation across multiple machines across the world, and tell each of them to work on different tasks, or different components of tasks. We need both additional machines to help with this process, and people to help manage the codebase determining this task organization!

