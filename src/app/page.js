import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function StartPage({}) {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
    if (!currentStory) throw new Error();

    //test
    const bodyComponents = currentStory.content.body;

    const mainComponent = bodyComponents.find(component => component.component === "title");

    if (!mainComponent) throw new Error("Relevant component not found");

    const { title, description, image } = mainComponent;

    //return <StoryblokStory story={currentStory} />;

    //rendera
    return (
      <div>
        <h1>{title}</h1>
        
        <p>{description}</p>
       
        {image && (
          <img src={image.filename} alt={image.alt || title} />
        )}

        
        <StoryblokStory story={currentStory} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
