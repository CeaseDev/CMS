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

function Judicial_Process() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>I. Proper implementation of procedural laws</AccordionHeader>
                <AccordionBody>
                    A series of provisions have been introduced in procedural laws to enable the expeditious disposal of criminal and civil cases. These include, amendment of Section 309, CrPC to discourage unnecessary adjournments; amendment of Section 320, CrPC to rationalise the list of compoundable offences; insertion of a new Chapter XXIA on plea bargaining; insertion of Section 436A for release of undertrial prisoners who have undergone half of the maximum imprisonment; and amendments to Sections 161(3), 164 and 275 of CrPC to allow use of audio / video technology in criminal cases. In case of civil trials, relevant amendments to the CPC include provisions to impose limit on the number of adjournments that may be granted to each party to three times and imposition of costs for adjournments; allowing service of summons using email, fax, speed post, courier services or directly through the plaintiff; providing for dismissal of suit where summons are not served in consequence of plaintiffs’ failure to pay costs; and limiting the time limit for filing of written statement by the defendant.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    II. Reforms in service of summons
                </AccordionHeader>
                <AccordionBody>
                    Delay in service of summons is a major hurdle in the speedy delivery of justice. Certain amendments have already been made to the CPC to address this issue. In addition to the legislative changes, the National Mission had requested High Courts and State Governments to consider measures such as a one-time collection of process fee, clubbing of process fee with the court fee, and the use of Information Communication Technology (ICT) systems for service of process. Several High Courts have responded positively to the suggestion on collection of one time process fee by stating that they have either implemented or are in the process of considering such measures. As regards the suggestion on adoption of ICT, it is noted that a majority of High Courts are yet to formalize and adopt ICT tools for the purpose of expediting process service. Given that the efforts to make courts more ICT enabled have been ongoing for several years now, there is an urgent need for States and High Courts to act expeditiously on this issue.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    III. Pre-trial hearing and case management systems
                </AccordionHeader>
                <AccordionBody>
                    The issue of having time limits for various stages of a trial has come up before the Supreme Court on several occasions. In Abdul Rehman Antulay versus R.S. Nayak the Supreme Court held that it is not possible to lay down any time schedules for conclusion of criminal proceedings. This is because the time taken in the disposal of a case depends on a number of factors, such as, the nature of offence, the number of accused, the number of witnesses, the work-load in the particular court, means of communication and other circumstances. Following this the Supreme Court laid down in the Common Cause and Raj Deo Sharma cases that trial in pending cases would be terminated if specified time limits were not adhered to. The matter was finally settled through the decision in the P. Ramachandra Rao case where a larger bench of the Court concluded that the bars of limitation created in the abovementioned cases were impermissible because (i) it amounted to the creation of legislation by the judiciary, which was an activity beyond their powers and (ii) the creation of such bars was contrary to the law laid down by the Constitution Bench in A.R. Antulay’s case. Even in cases where certain time limits have been statutorily provided the view of the Supreme Court has been that these are meant to be directory in nature and not mandatory.
                    <br /><br />
                    Even though it may not be feasible to prescribe strict time limits for the disposal of cases, the adoption of better case management strategies can help in the timely dispensation of justice. Case management includes management and scheduling of the time and events in a suit as it progresses through the justice delivery system. It helps the court to establish managerial control over the case by setting the time schedule for the predetermined events and by supervising the progress of the suit as per the time schedule.

                    <br /><br />

                    The system of pre-trial hearing, which is common in several countries such as the United Kingdom, Singapore and the United States of America, is an important component of the case management process. A pre-trial hearing or conference is a scheduled meeting between the litigants and their counsels conducted prior to trial before a judge or a judicial authority. The object of pre-trial conference is to identify clearly the issues in dispute so as to facilitate expeditious disposal of case through proper case management.

                    <br /><br />

                    The objectives sought to be achieved by introducing pre-trial hearing are manifold. Firstly pre-trial hearing may help in ensuring expeditious disposal of cases by assisting the courts in establishing managerial control over the cases and keeping a check on undue delays being caused during trial. Secondly it helps in defining and clarifying the scope of the trial and helps in keeping the focus on the real issues in dispute. Thirdly such an exercise of clarification and discoveries has potential to assist parties to better understand their case and assists the court in timely dispensation of justice by conducting a smooth and hassle free trial. Lastly pre-trial hearing may prove to be of great help in facilitating a settlement of dispute by way of an amicable compromise between the parties.

                    <br /><br />

                    In India the system of pre-trial hearing is not clearly identified as a distinct feature of our judicial process although both the Civil Procedure Code and Criminal Procedure Code contain certain provisions that can be utilized for this purpose. The Supreme Court in the case of Ramrameshwari Devi v Nirmala Devi had also recommended certain steps that trial courts should follow to improve the system of administration of justice in civil cases. This included, carefully scrutinizing the pleadings and documents filed by parties immediately after the filing of civil suits; resorting to the discovery and production of documents and interrogatories at the earliest; and preparing a complete time schedule for all the stages of the suit and strictly adhering to the said dates as far as possible.

                    <br /><br />

                    The Commercial Courts, Commercial Division and Commercial Appellate Division Act (Commercial Court Act) provides for the establishment of Commercial Divisions in High Courts in areas in which the High Court exercises original jurisdiction and Commercial Courts at the District level in other areas. The Commercial Division or the Commercial Court as the case may be has the exclusive jurisdiction in relation to all commercial disputes in which the value of the subject matter is Rs. one crore or more.
                    <br /><br />

                    The Commercial Court Act also requires the High Courts to set up Commercial Appellate Divisions within each High Court to hear appeals from the orders of Commercial Courts and Commercial Division and endeavor to dispose of them within 6 months of their filing date. The Commercial Court Act has introduced important amendments to the Code of Civil Procedure, 1908 to ensure expeditious disposal of cases. These amendments include provisions on (i) case management hearing and (ii) detailed and stringent procedures for discovery, disclosure and inspection of documents. It is pertinent to note that at the time of the case management hearing, the court is required to ensure that the arguments are closed within 6 months from the date of the first case management hearing. The Commercial Court or the Commercial Division as the case may be is required to pronounce judgement within 90 days of the conclusion of the arguments. To curb frivilous litigation, the court may grant summary judgment against the plaintiff or the defendant if it considers that the plaintiff has no real prospect of succeeding on the claim or the defendant has no real prospect of successfully defending the claim.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    IV. Promoting use of ADR mechanisms
                </AccordionHeader>
                <AccordionBody>
                    Promoting the widespread use of alternate dispute resolution (ARD) mechanisms such as mediation, conciliation, arbitration and lok adalats is an effective means of settling disputes without resorting to the formal litigation process. This can help ease the burden of courts, reduce pendency and ensure speedy delivery of justice. The organization of Lok Adalats for the amicable settlement of disputes in a timely and cost effective manner is the responsibility of the National Legal Services Authority and State and District Legal Services Authorities that have been established under the Legal Services Authorities Act, 1987.
                    <br /><br />
                    The concept of ADR has now become an integral part of the CPC with the insertion of Section 89. In this context, it would be pertinent to refer to the decisions of the Supreme Court in Salem Advocates Bar Association v. Union of India and in Afcons Infrastructure Ltd. v. Cherian Varkey Construction Pvt. Ltd Through these decisions the Court held that after referring a matter to the admissions and denials, courts should direct the parties to opt for one of the modes of ADR specified in Section 89. Courts may mandatorily refer certain categories of matters for resolution through ADR, namely, mediation, judicial settlement and lok adalats.
                    <br /><br />
                    In October, 2014 the Minister for Law and Justice wrote to the Chief Justices of all High Courts stressing on the need for effective utilization of ADR mechanisms in civil cases. He inter alia suggested that High Courts may consider giving additional credit points to judicial officers/ judges in their performance appraisal for settling disputes through ADR mechanisms.
                    <br /><br />
                    The Government has by virtue of the Arbitration and Conciliation (Amendment) Act, 2015 (Amendment Act) amended the Arbitration and Conciliation Act, 1996 to streamline the arbitration process and ensure that the arbitration proceedings are completed within a time bound period. Further, it also seeks to reduce the intervention of the courts in the arbitration proceedings by clarifying and reducing the grounds of judicial interference especially in cases of interim relief as well as in seeking the enforcement of the arbitral award. The scope of judicial interference on the grounds of public policy has been amended to limit it to only (i) only where making of award was induced or affected by fraud or corruption; (ii) where the award is found to be in contravention with the fundamental policy of Indian law; (iii) or basic notions of morality and justice.
                    <br /><br />
                    As per the Amendment Act, the arbitral award is required to be made within 12 months. The parties may by mutual consent agree to extend the term of the arbitral tribunal, for a term not exceeding 6 months. The Amendment Act further provides the parties the option to have the dispute resolved by fast track procedure.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    V. Judicial data and statistics
                </AccordionHeader>
                <AccordionBody>
                    The lack of comprehensive and accurate data relating to cases from courts across the country poses a hurdle to efficient policymaking. This issue has been noted by the Law Commission of India in its 245th Report as well as in the Action Plan of the National Court Management System set up by the Supreme Court. There is therefore an urgent need to evolve uniform data collection and management methods for our judicial system. Online information about case filings, case status and electronic copies of orders and judgments from courts that have already been computerized is available through the e-Courts portal. However, we are still some way from ensuring online real- time access to complete pendency data and statistics through the National Judicial Data Grid (NJDG). This requires support from the High Courts to complete the data entry of all pending cases of subordinate courts so that information gets updated on the NJDG servers on a regular basis. In order to promote uniformity in judicial data and statistics, it was resolved at the Conference of Chief Justices held in April 2015 that for statistical purposes the High Courts will count the main cases only towards pendency and arrears. Interlocutory applications will continue to be separately numbered in original proceedings before the High Courts exercising original jurisdiction.
                    <br /><br />
                    While on the one hand judicial statistics are important for policy formulation by the judiciary and the government on the other hand it is equally important to place this information in the public domain so that the key stakeholders like advocates, litigants, researchers and the public at large can be better informed about the state of the judicial system. The Annual Report of each High Court can play an important role in highlighting the work of judiciary as a public institution.
                    <br /><br />
                    Adoption of electronic case management systems, automation of court processes and introduction of electronic case filings are important tools for achieving the timely enforcement of contracts. Accordingly, significant efforts are being made towards adoption of information and communication technology in district and subordinate courts under the eCourts Integrated Mission Mode Project.
                    <br /><br />
                    The successful completion of the ICT initiatives and adoption of uniform data collection practices will facilitate better identification and classification of cases, reduction of paperwork, efficient monitoring and time management and improved tracking of overall pendency trends. It will also relieve judges and other court staff from routine administrative activities and allow them to focus on judicial functions. Real-time online data would enable High Courts to exercise proper supervision and control over subordinate courts.
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default Judicial_Process;