import { useState } from "react";

export default function Accordion(){
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="limite">
            <h2> Almaty, Kazakhstan</h2>
            <Panel 
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                >
                    With a population of about 2 million, Almaty is 
                    Kazakhstan´s largest city.  From 1929 to 1995, it was its capital city.
                </Panel>
                <Panel 
                     title="Etymology"
                     isActive={activeIndex === 1}
                     onShow={() => setActiveIndex(1)}
                     >
                        The name comes from <span lang="kk-KZ">anma</span>,
                        the Kazakh word for "apple" and is often tranlated as "fullof apples".
                </Panel>
        </div>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow }) {
        return (
            <section className="panel">
                <h3> {title}</h3>
                {isActive ? (
                    <p>{children}</p>) : (
                        <button onClick={onShow}>
                            Show
                        </button>
                    )}
            </section>
        );
    }