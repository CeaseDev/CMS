import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function False_Evidence() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>Section 191 : Giving false evidence</AccordionHeader>
                <AccordionBody>
                    Under Section 191 of the IPC, an individual who is legally bound by an oath or by any express provision of the law to speak the truth or is obliged to make a declaration on any matter and makes any statement that is untrue and which he either knows or believes to be untrue or thinks it is untrue, is claimed to have provided false evidence.                  </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    Section 192 : Fabricating false evidence
                </AccordionHeader>
                <AccordionBody>
                    Under Section 192 of the IPC, a person is guilty of fabricating false evidence if he intentionally creates a situation or creates a document or electronic record containing a false statement with the intent that the situation or false statement may be used as evidence in a legal proceeding and that the situation or false statement will be used as evidence.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    Section 193 : Punishment for false evidence
                </AccordionHeader>
                <AccordionBody>
                    Under Section 193, any individual who deliberately gives false evidence in any court proceeding or furnishes false evidence with the motive of using it in court proceedings, will be penalised with imprisonment of either description for a term that may extend to seven years and be liable to a fine. Further, anyone who deliberately furnishess false evidence in any other case, will be liable to imprisonment for a term extendable up to three years and be liable to a fine, as well.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    Section 194 : Giving or fabricating false evidence with intent to procure conviction of capital offence
                </AccordionHeader>
                <AccordionBody>
                    Further, under Section 194, any individual who furnishes false evidence with the intention to cause or after being aware that it will cause any innocent person to be convicted of an offence that is punishable by the death penalty shall be given a penalty of life imprisonment or rigorous imprisonment for a period extendable up to 10 years and shall also be liable to pay a fine.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    Section 195 : Giving or fabricating false evidence with intent to procure conviction of offence punishable with imprisonment for life or imprisonment
                </AccordionHeader>
                <AccordionBody>
                    Moreover, under Section 195, any individual who furnishes false evidence with the intention to cause or after being aware that it will cause any innocent person to be convicted of an offence that is not punishable by the death penalty but punishable with imprisonment for life in prison or a term of seven years or exceeding it shall be held guilty of that offence and would be liable for punishment.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                    Section 196 : Using evidence known to be false
                </AccordionHeader>
                <AccordionBody>
                    Furthermore, under Section 196, anyone who fraudulently presents evidence that they know to be false or fabricated as true or genuine evidence is punished in the same way as if he gave or fabricated false evidence.                 </AccordionBody>
            </Accordion>

            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                    Section 197 : Issuing or signing false certificate
                </AccordionHeader>
                <AccordionBody>
                    Additionally, Section 197 states that any person who issues or signs any certificate that is required by law to be signed, or relates to any fact for which such a certificate is legally admissible in evidence, knowing or believing that such a certificate is false in any material point, will face the same punishment as if he provided false evidence.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(8)}>
                    Section 198: Using as true a certificate known to be false
                </AccordionHeader>
                <AccordionBody>
                    According to Section 198,  any individual who uses or attempts to use any evidence which he is aware is false or fabricated as true or genuine evidence, shall be given a punishment in the same manner as if he gave or fabricated false evidence.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(9)}>
                    Section 199 : False statement made in declaration which is by law receivable as evidence
                </AccordionHeader>
                <AccordionBody>
                    According to Section 199, any individual who, in any declaration made or subscribed to by him, in any court of law, or as a public servant or other individual, is obliged by the legal norms to get evidence of any fact, makes a false statement of which he has knowledge or believes it to be false or fabricated, will be punished in the same way as if he had furnished false evidence.
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default False_Evidence;