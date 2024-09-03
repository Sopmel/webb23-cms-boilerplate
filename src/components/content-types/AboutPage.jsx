import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import Page from "@/components/Page";

export async function generateMetadata() {
    return StoryblokCMS.generateMetaFromStory("home");
}

export default async function AboutPage({ }) {
    try {
        const currentStory = await StoryblokCMS.getStory({ slug: ["about"] });
        if (!currentStory) throw new Error();

        return <Page blok={currentStory.content} />;
    } catch (error) {
        notFound();
    }
}
export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";