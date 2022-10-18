import React from 'react'
import { parse } from 'html-react-parser';

export default function TermsJs() {
    // const terms.js = parse('')
    const feedbackCss = 'dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-300 shadow md:px-10 py-5 md:py-16 px-5 mb-5 md:mb-16 my-5 md:my-16 mx-2 md:mx-5 md:mx-16 rounded-neat relative overflow-hidden'
const titles = 'mt-4 text-2xl sm:text-3xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 '
  return (
    <>

<div className={feedbackCss}>
<h1>Website Terms and Conditions of Use</h1>

<h4  className={titles}>1. Terms</h4>

<p>{`By accessing this Website, accessible from www.thenonstop.org, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.`}</p>

<h4  className={titles}>2. Use License</h4>

<p>{`Permission is granted to temporarily download one copy of the materials on The Non-Stop Series's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`}</p>

<ul>
    <li>modify or copy the materials;</li>
    <li>use the materials for any commercial purpose or for any public display;</li>
    <li>{`attempt to reverse engineer any software contained on The Non-Stop Series's Website;`}</li>
    <li>remove any copyright or other proprietary notations from the materials; or</li>
    <li>{`transferring the materials to another person or "mirror" the materials on any other server.`}</li>
</ul>

<p>This will let The Non-Stop Series to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. </p>

<h4  className={titles}>3. Disclaimer</h4>

<p>{`All the materials on The Non-Stop Series’s Website are provided "as is". The Non-Stop Series makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, The Non-Stop Series does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.`}</p>

<h4  className={titles}>4. Limitations</h4>

<p>{`The Non-Stop Series or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on The Non-Stop Series’s Website, even if The Non-Stop Series or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.`}</p>

<h4  className={titles}>5. Revisions and Errata</h4>

<p>{`The materials appearing on The Non-Stop Series’s Website may include technical, typographical, or photographic errors. The Non-Stop Series will not promise that any of the materials in this Website are accurate, complete, or current. The Non-Stop Series may change the materials contained on its Website at any time without notice. The Non-Stop Series does not make any commitment to update the materials.`}</p>

<h4  className={titles}>6. Links</h4>

<p>{`The Non-Stop Series has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by The Non-Stop Series of the site. The use of any linked website is at the user’s own risk.`}</p>

<h4  className={titles}>7. Site Terms of Use Modifications</h4>

<p>The Non-Stop Series may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

<h4  className={titles}>8. Your Privacy</h4>

<p>Please read our Privacy Policy.</p>

<h4  className={titles}>9. Governing Law</h4>

<p>{`Any claim related to The Non-Stop Series's Website shall be governed by the laws of gh without regards to its conflict of law provisions.`}</p>
</div>
        </>
  )
}
