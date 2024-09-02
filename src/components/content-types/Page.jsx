import { StoryblokComponent } from "@storyblok/react/rsc";

//Content-type component (acts as template for all pages)
export default function Page({ blok }) {
    return (
        <main className="flex flex-col">
            {blok?.body?.map((blokItem) => {
                if (blokItem.component === "title") {
                    // Anpassad rendering för title-komponenten
                    return (
                        <div key={blokItem._uid}>
                            <h1 className="text-4xl font-bold">{blokItem.title}</h1>
                            <p>{blokItem.description}</p>
                            {blokItem.image && (
                                <img
                                    src={blokItem.image.filename}
                                    alt={blokItem.image.alt || blokItem.title}
                                    className="my-4"
                                />
                            )}
                        </div>
                    );
                }

                // Standard rendering för andra komponenter
                return <StoryblokComponent blok={blokItem} key={blokItem._uid} />;
            })}
        </main>
    );
}
