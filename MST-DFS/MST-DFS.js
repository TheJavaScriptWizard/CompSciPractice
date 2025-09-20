class Graph {
    
    constructor(numOfNodes,nodes)
    {
        this.numOfNodes = numOfNodes;
        this.nodes = nodes;
        this.AdjList = new Map();      
        this.visitedNodes = Array(this.numOfNodes).fill(false);
    }

    addNode(v)
    {
        this.AdjList.set(v, []);
    }

    addEdge(v, w)
    {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph()
    {
        var get_keys = this.AdjList.keys();

        for (var i of get_keys)
        {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
            {
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
    }
    
    DFS(currentNode)
    {
        if (this.visitedNodes[this.nodes.indexOf(currentNode)]) {
            return;
        }else{
            this.visitedNodes[this.nodes.indexOf(currentNode)] = true;

            var neighbors = this.AdjList.get(currentNode);
            for (let i = 0; i < neighbors.length; i++) {
                this.DFS(neighbors[i]);
            }  
        }
    }

}

// Using the above implemented graph class
var nodes = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
var g = new Graph(6,nodes);

// adding vertices
for (var i = 0; i < nodes.length; i++) {
    g.addNode(nodes[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
g.DFS('A');
