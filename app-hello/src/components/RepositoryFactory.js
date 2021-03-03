
import PostRepository from './postRepo';
const repositories = {
	posts : PostRepository,
};
export const RepositoryFactory = {
	get : name => repositories[name]
}