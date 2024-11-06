# Routing Engine

How do I get from point A to point B? This is the question that our devs at Catenary are currently trying to solve. One highly requested (and essential) map feature is the ability to find routes between locations and plan trips ahead of time. For example, if you were on a trip in an unfamiliar area, you might want to figure out what buses/trains to take or how to walk to the stations. This sort of feature exists in many other map programs, but Catenary has yet to implement one. It's in the works, and we can use your help! 

Now, let's get into the juicy bits. It's going to get a lot more technical from here out, unfortunatly, there's no avoiding it. Ready?

## Graph Algorithms
The routing problem (finding a path between points A and B), is most often associated with graphs in computer science. No, not the y = f(x) kind of graph, we're talking about another kind here—the data structure! By itself, it's a pretty simple idea: Each data point is represented as a "node", and these nodes are connected to related data points by "arcs". The idea of a graph is actually even easier to understand when you think of it as a literal transit network—each bus stop, train station, ferry terminal, and etc. can be seen as a node, while the path that the vehicle takes between the stops are the arcs. Sometimes, you may see the word "edges" being thrown around instead of "arc". An edge is simply an undirected arc, where you can travel back and forth between to nodes directly. This isn't common in transit since the return vehicle departs from the opposite direction, but in footpaths (that is to say, if you're walking on a sidewalk) this is usually the case. 

Now, in particular, we want to find the **optimal path** between two locations, which means we'll be using algorithms related to graph traversal and shortest path algorithms—where we aren't always looking for the literal shortest path, but the path that "costs" the least in some way or another, like least waiting time between transfers or least walking needed to reach a station. Meanwhile, we also need to take into account the schedules of the transit network on hand because unlike with cars, transit vehicles are conformed to stops along certain routes and they only pass through these stops once in a while, so everything has to be timed carefully (including to account for delays!)

##
