// define type alias for object type
type NewsArticle = {
    title: string;
    content: string;
    featuresArticle: boolean;
    author: string;
    publishedDate: string;
    mainImage?: string; // optional property
}
// create a Article object using the type alias
const article: NewsArticle = {
    title: "TypeScript Type Aliases",
    content: "Type aliases in TypeScript allow you to create a new name for a type. This can be useful for simplifying complex types or creating more readable code.",
    featuresArticle: true,
    author: "David Smith",
    publishedDate: "2024-06-15"
}

// create a function that takes a NewsArticle object as a parameter and logs its details
const logArticleDetails = (article: NewsArticle) => {
    console.log(`Title: ${article.title}`);
    console.log(`Content: ${article.content}`);
    console.log(`Features Article: ${article.featuresArticle}`);
    console.log(`Author: ${article.author}`);
}

logArticleDetails(article);