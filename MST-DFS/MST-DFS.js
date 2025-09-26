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
    Traversal() {
        var graph = this.edges;
        var unvisted = this.nodes;
        var visted = [];
        var totalWeight = 0;
        graph.sort((a,b) => a[2] - b[2]);        
        //console.log(graph);        

        while (unvisted.length != 0) {
            if (visted.length <= 0) {
                totalWeight += graph[0][2];
                //console.log(unvisted)
                unvisted.splice(unvisted.indexOf(graph[0][0]), 1);
                unvisted.splice(unvisted.indexOf(graph[0][1]), 1);
          //      console.log(unvisted);
                visted.push(graph[0][0]);
                console.log(graph[0][0]);
                visted.push(graph[0][1]);
                console.log(graph[0][1]);
                graph.splice(0,1);
            //    console.log("I have removed the firt edge!!!!!");
            }
           // console.log(graph);
            var workingArr = [];
           // console.log(visted);
           // console.log(unvisted);
            for (var i = 0; i < graph.length; i++) {
                if (visted.includes(graph[i][0]) && unvisted.includes(graph[i][1]) || visted.includes(graph[i][1]) && unvisted.includes(graph[i][0])) {
                    workingArr.push(graph[i]);
                }
            }            
          //  console.log(workingArr);

            if (visted.includes(workingArr[0][0]) && unvisted.includes(graph[0][1])) {
                visted.push(workingArr[0][1]);
                console.log(workingArr[0][1]);
                unvisted.splice(unvisted.indexOf(workingArr[0][1]), 1);
            }else{
                visted.push(workingArr[0][0]);
                console.log(workingArr[0][0]);
                unvisted.splice(unvisted.indexOf(workingArr[0][0]), 1);
            }
            
            totalWeight += workingArr[0][2];
            graph.splice(graph.indexOf(workingArr[0]), 1);
        }
        console.log("The total weight for the minimum spanning tree is: " + totalWeight)
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
    g.addEdge(edges[i][0], edges[i][1]);
}

g.Traversal();
