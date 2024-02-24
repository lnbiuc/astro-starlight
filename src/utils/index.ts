export function getFileName(path: string | null | undefined) {
	// @ts-expect-error no error
	return path ? path.match(/[^/]+(?=\.mdx$)/)[0] : '/';
}
