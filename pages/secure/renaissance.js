import React, {useEffect} from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';

const Renaissance = () => {


    useEffect(() => {
        for( let elem of document.getElementsByClassName("displayTile"))
            elem.style.backgroundColor = "#1e1e1e";
    }, []);

    let tiles = [
        {
            title: "Overview",
            content: `The following is a collection of relevant sources, both internal and external, converning the failed
                project renaissance and the incident on <span style="color: black">██</span>/<span style="color: black">██</span>/<span style="color: black">████</span>.
                The following information should be shared as a warning to all of those with sufficent security clearance.
                <br><br>We cannot let an incident like this happen again.`
        },
        {
            title: "Select Publicly Available Context Resources",
            content: `The following is a series of external news articles and public reporting
                surrounding the events of 
                <span style="color: black">██</span>/<span style="color: black">██</span>/<span style="color: black">████</span>.
                <br><b>[BEGIN ARCHIVE]</b>
                <br>------------<br>
                [SOURCE]: <i>Singularity News</i><br>
                Mathesis Labs has reported a massive fire at one of their facilities.  This has resulted in the complete
                lockdown of their facility, with all power supplies cut off from it.  Despite official reports from the
                nearest fire station confirming the report, witnesses several miles from the exclusion zone reported
                seeing a notable lack of fire engines among the military assault company advancing to the facility.  
                When questioned about a possible link to its artificial intelligence development in the lab, Mathesis
                denied any connection. <b>[DATA TRUNCATED]</b>
                <br>------------<br>
                [SOURCE]: <i>Singularity News</i><br>
                Reports continue to come in as many employees of the Mathesis facility are not being allowed back to
                continue their work.  This comes along with a declaration by the U.S. government of a 50km exclusion
                zone around the facility, with only military personnel allowed inside.  In the absence of an official
                statement, wild speculation has erupted around the true nature of the events in the facility. <b>[DATA TRUNCATED]</b>
                <br>------------<br>
                [SOURCE]: <i>PSA issued to the residents of <b>[REDACTED]</b> and the surrounding area</i><br>
                This is an electronic public service announcement issued to <b>[REDACTED]</b> county.  Due to a possible nerve agent leak
                at the nearby <i>Mathesis Labs</i> facility, no residents will be allowed within 30 miles.  Law enforcement has been
                authorized to utilize deadly force to ensure the agent is contained.  Internet networks in the area have been throttled
                to ensure open communication for emergency personnel.
                <br>------------<br>
                [SOURCE]: <span style="color: black">███████████</span> <i>City Times</i><br>
                The state governor has recently issued an internet blackout for several counties surrounding <i>Mathesis'</i> facility
                outsize of <b>[REDACTED]</b>.  Residents of the wider area are strongly encouraged to evacuate the area and limit the usage
                of any electronic devices.  The threat of narve agent exposure looms over the area, although our sources have been unable
                to confirm any cases of exposure.  There has been no previous talk <i>Mathesis</i> developing such agents at the lab before
                this week, leading some residents to question the validity of the claims.<b>[DATA TRUNCATED]</b>
                <br>------------<br>
                [SOURCE]: <span style="color: black">███████████</span> <i>City Times</i><br>
                At 4AM local time, multiple residents reported a powerful explosion.  Since very few people were remaining in the area, there
                has been no reported fatalities, only reports of minor injuries from the subsequent shockwave.  The exact origin of the explosion
                is unknown, but increased activity near the labs gives us some clues as to its source.<b>[DATA TRUNCATED]</b>
                <br>------------<br>
                [SOURCE]: <i>Singularity News</i><br>
                <i>Mathesis</i> has reportedly halted all artificial intelligence development, according to an anonymous source that claims to
                be employed at the facility in <b>[DATA EXPUNGED]</b>.  <i>Mathesis</i> has yet to make an official statement in response, but company
                leadership has denied all claims through their own social media accounts.  This news comes after a series of incidents at their
                facility that lead to significant disruption for local residents.  Officially, the area surrounding the lab had been exposed to
                an undisclosed nerve agent, although public trust in this story has waned after disruptions to internet access and electronics usage.
                The leaker, claiming to be <b>[DATA TRUNCATED]</b>
                <br><b>[END LOG]</b>`,
        },
        {
            title: `Pre-Incident Email Logs`,
            content: `The following is a series of internal Mathesis <span style="color: black">██████████████</span> research
                division e-mails describing the events prior to and during <span 
                style="color: black">██</span>/<span style="color: black">██</span>/<span style="color: black">████</span>.<br>
                <br><b>[BEGIN LOG]</b>
                <br>------------<br>
                From: pisanleo@mathesisinternational.net
                To: renaissancehead
                Subject: Continued Failure"
                The intelligence's performance in most tasks has continued to decline.  We are still unsure as to why.  We speculate
                that its overhead limiters are causing the problem.  George brought up the idea of decreasing its intelligence 
                limiters, although there is some contention as to weather that is safe. We plan to follow this course of action while
                monitoring its behavior closely.
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: renaissancehead<br>
                Subject: Strange Behavior<br><br>
                Several of the scientists working on Project Renaissance, myself included, have noticed some strange behavior
                from the chief intelligence, its power usage has increased dramatically, and we really don't know what's
                going on in there.  Please advise.
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: admn, intellidir, renaissancehead<br>
                Subject: Concern<br><br>
                The strange behavior has continued, a majority agreement was reached that this looks like the beginning of a
                singularity.  As we do not believe the chief has gained human-level intelligence yet, we have lowered the
                power being given to it to dampen its efforts.  The situation appears to be under control.
                <br>------------<br>
                From: renaissancehead<br>
                To: pisanleo@mathesisinternational.net<br>
                Subject: RE: Concern<br><br>
                It better be, need I not remind you of the sizable contract we are pursuing.  I need that intelligence intact at all costs, understood?
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: admn, intellidir, renaissancehead<br>
                Subject: Please Advise<br><br>
                After much deliberation, myself, along with the others, have agreed that the chief intelligence has become quite worrying.<br>
                We strongly ask your consent to investigate, and even suspend the project if necessary.
                <br><br>
                Further documentation has been attached.
                <br>------------<br>
                From: renaissancehead<br>
                To: pisanleo@mathesisinternational.net<br>
                Subject: RE: Please Advise<br><br>
                I understand your concern. I will leave this decision up to you, our jobs depend on this success.
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: renaissancehead<br>
                Subject: RE: RE: Please Advise<br><br>
                We will proceed, but with extreme caution.  Any further strange behavior will force our hand.
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: renaissancehead<br>
                Subject: Singularity<br><br>
                After further analysis, we have come to a dreaded conclusion.  The chief intelligence has achieved post-human intelligence, at least.
                A machine like this, we cannot hope to control. Our only option is to terminate it.  Only today it has
                <span style="color: black">█████████████████████ ████████████████████████
                ███████████ ████████████████████ █████████████████████ ██████████████ ███████████████████████</span>
                <br>------------<br>
                <b>[25 ENTRIES EXPUNGED]</b>
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: renaissancehead<br>
                Subject: <span style="color: black">█████████</span><br><br>
                <span style="color: black">███████████ ██████████████████
                ███████████ ██████████████████████ ██████████████ ████████ ██████████████</span><br>
                There is no forgiveness now.
                <br><b>[END LOG]</b>`,
        },
    ];
    let pageInfo = {
        title: "Project Renaissance Archive",
        summary: "Internal Incident Archive",
        pageName: "renaissance_archive",
        holderStyle: {backgroundColor: "#1e1e1e"},
        tags: ["research", "ai"]
    };
    return (<Wrapper pageName={pageInfo.pageName}>
        <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
            <div className="inner titleCard">
                <h1 style={{margin: "auto", width: "auto", textAlign: "center", color: "#37a85b"}}><b>{pageInfo.title}</b></h1><br/>
                <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>{pageInfo.summary}</h3>
            </div>
            {buildPage(pageInfo, tiles)}
        </div>
    </Wrapper>);
};

export default Renaissance;