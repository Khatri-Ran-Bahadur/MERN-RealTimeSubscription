/*============================================
      Query ALL
======================================*/
// All Posts
{
  allPosts {
    id
    title
    description
  }
}

// Create New Post

/* direct sending data without mutation input type like mutation
 * mutation newPost(title:String!,description:String!):Post!
 */
mutation {
  newPost(title: "Your Title", description: "Your Description") {
    id
    title
    description
  }
}

/*====================================================
      Mutation 
========================================*/

/* direct sending data without mutation input type like mutation
 * mutation newPost(input:PostInput!):Post!
 */

mutation newPost($input: PostInput!) {
  newPost(input: $input) {
    id
    title
    description
  }
}

//Query Variables
{
  "input": {
    "title": "Foour Poust",
    "description": "My Description"
  }
}


/*===========================================
====================================*/