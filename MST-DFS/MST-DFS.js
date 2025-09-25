class Graph {
    
    constructor(numOfNodes, nodes, edges) {
        this.numOfNodes = numOfNodes;
        this.nodes = nodes;
        this.AdjList = new Map();
        this.visitedNodes = Array(this.numOfNodes).fill(false);
        this.edges = edges
    } 

    addNode(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        var get_keys = this.AdjList.keys();

        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values) {
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
    }
      Traversal(currentNode, acc) {
        if (this.visitedNodes[this.nodes.indexOf(currentNode)]) {
            return;
        }
        this.visitedNodes[this.nodes.indexOf(currentNode)] = true;
        console.log(currentNode);
        var neighbors = this.AdjList.get(currentNode);
        for (let i = 0; i < neighbors.length; i++) {
            this.Traversal(neighbors[i], this.edges.find(o => (o[0] = neighbors[i] && o[1] = currentNode) || (o[1] = neighbors[i] && o[0] = currentNode)))[0][2];
        }  
    }    
}

//Creating graph structure
var edges = "A-B-10;A-D-7;A-E-8;B-C-6;D-E-2;E-F-8;C-E-1;C-F-7"
    .split(";")
    .map((x) => x.split("-"))
    .map((arr) => [arr[0], arr[1], parseInt(arr[2], 10)]);

var nodes = []

for (var i = 0; i < edges.length;i++) {
    if (nodes.includes(edges[i][0]) != true) {
        nodes.push(edges[i][0]);
    }else if (nodes.includes(edges[i][1]) != true) {
        nodes.push(edges[i][1]);
    }
}

nodes.sort();


var g = new Graph(nodes.length, nodes, edges);

//Fix, should probally use other exsiting for statment
for (var i = 0;i < nodes.length;i++) {
    g.addNode(nodes[i]);
}

// adding edges to g
for (var i = 0; i < edges.length; i++) {
    console.log(edges[i][0], edges[i][1]);
    g.addEdge(edges[i][0], edges[i][1]);
}

g.DFS('A');
