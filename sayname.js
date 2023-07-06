const obj = {
  posts: [
    { id: 1, title: 'json-server', author: 'typicode' },
    { id: 2, title: 'tutorials', author: 'ibrahim' },
  ],
};

//Write a function to expose the id and title of the data above
export function obj2() {
  return obj.posts.map((x) => {
    return { id: x.id, title: x.title };
  });
}

// console.log(obj2());
