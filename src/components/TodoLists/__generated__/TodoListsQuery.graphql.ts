/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TodoListsQueryVariables = {};
export type TodoListsQueryResponse = {
    readonly todo_list_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly name: string;
                readonly description: string;
                readonly idx: unknown;
            };
        }>;
    };
};
export type TodoListsQuery = {
    readonly response: TodoListsQueryResponse;
    readonly variables: TodoListsQueryVariables;
};



/*
query TodoListsQuery {
  todo_list_connection {
    edges {
      node {
        name
        description
        idx
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "idx",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "todo_listConnection",
        "kind": "LinkedField",
        "name": "todo_list_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "todo_listEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "todo_list",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "todo_listConnection",
        "kind": "LinkedField",
        "name": "todo_list_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "todo_listEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "todo_list",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "95e18f812590d4bf911742340a4a0e54",
    "id": null,
    "metadata": {},
    "name": "TodoListsQuery",
    "operationKind": "query",
    "text": "query TodoListsQuery {\n  todo_list_connection {\n    edges {\n      node {\n        name\n        description\n        idx\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5bd94a1757f6e35d8ec17d6dcfee8b72';
export default node;
