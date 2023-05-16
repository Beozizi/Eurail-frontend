import classNames from 'classnames/bind';

import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function Navigation() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <div className={cx('container')}>
                    <h2>Privacy and Cookie Statement</h2>                    
                    <div className={cx('content')}>
                        <div className={cx('version')}>
                            <span>Version: 2.1</span>
                            <span>Published: 11-10-2022.</span>
                        </div>
                        <div className={cx('word')}>
                            <p>This Privacy Policy describes how we, Eurail B.V ( “we”, “our” or “us”), collect, store, use and disclose personal data regarding individuals (“you”) who visit or otherwise interact with us or Service at www.interrail.eu, www.eurail.com and/or white label websites , or any other website, webpage (including community pages or forms generated through our customer service), Railplanner app, e-mail, social media, text messages or digital ads under our control (collectively – “sites”).</p>
                            <p>We deem careful handling of personal data very important, and we are committed to making our practices regarding collection and processing of personal data fair and transparent.</p>
                            <p>Under the General Data Processing Regulation (GDPR) and Dutch Data Privacy legislation personal data is considered any information that relates to an identified or identifiable living individual. Different pieces of information, which collected together can lead to the identification of a particular person, also constitute personal data.</p>
                            <p>This policy describes our practices regarding:
                                <p>a)&nbsp;&nbsp;&nbsp; Data Collection</p>
                                <p>b)&nbsp;&nbsp;&nbsp; Data Use</p>
                                <p>c)&nbsp;&nbsp;&nbsp;Data Location and Retention</p>
                                <p>d)&nbsp;&nbsp;&nbsp;Data Sharing</p>
                                <p>e)&nbsp;&nbsp;&nbsp;Cookies and Tracking Technologies</p>
                                <p>f)&nbsp;&nbsp;&nbsp;Communication</p>
                                <p>g)&nbsp;&nbsp;&nbsp;Data Security</p>
                                <p>h)&nbsp;&nbsp;&nbsp;Data Subject Rights</p>
                                <p>i)&nbsp;&nbsp;&nbsp;Additional Information </p>
                            </p>

                            <p>Please read this Privacy Policy carefully. You are not legally required to provide us with any of your personal data and choose to do so at your own free will. If you do not wish to provide us with your personal data, or to have it processed by us or any of our service providers, please do not visit or interact with our Sites, nor use our Service. You may also choose not to provide us with “optional” personal data but please be aware that our Service could then be restricted from being able to provide you the best customer experience when using our Services.</p>
                            <p>This Privacy Policy pertains to Eurail B.V as the “data controller”, meaning that we determine the means and purposes for processing personal data.</p>
                            <p>Note: Use of our Sites and Service are subject to terms and conditions per the Conditions of Use, and any undefined meaning in this Privacy Policy shall have the meaning given to it per our Terms and Conditions (“Terms”). </p>
                            <h3>a)&nbsp; Data Collection</h3>
                                <p>We collect and control various types of personal data of our Customers and visitors to our Sites. Such data is collected and generated through your interaction with us or our Services and can be directly from you or through our Partners.</p>
                                <p>We collect the following categories of personal data (to the extent that it relates to an identified or identifiable individual):</p>
                                <h4>Data automatically collected or generated</h4>
                                <p>When you visit, interact, or use our Service, we collect, record or generate technical data about you. We do so with the help of third-party Service Providers (detailed in section d), including through the use of cookies and other tracking technologies (detailed in section e). This data consists of connectivity, technical and aggregated usage data such as IP addresses and general locations, device or application data like browser version, language settings, sessions, clicks, use of features, and other interactions with our Sites. Interaction with our customer service may be automatically recorded, tracked and analyzed for purposes including analytics, service, operations, and business quality control and improvement, training and record-keeping purposes.</p>
                        
                                <h4>Data provided directly by you</h4>
                                <p>When you contact us, sign up for an account, or purchase a train pass or book reservations via our website, we will ask you to provide some personal data to us to create an account to fulfil your request and or/order. This would typically include your first and last name, email address, gender, address details, nationality, preferred language, date of birth, passport number (for international travellers), account login detail (username and password), as well as any other data you choose to provide when you use our Services, contact us, or when you connect other accounts such as Facebook or other social media accounts. If you choose to connect other accounts, you share data such as your name, email address, image, location, and other details available on your public profile.</p>
                                <p>You may also choose to send us support requests, or provide us with feedback, reviews or responses to our surveys and/or promotions, including submitting online forms or on social media channels, by posting on any of our online public forums or communities, by sending an email to any of our designated addresses, or any other form of communication. Such data may include details on an issue you are experiencing, contact information and other documentation, screen recordings, screen shots etc.</p>    
                                <p>If you provide Personal Data of another person for the purposes of purchasing a pass with multiple travellers, you shall ensure that (i) this person has been duly informed that Eurail has the right to process such Personal Data as set out in this Privacy Statement, and has been provided with the present Privacy Statement, (ii) such Personal Data is collected and supplied in accordance with applicable legislation and without infringing such person's or any third party’s rights and (iii) you have obtained his or her prior consent where needed.</p>
                        
                                <h4>Data from our Partners</h4>
                                <p>Our partners who sell our rail passes such as rail carriers and distributors (detailed further in section d) will provide us with your personal data for us to create an account and process your request for using our Service.</p>

                                <h4>Data received from other third parties</h4>
                                <p>We may receive data which relates to you from other sources such as if you participate in promotions or events that we sponsor or participate in, we may receive your personal data from its organisers.</p>

                                <h4>Data obtained through analytics tools</h4>
                                <p>We use analytics tools such as Google Analytics, Hotjar and Pisano to collect data about the us of our Sites and/or Service such as which pages are visited, when they are visited, which ad or email or webpage brought you to our website, how they interact with and use our Service and Site pages and various features etc. This is strictly collected based on consent by opting in for our marketing cookies in the Cookie banner on our site.  Refer for more information to section e.</p>

                            
                            <h3>b)&nbsp;Data Use</h3>
                                <p>We process your personal data in accordance with the requirements for the processing of personal data laid down in relevant privacy legislation.</p>
                                <p>We use personal data as necessary for the performance of our Service as stated in our Conditions of Use, to comply with our legal and contractual obligations, and to support our legitimate interests in maintaining and improving our Sites and Service.</p>
                                <p>If you reside or are using our Service in a territory governed by privacy laws which determine that “consent” is the only or most appropriate legal basis for processing personal data (in general, or specifically with respect to the types of personal data you choose to share via the Service), your acceptance of our Terms and of this Privacy Policy will be deemed as your consent to the processing of your personal data for the purposes detailed in this Privacy Policy, to the extent permitted under law in such territory. If you wish to revoke such consent, please contact us by email at <a>privacy@eurail.com.</a></p>
                                <p>Specifically, we process your personal data for the following purposes:</p>
                                <ul>
                                    <li>To facilitate and provide our Services;</li>
                                    <li>To authenticate the identity of our Customers and allow them to access our Service;</li>
                                    <li>To provide our visitors and customers with assistance and customer support;</li>
                                    <li>To improve customer experience and continue improving our products and overall performance of our Service by gaining better understanding of how visitors and customers use and interact with our Sites;</li>
                                    <li>To facilitate and optimise our marketing campaigns, ad management and sales operations, as well to manage and deliver advertisements for our products and services more effectively including on other websites such as Facebook, Instagram, and Google. This includes interests-based advertising based on Site activity, preferences and other data available to us through third parties or Partners;</li>
                                    <li>To facilitate, sponsor and offer certain promotional events or contests;</li>
                                    <li>To publish your feedback and reviews on our Sites, public forums and/or blogs;</li>
                                    <li>To support and improve our data security measures, including the purposes of preventing and mitigating risks of fraud, error or other illegal or prohibited activity;</li>
                                    <li>To explore and pursue growth opportunities through partnerships with carriers, distributors, institutions and other business partners and providers related to our Service (detailed also in Section d)</li>
                                    <li>To create aggregated statistical data, inferred non-personal data or data rendered non-personal through anonymization which we or our Partners may use to provide and improve our Service or for other business purposes; and</li>
                                    <li>To comply with applicable laws and regulations.</li>
                                </ul>
                                <p>Additionally, consent can be provided during the account creation whereby we can contact you to keep you up to date about our commercial developments and personalized offers, via our newsletter. Refer to section f. Communications, Promotional Communications, for more information.</p>
                            <h3>c)&nbsp;Data Location and Retention</h3>
                                <p>We store your data in multiple locations and for as long as necessary in accordance with our reasonable business needs as necessary for the performance of our Service or for exercising our legitimate interest, as well as in accordance with our legal obligation.</p>
                                <p>Eurail B.V. is headquartered in the Netherlands which is included in the European Union and therefore required to offer an adequate level of protection for personal data of EU member state residents. Data is stored and transferred within the EEA for these purposes. If data is transferred to non-EEA countries such as the United Kingdom, standard contractual clauses apply as approved by the European Commission.</p>
                                <p>We may retain your personal data for as long as it is reasonably needed in order to maintain our relationship with you and provide you with our Service; to comply with our legal and contractual obligations; or to protect ourselves from any potential disputes such as laws applicable to log-keeping, records and bookkeeping, and to have proof and evidence concerning our relationship, should any legal issues arise following your discontinuance of use. This is done in accordance with our data retention policy and at our reasonable discretion. </p>
                            <h3>d)&nbsp;Data Sharing</h3>
                                <p>We share your data with our Partners, Service providers or other relevant third parties in accordance with legal requirements.</p>
                                <p>We can provide your personal data to third parties for the following reasons:</p>
                                <ul>
                                    <li> We have engaged them for supporting us to provide our Service</li>
                                    <li> This is required for performance of an agreement we concluded with you;</li>
                                    <li> We have legitimate interests to do so;</li>
                                    <li> We are legally obliged to do so (for example if the police or official authority provides an official written request for information on suspicion of a criminal offense)</li>
                                </ul>
                                <p>The following third parties can process your personal data:</p>
                                <ul>
                                    <li>Our IT suppliers;</li>
                                    <li>Postal and courier services;</li>
                                    <li>Payment service providers;</li>
                                    <li>Railway providers (click to see an overview)</li>
                                    <li>Governmental institutions (i.e. tax authorities and police)</li>
                                    <li>Our cookie suppliers (please see section e. below).</li>
                                </ul>

                                <p>This statement does not apply to third-party websites that are linked to our website. We cannot guarantee that such third parties handle your personal data carefully and securely. We recommend that you read the privacy statements of their websites before you make use of the websites</p>
                            
                            <h3>e)&nbsp;Cookies and Tracking Technologies</h3>
                                <p>We, our Partners and Service providers use cookies and other technologies for performance, analytics, and personalisation purposes.</p>
                                <p>Cookies are small information files that can be automatically stored on or read out from the device (including a PC, tablet or smartphone) of the website visitor, while visiting a website. This is done through the web browser on the device. The information that can be transmitted by a cookie, over the use of our website, can be transferred to the own secured servers of Eurail or to the servers of a third party.</p>
                                <p>We use cookies on our website for the following purposes:</p>

                                <h4>Performance Cookies</h4>
                                <p>These cookies are technical and/or functional and helps us to secure and manage the performance and functionality of our Service and Sites;</p>

                                <h4>Analytics Cookies</h4>
                                <p>These cookies is to generate overall statistics and gain insight into the use of our Service and Sites by you every time your visit us, in order to optimise our website and services. Your browser will tell us if you have these Cookies and whether you allow new Cookies to be placed, we will then generate and place new ones to allow us to analyse your use of our Service;</p>

                                <h4>Marketing and Advertising Cookies</h4>
                                <p>These cookies allow us to make our Service offer more interesting for you by displaying advertisements that fit your interests and to personalise the ads and content on our website and in our newsletters based on your interests and click and surf behaviour. We may use Cookies set by another organisation, so we can more accurately target advertisements to you. We also set Cookies on certain other sites that we advertise on, if you receive one of these Cookies, we may use it to identify you as having visited that site and viewing our ad there if you later visit our Services. We can then target our advertisements based on this information. These cookies include those placed on Social Media Channels;</p>
                                <p>Google Analytics is used for analytical and tracking cookies for the purpose of creating statistics regarding traffic and uses of the various components of our Sites, to create studies to improve our Services and Site. If users do not wish for Google Analytics to collect or use their information, they can opt out here: Google Opt-Out.</p>


                                <h4>Third-party Integration Cookies</h4>
                                <p>To provide our Service, we make use of third parties (as detailed in section d), these third parties may also set their own Cookies. They do this to enable and improve the performance and interoperability between our platforms and services offered to you.  Please note that we have no control over how third parties use the cookies, and information and personal data collected via the cookies, themselves. For more information about these parties and how they use cookies, we recommend that you read their privacy policies (please be aware that such policies may be revised regularly).</p>

                                <h4>“Do Not Track” requests</h4>
                                <p>Some web browsers can send a “Do Not Track” request to websites telling them not to follow its online movements, because of differences in how web browsers interpret this feature, there is a lack of standardization and its not always clear whether visitors and Customers intent for these signals to be transmitted or whether they are aware of them at all. Therefore, as many other reputable websites and online platforms, we do not change our practices in response to a “Do Not Track” request from your browser or mobile application. However, your browser allows you to control cookies, including whether to accept them and how to remove them. You can also set most browsers to notify you if you receive a cookie, or to block or remove cookies altogether, this is detailed for you below.</p>
                        
                                <h4>Disabling of cookies</h4>
                                <p>You can prevent the placement of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling some functionality and certain features of this website. Therefore, it is recommended not to disable cookies.</p>
                        
                                <h4>Removal of cookies</h4>
                                <p>Most cookies have an expiration date. This means, that they will automatically expire after a certain period and no longer register any data concerning your visit of the website. Another option is to remove the cookies manually before the expiration data. To do this, consult the instruction manual of your browser.</p>
                        
                        
                            <h3>f)&nbsp;Communication</h3>
                                <p>We engage in service and promotional communication through e-mail, phone, SMS and mobile app notifications.</p>

                                <h4>Service Communications</h4>
                                <p>We may contact you with important information regarding our Service. For example, we may send you notifications (through any means available to us) of changes or updates to our Service, issues, changes, password reset notices etc. You can control your communications and notifications settings in your profile settings. However, please note that you will not be able to opt-out of certain service communications which are required for the performance of the contract we have with you, legally required or to your use of our Sites.</p>

                                <h4>Promotional Communications</h4>
                                <p>We may also notify you about new features, additional offerings, event and special opportunities or any other information we think you will find valuable. We provide you with opt-in options, and if you consent thereto, we may provide such notices through any of the contact means available to us as provided by you. We may also, if you have consented thereto, use your email address to show advertisements from Eurail on the social media channels where you are active, such as Facebook, YouTube, Pinterest and Instagram. If you do not wish to receive such promotional communications, change your communications preferences in your profile on the website, or each communication by e-mail will include an option to unsubscribe. </p>
                        
                        
                            <h3>g)&nbsp;Data Security</h3>

                                <p>We implement and monitor security measures in place to protect your personal data.</p>
                                <p>We will never request you to provide your personal information over the phone or via social media and we will only contact you via the registered email address on your account.  If you are unsure, please contact us via our Customer service contact form.</p>
                                <p>We secure your data using industry standards and best practices for physical, procedural and technical measures including:</p>
                                <ul>
                                    <li>Logical access control with complex passwords and identity authentication systems;</li>
                                    <li>Employee awareness and training;</li>
                                    <li>Data encryption;</li>
                                    <li>Automatic logging of actions relating to personal data;</li>
                                    <li>Least privilege access restrictions;</li>
                                    <li>User access and rights monitoring.</li>
                                </ul>
                        
                                <p>Please be aware that regardless of any security measures used, we cannot and do not guarantee the absolute protection and security of any personal data stored with us or with any third parties as detailed in section d. </p>

                            <h3>h)&nbsp;Data Subject Rights</h3>
                                <p>As an individual you have rights concerning your personal data. For all such personal data that we process as a Data Controller and detailed in section a, you may exercise your rights by contacting us.</p>
                                <p>If you have provided personal data via any of our Sites, you can send us a request for insight, inspection, rectification, restriction, modification, data portability or deletion of your personal data. You can send this request to privacy@eurail.com or via our <Link>Customer Service contact form.</Link></p>
                                <p>To prevent abuse, we ask that your request be sent from the same email address to which your account with us is registered so that we may validate your identity. We may ask you to provide further proof of your identity if necessary to correctly identify you in our systems.</p>
                                <p>Such additional data of requests and/or identify validation will be retained by us for legal purposes i.e., as proof of the identity of the person who submitted the request.</p>
                                <h4>Delete my account</h4>
                                    <p>For requests on deletion of your account or personal data, we remove your personal data and your account from our systems in accordance with privacy regulations. This means you will no longer have access to your account history and travel details, and you will need to create a new account for any new travel products that you wish to purchase in the future.</p>
                                <p>Please note:</p>
                                <ul>
                                    <li>We remove your data from our systems within 30 days from the date which your request is received, if you receive any emails or content during this period this is due to the complexity of removing your data within the 30 days and we kindly ask your patience during this time.</li>
                                    <li>If there are legal grounds preventing us from processing your request, we will notify you in a response email as soon as possible where your request cannot be processed. </li>
                                    <li>We will provide you with confirmation once your account deletion has been processed, after which you will no longer have access to your account, and you will receive no further communication.</li>
                                </ul>
                            
                            <h3>i)&nbsp;Additional Information</h3>
                                <h4>Security of minors</h4>
                                <p>Persons under the age of 18 may use our website only under the supervision of their parents or legal representatives. We do not knowingly collect personal data from children. If we learn that a minor is using our Service without representation, we will attempt to block such use and make our best efforts to promptly delete any personal data stored with us with regard to the child.</p>
                                
                                <h4>National supervisory authority</h4>
                                <p>If you are a GDPR-protected individual, if you have any complaints about the processing of your personal data, based on privacy legislation, you have the right to lodge a complaint with the national supervisory authority responsible for the protection of personal data against our processing of your personal data. For the Netherlands, this is the “Autoriteit Persoonsgegevens”, which you can contact <Link>here.</Link></p>
                        
                                <h4>Contact details</h4>
                                <p>Eurail B.V. has a DPO appointed for monitoring and advising on ongoing privacy compliance and serving as a point of contact on privacy matters for data subjects and supervisory authorities. If you have any questions about your privacy or about this privacy and cookie statement, you can send an email to <Link>privacy@eurail.com</Link></p>
                                <p>For questions on your account, purchases, our services or technical issues, please contact customer service via the <Link>contact form</Link>.</p>

                                <h4>Changes to this privacy and cookie statement</h4>
                                <br/>
                                <br/>
                                <p>We reserve the right to update this statement as required. Changes will be published on our website and previous versions will continue to be available on request. We recommend that you check this statement regularly, so that you are informed of any changes.</p>
                                <p>Changes published in version 2.1:</p>
                                <em>Section a. Data collection
                                        <br/> i. Updates in wording to provide clarity on what is collected and how you can expect to be contacted for security purposes</em>
                                        <br/>
                                        <br/>
                                <em>Section e. Cookies and tracking technologies
                                <br/>i. We have included a link to Google Opt out for easy access should you wish to revoke your consent to Google Analytics</em>
                                        <br/>
                                        <br/>
                                <em>Section h. Data subjects rights 
                                        <br/>i. We have provided more detailed information on our deletion process</em>
                                        <br/>
                                        <br/>
                                <em>
                                Section i. Additional information
                                        <br/>i. We have updated the contact details for our customer service team.
                                </em>
                        </div>

                    </div>
                </div>
                    
            </div>
        </div>
     );
}

export default Navigation;