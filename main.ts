import { createClient } from './db';
import { createUsersAndPosts } from './utils';

async function main() {
  const db = await createClient();
  await createUsersAndPosts(db);

  console.log('Delete a unique post');
  console.log(await db.post.delete({ where: { id: 1 } } ));

  console.log('Delete many posts');
  console.log(await db.post.deleteMany({ where: { published: false } }));
}

main();
