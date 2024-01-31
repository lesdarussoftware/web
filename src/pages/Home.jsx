import { Presentation } from "../components/Presentation";
import { Services } from "../components/Services";

export function Home() {
    return (
        <>
            <section>
                <Presentation />
            </section>
            <section>
                <Services />
            </section>
        </>
    )
}