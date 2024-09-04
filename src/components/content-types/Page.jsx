import { StoryblokComponent } from "@storyblok/react/rsc";

// Content-type component (acts as template for all pages)
export default function Page({ blok }) {
    // Filtrera ut alla 'title'- och 'about_title'-komponenter
    const titleBloks = blok.body.filter(blokItem => blokItem.component === 'title' || blokItem.component === 'about_title');

    // Filtrera alla section_1-komponenter
    const section1Bloks = blok.body.filter(blokItem => blokItem.component === 'section_1');

    return (
        <main className="flex flex-col">
            {/* Rendera den första title-komponenten */}
            {titleBloks.length > 0 && (
                <div key={titleBloks[0]._uid} className="flex items-center p-8">
                    <div className="text-left w-1/2">
                        <h1 className="text-4xl font-bold mb-4">{titleBloks[0].title}</h1>
                        <p>{titleBloks[0].description}</p>
                        {titleBloks[0].button && titleBloks[0].button.length > 0 && (
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() => alert('Button clicked!')}
                            >
                                {titleBloks[0].button[0].titel}
                            </button>
                        )}
                    </div>
                    {titleBloks[0].image && (
                        <img
                            src={titleBloks[0].image.filename}
                            alt={titleBloks[0].image.alt || titleBloks[0].title}
                            className="w-1/2 h-auto ml-4"
                        />
                    )}
                </div>
            )}

            {/* Rendera section_1-komponenterna */}
            <div className="flex flex-wrap mt-8 mb-8 justify-between">
                {section1Bloks.map(section1Blok => (
                    <div key={section1Blok._uid} className="w-1/5 p-4 border border-gray-300 h-100 flex flex-col justify-between">
                        <h2 className="text-2xl font-bold mb-2">{section1Blok.title}</h2>
                        <p>{section1Blok.description}</p>
                        {section1Blok.image && (
                            <img
                                src={section1Blok.image.filename}
                                alt={section1Blok.image.alt || section1Blok.title}
                                className="w-full h-32 object-cover mt-2"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Rendera den andra title-komponenten (om den finns) */}
            {titleBloks.length > 1 && (
                <div key={titleBloks[1]._uid} className="flex items-center p-4 mb-8">
                    <div className="text-left w-1/2">
                        <h1 className="text-4xl font-bold mb-4">{titleBloks[1].title}</h1>
                        <p>{titleBloks[1].description}</p>
                    </div>
                    {titleBloks[1].image && (
                        <img
                            src={titleBloks[1].image.filename}
                            alt={titleBloks[1].image.alt || titleBloks[1].title}
                            className="w-1/2 h-auto ml-4"
                        />
                    )}
                </div>
            )}
        </main>
    );
}
