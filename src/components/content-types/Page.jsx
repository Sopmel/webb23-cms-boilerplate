import { StoryblokComponent } from "@storyblok/react/rsc";

//Content-type component (acts as template for all pages)
export default function Page({ blok }) {
    return (
        <main className="flex flex-col">
            {blok?.body?.map((blokItem) => {
                if (blokItem.component === "title" || blokItem.component === "about_title") {

                    // Anpassad rendering för title-komponenten
                    return (
                        <div key={blokItem._uid} className="flex items-center p-4">
                            <div className="text-left w-1/2">
                                <h1 className="text-4xl font-bold mb-4">{blokItem.title}</h1>
                                <p>{blokItem.description}</p>
                            </div>
                            {blokItem.image && (
                                <img
                                    src={blokItem.image.filename}
                                    alt={blokItem.image.alt || blokItem.title}
                                    className="w-1/2 h-auto ml-4"
                                />
                            )}
                        </div>
                    );
                }

                // Standard rendering för andra komponenter
                //return <StoryblokComponent blok={blokItem} key={blokItem._uid} />;
            })}
        </main>
    );
}
