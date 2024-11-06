# Routing Engine

How do I get from point A to point B? This is the question that our devs at Catenary are currently trying to solve. One highly requested (and essential) map feature is the ability to find routes between locations and plan trips ahead of time. For example, if you were on a trip in an unfamiliar area, you might want to figure out what buses/trains to take or how to walk to the stations. This sort of feature exists in many other map programs, but Catenary has yet to implement one. It's in the works, and we can use your help! 

Now, let's get into the juicy bits. It's going to get a lot more technical from here out, unfortunatly, there's no avoiding it. Ready?


## Graph Algorithms
The routing problem (finding a path between points A and B), is most often associated with graphs in computer science. No, not the y = f(x) kind of graph, we're talking about another kind here—the data structure! By itself, it's a pretty simple idea: Each data point is represented as a "node", and these nodes are connected to related data points by "arcs". The idea of a graph is actually even easier to understand when you think of it as a literal transit network—each bus stop, train station, ferry terminal, and etc. can be seen as a node, while the path that the vehicle takes between the stops are the arcs. Sometimes, you may see the word "edges" being thrown around instead of "arc". An edge is simply an undirected arc, where you can travel back and forth between to nodes directly. This isn't common in transit since the return vehicle departs from the opposite direction, but in footpaths (that is to say, if you're walking on a sidewalk) this is usually the case. 

Now, in particular, we want to find the **optimal path** between two locations, which means we'll be using algorithms related to graph traversal and shortest path algorithms—where we aren't always looking for the literal shortest path, but the path that "costs" the least in some way or another, like least waiting time between transfers or least walking needed to reach a station. Meanwhile, we also need to take into account the schedules of the transit network on hand because unlike with cars, transit vehicles are conformed to stops along certain routes and they only pass through these stops once in a while, so everything has to be timed carefully (including to account for delays!)


## Transfer Patterns (TP)

### What is TP?
"Transfer Patterns" is short for *Fast Routing in Very Large Public Transportation Networks using Transfer Patterns*, a [research paper](https://ad.informatik.uni-freiburg.de/files/transferpatterns.pdf) written in 2012 by a team of researchers from the University of Freiburg, the Swiss branch of Google, and Karlsruhe Institute of Technology. In this paper, the authors outlined how to compute, from transit data, the optimal transfer(s) to take to get from one point on the map to another. The term "transfer pattern" itself refers to the set of vehicles that a user could take to reach stop B from stop A (e.g. a potential TP in an imaginary transit network would be to take the metro Blue line from Main-Roosevelt to 1st-Roosevelt and then take the Green line from 1st-Roosevelt to Central Union Station). The first author, Dr. Hannah Bast, later published another paper with her collegues describing a [scalable version](https://ad-publications.cs.uni-freiburg.de/ALENEX_scalable_tp_BHS_2016.pdf) of this algorithm set as well. In fact, Dr. Bast publicized a [video course series](https://ad-wiki.informatik.uni-freiburg.de/teaching/EfficientRoutePlanningSS2012) that walks the viewer through various routing algorithms and leads up to her having the students implement a few ideas in code from the paper itself.

"Wow, that's exactly what we need!" You exclaim, "It's probably all smooth sailing now that you found somewhere to start, right?"

Yes, and no. While this paper and course are amazing and informative, they don't include any working code—only code skeletons with suggestions at the most, and its taylored for object-oriented C++/Java, rather than Rust synatax. The course doesn't go over a full implementation of the paper either, only a program to count how many optimal transfer patterns it takes to travel from a random station A to all stations B connected to it. Unfortunatly, we need a working copy of this code. Which means, a lot of coding, testing, coding, testing, etc.

### How does TP work?

TBA

# [The Code](https://github.com/catenarytransit/catenary-routing-engine)
That above is currently all we have for routing, thus far. The author is working on commenting all of the functions, but everything is a work in progress. Feel free to reach out to the Catenary devs via your prefered mode of contact and ask any questions you have!
